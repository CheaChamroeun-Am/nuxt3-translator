<template>
  <div>
    <button
      v-for="locale in locales"
      :key="locale.code"
      @click="changeLocale(locale.code)"
    >
      {{ locale.name }}
    </button>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { locales, locale } = useI18n();

function changeLocale(code) {
  locale.value = code; // Directly update the locale
}
</script>

<style scoped>
button {
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
