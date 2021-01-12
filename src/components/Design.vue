<template>
  <div class="row m-0 p-0 py-5">
    <div class="col-12 p-0 m-0">
      <transition-group name="slide" tag="div">
        <span v-for="(item, index) in selectedSteps" v-bind:key="index" class="slide-item">
          <img class="design-element" :src="item.selection.image" :alt="item.selection.text">
        </span>
      </transition-group>
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
  computed: {
    selectedSteps() {
      return this.steps.filter((step) => step.selection !== null);
    },
  },
};
</script>

<style scoped>
.design-element {
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>