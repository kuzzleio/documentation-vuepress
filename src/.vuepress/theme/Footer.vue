<template>
  <footer class="md-footer">
    <div class="md-footer-meta md-typeset">
      <div class="md-footer-meta__inner md-grid">
        <div class="md-footer-copyright">
          <div class="md-footer-copyright__highlight">&copy;{{ currentYearCopyright }} - Kuzzle.io</div>
          <a
            href="https://github.com/kuzzleio/documentation/blob/master/LICENSE.md"
          >Apache 2.0 License</a>
        </div>

        <div class="md-footer-social">
          <a href="https://kuzzle.io" class="md-footer-social__link fa fa-globe" target="_blank"></a>
          <a
            href="https://gitter.im/kuzzleio/kuzzle"
            class="md-footer-social__link fa fa-commenting"
            target="_blank"
          ></a>
          <a
            href="https://github.com/kuzzleio/"
            class="md-footer-social__link fa fa-github-alt"
            target="_blank"
          ></a>
          <a
            href="https://twitter.com/kuzzleio"
            class="md-footer-social__link fa fa-twitter"
            target="_blank"
          ></a>
          <a
            href="https://www.linkedin.com/company/kuzzle/"
            class="md-footer-social__link fa fa-linkedin"
            target="_blank"
          ></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYearCopyright() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style>
</style>
