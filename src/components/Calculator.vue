<template>
  <div class="wrapper">
    <transition name="slide">
      <img
        src="http://facadesxi.com/walls/calculater-icon.png"
        alt=""
        class="p-2 rounded slide-opener"
        @click="toggle"
        v-if="!shown"
      />
    </transition>

    <transition name="slide">
      <div class="slidein" v-if="shown">
        <div class="calculator">
          <div class="answer">{{ answer }}</div>
          <div class="display">{{ logList + current }}</div>
          <div @click="clear" id="clear" class="calc-btn operator">C</div>
          <div @click="sign" id="sign" class="calc-btn operator">+/-</div>
          <div @click="percent" id="percent" class="calc-btn operator">%</div>
          <div @click="divide" id="divide" class="calc-btn operator">/</div>
          <div @click="append('7')" id="n7" class="calc-btn">7</div>
          <div @click="append('8')" id="n8" class="calc-btn">8</div>
          <div @click="append('9')" id="n9" class="calc-btn">9</div>
          <div @click="times" id="times" class="calc-btn operator">*</div>
          <div @click="append('4')" id="n4" class="calc-btn">4</div>
          <div @click="append('5')" id="n5" class="calc-btn">5</div>
          <div @click="append('6')" id="n6" class="calc-btn">6</div>
          <div @click="minus" id="minus" class="calc-btn operator">-</div>
          <div @click="append('1')" id="n1" class="calc-btn">1</div>
          <div @click="append('2')" id="n2" class="calc-btn">2</div>
          <div @click="append('3')" id="n3" class="calc-btn">3</div>
          <div @click="plus" id="plus" class="calc-btn operator">+</div>
          <div @click="append('0')" id="n0" class="zero">0</div>
          <div @click="dot" id="dot" class="calc-btn">.</div>
          <div @click="equal" id="equal" class="calc-btn operator">=</div>
        </div>
        <p class="close-btn" @click="toggle">></p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shown: false,
      logList: "",
      current: "",
      answer: "",
      operatorClicked: true,
    };
  },
  methods: {
    toggle() {
      this.shown = !this.shown;
      if(this.shown) {
        this.clear()
        this.answer = 0
      }
    },
    append(number) {
      if (this.operatorClicked) {
        this.current = "";
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    addtoLog(operator) {
      if (this.operatorClicked == false) {
        this.logList += `${this.current} ${operator} `;
        this.current = "";
        this.operatorClicked = true;
      }
    },
    clear() {
      this.current = "";
      this.answer = "";
      this.logList = "";
      this.operatorClicked = false;
    },
    sign() {
      if (this.current != "") {
        this.current =
          this.current.charAt(0) === "-" ? this.current.slice(1) : `-${this.current}`;
      }
    },
    percent() {
      if (this.current != "") {
        this.current = `${parseFloat(this.current) / 100}`;
      }
    },
    dot() {
      if (this.current.indexOf(".") === -1) {
        this.append(".");
      }
    },
    divide() {
      this.addtoLog("/");
    },
    times() {
      this.addtoLog("*");
    },
    minus() {
      this.addtoLog("-");
    },
    plus() {
      this.addtoLog("+");
    },
    equal() {
      if (this.operatorClicked == false) {
        let answer = eval(this.logList + this.current);
        this.clear();
        this.answer = answer;
        this.append(answer);
      } else {
        this.answer = "WHAT?!!";
      }
    },
  },
};
</script>

<style scoped>
.slidein {
  max-width: 600px;
  position: fixed;
  z-index: 100;
  top: 20%;
  right: 20px;
  transition: all 0.5s ease-in-out;
}

.slide-opener {
  position: fixed;
  z-index: 100;
  top: 20%;
  right: 0;
  transition: all 0.5s ease-in-out;
}

/* before the element is shown, start off the screen to the right */
.slide-enter,
.slide-leave-active {
  right: -100%;
}

.close-btn {
  height: 100px;
  line-height: 100px;
  font-weight: 800;
  border: none;
  position: absolute;
  top: 0;
  right: -20px;
  background-color: #3fa9fc;
  width: 20px;
  cursor: pointer;
}
img {
  background: #01679a;
  cursor: pointer;
}
.wrapper {
  position: absolute;
  right: -1%;
  top: 20%;
}
.calculator {
  display: grid;
  grid-template-rows: repeat(7, minmax(60px, auto));
  grid-template-columns: repeat(4, 60px);
  font-family: "Poppins";
  font-weight: 300;
  font-size: 18px;
  background-color: black;
  color: white;
  box-shadow: 0px 3px 80px -30px rgba(13, 81, 134, 1);
}

.calc-btn,
.zero {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  background-color: #3fa9fc;
  color: #f4faff;
}

.display,
.answer {
  grid-column: 1 / 5;
  display: flex;
  align-items: center;
  text-align: right;
}

.display {
  color: #a3a3a3;
  margin-bottom: 5px;
  overflow: hidden;
  padding: 10px;
  font-size: 0.8rem;
  text-overflow: clip;
}

.answer {
  font-weight: 500;
  font-size: 1rem;
  color: #146080;
  font-size: 55px;
  height: 65px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 10px;
  padding-left: 10px;
}

.zero {
  grid-column: 1 / 3;
}

.operator {
  background-color: #484848;
  color: #f4faff;
}
</style>
