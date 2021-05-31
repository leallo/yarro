input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 100; index++) {
        sprite.move(4)
        basic.pause(100)
        sprite.turn(Direction.Right, 90)
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(0, 0)
