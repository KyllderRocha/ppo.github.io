var config={
    width: 988,
    height: 676,
    scene: [telaInicial, estatisticas, menuPrincipal, jogo, criarPartida, entrarPartida,telaEspera],
    physics:{
        default: "arcade",
        arcade: {debug:false}    
    }
    
}

var game = new Phaser.Game(config)