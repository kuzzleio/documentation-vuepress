<template>
  <Redirect v-if="firstChild" :to="firstChild.path"/>
</template>

<script>
import Redirect from './Redirect.vue';
import { getPageChildren } from '../theme/util.js';
export default {
  components: {
    Redirect
  },
  computed: {
    firstChild() {
      const children = getPageChildren(this.$page, this.$site.pages);

      return children.length ? children[0] : null;
    }
  }
};
</script>
