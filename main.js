// variable declaration
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// console.log(ctx);
const emo = document.getElementById('emo')
const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    h: 40,
    w: 60,
    speed: 3,
    dx: 0,
    dy: 0
}

//  function declaration

function draw() {
    ctx.drawImage(emo, player.x, player.y, player.w, player.h)
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function newPos() {
    player.x += player.dx
    player.y += player.dy
}

function update(params) {
    clear()
    draw()
    newPos()
    detectWall()
    requestAnimationFrame(update)
}

function moveDown() {
    player.dy = player.speed
}
function moveUp() {
    player.dy = -player.speed
}
function moveLeft() {
    player.dx = -player.speed
}
function moveRight() {
    player.dx = player.speed
}

function move(e) {
    switch (e.key) {
        case 'ArrowDown':
            moveDown()
            break;
        case 'ArrowUp':
            moveUp()
            break
        case 'ArrowLeft':
            moveLeft()
            break
        case 'ArrowRight':
            moveRight()
            break;
        default: return
    }
}

function zero() {
    player.dx = 0;
    player.dy = 0
}

function detectWall() {
    // down wall
    if (player.h + player.y > canvas.height) {
        player.y = canvas.height - player.h
    }

    // left wa;;
    if (player.x < 0) {
        player.x = 0
    }

    // right wall
    if (player.w + player.x > canvas.width) {
        player.x = canvas.width - player.w
    }

    // top wall
    if (player.y < 0) {
        player.y = 0
    }


}

// calls
update()
document.addEventListener('keydown', move)
document.addEventListener('keyup', zero)