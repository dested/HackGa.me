//"use strict";

import {Level} from "./level";
import {AssetManager} from "./assetManager";

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
        context.drawImage(AssetManager.getAsset('hero'),this.x,this.y);
    }

    private checkCollision():void {

    }
}
