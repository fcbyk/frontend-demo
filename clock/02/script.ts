const deg = 6;
const hr = document.querySelector('#hour') as HTMLElement;
const mn = document.querySelector('#minute') as HTMLElement;
const sc = document.querySelector('#second') as HTMLElement;

setInterval(()=>{
    let day = new Date();
    let hh = day.getHours() * 30; //当前Hour
    let mm = day.getMinutes() * deg; //当前Minute
    let ss = day.getSeconds() * deg; //当前Second

    // transform属性没怎么学，没看明白
    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
});