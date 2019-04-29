<template>
  <!-- Tabs with outline -->
  <nav class="md-tabs" data-md-component="tabs">
    <div class="md-tabs__inner md-grid">
      <ul class="md-tabs__list">
        <li class="md-tabs__item">
          <a
            href="/guide"
            title="Guide"
            class="md-tabs__link"
            :class="{'md-tabs__link--active': $route.path.match('guide')}"
          >Guides</a>
        </li>
        <li class="md-tabs__item">
          <a
            href="/sdk-reference"
            title="SDK"
            class="md-tabs__link"
            :class="{'md-tabs__link--active': $route.path.match('sdk')}"
          >SDK</a>
        </li>
        <li class="md-tabs__item">
          <a
            href="/api"
            title="API"
            class="md-tabs__link"
            :class="{'md-tabs__link--active': $route.path.match('api')}"
          >API</a>
        </li>
        <li class="md-tabs__item">
          <a
            href="/plugins"
            title="Plugins"
            class="md-tabs__link"
            :class="{'md-tabs__link--active': $route.path.match('plugins')}"
          >Plugins</a>
        </li>
        <li class="md-tabs__item">
          <a
            href="/protocols"
            title="Protocols"
            class="md-tabs__link"
            :class="{'md-tabs__link--active': $route.path.match('protocols')}"
          >Protocols</a>
        </li>
        <li class="md-tabs__item">
          <a
            href="/koncorde"
            title="Koncorde"
            class="md-tabs__link"
            :class="{'md-tabs__link--active': $route.path.match('koncorde')}"
          >Koncorde</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>
