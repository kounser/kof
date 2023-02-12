let Game_Object = [];
class GameObject {
    constructor() {
        Game_Object.push(this);

        this.timedelta = 0;
        // 当前对象是否被执行过
        this.has_call_start = false;
    }

    start() {// 初始执行一次

    }

    update() {// 每一帧执行一次（除了第一帧以外）

    }

    destory() {// 删除当前对象
        for (let i in Game_Object) {
            if (Game_Object[i] == this) {
                Game_Object.splice(i, 1);
                break;
            }
        }
    }
}

var last_timestamp;

var Game_Object_Frame = (timestamp) => {
    for (let obj of Game_Object) {
        if (!obj.has_call_start) {
            obj.has_call_start = true;
        }
        else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update()
        }
    }
    last_timestamp = timestamp;
    requestAnimationFrame(Game_Object_Frame);

}

requestAnimationFrame(Game_Object_Frame);

export {
    GameObject
}
