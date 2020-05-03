<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="10"
    :search="search"
    class="elevation-1"
    multi-sort
  ></v-data-table>
  </v-card>
</template>

<script>
  import tableData from './sampleDataTable';
  export default {
    data () {
      return {
        search: '',
        headers: tableData.headers,
        desserts: tableData.data,
      }
    },
  }
</script>