setInterval(() => {
    let d = new Date();
    document.getElementById("digital").innerHTML= d;
}, 1000);




setInterval(() => {
    let date = new Date();
 htime = date.getHours();
 mtime = date.getMinutes();
 stime = date.getSeconds();

hrotation = 30*htime + mtime/2;
mrotation = 6*mtime;
srotation = 6*stime;

hour.style.transform = `rotate(${hrotation}deg)`;
min.style.transform = `rotate(${mrotation}deg)`;
sec.style.transform = `rotate(${srotation}deg)`;  

}, 1000);