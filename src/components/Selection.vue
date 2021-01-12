<template>
  <div class="">
    <p class="row title">Selected Layers</p>
    <div class="row-item row" v-for="(item, index) in steps" :key="index">
      <div class="col-1 text-center p-0 number">{{ index + 1 }}.</div>
      <div class="col text-left col-item">
        {{ item.title }}
        <span
          class="selection ml-1"
          :class="
            item.selection ? 'selection-selected' : 'selection-unselected'
          "
          ><i class="fas fa-check mr-1"></i
          >{{ item.selection ? item.selection : "None Selected" }}</span
        >
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

<style scoped>
.title {
  text-transform: initial;
  color: #01679a;
  font-style: italic;
  border-bottom: 2px solid #01679a;
  font-size: 1.5rem;
}
.row-item {
  border-bottom: 1px solid #01679a;
  margin-bottom: 10px;
}
.col-item {
  text-transform: uppercase;
  font-size: 1rem;
}
.number {
  background: #01679a;
  color: white;
}
.selection {
  text-transform: initial;
  font-weight: 300;
}
.selection-selected {
  color: #01679a;
}

.selection-unselected {
  color: grey;
}
</style>