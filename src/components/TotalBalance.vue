<template>
  <div class="total">balance: <span :class="isColor">{{ total }}</span></div>
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
  data () {
    return {
      color: {
        positive: 'positive',
        negative: 'negative',
        zero: 'zero'
      }
    }
  },
  computed: {
    isColor () {
      const { total, color: { positive, negative, zero } } = this
      if (total > 0) {
        return positive
      } else if (total < 0) {
        return negative
      } else {
        return zero
      }
    }
  }
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

.positive {
  color: green
}

.negative {
  color: red;
}

.zero {
  color: black;
}

</style>
