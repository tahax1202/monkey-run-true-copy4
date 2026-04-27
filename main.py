@namespace
class SpriteKind:
    coin = SpriteKind.create()

def on_hit_wall(sprite, location):
    global first_touch
    if sprite.is_hitting_tile(CollisionDirection.BOTTOM) and sprite.tile_kind_at(TileDirection.BOTTOM,
        assets.tile("""
            transparency16
            """)):
        first_touch = False
scene.on_hit_wall(SpriteKind.player, on_hit_wall)

def on_a_pressed():
    if mySprite.is_hitting_tile(CollisionDirection.BOTTOM):
        mySprite.vy += -100
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap(sprite2, otherSprite):
    info.change_score_by(1)
    sprites.destroy(otherSprite, effects.spray, 200)
sprites.on_overlap(SpriteKind.player, SpriteKind.coin, on_on_overlap)

def on_overlap_tile(sprite3, location2):
    info.change_life_by(-1)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_water,
    on_overlap_tile)

def on_overlap_tile2(sprite4, location3):
    if info.score() >= 13:
        game.game_over(True)
    else:
        game.show_long_text("NICHT GENUG CASH!", DialogLayout.BOTTOM)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile2
        """),
    on_overlap_tile2)

first_touch = False
coin2: Sprite = None
mySprite: Sprite = None
mySprite = sprites.create(assets.image("""
    meinBild
    """), SpriteKind.player)
controller.move_sprite(mySprite, 100, 0)
scene.set_background_color(13)
tiles.set_current_tilemap(tilemap("""
    level I
    """))
scene.camera_follow_sprite(mySprite)
mySprite.ay = 150
animation.run_image_animation(mySprite,
    [img("""
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        """)],
    500,
    False)
for Wert in tiles.get_tiles_by_type(assets.tile("""
    myTile1
    """)):
    coin2 = sprites.create(assets.image("""
        Dollar0
        """), SpriteKind.coin)
    tiles.place_on_tile(coin2, Wert)
    tiles.set_tile_at(Wert, assets.tile("""
        transparency16
        """))
    info.set_life(1)