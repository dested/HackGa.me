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

        this.hero.render(context);

    }

    tick():void {
        this.hero.tick();

    }
}
//http://gamedev.stackexchange.com/questions/74387/platformer-collision-detection-order
//http://hamaluik.com/posts/super-mario-world-physics/
//http://s276.photobucket.com/user/jdaster64/media/smw_physics.png.html