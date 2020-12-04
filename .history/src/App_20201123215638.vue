<template>
  <v-app>
    <v-main>
      <v-card class="mx-2">
        <ContactForm />
      </v-card>      
      <ContactList/>
    </v-main>
  </v-app>
</template>

<script>
import ContactList from './components/Contact/ContactList'
import ContactForm from './components/Contact/ContactForm'

export default {
  name: 'App',

  components: {
    ContactList,
    ContactForm
  },

  data: () => ({
    //
  }),
};
</script>
