<template>
  <div class="app">
    <h1 class="app__title">Google Extension</h1>

    <template v-if="domIsReady">
      <SearchTerm :tabId="tabId"/>
    </template>

    <h2 v-else class="app__title"> Loading...</h2>
  </div>
</template>

<script>
import { domIsReady, getTabId } from './utils/chrome'
import SearchTerm from './components/SearchTerm.vue'

export default {
  components: {
    SearchTerm,
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
$btn-background: #2c67be;
$btn-color: #ffffff;

.app {
  height: 100px;
  width: 200px;

  &__title {
    font-weight: bold;
    font-size: 20px;
  }
}
</style>