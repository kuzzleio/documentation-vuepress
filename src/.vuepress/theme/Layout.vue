<template>
  <div class="md-layout">
    <div class="overlay" :class="{hidden: !sidebarOpen}" @click="closeSidebar"></div>
    <Header ref="header" @sidebar-open="openSidebar"/>
    <div ref="container" class="md-container">
      <!-- Main container -->
      <main class="md-main">
        <div class="md-main__inner md-grid" data-md-component="container">
          <!-- Main navigation -->
          <Sidebar ref="sidebar" v-if="!$page.frontmatter.nosidebar" :sidebar-open="sidebarOpen"/>
          <!-- Table of contents -->
          <div class="md-sidebar md-sidebar--secondary" data-md-component="toc">
            <div class="md-sidebar__scrollwrap">
              <div class="md-sidebar__inner">
                <div v-if="$route.path.match('/sdk-reference/')" class="selector-container">
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

      <Footer ref="footer"/>
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
import sdkList from '../sdk.json';

export default {
  components: { Header, Sidebar, TOC, ContentFeedback, Footer },
  data() {
    return {
      sidebarOpen: false,
      sdkList
    };
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
      this.setContainerPadding();
      setTimeout(() => {
        this.computeSidebarHeight();
      }, 200);
    },
    setContainerPadding() {
      const padding = this.$refs.header.$el.querySelector('header')
        .offsetHeight;

      if (padding === null || typeof padding === 'undefined') {
        return;
      }

      this.$refs.container.style = `padding-top: ${padding}px;`;
    },
    computeSidebarHeight() {
      const sidebarTop = window
        .getComputedStyle(this.$refs.sidebar.$el)
        .top.replace('px', '');

      /**
       * * This helps to understand if we're on a mobile screen or not.
       *
       * On big screens, the Sidebar's top is the same as the container's
       * padding-top, while on smaller screens it's 0. On small screens the
       * height of the sidebar is 100% (this is set in the stylesheets) so
       * we don't want to change it.
       */
      if (parseInt(sidebarTop) <= 0) {
        this.$refs.sidebar.$el.style = `height: inherit`;
        return;
      }

      const topBoundary = this.$refs.header.$el.querySelector('header')
        .offsetHeight;

      if (topBoundary === null || typeof topBoundary === 'undefined') {
        return;
      }

      const visible = window.innerHeight - topBoundary;
      let sidebarHeight = visible - this.$refs.footer.$el.offsetHeight;

      if (this.$refs.container.offsetHeight > visible) {
        sidebarHeight = Math.min(
          visible,
          this.$refs.container.offsetHeight -
            this.$refs.footer.$el.offsetHeight -
            window.pageYOffset -
            topBoundary
        );
      }

      this.$refs.sidebar.$el.style = `height: ${sidebarHeight}px`;
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
    window.addEventListener('scroll', this.computeSidebarHeight);
    this.onWindowResize();
  }
};
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="./styles/main.scss" lang="scss"></style>

<style lang="scss">
.md-layout {
  height: 100%;
}
</style>
