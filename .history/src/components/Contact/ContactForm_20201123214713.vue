<template>
  <v-form>
        
          <v-checkbox
            v-model="state"
            label="State"
        ></v-checkbox>


  </v-form>
</template>

<script>
  export default {
    data: () => ({
      name: '',
      phone: '',
      state:false,
    }),
  }
</script>