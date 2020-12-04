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
            depressed
            color="blue"
            @click="saveContact"
        >  Save
        </v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import contactProvider from '../../providers/contactProvider'

  export default {
    props: {
        value: {
            type: Object,
            required: true,
    },
    data: () => ({
        form={
            name: '',
            phone: '',
            state:false,
        }
      
    }),
    methods:{
        saveContact(){
            contactProvider.createContact(this.form)
            .then((response) => console.log(response))
            .catch(error => console.error(error))
        
        resetForm()
        },
        resetForm(){
            this.form.name = ''
            this.form.phone = ''
            this.form.state = ''
        }
    }
  }
</script>