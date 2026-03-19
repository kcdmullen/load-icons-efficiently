<script setup>
import { useRouter } from 'vuetify/lib/composables/router';

const router = useRouter();

</script>

<template>
  <ul>
    <li>
      <a @click="router.push('/')">Home</a>
    </li>
    <li>
      <a @click="router.push('/playground')">Playground</a>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

li {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
</style>