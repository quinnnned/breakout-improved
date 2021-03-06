import TextCounter from './base/text-counter';
import {NextLevel, BrickKilled} from '../core/events';

export default class ScoreCounter extends TextCounter{
    
    static Create(state){
        state.score = new ScoreCounter(state.game, 32, 550);
    }
    
    constructor(game, x, y) {
        super(game, x, y, 'score: ', 0, {
            font: "20px Arial",
            fill: "#ffffff",
            align: "left"
        });
        
        NextLevel.subscribe( () => { this.increment(1000); });
        BrickKilled.subscribe( () => { this.increment(10); });
    }
}