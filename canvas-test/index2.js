const BACKGROUND = "#101010";
const FOREGROUND = "#50FF50";

console.log(game);

game.height = 800;
game.width = 800;

const ctx = game.getContext("2d");
console.log(ctx);

function clear() {
  ctx.fillStyle = BACKGROUND;
  ctx.fillRect(0, 0, game.height, game.width);
}

function point({ x, y }) {
  const s = 20;
  ctx.fillStyle = FOREGROUND;
  ctx.fillRect(x - s / 2, y - s / 2, s, s);
}

function screen(p) {
  // -1..1 => 0..2 => 0..1 => 0..w/h
  return {
    x: ((p.x + 1) / 2) * game.width,
    y: (1 - (p.y + 1) / 2) * game.height,
  };
}

point(screen({ x: 0, y: 0 }));
point(screen({ x: 0.5, y: 0.5 }));
point(screen({ x: 0.5, y: -0.5 }));
point(screen({ x: -0.5, y: -0.5 }));
point(screen({ x: -0.5, y: 0.5 }));
