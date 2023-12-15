import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'

import * as ActVsg from '../110.shade/01.visage.unit/visage.action'
import * as ActCan from '../110.shade/03.container.unit/container.action'
import * as ActTxt from '../110.shade/05.text.unit/text.action'
import * as ActGph from '../110.shade/04.graphic.unit/graphic.action'
import * as ActSpr from '../110.shade/06.sprite.unit/sprite.action'
import * as ActHex from '../110.shade/07.hexagon.unit/hexagon.action'
import * as ActFcg from '../110.shade/08.focigon.unit/focigon.action'
import * as ActCam from '../110.shade/13.camera.unit/camera.action'


export type HelloWorld = string | number

export const render = async (value: HelloWorld) => {

  var bit = await window['electronAPI'].listFocus('avas')
  var toot = JSON.parse(bit)
  var list = toot.focBit.lst

  list.forEach(async (a, b) => {

    bit = await SHADE['hunt'](ActCan.READ_CONTAINER, { idx: "can00", src: 'vsg00' })
   var container = bit.canBit.dat.bit

    var focus = a;
    console.log("po " + a.idx)
    bit = await SHADE['hunt'](ActFcg.WRITE_FOCIGON, { idx: focus.idx, dat: { src: 'gph01', clr: 0x0FF000, sze: 111, fce: focus.face, bit: focus } })
    var graphic = bit.fcgBit.dat.bit


    bit = await SHADE['hunt'](ActCam.WRITE_CAMERA, { idx: 'cam00', src: 'vsg00', dat: { x: focus.x, y: focus.y, can: container, bit: graphic } })


  })

}


export const mount = async (value: HelloWorld) => {
  console.log('sampleFunc:: ', value)

  const instance = getCurrentInstance();
  const SHADE = inject('SHADE')

  var bit = await SHADE['hunt'](ActVsg.MOUNT_VISAGE, { idx: "vsg00", src: "indexCanvas", dat: {} });
  instance?.proxy?.$forceUpdate();

  return value
}

export const update = async (value: HelloWorld) => {

  console.log('sampleFunc:: ', value)

  const instance = getCurrentInstance();
  const SHADE = inject('SHADE')

  var bit = await SHADE['hunt'](ActVsg.REMOVE_VISAGE, { idx: "vsg00" })
  bit = await SHADE['hunt'](ActVsg.MOUNT_VISAGE, { idx: "vsg00", src: "indexCanvas", dat: {} })

  bit = await SHADE['hunt'](ActVsg.READ_VISAGE, { idx: "vsg00" })

  bit = await SHADE['hunt'](ActCan.WRITE_CONTAINER, { idx: "can00", src: 'vsg00' })
  var container = bit.canBit.dat.bit

  bit = await SHADE['hunt'](ActCan.SURFACE_CONTAINER, { idx: 'fce-can-00', src: "vsg00" });

  bit = await SHADE['hunt'](ActCan.ADD_CONTAINER, { idx: "fce-can-00", dat: { bit: container } })

  bit = await SHADE['hunt'](ActGph.WRITE_GRAPHIC, { idx: 'gph00', dat: {} })
  bit = await SHADE['hunt'](ActCan.ADD_CONTAINER, { idx: "can00", dat: { bit: bit.gphBit.dat.bit } })


  var bit = await window['electronAPI'].readHexmap('map00')
  var puff = JSON.parse(bit)

  var map = puff.mapBit.dat.grid
  bit = await SHADE['hunt'](ActHex.WRITE_HEXAGON, { idx: 'hex00', dat: { src: 'gph00', frm: 'hexmap', sze: 111, bit: map } })

  return value
}

export const unmount = async (value: HelloWorld) => {
  console.log('sampleFunc:: ', value)

  const instance = getCurrentInstance();
  const SHADE = inject('SHADE')

  console.log("unmounted..")
  var bit = await SHADE['hunt'](ActVsg.REMOVE_VISAGE, { idx: "vsg00" })

  return value
}

export type Shade<Type> = {
  hunt: Function;
} & Type

