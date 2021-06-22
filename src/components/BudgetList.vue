<template>
  <div class="budget-list-wrap">
    <ElCard class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ header }}</span>
      </div>
      <template v-if="isList">
        <div v-for="item in list" :key="item.id" class="list-item">
          <span class="list-comment">{{ item.comment }}</span>
          <span class="list-value">{{ item.value }}</span>
          <ElButton type="danger">delete</ElButton>
        </div></template
      >
      <template v-else>
        <div class="list-item">
          <ElAlert :title="title" type="success" :closable="false" />
        </div>
      </template>
    </ElCard>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'BudgetList',
  data() {
    return {
      header: 'BudgetList',
      title: 'not list',
    };
  },
  computed: {
    ...mapState({
      list: (state) => state.budget.list,
    }),
    isList() {
      return this.list.length;
    },
  },
  methods: {},
};
</script>

<style scoped>
.budget-list-wrap {
  max-width: 450px;
  margin: 0 auto;
}

.list-item {
  padding: 10px 15px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  display: flex;
  align-items: center;
}

.list-value {
  margin-left: auto;
  margin-right: 10px;
}

.box-card {
  text-align: center;
}
</style>
