<template>
  <div class="filter-wrap">
    <ElButton type="success" @click="filter('income')" round>income</ElButton>
    <ElButton type="warning" @click="filter('outcome')" round>outcome</ElButton>
    <ElButton type="primary" @click="filter('all')" round>all operations</ElButton>
  </div>
</template>

<script>

export default {
  name: 'Filters',
  methods: {
    filter (params) {
      this.$emit('isFilter', params)
    }
  }
}

</script>

<style scoped>
.filter-wrap {
  max-width: 450px;
  margin: 0 auto;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>