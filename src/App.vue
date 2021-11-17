<template>
  <div class="app">
    <h1 class="app__title">Google Extension</h1>

    <template v-if="domIsReady">
      <button @click="getSearchTerm" class="btn">
        Get Term
      </button>

      <p>Search Term: {{ searchTerm }}</p>
    </template>

    <h2 v-else class="app__title"> Loading...</h2>
  </div>
</template>

<script>
import { POPUP_SCRIPT_ID } from './constants/script.definitions'
import { GET_SEARCH_TERM } from './constants/actions'
import { domIsReady, getTabId, sendMessage } from './utils/chrome'
import { generateMessage } from './utils/message'

export default {
  data() {
    return {
      domIsReady: false,
      searchTerm: '',
    }
  },
  mounted() {
    this.setDomIsReady()
  },
  methods: {
    async setDomIsReady() {
      await domIsReady()
      this.domIsReady = true
    },
    async getSearchTerm() {
      const tabId = await getTabId()
      const message = generateMessage(POPUP_SCRIPT_ID, GET_SEARCH_TERM, {})
      this.searchTerm = await sendMessage(tabId, message)
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

  .btn {
    background: $btn-background;
    color: $btn-color;
    border: none;
    padding: 5px;
    font-weight: bold;
  }
}
</style>