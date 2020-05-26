controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Big_sprite.z = -1
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Big_sprite.z = 1
})
let Big_sprite: Sprite = null
scene.setBackgroundColor(6)
Big_sprite = sprites.create(image.create(160, 120), SpriteKind.Player)
Big_sprite.image.fill(15)
Big_sprite.z = 0
let S1 = sprites.create(image.create(60, 60), SpriteKind.Player)
S1.z = 0
S1.image.fill(2)
S1.setPosition(100, 40)
let S2 = sprites.create(image.create(60, 60), SpriteKind.Player)
S2.image.fill(4)
S2.z = 0
S2.setPosition(30, 30)
