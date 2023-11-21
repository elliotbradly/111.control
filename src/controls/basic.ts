import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { Mouse, Keyboard, Gamepad, or, and } from 'contro'

export type HelloWorld = string | number

const keyboard = new Keyboard()
const gamepad = new Gamepad()

export const mountControl = async (value: HelloWorld) => {
  console.log('sampleFunc:: ', value)

  var focIDX = 'foc03'

  const acts = {
    a: async () => { await window['electronAPI'].spinFocusRight(focIDX) },
    b: async () => { await window['electronAPI'].spinFocusLeft(focIDX) },
    x: async () => { await window['electronAPI'].spinFocusRight(focIDX) },
    y: async () => { await window['electronAPI'].spinFocusLeft(focIDX) },
    up: async () => { await window['electronAPI'].spinFocusRight(focIDX) },
    down: async () => { await window['electronAPI'].spinFocusLeft(focIDX) },
    right: async () => { await window['electronAPI'].forwardFocus(focIDX) },
    left: async () => { await window['electronAPI'].backwardFocus(focIDX) },
    back: async () => { await window['electronAPI'].readHexmap(focIDX) },
    lb: async () => { await window['electronAPI'].readHexmap(focIDX) },
    rb: async () => { await window['electronAPI'].readHexmap(focIDX) },
  }

  const controls = {
    a: or(gamepad.button('A').trigger, keyboard.key('z').trigger),
    b: or(gamepad.button('B').trigger, keyboard.key('x').trigger),
    x: or(gamepad.button('x').trigger, keyboard.key('c').trigger),
    y: or(gamepad.button('y').trigger, keyboard.key('v').trigger),
    up: or(gamepad.button('Up').trigger, keyboard.key('Up').trigger),
    down: or(gamepad.button('Down').trigger, keyboard.key('Down').trigger),
    left: or(gamepad.button('Left').trigger, keyboard.key('Left').trigger),
    right: or(gamepad.button('Right').trigger, keyboard.key('Right').trigger),
    back: or(gamepad.button('Back').trigger, keyboard.key('Space').trigger),
    lb: or(gamepad.button('LB').trigger, keyboard.key('a').trigger),
    rb: or(gamepad.button('RB').trigger, keyboard.key('f').trigger),
  }

  function gameLoop() {

    console.log("looping")
    // Update the UI to reflect the player's input device(s)
    //game.jumpButton.text = controls.jump.label
    //game.menuButton.text = controls.menu.label

    for (var key in controls) {
      if (controls[key].query()) {
        acts[key]()
      }
    }
    // ...

    // Query the controls and do something
    //if (controls.jump.query()) alert("jump")
    //if (controls.menu.query()) alert("menu")
    //game.statusOverlay.visible = controls.statusOverlay.query()
    // ...

    requestAnimationFrame(gameLoop)
  }


  gameLoop()


  return value
}
