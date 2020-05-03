<template>
  <v-app>
    <v-content>
      <v-select v-model="enabled" :items="types" label="Type"></v-select>
      <VuetifyDataTable v-if="isEnabled('Vuetify')"/>
      <VuetifyDataTableFilter v-if="isEnabled('VuetifyFilter')"/>
      <BuefyDataTable v-if="isEnabled('Buefy')"/>
    </v-content>
  </v-app>
</template>

<script>
import VuetifyDataTable from "./components/VuetifyDataTable";
import VuetifyDataTableFilter from "./components/VuetifyDataTableFilter";
//import BuefyDataTable from "./components/BuefyDataTable";
const BuefyDataTable = () => import("./components/BuefyDataTable");

export default {
  name: "App",

  components: {
    VuetifyDataTable,
    VuetifyDataTableFilter,
    BuefyDataTable
  },

  data: () => ({
    types: [
      "Vuetify",
      "VuetifyFilter",
      "Buefy"
    ],
    enabled: "Vuetify"
  }),

  methods: {
      isEnabled (type) {
        return this.enabled === type
      }
  },
};
</script>
