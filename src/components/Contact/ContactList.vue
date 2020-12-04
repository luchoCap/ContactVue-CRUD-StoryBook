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
          <th class="text-left">
            Actions
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
          <td>
            <v-btn
              color="primary"
              fab
              x-small
              dark
              @click="editContact(item)"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
              color="primary"
              fab
              x-small
              dark
              class="ml-2"
              @click="deleteContact(item._id)"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>



<script>
  export default {
    props:{
      contacts:{
        type:Array,
        required:true
      }
    },
    data: () => ({
      
    }),
    mounted(){
      console.log('contacts',this.contacts)
    },
    
    methods: {
      editContact(item){
        this.$emit('editContact',item)
      },
      deleteContact(id){
        this.$emit('deleteContact',id)
      }
    },
  }
</script>