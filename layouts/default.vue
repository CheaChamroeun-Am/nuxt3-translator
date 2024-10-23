<!-- layouts/default.vue -->
<template>
  <div>
    <header>
      <h1>My Nuxt 3 App</h1>
      <LanguageSwitcher />
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <p>© 2024 My Nuxt App</p>
    </footer>
  </div>
</template>

<script setup>
// No need to add anything here for now
</script>

<style scoped>
/* You can add some basic styles here if needed */
header {
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}

main {
  padding: 2rem;
}

footer {
  background-color: #f1f1f1;
  text-align: center;
  padding: 1rem;
}
</style>
