import { GameObject } from '/static/js/game_object/base.js';
import { Controller } from '/static/js/Controller/base.js';
class GameMap extends GameObject {
    constructor(root) {
        super();
        this.root = root;
        this.$canvas = $('<canvas id="tutorial" width="1280px" height="720px" tabindex=0></canvas>');
        this.ctx = this.$canvas[0].getContext('2d');
        this.root.$kof.append(this.$canvas);
        this.$canvas.focus();

        this.controller = new Controller(this.$canvas);
    }

    start() {

    }

    update() {
        this.render();
    }
    // 渲染
    render() {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
}
export {
    GameMap
}