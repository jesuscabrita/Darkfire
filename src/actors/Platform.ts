import { Actor } from "./Actor";
import { Point } from "../types/Point";
import images from "../assets/fire.png";

export class Platform extends Actor {
  position: Point;
  height: number;
  width: number;
  images: HTMLImageElement;
  frames: number;

  constructor(inicialPos: Point) {
    super(inicialPos);
    this.position = {
      x: 300,
      y: 600,
    };
    this.height = 380;
    this.width = 500;
    this.images = new Image();
    this.images.src = images;
    this.frames = 0;
  }
  update(delta: number) {
    this.frames++;
    if (this.frames > 2) {
      this.frames = 0;
    }
  }

  draw(delta: number, ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      this.images,
      1 * this.frames,
      -35,
      44,
      98,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
