const calculator = {

    display: null,

    buttons: null,

    themeToggleBtn: null,

    calculator: null,
    
    launch() {
        this.getElement();
        this.bindEvent();
        this.themeSwitch();
    },

    getElement() {
        this.display = document.querySelector('#display');
        this.buttons = document.querySelectorAll('button');
        this.themeToggleBtn = document.querySelector('.theme-toggler');
        this.calculator = document.querySelector('.calculator');
    },

    bindEvent() {
        this.buttons.forEach((item) => {
            item.onclick = () => {
                if (item.id == 'clear') {
                    this.display.innerText = '';
                } else if (item.id == 'backspace') {
                    let string = this.display.innerText.toString();
                    this.display.innerText = string.substr(0, string.length - 1);
                } else if (this.display.innerText != '' && item.id == 'equal') {
                    this.display.innerText = eval(this.display.innerText);
                } else if (this.display.innerText == '' && item.id == 'equal') {
                    this.display.innerText = 'Empty!';
                    setTimeout(() => (this.display.innerText = ''), 2000);
                } else {
                    this.display.innerText += item.id;
                }
            }
        })
    },

    themeSwitch() {
        // classList属性
        /* toggle()方法
            在元素中切换类名。
            第一个参数为要在元素中移除的类名，并返回 false。
            如果该类名不存在则会在元素中添加类名，并返回 true。*/
        let isDark = true;
        this.themeToggleBtn.onclick = () => {
            this.calculator.classList.toggle('day');
            this.themeToggleBtn.classList.toggle('active');
            isDark = !isDark;
        }
    }
}

window.onload = () => {
    calculator.launch()
}
