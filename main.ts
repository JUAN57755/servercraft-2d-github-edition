scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    chest_score()
    tiles.setTileAt(location, sprites.castle.tileGrass1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`lava`, function (sprite, location) {
    game.over(false)
})
function chest_score () {
    info.changeScoreBy(7380759840)
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles4, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, sprites.castle.tileGrass1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles8, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, sprites.castle.tileGrass1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile9, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
    tiles.setCurrentTilemap(tilemap`level`)
    music.play(music.createSoundEffect(WaveShape.Square, 4020, 1044, 255, 255, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
})
let mySprite: Sprite = null
game.showLongText("Welcome to Servercraft Move up down left right to move player", DialogLayout.Full)
mySprite = sprites.create(img`
    ....ffffffff....
    ....fddddddf....
    ....f1fddf1f....
    ....fddddddf....
    ....fddddddf....
    ....fdf22fdf....
    ....fdffffdf....
    8888888888888888
    8888888888888888
    dddd88888888dddd
    dddd88888888dddd
    dddd88888888dddd
    dddd88888888dddd
    dddd88888888dddd
    dddd88888888dddd
    ....222bb222....
    ....222bb222....
    ....222bb222....
    ....222bb222....
    ....222bb222....
    ....222bb222....
    ....222bb222....
    ....222bb222....
    ....222bb222....
    ....ffffffff....
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.swamp.swampTile1)
tiles.setCurrentTilemap(tilemap`level1`)
