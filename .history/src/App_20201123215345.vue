<template>
  <v-app>
    <v-main>
      <ContactList/>
    </v-main>
  </v-app>
</template>

<script>
import ContactList from './components/Contact/ContactList'

export default {
  name: 'App',

  components: {
    ContactList,
  },

  data: () => ({
    //
  }),
};
</script>
