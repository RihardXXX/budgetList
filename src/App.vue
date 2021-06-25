<template>
  <div id="app">
    <Form @onSubmitForm="onSubmitForm" />
    <TotalBalance :total="totalBalanceSum"/>
    <BudgetList :list="list" @deleteItem="deleteItem"/>
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
    }),
    ...mapGetters(['totalBalanceSum'])
  },
  methods: {
    deleteItem (id) {
      this.$store.commit('deteleItemList', id)
    },
    onSubmitForm (data) {
      this.$store.commit('addObject', data)
    }
  }
};
</script>

<style></style>
