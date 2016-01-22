//"use strict";

import {Game} from "./game";

import {AssetManager} from './assetManager';

AssetManager.loadAssets().then(()=> {
    new Game();
});

