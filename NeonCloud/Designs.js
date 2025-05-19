let heartsAndStars = [];
let emojis = ["💗", "✨"];

function setup() {
    let canvas = createCanvas(windowWidth, document.body.scrollHeight); // Full page height
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    canvas.style('pointer-events', 'none');
    clear(); 

    for (let i = 0; i < 50; i++) {
        heartsAndStars.push(new FallingEmoji());
    }
}

function windowResized() {
    resizeCanvas(windowWidth, document.body.scrollHeight);
}

function draw() {
    clear();
    for (let emoji of heartsAndStars) {
        emoji.move();
        emoji.display();
    }
}

class FallingEmoji {
    constructor() {
        this.x = random(width);
        this.y = random(-100, height);
        this.size = random(24, 36); 
        this.speed = random(1, 3); 
        this.emoji = random(emojis); 
    }

    move() {
        this.y += this.speed;
        if (this.y > document.body.scrollHeight) {
            this.y = random(-100, 0);
            this.x = random(width);
        }
    }

    display() {
        textSize(this.size);
        text(this.emoji, this.x, this.y);
    }
}
