<template>
  <v-app>
    <v-main>
      <Contact />
    </v-main>
  </v-app>
</template>

<script>
import Contact from './components/Contact/Contact'

export default {
  name: 'App',

  components: {
    Contact
  },
};
</script>
