<template>
  <b-table :data="data" :columns="columns" :sort-multiple="true" :paginated="true" :per-page="10"></b-table>
</template>

<script>
import 'buefy/dist/buefy.min.css'
import sampleData from "./sampleBuefyData";
export default {
  data() {
    return {
      data: sampleData.data,
      columns: sampleData.header
    };
  }
};
</script>
