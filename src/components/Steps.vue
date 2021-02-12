<template>
  <div>
    <div class="row m-0">
      <template v-for="(s, index) in steps">
        <div v-if="index > 0" class="connector my-auto" :key="s.title + index"></div>
        <div
          class="col step-item"
          :class="getClasses(index)"
          :key="index + s.title"
          @click="step = index"
        >
          {{ index + 1 }}
        </div>
      </template>
    </div>
    <div style="min-height: 100px; display: flex" class="my-2 align-items-center">
      <div style="flex: 1" class="text-left px-3 py-2 info-box" v-html="getHelper()"></div>
    </div>
    <div class="row m-0 py-2">
      <div class="col-6 row m-0 info-box p-0">
        <div class="col-2 number py-1">{{ step + 1 }}</div>
        <div class="col-10 py-1">{{ steps[step].title }}</div>
      </div>
      <div class="col-2 pr-0">
        <button :disabled="step == 9 || steps[step].selection === null" @click="next">
          NEXT
        </button>
      </div>
      <div class="col-2 pr-0">
        <button :disabled="step == 0" @click="back">BACK</button>
      </div>
      <div class="col-2 pr-0">
        <button class="reset-button" @click="resetSelection">RESET</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
    steps: {
      type: Array,
      required: true,
    },
    shifters: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      step: this.value,
    };
  },
  watch: {
    step(val) {
      if (val !== this.value) {
        this.$emit("input", this.step);
      }
    },
    value(val) {
      if (val !== this.step) {
        this.step = val;
      }
    },
  },
  methods: {
    getHelper() {
      if(this.step === 5) {
        const selection3 = this.steps[2].selection;
        const selection4 = this.steps[3].selection;
        const selection5 = this.steps[4].selection;
        if (selection3 && selection3.text === "Water Shield without Slip Sheet") {
          if (selection4 && selection4.text === "No Drainage") {
            if (selection5 && selection5.text === "No Insulation") {
              return this.steps[this.step].helper + ". " +this.steps[this.step].error;
            }
          }
        }
      }
      if (this.step === 6) {
        const selection = this.steps[5].selection;
        if (selection && selection.text === "Woven Wire") {
          return this.steps[this.step].helper + ". " +this.steps[this.step].error;
        }
      }
      return this.steps[this.step].helper;
    },
    resetSelection() {
      this.$emit("reset-selection");
    },
    next() {
      if (this.step === 0) {
        const firstSelection = this.steps[0].selection;
        if (
          firstSelection &&
          ["Brick", "Concrete", "CMU"].includes(firstSelection.text)
        ) {
          this.step = 6;
          return;
        }
      }
      if (this.step === 3) {
        const selection = this.steps[3].selection;
        if (selection && selection.text === "Insulation Board with Drainage Grooves") {
          this.step++;
          this.step++;
          return;
        }
      }
      this.step++;
    },
    back() {
      if (this.step === 6) {
        const firstSelection = this.steps[0].selection;
        if (
          firstSelection &&
          ["Brick", "Concrete", "CMU"].includes(firstSelection.text)
        ) {
          this.step = 0;
          return;
        }
      }
      if (this.step === 5) {
        const selection = this.steps[3].selection;
        if (selection && selection.text === "Insulation Board with Drainage Grooves") {
          this.step--;
          this.step--;
          return;
        }
      }
      this.step--;
    },
    getClasses(index) {
      if (index > 0 && index < 6) {
        const firstSelection = this.steps[0].selection;
        if (
          firstSelection &&
          ["Brick", "Concrete", "CMU"].includes(firstSelection.text)
        ) {
          return ["step-item-disabled"];
        }
        if (index === 4) {
          const selection = this.steps[3].selection;
          if (selection) {
            if (selection.text === "Insulation Board with Drainage Grooves") {
              return [
                index == this.step ? "bg-selected" : "bg-normal",
                "step-item-disabled",
              ];
            }
          }
        }
        if (index === 5) {
          const selection = this.steps[3].selection;
          if (selection) {
            if (selection.text === "Insulation Board with Drainage Grooves") {
              return [
                index == this.step ? "bg-selected" : "bg-normal",
                "step-item-enabled",
              ];
            }
          }
        }
      } else if (index === 6) {
        const firstSelection = this.steps[0].selection;
        if (
          firstSelection &&
          ["Brick", "Concrete", "CMU"].includes(firstSelection.text)
        ) {
          return [index == this.step ? "bg-selected" : "bg-normal", "step-item-enabled"];
        }
      }
      return [
        index == this.step ? "bg-selected" : "bg-normal",
        this.steps[index].selection === null && this.steps[index - 1].selection === null
          ? "step-item-disabled"
          : "step-item-enabled",
      ];
    },
  },
};
</script>

<style scoped>
.info-box {
  border: 1px solid #01679a;
  font-size: 0.8rem;
}
.number {
  background: #01679a;
  color: white;
  font-weight: bold;
}
button {
  min-width: 100%;
  min-height: 100%;
  background: #00679b;
  color: white;
  border: none;
  font-size: 0.8rem;
}
.reset-button,
button:disabled {
  background: #282b2d;
}
.bg-selected {
  background: #01679a;
  color: white;
}
.bg-normal {
  color: #01679a;
}
.step-item {
  border: 1px solid #01679a;
  padding: 0px;
  font-size: 1rem;
}
.step-item-enabled {
  cursor: pointer;
}
.step-item-disabled {
  pointer-events: none;
  background: #94a0a7;
  border: 1px solid #94a0a7;
  color: white;
}
.number::after {
  content: "";
  position: absolute;
  display: block;
  left: 100%;
  top: 0px;
  width: 19px;
  height: 100%;
  border-bottom: solid 26px #01679a;
  border-right: solid 20px transparent;
}
.connector {
  flex-grow: 1;
  content: "";
  display: block;
  height: 1px;
  background-color: #01679a;
}
</style>
