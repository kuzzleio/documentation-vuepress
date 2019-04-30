<template>
  <!-- Main navigation -->
  <nav class="md-nav md-nav--primary" data-md-level="0">
    <label class="md-nav__title md-nav__title--site mobile-only" for="drawer">
      <span class="md-nav__button md-logo">
        <img src="/logo-min.png" width="48" height="48">
      </span>
      <span>Kuzzle Documentation</span>
    </label>

    <TabsMobile/>

    <!-- Render item list -->
    <ul class="md-nav__list" data-md-scrollfix>
      <div v-for="item__1 in getPageChildren(root)">
        <li class="md-nav__separator">{{item__1.frontmatter.title}}</li>

        <div v-for="item__2 in getPageChildren(item__1)">
          <li class="md-nav__item">
            <a
              class="md-nav__link"
              :class="{'md-nav__link--active': $page.path === item__2.path}"
              :href="getFirstValidChild(item__2).path"
            >
              <div v-if="getPageChildren(item__2).length">
                <i
                  v-if="$page.path.includes(item__2.path)"
                  class="fa fa-caret-down"
                  aria-hidden="true"
                ></i>
                <i v-else class="fa fa-caret-right" aria-hidden="true"></i>
                <span>{{item__2.title}}</span>
              </div>
              <div v-else>
                <span class="no_arrow">{{item__2.title}}</span>
              </div>
            </a>
          </li>

          <ul v-if="$page.path.includes(item__2.path)" class="md-nav__list sub-menu">
            <div v-for="item__3 of getPageChildren(item__2)" class="md-nav__item">
              <li v-if="$page.path === item__3.path">
                <a :href="`${item__3.path}`" :title="item__3.title" class="md-nav__link--active">
                  <span class="no_arrow">{{item__3.title}}</span>
                </a>
              </li>
              <li v-else>
                <a :href="`${item__3.path}`" :title="item__3.title" class="md-nav__link">
                  <span class="no_arrow">{{item__3.title}}</span>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </ul>
  </nav>
</template>

<script>
import TabsMobile from './TabsMobile.vue';
import { getPageChildren, getFirstValidChild, findRootNode } from './util.js';

export default {
  components: {
    TabsMobile
  },
  computed: {
    root() {
      return findRootNode(this.$page, this.$site.pages);
    }
  },
  methods: {
    getPageChildren(page) {
      return getPageChildren(page, this.$site.pages);
    },
    getFirstValidChild(page) {
      return getFirstValidChild(page, this.$site.pages);
    }
  }
};
</script>

<style>
</style>
