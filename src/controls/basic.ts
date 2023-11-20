import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { Mouse, Keyboard, Gamepad, or, and } from 'contro'


export type HelloWorld = string | number

const keyboard = new Keyboard()
const gamepad = new Gamepad()


export const mountControl = async (value: HelloWorld) => {
  console.log('sampleFunc:: ', value)


  const controls = {
    jump: or(gamepad.button('A').trigger, keyboard.key('Space').trigger),
    menu: or(gamepad.button('Back').trigger, keyboard.key('Esc').trigger),
    inventory: or(gamepad.button('LB').trigger, keyboard.key('E').trigger),
    map: or(gamepad.button('RB').trigger, keyboard.key('M').trigger),
    statusOverlay: or(gamepad.button('RB'), keyboard.key('Tab')),
  }

  function gameLoop() {

    console.log("looping")
    // Update the UI to reflect the player's input device(s)
    //game.jumpButton.text = controls.jump.label
    //game.menuButton.text = controls.menu.label
    // ...

    // Query the controls and do something
    if (controls.jump.query()) alert("jump")
    if (controls.menu.query()) alert("menu")
    //game.statusOverlay.visible = controls.statusOverlay.query()
    // ...

    requestAnimationFrame(gameLoop)
  }


  gameLoop()


  return value
}
