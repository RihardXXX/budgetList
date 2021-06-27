<template>
  <div id="app">
    <Form @onSubmitForm="onSubmitForm" />
    <TotalBalance :total="totalBalanceSum"/>
    <Filters @isFilter="isFilter" />
    <BudgetList :list="list" :params="params"/>
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import Form from "@/components/Form";
import TotalBalance from "@/components/TotalBalance";
import Filters from "@/components/Filters";
import { mapGetters, mapState } from "vuex";

export default {
  name: "App",
  components: {
    BudgetList,
    TotalBalance,
    Form,
    Filters
  },
  data () {
    return {
      params: null
    }
  },
  computed: {
    ...mapState({
      list: (state) => state.budget.list,
      ok: (state) => state.budget.ok,
      cancel: (state) => state.budget.cancel,
    }),
    ...mapGetters(['totalBalanceSum', 'resultList'])
  },
  methods: {
    onSubmitForm (data) {
      this.$store.commit('addObject', data)
    },
    isFilter (param) {
      this.params = param
    }
  }
};
</script>

<style></style>
