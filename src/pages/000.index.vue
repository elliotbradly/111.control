<template>
  <div class="">

    <div class="self-center">
      <canvas id="indexCanvas"> </canvas>

    </div>

    <div class="q-pa-md q-gutter-y-md column items-start  items-center fullscreen">


      <q-btn-group spread>
        <q-btn @click="outside(0, $event)" color="amber" size="5px" glossy text-color="black" push label="backward" />
        <q-btn @click="outside(1, $event)" color="yellow" size="5px"  glossy text-color="black" push label="spin cntrclock" />
        <q-btn @click="outside(2, $event)" color="green" size="5px" glossy text-color="black" push label="forward" />
        <q-btn @click="outside(3, $event)" color="yellow" size="5px" glossy text-color="black" push label="spin clockwise" />
        <q-btn @click="outside(4, $event)" color="amber" size="5px" glossy text-color="black" push label="backward" />
      </q-btn-group>

      <div>lovley text</div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import * as ActShd from '../110.shade/00.shade.unit/shade.action'
import * as ActVsg from '../110.shade/01.visage.unit/visage.action'
import * as ActCan from '../110.shade/03.container.unit/container.action'

import { mount, update, unmount } from "../composables/screens"
import { mountControl } from "../controls/basic"

const router = useRouter()
const route = useRoute()
const bus = inject('bus')

const instance = getCurrentInstance();
const SHADE = inject('SHADE')

var intervalID;

var count = 0;
var max = 1111;

const outside = (val, event) => {

  //alert(val)

}

const response = async (val, event) => {

  console.log('rendering...')
  count += 33;

  if ( count < 1111 ) return

  count = 0;

  var lst = []
  var bit = await window['electronAPI'].updateTurn( lst )
  var puff = JSON.parse(bit)
  console.log("puff " + JSON.stringify(puff))


}

onMounted(async () => {
  mount('on')

  window.addEventListener('resize', function (event) {

    setTimeout(() => {

      location.reload();

    }, 33);

  }, true);


  intervalID = setInterval(response, 33 )

  //mountControl('on')
})

onUpdated(async () => { })

onUnmounted(async () => { clearInterval(intervalID) })

</script>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GamePlay'
})
</script>



<style>
body {
  overflow: hidden;
  /* Hide scrollbars */
}
</style>
