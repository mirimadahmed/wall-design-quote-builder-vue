<template>
  <div class="main-selection-wrapper">
    <div class="row py-5">
      <div
        class="col-3"
        v-for="(item, index) in steps[step].items"
        :key="index"
        @click="selectItem(item)"
      >
        <img :src="item.image" :alt="item.text" class="w-150 h-150" />
        <p class="item-title">{{ item.text }}</p>
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
  methods: {
    selectItem(item) {
      this.$emit('select-item', item);
    }
  }
};
</script>

<style scoped>
.main-selection-wrapper {
  border-top: 2px solid #01679a;
  border-bottom: 2px solid #01679a;
}
.item-title {
  color: #01679a;
}
</style>