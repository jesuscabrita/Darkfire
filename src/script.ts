import { Map } from "./actors/Map";
import { Ninja } from "./actors/Ninja";
import { FPSViewer } from "./actors/FPSViewer";
import { Actor } from "./actors/Actor";
import { Platform } from "./actors/Platform";

window.onload = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  let actors: Actor[] = [
    new Map({ x: 10, y: 10 }),
    new FPSViewer({ x: 5, y: 50 }),
    new Ninja({ x: 30, y: 0 }),
    new Platform({ x: 30, y: 10 }),
  ];


  let lastFrame = 0;
  const render = (time: number) => {
    let delta = (time - lastFrame) / 1000;
    lastFrame = time;
    actors.forEach((e) => {
      e.update(delta);
    });
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    actors.forEach((e) => {
      ctx.save();
      e.draw(delta, ctx);
      ctx.restore();
    });
    window.requestAnimationFrame(render);
  };

  window.requestAnimationFrame(render);

  document.body.addEventListener("keydown", (e) => {
    // console.log(e.key);
    actors.forEach((actor) => {
      if (actor.keyboard_event_down) {
        actor.keyboard_event_down(e.key);
      }
    });
  });
  document.body.addEventListener("keyup", (e) => {
    // console.log(e.key);
    actors.forEach((actor) => {
      if (actor.keyboard_event_up) {
        actor.keyboard_event_up(e.key);
      }
    });
  });
};
