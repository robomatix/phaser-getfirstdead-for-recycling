var menuState = {

	create: function() { 
		// Name of the game with tween
		var nameLabel = game.add.text(game.world.centerX, 100, 'Phaser, getFirstDead for recycling', { font: '33px Arial', fill: '#000000' });
		nameLabel.anchor.setTo(0.5, 0.5);
		nameLabel.scale.setTo(0, 0);
		game.add.tween(nameLabel.scale).delay(200).to({x: 1, y: 1}, 1000)
			.easing(Phaser.Easing.Bounce.Out).start();


		// How to start the game, with tween
		var startLabelUp = game.add.text(game.world.centerX, game.world.height-100, 'Press the up arrow key to start the demo with recycling', { font: '18px Arial', fill: '#000000' });
        startLabelUp.anchor.setTo(0.5, 0.5);
		game.add.tween(startLabelUp).to({alpha: 0}, 500).to({alpha: 1}, 1000).loop().start();

        var startLabelDown = game.add.text(game.world.centerX, game.world.height-150, 'Press the down key for the demo without recycling', { font: '18px Arial', fill: '#000000' });
        startLabelDown.anchor.setTo(0.5, 0.5);
        game.add.tween(startLabelDown).to({alpha: 0}, 500).to({alpha: 1}, 1000).loop().start();

		// Start the according to the key pressed
		var downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        downKey.onDown.addOnce(this.startplayWithOutRecycling, this);
        var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        upKey.onDown.addOnce(this.startplayWithRecycling, this);
	},

	startplayWithOutRecycling: function() {
		game.state.start('playWithOutRecycling');
	},

    startplayWithRecycling: function() {
        game.state.start('playWithRecycling');
    }
};