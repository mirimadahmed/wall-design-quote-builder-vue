<template>
  <div>
    <div class="row m-0">
      <template v-for="(s, index) in steps">
        <div v-if="index > 0" class="connector my-auto" :key="index"></div>
        <div
          class="col step-item"
          :class="index == step ? 'bg-selected' : 'bg-normal'"
          :key="index"
        >
          {{ index + 1 }}
        </div>
      </template>
    </div>
    <div class="text-left my-4 px-3 py-2 info-box">
      <i class="fa fa-info-circle mr-1" aria-hidden="true"></i>
      {{ steps[step].title }} Selection. {{ steps[step].helper }}
      <a :href="steps[step].link">Link here </a>
    </div>
    <div class="row m-0 py-2">
      <div class="col-6 row m-0 info-box p-0">
        <div class="col-2 number py-1">{{ step + 1 }}</div>
        <div class="col-10 py-1">{{ steps[step].title }}</div>
      </div>
      <div class="col-2 pr-0">
        <button :disabled="step == 9" @click="step++">NEXT</button>
      </div>
      <div class="col-2 pr-0">
        <button :disabled="step == 0" @click="step--">BACK</button>
      </div>
      <div class="col-2 pr-0">
        <button class="reset-button">RESET</button>
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
  },
};
</script>

<style scoped>
.info-box {
  border: 1px solid #01679a;
}
.fa {
  color: #01679a;
}
.number {
  background: #01679a;
  color: white;
  font-weight: bold;
}
button {
  min-width: 100%;
  min-height: 100%;
  background: #01679a;
  color: white;
  border: none;
}
.reset-button,
button:disabled {
  background: rgb(114, 73, 11);
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
}
.connector {
  flex-grow: 1;
  content: "";
  display: block;
  height: 1px;
  background-color: #01679a;
}
</style>