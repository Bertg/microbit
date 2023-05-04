input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.Y, -1)
})
function Intro () {
    basic.showString("YOU")
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # .
        . . # . #
        # . # # #
        . . # . #
        . . # . #
        `)
    basic.showLeds(`
        . . . # .
        # . # . #
        . . # # #
        . . # . #
        . . # . #
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # # .
        # . # . #
        . . # # .
        . . # . #
        . . # # .
        `)
    basic.showLeds(`
        . . # # .
        . . # . #
        # . # # .
        . . # . #
        . . # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # # .
        . . # . #
        # . # # .
        . . # . #
        . . # # .
        `)
    basic.showLeds(`
        . . # # .
        . . # . #
        . . # # .
        # . # . #
        . . # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # .
        . . # . #
        . . # # #
        # . # . #
        . . # . #
        `)
    basic.showLeds(`
        . . . # .
        . . # . #
        # . # # #
        . . # . #
        . . # . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.showString("DON'T GET HIT")
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        # # # . .
        # # # . .
        # # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
}
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.Y, 1)
})
let enemy: game.LedSprite = null
let player: game.LedSprite = null
Intro()
game.setScore(0)
player = game.createSprite(0, 2)
basic.pause(2000)
basic.forever(function () {
    basic.pause(500)
    if (game.score() == 0) {
        enemy = game.createSprite(5, 2)
    } else {
        enemy = game.createSprite(5, randint(0, 4))
    }
    for (let index = 0; index < 5; index++) {
        basic.pause(300 - Math.min(game.score(), 25) * 10)
        enemy.change(LedSpriteProperty.X, -1)
    }
    if (player.isTouching(enemy)) {
        game.gameOver()
    }
    game.setScore(game.score() + 1)
    enemy.delete()
})
