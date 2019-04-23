<template>
  <Badge type="error" :text="`Deprecated since ${version}`"/>
</template>

<script>
export default {
  props: {
    version: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
</style>
