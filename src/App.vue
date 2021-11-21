<template>
  <div class="app">
    <h1 class="app__title">Google Extension</h1>

    <template v-if="domIsReady">
      <SearchTerm class="app__search-term" :tabId="tabId"/>
      <SetGoogleBackground :tabId="tabId"/>
    </template>

    <h2 v-else class="app__title"> Loading...</h2>
  </div>
</template>

<script>
import { domIsReady, getTabId } from './utils/chrome'
import SearchTerm from './components/SearchTerm.vue'
import SetGoogleBackground from './components/SetGoogleBackground.vue'

export default {
  components: {
    SearchTerm,
    SetGoogleBackground,
  },
  data() {
    return {
      domIsReady: false,
      tabId: ''
    }
  },
  mounted() {
    this.awaitReady()
  },
  methods: {
    async awaitReady() {
      await domIsReady()
      this.domIsReady = true
      this.tabId = await getTabId()
    },
  },
}
</script>

<style lang="scss">
@import './scss/reset';

.app {
  height: 100px;
  width: 200px;
  padding: 10px;

  &__search-term {
    margin-bottom: 10px;
  }

  &__title {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;
    text-align: center;
  }
}
</style>