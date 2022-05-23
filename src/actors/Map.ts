import { Actor } from "./Actor";
import { Point } from "../types/Point";
import image from "../assets/map.jpg";

export class Map extends Actor {
  mapSize: number;
  origin: Point;
  color: string;
  maxSpeed: number;
  speed: Point;
  image: HTMLImageElement;
  frames: number;

  constructor(initialPos: Point, color = "yellow", maxSpeed = 300) {
    super(initialPos);
    this.mapSize = 1000;
    this.origin = { x: initialPos.x, y: initialPos.y };
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.speed = { x: maxSpeed, y: maxSpeed };
    this.image = new Image();
    this.image.src = image;
    this.frames = 0;
  }

  update(delta: number) {
    this.frames++;
    if (this.frames > 85) {
      this.frames = 0;
    }
  }
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    let origin = this.origin;
    ctx.translate(origin.x, origin.y);

    ctx.drawImage(
      this.image,
      38,
      29,
      1380,
      661,
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
