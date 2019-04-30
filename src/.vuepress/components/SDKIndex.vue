<template>
  <div class="Languages">
    <a :href="generateLink('/sdk-reference/js/6/')" class="Languages-item">
      <img src="/logos/javascript.svg" alt="js logo" class="Languages-item-logo">
      <div class="Languages-item-name">Javascript</div>
    </a>
    <a :href="generateLink('/sdk-reference/go/1/')" class="Languages-item">
      <div class="ribbon">
        <span>BETA</span>
      </div>
      <img src="/logos/go.svg" alt="golang logo" class="Languages-item-logo">
      <div class="Languages-item-name">Golang</div>
    </a>
    <a :href="generateLink('/sdk-reference/cpp/1/')" class="Languages-item">
      <div class="ribbon">
        <span>BETA</span>
      </div>
      <img src="/logos/cpp.svg" alt="c++ logo" class="Languages-item-logo">
      <div class="Languages-item-name">C++</div>
    </a>
    <a :href="generateLink('/sdk-reference/java/1/')" class="Languages-item">
      <div class="ribbon">
        <span>BETA</span>
      </div>
      <img src="/logos/java.svg" alt="java logo" class="Languages-item-logo">
      <div class="Languages-item-name">Java</div>
    </a>

    <a :href="generateLink('/sdk-reference/php/3/')" class="Languages-item">
      <img src="/logos/php.svg" alt="php logo" class="Languages-item-logo">
      <div class="Languages-item-name">PHP</div>
    </a>
    <a :href="generateLink('/sdk-reference/android/3/')" class="Languages-item">
      <img src="/logos/android.svg" alt="android logo" class="Languages-item-logo">
      <div class="Languages-item-name">Android</div>
    </a>
    <a href="https://github.com/kuzzleio/sdk-ruby" class="Languages-item">
      <div class="ribbon">
        <span>ALPHA</span>
      </div>
      <img src="/logos/ruby.svg" alt="ruby logo" class="Languages-item-logo">
      <div class="Languages-item-name">Ruby</div>
    </a>
    <a href="https://github.com/kuzzleio/sdk-python2" class="Languages-item">
      <div class="ribbon">
        <span>ALPHA</span>
      </div>
      <img src="/logos/python.svg" alt="python logo" class="Languages-item-logo">
      <div class="Languages-item-name">Python 2</div>
    </a>
    <a href="https://github.com/kuzzleio/sdk-python3" class="Languages-item">
      <div class="ribbon">
        <span>ALPHA</span>
      </div>
      <img src="/logos/python.svg" alt="python logo" class="Languages-item-logo">
      <div class="Languages-item-name">Python 3</div>
    </a>
    <a href="https://github.com/kuzzleio/sdk-lua" class="Languages-item">
      <div class="ribbon">
        <span>ALPHA</span>
      </div>
      <img src="/logos/lua.svg" alt="lua logo" class="Languages-item-logo">
      <div class="Languages-item-name">LUA</div>
    </a>
    <a href="https://github.com/kuzzleio/sdk-csharp" class="Languages-item">
      <div class="ribbon">
        <span>ALPHA</span>
      </div>
      <img src="/logos/csharp.svg" alt="csharp logo" class="Languages-item-logo">
      <div class="Languages-item-name">C#</div>
    </a>
  </div>
</template>

<script>
import { getValidLinkByRootPath } from '../theme/util.js';

export default {
  methods: {
    generateLink(path) {
      return getValidLinkByRootPath(path, this.$site.pages);
    }
  }
};
</script>

<style>
</style>
