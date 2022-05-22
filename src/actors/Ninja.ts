import { Actor } from "./Actor";
import { Point } from "../types/Point";
//import { converAngleToRad } from "../utils/angleToRad";
//import { checkLimits } from "../utils/checkLimits";
import image from "../assets/ninja.png";

export class Ninja extends Actor {
  ninjaSize: number;
  origin: Point;
  color: string;
  maxSpeed: number;
  speed: Point;
  angle: number;

  // IMAGES
  image: HTMLImageElement;
  sxParameters: number[];
  syParameters: number[];
  timer: number;
  xFrame: number;
  yFrame: number;

  constructor(initialPos: Point, color = "yellow", maxSpeed = 300) {
    super(initialPos);
    this.ninjaSize = 180;
    this.origin = { x: initialPos.x, y: initialPos.y };
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.speed = { x: maxSpeed, y: maxSpeed };
    this.image = new Image();
    this.image.src = image;
    this.sxParameters = [1.8, 2.2, 2.9, 3.8];
    this.syParameters = [3.4, 4.6, 4.2, 1.4];
    this.timer = 0;
    this.xFrame = 0;
    this.yFrame = 5;
    this.angle = 0;
  }

  // add delta to update
  update(delta: number) {
    let newPosX = this.origin.x + this.speed.x * delta;

    if (newPosX <= 1024 - this.ninjaSize && newPosX >= this.ninjaSize) {
      this.origin.x = newPosX;
    }
    this.timer += delta;

    if (this.timer >= 0.1) {
      this.xFrame = (this.xFrame + 1) % 3;
      this.timer = 0;
    }
    /******************** */
  }

  //add delta to draw
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    let origin = this.origin;

    let direction = 0;
    if (this.speed.x != 0 && this.speed.x < 0) {
      direction = 180;
    }

    ctx.translate(origin.x, origin.y);

    ctx.drawImage(
      this.image,
      175.4 * this.sxParameters[this.xFrame],
      0 * this.yFrame,
      62.5,
      65,
      0,
      0,
      this.ninjaSize,
      this.ninjaSize
    );

    // ctx.drawImage(
    //   this.image,
    //   172.5 * this.syParameters[this.xFrame],
    //   0 * this.yFrame,
    //   62.5,
    //   65,
    //   0,
    //   0,
    //   this.pacmanSize,
    //   this.pacmanSize
    // );
  }

  keyboard_event_down(key: string) {
    switch (key) {
      case "ArrowRight":
        console.log("right");
        this.speed.x = this.maxSpeed;
        this.yFrame = 4;
        break;
      case "ArrowLeft":
        console.log("left");
        this.speed.x = -this.maxSpeed;
        this.yFrame = 4;
        break;
      case "ArrowUp":
        console.log("up");
        this.speed.y = this.maxSpeed;
        this.yFrame = 4;
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
        this.speed.x = 0;
        this.yFrame = 1.8;
        break;
      case "ArrowLeft":
        this.speed.x = 0;
        break;

      default:
        break;
    }
  }
}
