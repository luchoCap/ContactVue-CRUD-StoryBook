<template>
  <div id="app">
    <ContactForm />
    <v-checkbox
            v-model="state"
            label="State"
        ></v-checkbox>
    <ContactList />
  </div>
</template>

<script>
import ContactList from './components/Contact/ContactList.vue'
import ContactForm from './components/Contact/ContactForm'

export default {
  name: 'App',
  components: {
    ContactList,
    ContactForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
