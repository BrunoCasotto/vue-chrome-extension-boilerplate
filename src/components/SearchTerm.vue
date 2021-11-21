<template>
  <div class="search-term">
    <button @click="getSearchTerm" class="search-term__btn">
      Get Term
    </button>

    <p>Your Therm is: {{ searchTerm }}</p>
  </div>
</template>

<script>
import { POPUP_SCRIPT_ID } from './../constants/from.modules'
import { GET_SEARCH_TERM } from './../constants/actions'
import { generateMessage } from './../utils/message'
import { sendMessage } from './../utils/chrome'

export default {
  props: {
    tabId: {
      type: String,
    }
  },
  data() {
    return {
      searchTerm: '',
    }
  },
  methods: {
    async getSearchTerm() {
      const message = generateMessage(POPUP_SCRIPT_ID, GET_SEARCH_TERM, {})
      this.searchTerm = await sendMessage(this.tabId, message)
    },
  }
}
</script>

<style lang="scss">
$btn-background: #2c67be;
$btn-color: #ffffff;

.search-term {
  &__btn {
    background: $btn-background;
    color: $btn-color;
    border: none;
    padding: 5px;
    font-weight: bold;
  }
}
</style>