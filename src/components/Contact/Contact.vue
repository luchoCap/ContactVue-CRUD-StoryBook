<template>
  <v-app>
    <v-main>
      <v-card class="ma-3">
        <ContactForm 
          :formContact="formContact" 
          v-on:editOneContactList="editOneContactList" 
          v-on:pushContact="pushContact"
        />
      </v-card> 
      <v-card class="ma-3">
        <ContactList 
          :contacts="contacts" 
          v-on:editContact="editContactForm"
          v-on:deleteContact="deleteContact"/>
      </v-card>     
      
    </v-main>
  </v-app>
</template>

<script>
import ContactList from './ContactList'
import ContactForm from './ContactForm'
import contactProvider from '../../providers/contactProvider'

export default {
  name: 'App',

  components: {
    ContactList,
    ContactForm
  },
  mounted(){
        this.getContacts()
  },

data: () => ({
        contacts:[],
        formContact:{
            _id:'',
            name: '',
            phone: '',
            state:false
        }
      
    }),
    methods:{
      getContacts(){
          contactProvider.showContacts()
          .then((contacts) => {
              this.contacts = contacts 
          })
          .catch((error) => console.log(error))
      },
      editContactForm(item){
        this.formContact.name = item.name
        this.formContact.phone = item.phone
        this.formContact.state = item.state
        this.formContact._id = item._id

      },
      editOneContactList(item){
        console.log('tem',item)
        let index = this.contacts.findIndex((i) => i._id == item._id)
        this.$set(this.contacts,index,item)
      },
      pushContact(item){
        this.contacts.push(item)
      },
      deleteContact(id){
        contactProvider.deleteContact(id)
          .then((response) => {
            if(response){
              let index = this.contacts.findIndex((i) => i._id == id)
              this.contacts.splice(index,1)
            }else{
              console.log('no se borró')
            }
              
          })
          .catch((error) => console.log(error))
      }
    }
};
</script>