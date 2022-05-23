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
    // frames
    this.frames++;
    if (this.frames > 28) {
      this.frames = 0;
    }
    this.position.y += this.velocity.y; // velocidad de salto sin caida
    this.position.x += this.velocity.x; // velocidad de andar
    if (this.position.y + this.heigth + this.velocity.y <= 1020) {
      // si la posicion del jugador sumada con el heigth y la velocidad  es menor a 1020 que es el tamaño del canvas
      this.velocity.y += gravity; // me devuele la velocidad mas la gravedad
    } else {
      this.velocity.y = 0;
    }
    //  velocidad de movimiento con el objeto keys
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
        keys.right.pressed = true; // keys tiene un booleano false , alpresionar reacciona a la condicion de la linea 75
        break;
      case "ArrowLeft":
        console.log("left");
        keys.letf.pressed = true; // keys tiene un booleano false , alpresionar reacciona a la condicion de la linea 77
        break;
      case "ArrowUp":
        console.log("up");
        this.velocity.y -= 20; // la velocidad esta en 0 pero reacciona a linea 69 menos  20 como valor
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
        keys.right.pressed = false; // reacciona a la linea 75 pero como su valor es false queda en 0 por defecto
        break;
      case "ArrowLeft":
        keys.letf.pressed = false; // reacciona a la linea 77 pero como su valor es false queda en 0 por defecto
        break;

      default:
        break;
    }
  }
}
