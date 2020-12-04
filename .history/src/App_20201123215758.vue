<template>
  <v-app>
    <v-main>
      <v-card class="ma-3">
        <ContactForm />
      </v-card> 
      <v-card class="ma-3">
        <ContactList/>
      </v-card>     
      
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
