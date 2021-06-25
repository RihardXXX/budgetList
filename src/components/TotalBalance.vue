<template>
  <div class="total">balance: {{ total }}</div>
</template>

<script>
export default {
  name: 'TotalBalance',
  props: {
    total: {
      type: Number,
      required: false
    }
  },
};
</script>

<style scoped>
.total {
  max-width: 450px;
  margin: 0 auto;
  border: 1px solid #ebeef5;
  padding: 5px auto;
  text-align: center;
  margin-bottom: 5px;
  text-transform: uppercase;
  font-size: 28px;
  font-weight: bold;
}
</style>
