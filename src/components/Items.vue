<template>
  <div>
    <div class="row">
      <div
        class="col-3"
        v-for="(item, index) in steps[step].items"
        :key="index"
      >
        <img :src="item.image" alt="" class="w-100 h-100" />
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      required: true,
    },
    steps: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>