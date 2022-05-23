import { Actor } from "./Actor";
import { Point } from "../types/Point";
import images from "../assets/plataforma.png";



export class Platform extends Actor {
  position: Point;
  height: number;
  width: number;
  images: HTMLImageElement;

  constructor(inicialPos: Point) {
    super(inicialPos);
    this.position = {
      x: 200,
      y: 500,
    };
    this.height = 200;
    this.width = 20;
    this.images = new Image();
    this.images.src = images;
  }
  update(delta: number) {
      
}

 
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, this.height, this.width);
  }
}
