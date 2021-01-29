<template>
  <div class="main-selection-wrapper h-100 row">
    <div class="row col-12 p-0 m-0">
      <div class="col-3" v-for="item in steps[step].items" :key="item.image">
        <img
          :src="item.image"
          :alt="item.text"
          class="w-100 pointer-clicker"
          @click="selectItem(item)"
        />
        <p class="item-title pointer-clicker" @click="selectItem(item)">{{ item.text }}</p>
      </div>
      <div class="col-12 m-0 p-4" v-if="step === 9 && this.steps[step].selection">
        <div class="col-12 text-center pb-4">
          <img src="http://facadesxi.com/walls/tick-mark.png" />
        </div>
        <div class="col-12 text-left">
          <p>
            <strong>Thank you</strong> for choosing
            <strong class="item-title">FacadesXi</strong> as your premium provider of building materials.
          </p>
        </div>
        <div class="col-12 text-left download-box p-3 display-5 mb-4">
          Download the documentation of your custom wall system
          <button class="mt-2 py-1 px-2">
            <i class="fa fa-download mr-2" aria-hidden="true"></i> Download Documentation
          </button>
        </div>
      </div>
    </div>
    <div class="col-12 mt-auto p-0">
        <img src="http://facadesxi.com/walls/right-botom-cloud.png" alt="" class="w-100">
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
      this.$emit("select-item", item);
    },
  },
};
</script>

<style scoped>
.main-selection-wrapper {
  border-top: 2px solid #01679a;
  border-bottom: 2px solid #01679a;
}

.item-title {
  font-size: 0.8rem;
  color: #01679a;
}
.download-box {
  border: 1px solid #01679a;
}
button {
  background: #01679a;
  color: white;
  border: none;
}
.pointer-clicker {
  cursor: pointer;
}
</style>