<template>
  <Badge type="warn" :text="`Available since ${version}`"/>
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
