<template>
  <div id="app" class="text-center container">
    <Calculator class="d-none d-sm-flex" />
    <div class="row d-none d-sm-flex" >
      <div class="col-5 px-5 py-0">
        <transition-group name="list" tag="div">
          <div v-for="item in selectedItems" class="design-element" :key="item.text">
            <img class="w-100" v-if="!item.none" :src="item.image" :alt="item.image" />
          </div>
        </transition-group>
      </div>
      <div class="col-7">
        <info class="mt-2 px-3" />
        <steps
          class="mt-2 px-3"
          v-model="step"
          :steps="steps"
          :shifters="shifters"
          @reset-selection="resetSelection"
        />
      </div>
    </div>
    <div class="row d-none d-sm-flex">
      <div class="col-5 px-5 py-0">
        <selection :step="step" :steps="steps" />
      </div>
      <div class="col-7 items-wrapper">
        <items class="my-my-2 h-100" :step="step" :steps="steps" @select-item="selectItem" @print="print = true;" />
      </div>
    </div>
    <!-- 
      Mobile only
    -->
    <div class="row d-sm-none d-flex" >
      <div class="col-12 p-0">
        <info class="mt-2 px-3" />
        <steps
          class="mt-2 px-3"
          v-model="step"
          :steps="steps"
          :shifters="shifters"
          @reset-selection="resetSelection"
        />
      </div>
      <div class="col-12 px-5 py-0">
        <transition-group name="list" tag="div">
          <div v-for="item in selectedItems" class="design-element" :key="item.text">
            <img
              style="height: 18rem !important;"
              v-if="!item.none"
              :src="item.image"
              :alt="item.image"
            />
          </div>
        </transition-group>
      </div>
    </div>
    <div class="row mt-5 d-sm-none d-flex" style="margin-top: 16rem !important;">
      <div class="col-12 py-4">
        <items
          class="my-my-2 h-100 border-none"
          :step="step"
          :steps="steps"
          @select-item="selectItem"
          @print="print = true;"
        />
      </div>
      <div class="col-12 px-4 py-0">
        <selection :step="step" :steps="steps" />
      </div>
    </div>
    <PDF :steps="steps" v-if="print" @printed="print = false" />

    <!-- <div v-if="shownDisclaimer">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div
              class="modal show"
              id="myModal"
              role="dialog"
              style="display: block"
              data-show="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Disclaimer</h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      @click="shownDisclaimer = false"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>
                      This interactive System is a guide to help designers and owners
                      choose the components and assembly for their project. The designer
                      should ensure that the chosen components and assembly meet the
                      building code requirements for the project type, such as drainage,
                      fire resistance rating and non-combustible construction testing and
                      compliance.
                    </p>
                    <p>
                      The materials must be installed per the IBC, IRC and FACADESXi
                      installation instructions and specifications. Materials listed that
                      are not manufactured or distributed by FACADESXi are included for
                      the clarity of the assembly, are not necessarily installed by the
                      plastering contractor and must be installed per the
                      manufacturer/industry and building code standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>-->
  </div>
</template>

