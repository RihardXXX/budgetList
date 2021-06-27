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
    var checkValue= (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Please input the value > 0'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'));
          } else {
            if (value <= 0) {
              callback(new Error('Value > 0'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
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
            { validator: checkValue, trigger: "change"}
          ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.form.validate((valid) => {
        console.log(this.$refs.form)
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