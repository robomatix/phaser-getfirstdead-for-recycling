/**
 * Created by robomatix on 11/10/14.
 */
var playWithRecyclingState = {

    create: function () {

        /* --- Display the labels on the screen --- */

        // Display the type of test
        this.typeLabel = game.add.text(20, 20, 'Recycling',
            { font: '20px Arial', fill: '#ffffff' });
        this.iterationLabel = game.add.text(20, 40, 'Iterations : 0',
            { font: '20px Arial', fill: '#ffffff' });
        this.squaresGeneratedLabel = game.add.text(20, 60, 'Squares generated : 0',
            { font: '20px Arial', fill: '#ffffff' });


        // Create the square group
        this.squares = game.add.group();
        this.squares.enableBody = true;
       this.squares.createMultiple(50, 'blackSquare');

        /* add a timer to generate black squares
         ******************************************************/
        this.squaresGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 1, this.generateSquares, this);
        this.squaresGenerator.timer.start();

        this.iteration = 0;
        this.squaresGenerated = 0;

    },
    update: function () {

    },
    generateSquares: function () {
        for (var i = 0; i < 10; i++) {

            // Some variables
            var x = i * 50;
            var velocityY = this.game.rnd.integerInRange(400, 600);
            // Retrieve a square from the squares group
            var square;
            square = this.squares.getFirstDead();
            if (!square) {
                return;
            }

            this.squaresGenerated++;


            // Init the square
            square.anchor.setTo(0, 0.5);
            square.reset(x, 0);

            square.body.velocity.y = velocityY;

            // Kill the square when out of the world
            square.checkWorldBounds = true;
            square.outOfBoundsKill = true;
        }
        this.iteration++;

        this.iterationLabel.setText('Iterations : ' + this.iteration.toString());
        this.squaresGeneratedLabel.setText('Squares generated : ' + this.squaresGenerated.toString());
    }

};
