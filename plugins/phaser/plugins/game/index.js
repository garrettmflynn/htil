const phaserGame = {
    operator: (config) => {
        let game = new Phaser.Game(config);
        console.log('game', game)
        return game
    }
}

export default phaserGame