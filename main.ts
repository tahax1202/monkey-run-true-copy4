enum ActionKind {
    jumps,
    walks,
    Walking,
    Idle,
    Jumping,
    jump = 8,
    walk
}
namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const Bumper = SpriteKind.create()
    export const Goal = SpriteKind.create()
    export const Flier = SpriteKind.create()
}
/**
 * Walk: ActionKind.walk
 */
/**
 * Detected animations:
 */
/**
 * Walk: ActionKind.walk
 */
// Jump: ActionKind.jump
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Bottom)) {
        jump = 0
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump < max_of_jump) {
        jump += 1
        mySprite.vy = -100
    }
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . . f e e e e e e f . . . . 
        . . . f f e e e e e e f f . . . 
        . . . f e 1 f e 1 f e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . . f f e e e b e e f f . . . 
        . . . . . . e e e e . . . . . . 
        . . . 1 1 5 1 1 1 5 1 1 . . . . 
        . . . 1 e e e 1 e e e 1 . . . . 
        . . . e e e e 5 e e e e . . . . 
        . . . e e e e 8 e e e e . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.skillmap.islandTile7, function (sprite, location) {
    info.changeLifeBy(-10)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    info.changeLifeBy(-3)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    info.changeLifeBy(-3)
})
function level_dreigegener3 () {
    if (true) {
        info.changeLifeBy(-1)
    }
    for (let value2 of tiles.getTilesByType(assets.tile`tile22`)) {
        enemyx = sprites.create(assets.image`enemyx`, SpriteKind.Enemy)
        tiles.placeOnTile(enemyx, value2)
        tiles.setTileAt(value2, assets.tile`transparency16`)
        enemyx.follow(mySprite, 50)
        if (true) {
            animation.runImageAnimation(
            enemyx,
            assets.animation`enemy`,
            700,
            true
            )
        }
    }
}
/**
 * Detected animations:
 */
function level_zweigegner () {
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    if (true) {
        info.changeLifeBy(-1)
    }
    for (let value2 of tiles.getTilesByType(assets.tile`tile22`)) {
        enemyx = sprites.create(assets.image`enemyx`, SpriteKind.Enemy)
        tiles.placeOnTile(enemyx, value2)
        tiles.setTileAt(value2, assets.tile`transparency16`)
        enemyx.follow(mySprite, 50)
        if (true) {
            animation.runImageAnimation(
            enemyx,
            assets.animation`enemy`,
            700,
            true
            )
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile19`, function (sprite, location) {
    info.changeLifeBy(-3)
})
scene.onOverlapTile(SpriteKind.Player, sprites.skillmap.islandTile6, function (sprite, location) {
    info.changeLifeBy(-3)
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(enemyx, effects.spray, 500)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    status.value = 100
})
function aufrufxlevel (num: number) {
    startxlocation2 = tiles.getTilesByType(assets.tile`myTile17`)[0]
    tiles.placeOnTile(mySprite, startxlocation2)
    tiles.setTileAt(startxlocation2, assets.tile`transparency16`)
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    info.changeLifeBy(-1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    info.changeLifeBy(-3)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`dude walk`,
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite, effects.spray, 200)
})
function enemy (num: number) {
    if (true) {
        info.changeLifeBy(-1)
    }
    for (let value2 of tiles.getTilesByType(assets.tile`tile22`)) {
        enemyx = sprites.create(assets.image`enemyx`, SpriteKind.Enemy)
        tiles.placeOnTile(enemyx, value2)
        tiles.setTileAt(value2, assets.tile`transparency16`)
        enemyx.follow(mySprite, 50)
        if (true) {
            animation.runImageAnimation(
            enemyx,
            assets.animation`enemy`,
            700,
            true
            )
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    info.changeLifeBy(-3)
})
function NextLevel () {
    return current_level != levelCount
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`banana`, function (sprite, location) {
    info.changeLifeBy(1)
    current_level += 1
    if (NextLevel()) {
        game.splash("Next level unlocked!")
        setzexylevel(current_level)
    } else {
        game.setGameOverEffect(true, effects.confetti)
        game.gameOver(true)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    info.changeLifeBy(-3)
})
scene.onOverlapTile(SpriteKind.Player, sprites.skillmap.islandTile8, function (sprite, location) {
    info.changeLifeBy(-10)
})
function hasNextLevel () {
    let currentLevel = 0
    return currentLevel != levelCount
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectilex = sprites.create(assets.image`meinBild12`, SpriteKind.Projectile)
    projectilex.setPosition(mySprite.x, mySprite.y)
    spriteutils.moveTo(projectilex, spriteutils.point(enemyx.x, enemyx.y), 1000)
})
function setzexylevel (num: number) {
    if (current_level == 0) {
        info.startCountdown(15)
        tiles.setTilemap(tilemap`level`)
    } else if (current_level == 1) {
        sprites.destroy(enemyx)
        enemy(1)
        info.changeLifeBy(2)
        info.changeCountdownBy(20)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 10))
        tiles.setTilemap(tilemap`level_0`)
        level_zweigegner()
    } else if (current_level == 2) {
        info.changeLifeBy(2)
        sprites.destroy(enemyx)
        enemy(1)
        info.changeCountdownBy(40)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 10))
        tiles.setCurrentTilemap(tilemap`Level3`)
        level_zweigegner()
    } else {
        game.over(true)
    }
    aufrufxlevel(current_level)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusenemyx.value += -20
    sprites.destroy(projectilex)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(enemyx)
})
let coin2: Sprite = null
let projectilex: Sprite = null
let startxlocation2: tiles.Location = null
let statusbar: StatusBarSprite = null
let enemyx: Sprite = null
let statusenemyx: StatusBarSprite = null
let max_of_jump = 0
let jump = 0
let levelCount = 0
let current_level = 0
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`meinBild5`, SpriteKind.Player)
let curent_level = 0
scene.setBackgroundColor(9)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
mySprite.ay = 150
aufrufxlevel(1)
current_level = 0
levelCount = 3
setzexylevel(current_level)
jump = 0
max_of_jump = 2
enemy(1)
info.setLife(5)
statusenemyx = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
statusenemyx.value = 100
statusenemyx.attachToSprite(enemyx)
enemyx.setPosition(134, 88)
enemyx.follow(mySprite, 50)
forever(function () {
	
})
forever(function () {
    for (let Wert of tiles.getTilesByType(assets.tile`myTile7`)) {
        coin2 = sprites.create(assets.image`Dollar0`, SpriteKind.coin)
        tiles.placeOnTile(coin2, Wert)
        tiles.setTileAt(Wert, assets.tile`transparency16`)
    }
})
