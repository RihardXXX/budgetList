<template>
  <ElCard class="form">
    <ElForm ref="form" :model="formData" :rules="rules">
      <ElFormItem label="type" prop="outcome">
        <ElSelect v-model="formData.type" placeholder="please enter type">
          <ElOption label="outcome" value="outcome"></ElOption>
          <ElOption label="income" value="income"></ElOption>
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="comment" prop="comment">
        <ElInput v-model="formData.comment"></ElInput>
      </ElFormItem>
      <ElFormItem label="value" prop="value">
        <ElInput type="number" v-model.number="formData.value"></ElInput>
      </ElFormItem>
      <ElFormItem>
        <ElButton type="primary" @click="submitForm">submit</ElButton>
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
        comment: [
            { required: true, message: "please enter comment", trigger: "change"},
            { min: 3, message: "Length should be 3 to 25", trigger: "blur" }
          ],
        value: [
            { required: true, message: "please number value", trigger: "change"}
          ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs.form.validate((valid) => {
        console.log(formName)
          if (valid) {
            this.$emit("onSubmitForm", this.formData)
            this.$refs.form.resetFields()
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