<template>
  <div class="md-search" data-md-component="search" role="dialog">
    <label class="md-search__overlay" for="search"></label>
    <div class="md-search__inner" role="search">
      <form class="md-search__form" name="search" @submit.prevent="goToHighlightedResult">
        <input
          id="algolia-search-input"
          type="text"
          class="md-search__input"
          name="query"
          placeholder="Search (ctrl+alt+S)"
          autocapitalize="off"
          autocorrect="off"
          autocomplete="off"
          spellcheck="false"
          data-md-component="query"
          data-md-state="active"
          ref="searchInput"
          v-model="query"
          @focus="$emit('search::on')"
          @blur="reset"
          @keyup.down="highlightedResult = Math.min(highlightedResult + 1, results.length - 1)"
          @keyup.up="highlightedResult = Math.max(highlightedResult - 1, 0)"
          @keyup.esc="reset"
        >
        <label class="md-icon md-search__icon" for="search"></label>
        <button
          type="reset"
          class="md-icon md-search__icon search-reset-button"
          data-md-component="reset"
          tabindex="-1"
        >
          &#9003;
          <!-- close -->
        </button>
      </form>
      <div class="md-search__output">
        <div class="md-search__scrollwrap" data-md-scrollfix>
          <div class="md-search-result" data-md-component="result">
            <div class="md-search-result__meta">
              <img
                src="https://www.algolia.com/assets/pricing_new/algolia-powered-by-ac7dba62d03d1e28b0838c5634eb42a9.svg"
                alt="Search by Algolia"
                class="algolia-logo"
              >
            </div>
            <ol class="md-search-result__list">
              <li
                v-for="(result, idx) in results"
                :key="result.path"
                class="md-search-result__item"
              >
                <a
                  :href="'/' + result.path"
                  :title="result.title"
                  class="md-search-result__link"
                  :data-rt="idx === highlightedResult ? 'active' : ''"
                >
                  <article class="md-search-result__article">
                    <h1 class="md-search-result__title">
                      {{ result.title }}
                      <span
                        v-for="tag in result.tags"
                        :key="tag"
                        class="tag"
                      >{{ tag }}</span>
                    </h1>
                    <p
                      class="md-search-result__teaser"
                      v-html="result._highlightResult.content.value"
                    ></p>
                  </article>
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import algoliasearch from 'algoliasearch';

let algolia;

export default {
  data() {
    return {
      query: '',
      results: [],
      highlightedResult: 0,
      options: {
        appId: ALGOLIA_APP_ID,
        apiKey: ALGOLIA_API_KEY,
        indexName: ALGOLIA_INDEX
      }
    };
  },
  computed: {
    currentTags() {
      return this.$route.path
        .substring(1)
        .split('/')
        .slice(0, 4)
        .map(tag => {
          if (tag === 'sdk-reference') {
            return 'sdk';
          }
          if (/^[0-9]+$/.test(tag)) {
            return tag + '.x';
          }
          return tag;
        });
    }
  },
  methods: {
    initializeAlgolia(options) {
      const client = algoliasearch(options.appId, options.apiKey);
      algolia = client.initIndex(options.indexName);
    },
    initializeHotkey() {
      // TODO MacOS version
      window.addEventListener('keyup', event => {
        if (
          event.altKey === true &&
          event.ctrlKey === true &&
          event.key === 's'
        ) {
          this.$refs.searchInput.focus();
        }
      });
    },
    performSearch(query) {
      if (!query || query.length < 3) {
        this.results = [];
        return;
      }

      algolia.search(query, (err, content) => {
        if (err) {
          console.error(err);
          this.results = [];
        }
        this.results = content.hits.sort(sortByTags);
      });
    },
    sortByTags(a, b) {
      const scoreA = this.getTagsScore(a.tags),
        scoreB = this.getTagsScore(b.tags);

      return Math.sign(scoreB - scoreA);
    },
    getTagsScore(tags) {
      let score = 0;
      for (const tag of Object.values(tags)) {
        if (this.currentTags.includes(tag)) {
          ++score;
        }
      }
      return score;
    },
    reset() {
      this.query = '';
      this.$emit('search::off');
      this.$refs.searchInput.blur();
    },
    goToHighlightedResult(event) {
      event.preventDefault();
      if (!this.results || !this.results[this.highlightedResult]) {
        return;
      }
      this.$router.push({
        path: '/' + this.results[this.highlightedResult].path,
        query: {}
      });
      this.reset();
    }
  },
  mounted() {
    this.initializeAlgolia(this.options);
    this.initializeHotkey();
  },
  watch: {
    query() {
      this.performSearch(this.query.trim().toLowerCase());
    }
  }
};
</script>

<style lang="scss">
</style>
