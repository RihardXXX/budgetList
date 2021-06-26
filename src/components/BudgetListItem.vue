<template>
  <div class="list-item">
    <span class="list-comment">{{ item.comment }}</span>
    <span class="list-value">{{ item.value }}</span>
    <ElButton type="danger" @click="onDelete(item.id)">delete</ElButton>
  </div>
</template>

<script>


export default {
  name: "BudgetListItem",
  props: {
    item: Object
  },
  methods: {
    onDelete (id){
      this.$emit('showModal', id)
    }
  }
}
</script>

<style scoped>
.list-item {
  padding: 10px 15px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-top: 5px;
}
.list-value {
  margin-left: auto;
  margin-right: 10px;
}
</style>