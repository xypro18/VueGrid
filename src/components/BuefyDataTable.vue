<template>
  <b-table :data="data" :columns="columns" :sort-multiple="true" :paginated="true" :per-page="10"></b-table>
</template>

<script>
import "buefy/dist/buefy.min.css";
import sampleData from "./sampleBuefyData";
export default {
  data() {
    return {
      data: null,
      columns: sampleData.header
    };
  },
  beforeMount() {
    let value = document.getElementById("info").attributes["data-beufy"].value;
    let parsedValue = JSON.parse(decodeURIComponent(value));
    if (parsedValue) this.data = parsedValue;
  }
};
</script>
