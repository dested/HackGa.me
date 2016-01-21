import {Level} from './level'


export class Game {
    private level:Level;

    constructor() {
        console.log('hi');

        this.level=new Level();
        this.level.doSomething();
    }
}



new Game();