import Phaser from '../helper/phaser-helper';
import State  from './state.js';

export default class Game extends Phaser.Game {
    constructor() {
        super(800, 600, Phaser.AUTO, 'phaser-root');
        const autoStartState = true;
        this.state.add('BreakoutState', State, autoStartState);
    }
}