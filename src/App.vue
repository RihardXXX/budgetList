<template>
  <div id="app">
    <TotalBalance :total="totalBalanceSum"/>
    <BudgetList :list="list" />
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import { mapGetters, mapState } from "vuex";

export default {
  name: "App",
  components: {
    BudgetList,
    TotalBalance,
  },
  computed: {
    ...mapState({
      list: (state) => state.budget.list,
    }),
    ...mapGetters(['totalBalanceSum'])
  },
};
</script>

<style></style>
