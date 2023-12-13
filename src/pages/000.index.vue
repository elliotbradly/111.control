<template>
  <div class="fullscreen absolute-center">

    <div class="self-center">
      <canvas id="indexCanvas" style="position:relative; bottom:40px; right:75px"> </canvas>
    </div>

    <div class="q-pa-md q-gutter-y-md column items-start">

      <q-btn-group spread>
        <q-btn @click="outside(0, $event)" color="amber" glossy text-color="black" push label="backward" />
        <q-btn @click="outside(1, $event)" color="yellow" glossy text-color="black" push label="spin cntrclock" />
        <q-btn @click="outside(2, $event)" color="green" glossy text-color="black" push label="forward" />
        <q-btn @click="outside(3, $event)" color="yellow" glossy text-color="black" push label="spin clockwise" />
        <q-btn @click="outside(4, $event)" color="amber" glossy text-color="black" push label="backward" />
      </q-btn-group>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import * as ActShd from '../110.shade/00.shade.unit/shade.action'
import * as ActVsg from '../110.shade/01.visage.unit/visage.action'
import * as ActCan from '../110.shade/03.container.unit/container.action'

import { mount, update, unmount, render } from "../composables/screens"
import { mountControl } from "../controls/basic"

const router = useRouter()
const route = useRoute()
const bus = inject('bus')

const instance = getCurrentInstance();
const SHADE = inject('SHADE')

const outside = (val, event)=>{



  alert(val)

}


bus.on('RENDER', (arg1, arg2, arg3) => {
  render()
})

onMounted(async () => {
  mount('on')
  mountControl('on')
})

onUpdated(async () => {
  update('on')
  render()
})

onUnmounted(async () => { })

</script>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GamePlay'
})
</script>
