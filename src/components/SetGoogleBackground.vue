<template>
  <div class="search-term">
    <select v-model="selectedTheme" @change="updateCollor(selectedTheme)">
      <option
        v-for="option in options"
        v-bind:value="option.value"
        :key="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
import { POPUP_SCRIPT_ID } from './../constants/from.modules'
import { SET_GOOGLE_BACKGROUND } from './../constants/actions'
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
      selectedTheme: 'default',
      options: [
        { text: 'Default', value: 'default' },
        { text: 'Dark', value: 'gray' },
        { text: 'Blue', value: 'blue' },
        { text: 'Green', value: 'green' }
      ]
    }
  },
  methods: {
    updateCollor(background) {
      const message = generateMessage(POPUP_SCRIPT_ID, SET_GOOGLE_BACKGROUND, background)
      sendMessage(this.tabId, message)
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