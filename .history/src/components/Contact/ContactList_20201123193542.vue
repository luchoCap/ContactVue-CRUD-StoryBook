<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Phone
          </th>
          <th class="text-left">
            State
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in contacts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.state }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>



<script>
import contactProvider from '../../providers/contactProvider'
  export default {
    data: () => ({
      contacts:[]
    }),
    mounted(){
        this.getContacts()
    },
    methods: {
      getContacts(){
          contactProvider.showContacts()
          .then((contacts) => {
              this.contacts = contacts 
          })
          .catch((error) => console.log(error))
      }
    },
  }
</script>