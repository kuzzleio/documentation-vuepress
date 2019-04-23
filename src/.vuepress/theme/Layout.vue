<template>
  <div>
    <div class="overlay" :class="{hidden: !sidebarOpen}" @click="closeSidebar"></div>
    <Header @sidebar-open="openSidebar"/>
    <div class="md-container">
      <!-- Main container -->
      <main class="md-main">
        <div class="md-main__inner md-grid" data-md-component="container">
          <!-- Main navigation -->
          <div
            class="md-sidebar md-sidebar--primary"
            :class="{'md-sidebar--open': sidebarOpen}"
            data-md-component="navigation"
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
import Vue from 'vue';
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import TOC from './TOC.vue';
import ContentFeedback from './ContentFeedback.vue';
import Footer from './Footer.vue';
import { resolveSidebarItems } from './util.js';

export default {
  components: { Header, Sidebar, TOC, ContentFeedback, Footer },
  data() {
    return {
      sidebarOpen: false
    };
  },
  computed: {
    sections() {
      return resolveSidebarItems(this.$page, this.$site);
    }
  },
  mounted() {},
  methods: {
    openSidebar() {
      this.sidebarOpen = true;
    },
    closeSidebar() {
      this.sidebarOpen = false;
    }
  }
};
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="./styles/main.scss" lang="scss"></style>
