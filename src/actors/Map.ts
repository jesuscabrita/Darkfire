import { Actor } from "./Actor";
import { Point } from "../types/Point";
//import { converAngleToRad } from "../utils/angleToRad";
//import { checkLimits } from "../utils/checkLimits";
import image from "../assets/map.jpg";

export class Map extends Actor {
  mapSize: number;
  origin: Point;
  color: string;
  maxSpeed: number;
  speed: Point;

  // IMAGES
  image: HTMLImageElement;
  sxParameters: number[];
  timer: number;
  xFrame: number;
  yFrame: number;

  constructor(initialPos: Point, color = "yellow", maxSpeed = 300) {
    super(initialPos);
    this.mapSize = 1000;
    this.origin = { x: initialPos.x, y: initialPos.y };
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.speed = { x: maxSpeed, y: maxSpeed };
    this.image = new Image();
    this.image.src = image;
    this.sxParameters = [2, 4, 6, 8, 10,12,14,16,18,20,22,24];
    this.timer = 0;
    this.xFrame = 0;
    this.yFrame = 5;
  }

  update(delta: number) {
    let newPosX = this.origin.x + this.speed.x * delta;
    if (newPosX <= 1024 - this.mapSize && newPosX >= this.mapSize) {
      this.origin.x = newPosX;
    }

    this.timer += delta;

    if (this.timer >= 0.1) {
      this.xFrame = (this.xFrame +1) % 5;
      this.timer = 0;
    }
    /******************** */
  }
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    let origin = this.origin;

    let direction = 0;
    if (this.speed.x != 0 && this.speed.x < 0) {
      direction = 180;
    }

    ctx.translate(origin.x, origin.y);

    ctx.drawImage(
      this.image,
      38 * this.sxParameters[this.xFrame],
      29 * this.yFrame,
      1380,
      540,
      0,
      0,
      this.mapSize,
      this.mapSize
    );
  }
  keyboard_event_down(key: string) {
    switch (key) {
      case "ArrowRight":
        console.log("right");
        this.speed.x = this.maxSpeed;
        // this.yFrame = 4;
        break;
      case "ArrowLeft":
        console.log("left");
        this.speed.x = -this.maxSpeed;
        // this.yFrame = 4;
        break;
      case "ArrowUp":
        console.log("up");
        // this.speed.y = this.maxSpeed;
        //this.yFrame = 4;
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

        break;
      case "ArrowLeft":
        this.speed.x = 0;
        break;

      default:
        break;
    }
  }
}
