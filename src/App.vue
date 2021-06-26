<template>
  <div id="app">
    <!-- ok: {{ok}}
    cancel: {{cancel}} -->
    <Form @onSubmitForm="onSubmitForm" />
    <TotalBalance :total="totalBalanceSum"/>
    <BudgetList :list="list"/>
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import Form from "@/components/Form";
import TotalBalance from "@/components/TotalBalance";
import { mapGetters, mapState } from "vuex";

export default {
  name: "App",
  components: {
    BudgetList,
    TotalBalance,
    Form
  },
  computed: {
    ...mapState({
      list: (state) => state.budget.list,
      ok: (state) => state.budget.ok,
      cancel: (state) => state.budget.cancel,
    }),
    ...mapGetters(['totalBalanceSum'])
  },
  methods: {
    onSubmitForm (data) {
      this.$store.commit('addObject', data)
    }
  }
};
</script>

<style></style>
