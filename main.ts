controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 . . . . . . . . . 
        . . . . . 3 3 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spaceplane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let projectile: Sprite = null
let spaceplane: Sprite = null
spaceplane = sprites.create(img`
    c c . . . . . . . . . . . . . . 
    c c c . . . . . . . . . . . . . 
    c c c c . . . . . . . . . . . . 
    c c c f . . . . . . . . . . . . 
    c c c f 3 . . . . . . . . . . . 
    c c e f e c . . . . . . . . . . 
    e e e c 2 c e e . . . . . . . . 
    e e 2 c 2 c 2 e e f c f c c c c 
    2 2 2 e 2 e 4 4 2 f 2 f b d d d 
    2 2 2 e 4 e e e . . . . . . . . 
    2 2 2 f e e . . . . . . . . . . 
    2 4 4 f e . . . . . . . . . . . 
    4 2 2 e . . . . . . . . . . . . 
    2 2 e e . . . . . . . . . . . . 
    e e e . . . . . . . . . . . . . 
    e e . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(spaceplane, 200, 200)
spaceplane.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        .........fffff..........
        ........f11111ff........
        .......fb111111bf.......
        .......f1111111dbf......
        ......fd111111dddf......
        ......fd11111ddddf......
        ......fd11dddddddf......
        ......f111dddddddf......
        ......f11fcddddddf......
        .....fb1111bdddbf.......
        .....f1b1bdfcfff........
        .....fbfbffffffff.......
        ......fffffffffff.ff....
        ...........ffffffff.....
        ........f1b1bffffff.....
        ........fbfbffffff......
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(160, randint(5, 115))
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
