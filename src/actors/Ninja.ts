import { Actor } from "./Actor";
import { Point } from "../types/Point";
import spriteStandRight from "../assets/spriteStandRight.png";
import image from "../assets/ninja.png";
import spriteRunLeft from "../assets/spriteRunLeft.png";
import spriteRunRight from "../assets/spriteRunRight.png";
import spriteStandLef from "../assets/spriteStandLeft.png";

const gravity = 1;

const keys = {
  right: {
    pressed: false,
  },
  letf: {
    pressed: false,
  },
};

export class Ninja extends Actor {
  position: Point;
  velocity: Point;
  width: number;
  heigth: number;
  canvasW: number;
  canvasH: number;
  image: HTMLImageElement;
  frames: number;
  

  constructor(initialPos: Point) {
    super(initialPos);
    this.position = { x: 30, y: 700 };
    this.velocity = { x: 0, y: 0 };
    this.heigth = 200;
    this.width = 80;
    this.canvasW = innerWidth;
    this.canvasH = innerHeight;
    this.image = new Image();
    this.image.src = spriteStandRight;
    this.frames = 0;
  }
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      this.image,
      177 * this.frames,
      0,
      177,
      400,
      this.position.x,
      this.position.y,
      this.width,
      this.heigth
    );
    // ctx.fillStyle = "white";
    // ctx.fillRect(this.position.x, this.position.y, this.heigth, this.width);
  }

  // add delta to update
  update(delta: number) {
    this.frames++;
    if (this.frames > 28){
      this.frames = 0;
    } 
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    if (this.position.y + this.heigth + this.velocity.y <= 1020) {
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }

    if (keys.right.pressed && this.position.x) {
      this.velocity.x = 5;
    } else if (keys.letf.pressed && this.position.x) {
      this.velocity.x = -5;
    } else {
      this.velocity.x = 0;
    }

  }
  keyboard_event_down(key: string): void {
    switch (key) {
      case "ArrowRight":
        console.log("right");
        keys.right.pressed = true;
        break;
      case "ArrowLeft":
        console.log("left");
        keys.letf.pressed = true;
        break;
      case "ArrowUp":
        console.log("up");
        this.velocity.y -= 20;
        break;
      case "ArrowDown":
        console.log("down");
        break;
      default:
        console.log("not a valid key");
        break;
    }
  }
  keyboard_event_up(key: string) {
    switch (key) {
      case "ArrowRight":
        keys.right.pressed = false;
        break;
      case "ArrowLeft":
        keys.letf.pressed = false;
        break;

      default:
        break;
    }
  }
}
