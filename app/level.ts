import {Hero} from "./hero";
export class Level {
    private hero:Hero;

    constructor() {
        console.log('hilevel');
    }

    setHero(hero:Hero, x:Number, y:Number):void {
        this.hero = hero;
    }

    render(context:CanvasRenderingContext2D):void {
        context.fillRect(0, 0, 100, 100);
    }

    tick():void {

    }
}
//http://gamedev.stackexchange.com/questions/74387/platformer-collision-detection-order
//http://hamaluik.com/posts/super-mario-world-physics/
//http://s276.photobucket.com/user/jdaster64/media/smw_physics.png.html