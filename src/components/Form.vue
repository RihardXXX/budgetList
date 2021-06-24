<template>
  <ElCard class="form">
    <ElForm ref="formData" :model="formData" :rules="rules">
      <ElFormItem label="type" prop="outcome">
        <ElSelect v-model="formData.type" placeholder="please enter type">
          <ElOption label="outcome" value="outcome"></ElOption>
          <ElOption label="income" value="income"></ElOption>
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="comment" prop="comment">
        <ElInput v-model="formData.comment"></ElInput>
      </ElFormItem>
      <ElFormItem label="type" prop="value">
        <ElInput type="number" v-model.number="formData.value"></ElInput>
      </ElFormItem>
      <ElFormItem>
        <ElButton type="primary" @click="submitForm('formData')">submit</ElButton>
      </ElFormItem>
    </ElForm>
  </ElCard>
</template>

<script>
export default {
  name: "Form",
  data () {
    return {
      formData: {
        type: "outcome",
        comment: "",
        value: ""
      },
      rules: {
        comment: [{ required: true, message: "please enter comment", trigger: "submitForm"}],
        value: [{ required: true, message: "please number value", trigger: "submitForm"}]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }
  }
}
</script>

<style scoped>
.form {
  max-width: 450px;
  text-align: center;
  margin: 0 auto;
}
</style>