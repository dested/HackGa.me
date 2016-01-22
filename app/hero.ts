import {Level} from "./level";

export class Hero {
    private level:Level;
    public x:Number;
    public y:Number;

    constructor(level:Level) {
        this.level = level;
        console.log('hilevel');
    }

    tick():void {
        this.checkCollision();

    }

    render(context:CanvasRenderingContext2D):void{


    }

    private checkCollision():void {

    }
}
