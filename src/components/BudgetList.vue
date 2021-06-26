<template>
  <div class="budget-list-wrap">
    <Dialog :id="id" />
    <ElCard class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ header }}</span>
      </div>
      <template v-if="isList">
        <div v-for="item in list" :key="item.id">
          <BudgetListItem :item="item" @showModal="showModal" />
        </div></template>
      <template v-else>
        <div class="list-item">
          <ElAlert :title="title" type="success" :closable="false" />
        </div>
      </template>
    </ElCard>
  </div>
</template>

<script>
import BudgetListItem from "@/components/BudgetListItem"
import Dialog from "@/components/Dialog"
import { mapState } from "vuex"

export default {
  name: 'BudgetList',
  components: {
    BudgetListItem,
    Dialog
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      header: 'BudgetList',
      title: 'not list',
      isVisible: false,
      id: 0
    };
  },
  computed: {
    ...mapState({
      ok: (state) => state.budget.ok,
      cancel: (state) => state.budget.cancel,
    }),
    isList() {
      return this.list.length;
    }
  },
  methods: {
    showModal (id) {
      this.$store.commit('isVisibleTrue')
      this.id = id
    }
  }
};
</script>

<style scoped>
.budget-list-wrap {
  max-width: 450px;
  margin: 0 auto;
}

.box-card {
  text-align: center;
}
</style>
