import {Hero} from "./hero";
import {Level} from "./level";
export class Game {
    private level:Level;
    private hero:Hero;
    private canvas:HTMLCanvasElement;
    private context:CanvasRenderingContext2D;

    constructor() {
        console.log('hi');

        this.level = new Level();
        this.hero = new Hero();
        this.level.setHero(this.hero, 5, 5);


        this.canvas = <HTMLCanvasElement>document.getElementById('game');
        this.context = this.canvas.getContext('2d');

        window.addEventListener('resize', this.resizeCanvas, false);

        this.tick();
        this.renderFrame();
        this.resizeCanvas();
    }

    private tick():void {
        this.level.tick();
    }

    private render():void {
        this.level.render(this.context);
    }




    private resizeCanvas():void{
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    private renderFrame() {
        window.requestAnimationFrame(()=> {
            this.canvas.width=this.canvas.width;
            this.render();
            this.renderFrame()
        });
    }
}