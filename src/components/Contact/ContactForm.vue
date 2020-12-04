<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="form.name"
            label="Name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="form.phone"
            label="Phone"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-checkbox
            v-model="form.state"
            label="State"
        ></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-btn
            v-if="form._id === ''"
            depressed
            color="blue"
            @click="saveContact"
        >  Save
        </v-btn>

        <v-btn
            v-else
            depressed
            color="blue"
            @click="editContact"
        >  Edit
        </v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import contactProvider from '../../providers/contactProvider'

  export default {
    props: {
        formContact: {
            type: Object,
            required: true
        },
    },
    computed: {
        form: {
            get() {
                return this.formContact;
            },
            set(val) {
                this.$emit("input", val);
            }
        }
    },
    methods:{
        saveContact(){
           let formCreate = {
             name:this.form.name,
             phone:this.form.phone,
             state:this.form.state
           }
            contactProvider.createContact(formCreate)
            .then((response) => this.$emit('pushContact',response))
            .catch(error => console.error(error))
        
        this.resetForm()
        },
        editContact(){
          contactProvider.editContact(this.form._id, this.form)
            .then((response) => {
              console.log('response',response)
              this.$emit('editOneContactList',response)})
            .catch(error => console.error(error))

          this.resetForm()
        },
        resetForm(){
            this.form._id = ''
            this.form.name = ''
            this.form.phone = ''
            this.form.state = false
        }
    }
  }
</script>