<template>
  <v-app>
    <v-main>
      <v-card class="ma-3">
        <ContactForm :form="form"/>
      </v-card> 
      <v-card class="ma-3">
        <ContactList />
      </v-card>     
      
    </v-main>
  </v-app>
</template>

<script>
import ContactList from './ContactList'
import ContactForm from './ContactForm'

export default {
  name: 'App',

  components: {
    ContactList,
    ContactForm
  },

data: () => ({
        form:{
            name: '',
            phone: '',
            state:false,
        }
      
    }),
};
</script>