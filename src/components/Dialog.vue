<template>
  <div>
    <ElDialog
      :title="title"
      :visible.sync="isVisible"
      width="30%"
      :before-close="cancel">
      <span>{{ message }}</span>
      <span slot="footer" class="dialog-footer">
        <ElButton @click="cancel">Cancel</ElButton>
        <ElButton type="primary" @click="ok">ok</ElButton>
      </span>
    </ElDialog>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'Dialog',
  props: {
    titleProp: {
      type: String,
      required: false,
    },
    messageProp: {
      type: String,
      required: false,
    },
    id: {
      type: Number,
      required: false,
    }
  },
  data() {
    return {
      title: this.titleProp || 'title',
      message: this.messageProp || 'message'
    }
  },
  methods: {
    ok () {
      this.$store.commit('deteleItemList', this.id)
      this.$store.commit('isVisibleFalse')
    },
    cancel () {
      this.$store.commit('isVisibleFalse')
    }
  },
  computed: {
    ...mapState({
      isVisible: (state) => state.budget.isVisible,
    })
  }
}
</script>

<style scoped>
</style>