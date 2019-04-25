<template>
  <div>
    <div class="overlay" :class="{hidden: !sidebarOpen}" @click="closeSidebar"></div>
    <Header ref="headerContainer" @sidebar-open="openSidebar"/>
    <div ref="mainContainer" class="md-container">
      <!-- Main container -->
      <main class="md-main">
        <div class="md-main__inner md-grid" data-md-component="container">
          <!-- Main navigation -->
          <div
            class="md-sidebar md-sidebar--primary"
            :class="{'md-sidebar--open': sidebarOpen}"
            data-md-component="navigation"
            ref="sidebarContainer"
          >
            <div class="md-sidebar__scrollwrap">
              <div class="md-sidebar__inner">
                <Sidebar :sections="sections"/>
              </div>
            </div>
          </div>
          <!-- Table of contents -->
          <div class="md-sidebar md-sidebar--secondary" data-md-component="toc">
            <div class="md-sidebar__scrollwrap">
              <div class="md-sidebar__inner">
                <div v-if="$route.path.match('sdk-reference')" class="selector-container">
                  <SDKSelector :items="sdkList"/>
                </div>
                <TOC/>
              </div>
            </div>
          </div>
          <!-- Content -->
          <div class="md-content">
            <article class="md-content__inner md-typeset">
              <Content/>
              <ContentFeedback/>
            </article>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard';

import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import TOC from './TOC.vue';
import ContentFeedback from './ContentFeedback.vue';
import Footer from './Footer.vue';
import { resolveSidebarItems } from './util.js';
import sdkList from '../sdk.json';

export default {
  components: { Header, Sidebar, TOC, ContentFeedback, Footer },
  data() {
    return {
      sidebarOpen: false,
      sdkList
    };
  },
  computed: {
    sections() {
      return resolveSidebarItems(this.$page, this.$site);
    }
  },
  methods: {
    openSidebar() {
      this.sidebarOpen = true;
    },
    closeSidebar() {
      this.sidebarOpen = false;
    },
    onCodeCopied(action) {
      const message = action.trigger.parentElement.querySelector(
        '.md-clipboard__message'
      );
      if (!(message instanceof HTMLElement)) throw new ReferenceError();

      /* Clear selection and reset debounce logic */
      action.clearSelection();
      if (message.dataset.mdTimer)
        clearTimeout(parseInt(message.dataset.mdTimer, 10));

      /* Set message indicating success and show it */
      message.classList.add('md-clipboard__message--active');

      /* Hide message after two seconds */
      message.dataset.mdTimer = setTimeout(() => {
        message.classList.remove('md-clipboard__message--active');
        message.dataset.mdTimer = '';
      }, 2000).toString();

      this.$ga('send', 'event', 'snippet', 'copied', 'label', 1, {
        path: this.$route.path
      });
    },
    onWindowResize() {
      const visible = window.innerHeight;
      const headerHeight = this.$refs.headerContainer.$el.querySelector(
        'header'
      ).offsetHeight;

      if (!headerHeight) {
        return;
      }

      this.$refs.mainContainer.style = `padding-top: ${headerHeight}px;`;

      const sidebarTop = window
        .getComputedStyle(this.$refs.sidebarContainer)
        .top.replace('px', '');

      /**
       * * This helps to understand if we're on a mobile screen or not.
       *
       * On big screens, the Sidebar's top is the same as the mainContainer's
       * padding-top, while on smaller screens it's 0. On small screens the
       * height of the sidebar is 100% (this is set in the stylesheets) so
       * we don't want to change it.
       */
      if (parseInt(sidebarTop) > 0) {
        const sidebarHeight = visible - headerHeight;
        this.$refs.sidebarContainer.style = `height: ${sidebarHeight}px`;
      }
    }
  },
  mounted() {
    // TODO condition isSupported()
    const copy = new Clipboard('.md-clipboard', {
      target: trigger => {
        return trigger.parentElement.nextElementSibling;
      }
    });

    copy.on('success', this.onCodeCopied);

    window.addEventListener('resize', this.onWindowResize);
    this.onWindowResize();
  }
};
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="./styles/main.scss" lang="scss"></style>
