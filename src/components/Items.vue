<template>
  <div class="main-selection-wrapper h-100 row">
    <div class="row col-12 p-0 m-0">
      <div
        class="col-3"
        v-for="(item, index) in steps[step].items"
        :key="item.image + index"
      >
        <img
          :src="item.image"
          :alt="item.text"
          class="w-100 pointer-clicker"
          @click="selectItem(item, index)"
          :class="getClasses(index)"
        />
        <p
          class="item-title pointer-clicker"
          :class="getClasses(index)"
          @click="selectItem(item, index)"
        >
          {{ item.text }}
        </p>
      </div>
      <div class="col-12 m-0 p-4" v-if="step === 9 && this.steps[step].selection">
        <div class="col-12 text-center pb-4">
          <img src="http://facadesxi.com/walls/tick-mark.png" />
        </div>
        <div class="col-12 text-left">
          <p>
            <strong>Thank you</strong> for choosing
            <strong class="item-title">FacadesXi</strong> as your premium provider of
            building materials.
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
      <img src="http://facadesxi.com/walls/right-botom-cloud.png" alt="" class="w-100" />
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
    selectItem(item, index) {
      this.$emit("select-item", {
        item,
        index,
      });
    },
    getClasses(index) {
      if (this.step === 3 && index === 2) {
        if (
          ["Water Barrier by Others", "Water Shield with Slip Sheet"].includes(
            this.steps[2].selection.text
          )
        ) {
          return ["item-disabled"];
        }
      }
      if (this.step === 5) {
        const selection3 = this.steps[2].selection;
        const selection4 = this.steps[3].selection;
        const selection5 = this.steps[4].selection;
        if (selection3 && selection3.text === "Water Shield without Slip Sheet") {
          if (selection4 && selection4.text === "No Drainage") {
            if (selection5 && selection5.text === "No Insulation") {
              return ["item-disabled"];
            }
          }
        }
      }
      if (this.step === 6 && (index === 1 || index === 3)) {
        const selection = this.steps[5].selection;
        if (selection && selection.text === "Woven Wire") {
          return ["item-disabled"];
        }
      }
      if (this.step === 9 && (index === 0 || index === 1)) {
        const selection = this.steps[8].selection;
        if (selection && selection.text.includes("Primer")) {
          return ["item-disabled"];
        }
      }
      return [];
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
.item-disabled {
  pointer-events: none;
  color: rgb(197, 197, 197);
  filter: grayscale(1);
}
</style>
