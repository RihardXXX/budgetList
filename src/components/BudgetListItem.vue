<template>
  <div class="list-item">
    <i :class="isIcon"></i>
    <span class="list-comment">{{ item.comment }}</span>
    <span class="list-value" :style="{ color: isColor }">{{ item.value }}</span>
    <ElButton type="danger" @click="onDelete(item.id)">delete</ElButton>
  </div>
</template>

<script>


export default {
  name: "BudgetListItem",
  props: {
    item: Object
  },
  computed: {
    isIcon () {
      return this.item.type === "income" ? 'el-icon-top' : 'el-icon-bottom'
    },
    isColor () {
      return this.item.type === "income" ? 'green' : 'red'
    }
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
.list-comment {
  margin-left: 5px;
}
</style>