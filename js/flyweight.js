/* 
    享元模式
    对数据、方法共享分离，它将数据方法分成内部数据、内部方法和外部数据、外部方法。

*/

let FlyWeight = function () {
    //已创建的元素
    let created = [];
    //创建一个新闻包装容器
    function create() {
        let dom = document.createElement('div');
        // 将容器插入新闻列表中
        document.getElementById('container').appendChild(dom);
        // 缓存新创建的元素
        created.push(dom);
        // 返回创建的新元素
        return dom;
    }

    return {
        // 获取创建新闻元素方法
        getDiv: function (len) {
            // 如果已创建的元素小于当前页元素总个数，则创建
            if (created.length < len) {
                return create();
            } else {
                // 获取第一个元素，并插入最后面
                let div = created.shift();
                created.push(div);
                return div;
            }
        }
    }
}();

window.onload = function () {
    let article = [
        "这是新闻1",
        "这是新闻2",
        "这是新闻3",
        "这是新闻4",
        "这是新闻5",
        "这是新闻6",
        "这是新闻7",
    ];
    let pager = 0, num = 3, len = article.length;

    for (let i = 0; i < num; i++) {
        if (article[i]) {
            //通过享元类获取创建的元素并写入新闻内容
            FlyWeight.getDiv(num).innerHTML = article[i];
        }
    }

    document.getElementById('next_page').onclick = function () {
        // 如果新闻内容不足5条则返回
        if (article.length < num) return;
        let n = ++pager * num % len, //获取当前页的第一条新闻索引
            j = 0; //循环变量
        // 插入5条新闻
        // console.log(article , n);
        for (; j < num; j++) {
            // 如果存在第 n + j条则插入
            if (article[n + j]) {
                FlyWeight.getDiv(num).innerHTML = article[n + j];
                // 否则插入起始位置第 n+j - len条
            } else if (article[n + j - len]) {
                FlyWeight.getDiv(num).innerHTML = article[n + j - len];
                // 如果都不存在则插入空字符串
            } else {
                FlyWeight.getDiv(num).innerHTML = "";
            }
        }

    }
}

let GFlyWeight = {
    moveX : function(x){
        this.x = x;
    },
    moveY : function(y){
        this.y = y;
    }
};

let Player = function(x , y ,c){
    this.x = x;
    this.y = y;
    this.color = c;
};

Player.prototype = GFlyWeight;
Player.prototype.changeC = function(c){
    this.color = c;
}

let Spirit = function(x , y ,r){
    this.x = x;
    this.y = y;
    this.r = r;
};

Spirit.prototype = GFlyWeight;
Spirit.prototype.changeR = function(r){
    this.r = r;
}

let player1 = new Player(5 , 6 , 'red');
console.log(player1);

player1.moveX(6);
player1.moveY(8);
player1.changeC('pink');
console.log(player1);