<script>
import Selection from "./components/Selection.vue";
import Calculator from "./components/Calculator.vue";
import Info from "./components/Info.vue";
import Steps from "./components/Steps.vue";
import Items from "./components/Items.vue";
import PDF from './components/PDF.vue';
export default {
  name: "App",
  components: {
    Steps,
    Info,
    Items,
    Selection,
    Calculator,
    PDF
  },
  data() {
    return {
      print: false,
      shownDisclaimer: true,
      step: 0,
      shifters: [2, 3, 4],
      steps: [
        {
          helper:
            '<div class="d-flex justify-content-start"><div class="mr-1"><i class="fa fa-info-circle mr-1" aria-hidden="true"></i></div><div>What type of Studs are you using? <span>Steel or Wood</span></div>',
          title: "Wall Base",
          link: "",
          selection: null,
          items: [
            {
              text: "Steel Stud",
              image:
                "http://facadesxi.com/walls/SystemLayers_0009s_0000_Steel.png",
            },
            {
              text: "Wood Stud",
              image:
                "http://facadesxi.com/walls/SystemLayers_0009s_0002_Wood.png",
            },
            {
              text: "Brick",
              image:
                "http://facadesxi.com/walls/SystemLayers_0008s_0000_brick.png",
            },
            {
              text: "Concrete",
              image:
                "http://facadesxi.com/walls/SystemLayers_0008s_0001_Concrete.png",
            },
            {
              text: "CMU",
              image:
                "http://facadesxi.com/walls/SystemLayers_0008s_0002_CMU-2-copy.png",
            },
          ],
        },
        {
          helper:
            '<div class="d-flex justify-content-start"><div class="mr-1"><i class="fa fa-info-circle mr-1" aria-hidden="true"></i></div><div>Substrate Selection. <span>If Unknown, Select ASTM C1177 FiberGlass Faced Gypsum Sheathing</span></div>',
          title: "Substrate",
          link: "",
          selection: null,
          items: [
            {
              text: "ASTM C1177 Glass Mat Gypsum Sheating",
              image:
                "http://facadesxi.com/walls/SystemLayers_0008s_0003_Glass-Mat.png",
            },
            {
              text: "ASTM C79/C1396 Gypsum Sheating",
              image:
                "http://facadesxi.com/walls/SystemLayers_0008s_0004_Gypsum.png",
            },
            {
              text: "Exterior Plywood",
              image:
                "http://facadesxi.com/walls/SystemLayers_0008s_0005_Plywood.png",
            },
            {
              text: "Exposure I OSB",
              image:
                "http://facadesxi.com/walls/SystemLayers_0008s_0006_OSB.png",
            },
          ],
        },
        {
          helper:
            '<div class="d-flex justify-content-start"><div class="mr-1"><i class="fa fa-info-circle mr-1" aria-hidden="true"></i><br><i class="fa fa-info-circle mr-1" aria-hidden="true"></i><br><i class="fa fa-info-circle mr-1" aria-hidden="true"></i></div><div><span>Water Resistant Barrier, Liquid or Sheet Membranes.</span><br> FACADESXi WaterShield allows single source materials & longer, better system warranties.<br>A slip sheet is required when being installed directly under Lath and Stucco.</div>',
          title: "Water Resistive Barrier",
          link: "",
          selection: null,
          items: [
            {
              text: "Water Shield with Slip Sheet",
              image:
                "http://facadesxi.com/walls/SystemLayers_0007s_0000_Slip-sheet-and-drainage.png",
            },
            {
              text: "Water Shield without Slip Sheet",
              image:
                "http://facadesxi.com/walls/SystemLayers_0007s_0001_Pink-barrier-coating.png",
            },
            {
              text: "Water Barrier by Others",
              image:
                "http://facadesxi.com/walls/SystemLayers_0007s_0003_barrier-coating.png",
            },
          ],
        },
        {
          helper:
            '<div class="d-flex justify-content-start"><div class="mr-1"><i class="fa fa-info-circle mr-1" aria-hidden="true"></i></div><div>Do you want an extra means of drainage behind your stucco assembly?</div>',
          title: "Drainage",
          link: "",
          selection: null,
          noneAllowed: true,
          items: [
            {
              text: "No Drainage",
              image: "http://facadesxi.com/walls/None-4.png",
              none: true,
            },
            {
              text: "Insulation Board",
              image:
                "http://facadesxi.com/walls/SystemLayers_0006s_0000_Drainage-Grooves.png",
            },
            {
              text: "Vertical Ribbons of Adhesive",
              image:
                "http://facadesxi.com/walls/SystemLayers_0006s_0001_Layer-12-copy-11.png",
            },
            {
              text: "Tyvek Stuccowrap",
              image:
                "http://facadesxi.com/walls/SystemLayers_0006s_0002_Tyvek-Stuccowrap.png",
            },
            {
              text: "Drainage Mat",
              image:
                "http://facadesxi.com/walls/SystemLayers_0006s_0003_Drainage-Mat-.png",
            },
          ],
        },
        {
          helper:
            '<div class="d-flex justify-content-start"><div class="mr-1"><i class="fa fa-info-circle mr-1" aria-hidden="true"></i></div><div>Continuous Insulation Boards allow for Needed R Value</div>',
          title: "Continuous Insulation",
          link: "",
          selection: null,
          noneAllowed: true,
          items: [
            {
              text: "No Insulation",
              image: "http://facadesxi.com/walls/None-5.png",
              none: true,
            },
            {
              text: "EPS",
              image:
                "http://facadesxi.com/walls/SystemLayers_0005s_0000_EPS.png",
            },
            {
              text: "XPS",
              image:
                "http://facadesxi.com/walls/SystemLayers_0005s_0001_XPS-copy.png",
            },
            {
              text: "Polysio",
              image:
                "http://facadesxi.com/walls/SystemLayers_0005s_0002_Polyiso.png",
            },
          ],
        },
        {
          helper:
            '<div class="d-flex justify-content-start"><div class="mr-1"><i class="fa fa-info-circle mr-1" aria-hidden="true"></i></div><div>Choose Lath Type, <span>If Unknown, Select Standard Metal Lath</span></div>',
          title: "Code Compilant Lath",
          link: "",
          selection: null,
          error:
            "A slip sheet is required when being installed directly under Lath and Stucco.",
          items: [
            {
              text: "Woven Wire",
              image:
                "http://facadesxi.com/walls/SystemLayers_0004s_0000_AdobeStock_96714578-copy-4.png",
            },
            {
              text: "Plastic Lath",
              image:
                "http://facadesxi.com/walls/SystemLayers_0004s_0001_Plastic-Lath.png",
            },
            {
              text: "Metal Lath",
              image:
                "http://facadesxi.com/walls/SystemLayers_0004s_0002_Metal-Lath.png",
            },
          ],
        },
        {
          helper:
            '<div class="d-flex justify-content-start"><div class="mr-1"><i class="fa fa-info-circle mr-1" aria-hidden="true"></i><br><i class="fa fa-info-circle mr-1" aria-hidden="true"></i></div><div>Stucco, One coat or Three coat <br>  Xi-Admix will increase the strength of the your stucco base coat and decrease efflorescence.</div>',
          title: "Stucco",
          link: "",
          error: "Woven Wire is only allowed with One Coat Stucco.",
          selection: null,
          items: [
            {
              text: "One Coat (3/8'')",
              image:
                "http://facadesxi.com/walls/SystemLayers_0003s_0000_Stucco.png",
            },
            {
              text: "Three Coat (7/8'')",
              image:
                "http://facadesxi.com/walls/SystemLayers_0003s_0001_Three-Stucco.png",
            },
            {
              text: "Xi-Admix One Coat (3/8'')",
              image:
                "http://facadesxi.com/walls/SystemLayers_0003s_0000_Stucco.png",
            },
            {
              text: "Xi-Admix Three Coat (7/8'')",
              image:
                "http://facadesxi.com/walls/SystemLayers_0003s_0001_Three-Stucco.png",
            },
          ],
        },
        {
          helper:
            '<div class="d-flex justify-content-start"><div class="mr-1"><i class="fa fa-info-circle mr-1" aria-hidden="true"></i></div><div><span>Do you want a crack Resistant Layer: </span>FractureStop Layer: FS 10 has a more polymer modified base coat and higher weight reinforcing mesh and comes with a longer warranty than FS5 options.</div>',
          title: "Fracturestop",
          link: "",
          selection: null,
          noneAllowed: true,
          items: [
            {
              text: "None",
              image: "http://facadesxi.com/walls/None-8.png",
              none: true,
            },
            {
              text: "FS5",
              image:
                "http://facadesxi.com/walls/SystemLayers_0002s_0000_Base-Coat-and-mesh.png",
            },
            {
              text: "FS10",
              image:
                "http://facadesxi.com/walls/SystemLayers_0002s_0000_Base-Coat-and-mesh.png",
            },
          ],
        },
        {
          helper:
            '<div class="d-flex justify-content-start"><div class="mr-1"><i class="fa fa-info-circle mr-1" aria-hidden="true"></i></div><div>Select a Primer for decreased efflorescence and highest finish coat aesthetic performance and increased warranty - <span>Do not select Primer if using a cement finish</span></div>',
          title: "Primer",
          link: "",
          selection: null,
          noneAllowed: true,
          items: [
            {
              text: "None",
              image: "http://facadesxi.com/walls/None-9.png",
              none: true,
            },
            {
              text: "Xi-Alkali Resistant (Primer With Mascot)",
              image:
                "http://facadesxi.com/walls/SystemLayers_0001s_0000_Primer.png",
            },
            {
              text: "Xi-Alkali Resistant Primer",
              image:
                "http://facadesxi.com/walls/SystemLayers_0001s_0001_Primer.png",
            },
          ],
        },
        {
          helper:
            '<div class="d-flex justify-content-start"><div class="mr-1"><i class="fa fa-info-circle mr-1" aria-hidden="true"></i></div><div>Choose Finish coat for your system?</div>',
          title: "Finish Coat",
          link: "",
          selection: null,
          items: [
             {
              text: "Hacienda Smooth Cement Finish with Admix",
              image:
                "http://facadesxi.com/walls/SystemLayers_0000s_0000_Hacienda-Smooth.png",
            },
            {
              text: "Hacienda Sand Cement Finish with Admix",
              image:
                "http://facadesxi.com/walls/SystemLayers_0000s_0001_Hacienda-Sand.png",
            },
            {
              text: "Xi-Elastomeric Finish Coat",
              image:
                "http://facadesxi.com/walls/SystemLayers_0000s_0002_Finish-coat-copy.png",
            },
            {
              text: "Xi-Textured Acrylic Finish Coat",
              image:
                "http://facadesxi.com/walls/SystemLayers_0000s_0003_Finish-coat.png",
            },
            {
              text: "Hacienda Smooth Cement Finish",
              image:
                "http://facadesxi.com/walls/SystemLayers_0000s_0000_Hacienda-Smooth.png",
            },
            {
              text: "Hacienda Sand Cement Finish",
              image:
                "http://facadesxi.com/walls/SystemLayers_0000s_0001_Hacienda-Sand.png",
            },
          ],
        },
      ],
      selectedItems: [],
    };
  },
  created() {
    this.setSteel();
  },
  methods: {
    selectItem(selection) {
      const item = selection.item;
      const index = selection.index;
      if (this.selectedItems[this.step]) {
        this.selectedItems.splice(this.step, 1, item);
      } else {
        this.selectedItems.push(item);
      }
      this.steps[this.step].selection = item;

      this.steps.forEach((item, index) => {
        if (index > this.step) {
          item.selection = null;
        }
      });

      this.selectedItems.splice(this.step + 1);

      if (this.step === 0) {
        if (this.shifters.includes(index)) {
          for (let index = 1; index < 6; index++) {
            this.selectedItems.push({
              text: "None selection: " + index,
              none: true,
            });
          }
        }
      }
    },
    resetSelection() {
      this.step = 0;
      this.selectedItems = [];
      this.steps.forEach((step) => (step.selection = null));
      this.setSteel();
    },
    setSteel() {
      const steelItem = this.steps[0].items[0];
      this.selectedItems.push(steelItem);
      this.steps[0].selection = steelItem;
    },
  },
};
</script>

<style>
.modal-mask {
  background-color: rgb(255, 255, 255, 80%) !important;
}
#app {
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.design-element {
  position: absolute;
  top: 0;
  left: 5%;
}
.list-enter-active {
  transition: all 1s;
}
.list-leave-active {
  transition: all 0.5s;
}
.list-enter /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-100px);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(150px);
}
.info-box span {
  color: #01679a;
}
.fa {
  color: #01679a;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.my-my-2 {
  margin-top: 0.7rem !important;
  margin-bottom: 0.7rem !important;
}
.items-wrapper {
  padding-top: 1.5rem !important;
  padding-bottom: 1.3rem !important;
}

@media screen and (max-width: 575px) {
  .design-element {
    left: 50%;
    transform: translate(-50%, 0);
  }
  /* width */
  ::-webkit-scrollbar {
    height: 2px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #01679a;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #01679a;
  }
}
</style>
