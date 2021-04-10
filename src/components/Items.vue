<template>
  <div>
     <div style="font-size: 0.8rem; height:3rem" class="row align-items-end my-2">
      <div style="flex: 1 font-size: 0.8rem;" class="text-left px-3 info-note" v-html="getHelperSelection()"></div>
      <div style="margin-top:5px; color:white">-</div>
    </div>
  <div :class="step == 9 ? 'main-selection-wrapper row' : 'main-selection-wrapper h-100 row'">
    <div class="row col-12 m-0 item-wrapper" :class="step > 4 ? 'p-0' : 'pt-2'">
      <div
        class="col-3 item-selector"
        v-for="(item, index) in steps[step].items"
        :key="item.image + index"
      >
      <div>
        <img
          :src="item.image"
          :alt="item.text"
          class="w-100 pointer-clicker"
          @click="selectItem(item, index)"
          :class="getClasses(index)"
        />
        <i v-if='getClasses1(index) ==  "item-disabled"' :class="(step === 3 || step === 5 ) ? 'fa fa-ban ban1' : 'fa fa-ban'" aria-hidden="true"></i>
       </div>
        <p
          class="item-title pointer-clicker"
          :class="getClasses(index)"
          @click="selectItem(item, index)"
        >{{ item.text }}</p>
      </div>
      <div class="col-12 m-0 p-4" v-if="((step === 9 && this.steps[step].selection))">
        <div class="col-12 text-center pb-4">
          <img src="http://facadesxi.com/walls/tick-mark.png" />
        </div>
        <div class="col-12 text-center">
          <p style="white-space: pre-wrap;">
            <strong>Thank you</strong> for choosing
            <strong class="item-title">FACADESXi</strong> as your premium provider of
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
    }
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

        if (this.step === 9 && (index ===0 || index===1 || index === 4 || index === 5 )) {
        const selection8 = this.steps[7].selection;
        const selection9 = this.steps[8].selection;

        if (selection8.text == 'FS10' && selection9.text === 'None') {
           return ["item-disabled"];
        }
      }

      return [];
    },
    getClasses1(index) {

        console.log('index', index);
      
      if (this.step === 3 && index === 2) {
        if (
          ["Water Barrier by Others", "Water Shield with Slip Sheet"].includes(
            this.steps[2].selection.text
          )
        ) {
          return "item-disabled";
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
              return "item-disabled";
            }
          }
        }
        
      }
      if (this.step === 6 && (index === 1 || index === 3)) {
        const selection = this.steps[5].selection;
        if (selection && selection.text === "Woven Wire") {
          return "item-disabled";
        }
      }
      if (this.step === 9 && (index === 0 || index === 1 || index === 4 || index === 5 )) {
        const selection = this.steps[8].selection;
        if (selection && selection.text.includes("Primer")) {
          return "item-disabled";
        }
      }
      
      if (this.step === 9 && ( index === 4 || index === 5 )) {
        const selection8 = this.steps[7].selection;
        const selection9 = this.steps[8].selection;

        if (selection8.text == 'FS5' && selection9.text === 'None') {
          return "item-disabled";
        }
      }

      if (this.step === 9 && (index ===0 || index===1 || index === 4 || index === 5 )) {
        const selection8 = this.steps[7].selection;
        const selection9 = this.steps[8].selection;

        if (selection8.text == 'FS10' && selection9.text === 'None') {
          return "item-disabled";
        }
      }
      
      if (this.step === 9  ) {
         const selection8 = this.steps[7].selection;
         const selection9 = this.steps[8].selection;
         if (selection8.text === "None" && selection9.text == "None" ) {
           return ""; 
         }
      }
      return "";
    },
    getHelperSelection() {

         var current = '';

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
               return '<div class="d-flex justify-content-start"><div class="mr-1"><i class="fa fa-info-circle mr-1" aria-hidden="true"></i></div><div>You must choose Watershield with a Slip Sheet.</div>';
            }
          }
        }

      }

          //  if (this.step === 9) {
          //     const selection8 = this.steps[7].selection;
          //     const selection9 = this.steps[8].selection;

          //     if ((selection8.text == 'FS5') && selection9.text === 'None') {
          //       return '<div class="d-flex justify-content-start"><div class="mr-1"><i class="fa fa-info-circle mr-1" aria-hidden="true"></i></div><div><span>If you want to use either Hacienda finish then FS5 Fracture Stop is required.</span></div>';
          //     }
          //   }   
          
          if (this.step === 9) {
              const selection8 = this.steps[7].selection;
              const selection9 = this.steps[8].selection;

              if ((selection8.text == 'FS10') && selection9.text === 'None') {
                return '<div class="d-flex justify-content-start"><div class="mr-1"><i class="fa fa-info-circle mr-1" aria-hidden="true"></i></div><div><span>If you want to use either Hacienda finish then FS5 Fracture Stop is required.</span></div>';
              }
            }   

           if (this.step === 9) {
              const selection8 = this.steps[7].selection;
              const selection9 = this.steps[8].selection;

              if ((selection8.text == 'FS5' || selection8.text == 'FS10' ) && selection9.text.includes("Primer")) {
                return '<div class="d-flex justify-content-start"><div class="mr-1"><i class="fa fa-info-circle mr-1" aria-hidden="true"></i><br><i class="fa fa-info-circle mr-1" aria-hidden="true"></i></div><div><span>If you want to use either Hacienda finish then FS5 Fracture Stop is required.<br>Hacienda finish not applicable with Primer. </span></div>';
              }
            }   

        if (this.steps[this.step].selection) {
           current = this.steps[this.step].selection.text;
        }else{
            return '';
        }

      if (this.step == 0 && ( current == 'Brick' || current ==  'Concrete' || current ==  'CMU' ) ) {
                 return '<div class="d-flex justify-content-start"><div class="mr-1"><i class="fa fa-info-circle mr-1" aria-hidden="true"></i><br><i class="fa fa-info-circle mr-1" aria-hidden="true"></i></div><div><span>For Direct Application to CMU, Brick or Concrete, Skip to Step 7. <br> For Direct Application to CMU, Brick or Concrete, Contact FACADESXi Technical Services for project documentation.</span></div>';
          }

      if (this.step == 3 && ( current == 'Insulation Board with Drainage Grooves') ) {
                 return '<div class="d-flex justify-content-start"><div class="mr-1"><i class="fa fa-info-circle mr-1" aria-hidden="true"></i></div><div><span>For Insulation board skip to step 6.</span></div>';
          }

     return null;
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
.tem-disabled :before {
    content: "\f05e";
}
img::after {
    content: ""; 
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(120deg, #eaee44, #33d0ff);
    opacity: .7;
}
@media screen and (max-width: 575px) {
  
   .info-note {
    font-size: 7px;
  }
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
.fa-ban{
    position: absolute;
    top: 80px;
    z-index: 10;
    font-size: 40px;
    left: 40%;
    opacity: 0.5;
    color:gray
  }
  .ban1{
    top:62px !important;
  }
  /* .fa-ban{
    position: absolute;
    top: 60px;
    z-index: 10;
    font-size: 40px;
    left: 40%;
    opacity: 0.5;
    color:gray
  } */
  .ban:before {
   font-family: "Font Awesome 5 Free";
   content: "\f095";
   display: inline-block;
   padding-right: 3px;
   vertical-align: middle;
   font-weight:900;
}

</style>
