class Controller {
    constructor($canvas) {
        this.$canvas = $canvas;
        this.pressed_keys = new Set();
        this.start();
    }

    start() {
        let outer = this;
        //按键加入集合set
        this.$canvas.keydown(function (e) {
            outer.pressed_keys.add(e.key);

        });
        //松手删除
        this.$canvas.keyup(function (e) {
            outer.pressed_keys.delete(e.key);
        })

    }
}

export {
    Controller
}