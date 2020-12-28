<template>
  <div>
    <div class="row">
      <div
        class="col border m-1"
        :class="index == step ? 'bg-dark text-light' : ''"
        v-for="(s, index) in steps"
        :key="index"
      >
        {{ index + 1 }}
      </div>
    </div>
    <div class="border text-left my-2">
      (icon) {{ steps[step].title }} Selection. {{ steps[step].helper }}
      <a :href="steps[step].link">Link here </a>
    </div>
    <div class="row">
      <div class="col-6">{{ step + 1 }} {{ steps[step].title }}</div>
      <div class="col-2">
        <button :disabled="step == 9" @click="step++">NEXT</button>
      </div>
      <div class="col-2">
        <button :disabled="step == 0" @click="step--">BACK</button>
      </div>
      <div class="col-2">
        <button>RESET</button>
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
        this.$emit("value", this.step);
      }
    },
  },
};
</script>

<style>
</style>