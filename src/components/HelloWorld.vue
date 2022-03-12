<script lang="ts" setup>
defineProps({
  msg: {
    type: String,
    default: '',
  }
});
</script>

<template>
  <div>Hello world:{{ msg }}</div>
  <n-button type="primary">测试</n-button>
</template>

<style lang="scss" scoped></style>
