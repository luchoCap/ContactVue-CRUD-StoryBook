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
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>