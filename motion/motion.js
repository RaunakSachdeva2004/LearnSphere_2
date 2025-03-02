document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("motionCanvas");
    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = 500;
    canvas.height = 300;

    // Object properties
    let ball = { x: 50, y: canvas.height / 2, radius: 10, velocity: 2, mass: 1 };
    let obstacle = { x: 350, y: canvas.height / 2 - 20, width: 40, height: 40, velocity: 0, mass: 3 };

    let animation; // Animation frame reference
    let motionActive = false; // Prevent multiple starts

    // Draw Ball
    function drawBall() {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
    }

    // Draw Obstacle (Box)
    function drawObstacle() {
        ctx.fillStyle = "blue";
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    }

    // Clear Canvas
    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    // Collision Detection
    function checkCollision() {
        return ball.x + ball.radius >= obstacle.x &&
               ball.y >= obstacle.y &&
               ball.y <= obstacle.y + obstacle.height;
    }

    // Update Function (Handles Motion & Collision)
    function update() {
        clearCanvas();
        drawObstacle();
        drawBall();

        if (!checkCollision()) {
            ball.x += ball.velocity; // Ball moves forward
        } else {
            let impactForce = ball.velocity * ball.mass / obstacle.mass;
            ball.velocity = 0; // Ball stops
            obstacle.velocity = impactForce * 5; // Move obstacle
        }

        // Move obstacle slightly due to impact
        if (obstacle.velocity > 0) {
            obstacle.x += obstacle.velocity;
            obstacle.velocity *= 0.9; // Gradual stopping effect
        }

        animation = requestAnimationFrame(update);
    }

    // Start Motion
    window.startMotion = function () {
        if (!motionActive) {
            motionActive = true;
            animation = requestAnimationFrame(update);
        }
    };

    // Reset Simulation
    window.resetSimulation = function () {
        cancelAnimationFrame(animation);
        ball.x = 50;
        ball.velocity = 2;
        obstacle.x = 350;
        obstacle.velocity = 0;
        motionActive = false;
        clearCanvas();
        drawObstacle();
        drawBall();
    };

    // Draw Initial State
    drawObstacle();
    drawBall();
});
