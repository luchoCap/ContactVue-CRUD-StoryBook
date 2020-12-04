<template>
  <form>
    <v-container>
      <v-row>
        
        <v-col
          cols="12"
          md="4"
        >
          <v-checkbox
            v-model="state"
            label="State"
        ></v-checkbox>
        </v-col>
      </v-row>
    </v-container>
  </form>
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