// 获取左边大图的元素
let b = document.querySelector(".b") as HTMLElement
// 获取右边小图的所有元素
let d = document.getElementsByClassName("d") as HTMLCollection
let imgUrl = 'https://assets.fcbyk.com/frontend-demo/carousel/01/'
b.style.backgroundImage = "url("+imgUrl+"1.jpg)"

let time
let index = 0

// 设置一个重置函数
let a = function(){
    for(let i = 0;i < d.length; i++){
        d[i].className = "d"
    }
}

// 设置一个选中函数
let aa = function(){
    // 先代入重置函数
    a()
    d[index].className = "d dd"
}

// 设置启动轮播图的时间函数
function ts(){
    time = setInterval(function(){
        if(index >= 5){
            index=0
        }
        aa()
        index++
        b.style.backgroundImage = "url('"+imgUrl+[index]+".jpg')"
    },2000);
}

for(let i = 0;i < d.length;i++){
    let e = d[i] as HTMLElement
    // 鼠标移动到当前小图片上时触发
    e.onmousemove = function(){
        b.style.backgroundImage = "url('"+imgUrl+[i + 1]+".jpg')"
        a()
        e.className = "d dd"
        clearInterval(time)
        index = i + 1
        ts()
    }
}

// 执行轮播图
ts()