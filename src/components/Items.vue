<template>
  <div class="main-selection-wrapper h-100 row">
    <div class="row col-12 m-0 item-wrapper" :class="step > 4 ? 'p-0' : 'pt-2'">
      <div
        class="col-3 item-selector"
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
        >{{ item.text }}</p>
      </div>
      <div class="col-12 m-0 p-4" v-if="step === 9 && this.steps[step].selection">
        <div class="col-12 text-center pb-4">
          <img src="http://facadesxi.com/walls/tick-mark.png" />
        </div>
        <div class="col-12 text-left">
          <p style="white-space: pre-wrap;">
            <strong>Thank you</strong> for choosing
            <strong class="item-title">FacadesXi</strong> as your premium provider of
            building materials.
          </p>
        </div>
        <div style="white-space: pre-wrap;" class="col-12 text-center download-box p-3 display-5 mb-4">
          Download the documentation of your custom wall system
          <button
            class="mt-2 py-1 px-2 download-button"
            @click="generateReport"
          >
            <i class="fa fa-download mr-2 text-light" aria-hidden="true"></i> Download Documentation
          </button>
        </div>
      </div>
    </div>
    <div class="col-12 mt-4 p-0 bottom-cloud">
      <img src="http://facadesxi.com/walls/right-botom-cloud.png" alt class="w-100 img-cloud" />
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
    generateReport() {
      this.$emit("print");
    },
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
        if (
          selection3 &&
          selection3.text === "Water Shield without Slip Sheet"
        ) {
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
      if (this.step === 9 && (index === 0 || index === 1 || index === 4 || index === 5 )) {
        const selection = this.steps[8].selection;
        if (selection && selection.text.includes("Primer")) {
          return ["item-disabled"];
        }
      }
      if (this.step === 9 && (index === 4 || index === 5)) {
        const selection = this.steps[7].selection;
        if (selection && !selection.text.includes("FS5")) {
          return ["item-disabled"];
        }
      }
      return [];
    },
  },
};
</script>

<style scoped>
.img-cloud {
  position: absolute;
  bottom: 0;
  left: 0;
}
.main-selection-wrapper {
  border-top: 2px solid #01679a;
  border-bottom: 2px solid #01679a;
}

.item-title {
  font-size: 0.8rem;
  color: #01679a;
  white-space: initial !important;
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
@media screen and (max-width: 575px) {
  .item-wrapper {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
  .item-selector {
    display: inline-block;
    max-width: 33.33% !important;
    vertical-align: top;
  }
  .item-selector p {
    font-size: 0.6rem;
  }
  .main-selection-wrapper {
    border-bottom: none;
  }
  .bottom-cloud {
    display: none;
    opacity: 0;
    transform: scale(0);
  }
  .download-button {
    font-size: smaller;
  }
}
</style>
