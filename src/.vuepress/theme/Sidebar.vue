<template>
  <!-- Main navigation -->
  <nav class="md-nav md-nav--primary" data-md-level="0">
    <!-- {{> navMobile}} -->

    <label class="md-nav__title md-nav__title--site mobile-only" for="drawer">
      <span class="md-nav__button md-logo">
        <img src="/logo-min.png" width="48" height="48">
      </span>
      <span>Kuzzle Documentation</span>
    </label>

    <!-- Render item list -->
    <ul class="md-nav__list" data-md-scrollfix>
      <div v-for="section in sections">
        <li
          v-if="section.frontmatter.separator"
          class="md-nav__separator"
        >{{section.frontmatter.separator}}</li>

        <li class="md-nav__item">
          <a
            class="md-nav__link"
            :href="`${section.children && section.children.length ? section.children[0].path : section.path}`"
          >
            <div v-if="section.children">
              <i
                v-if="$page.path.includes(section.path)"
                class="fa fa-caret-down"
                aria-hidden="true"
              ></i>
              <i v-else class="fa fa-caret-right" aria-hidden="true"></i>
              <span>{{section.title}}</span>
            </div>
            <div v-else>
              <span class="no_arrow">{{section.title}}</span>
            </div>
          </a>
        </li>

        <ul v-if="$page.path.includes(section.path)" class="md-nav__list sub-menu">
          <div v-for="page of section.children" class="md-nav__item">
            <li v-if="$page.path === page.path">
              <a :href="`${page.path}`" :title="page.title" class="md-nav__link--active">
                <span class="no_arrow">{{page.title}}</span>
              </a>
            </li>
            <li v-else>
              <a :href="`${page.path}`" :title="page.title" class="md-nav__link">
                <span class="no_arrow">{{page.title}}</span>
              </a>
            </li>
          </div>
        </ul>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    sections: Array
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
