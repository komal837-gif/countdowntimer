let cl = console.log;

const setZero = (num) =>{
    return (num < 10)? '0' + num : num;
}

const countDownTimer = ()=>{
    const countDown = document.getElementById("countDown");
    let currentTime = Date.now()
    cl(currentTime);
    let targetDate = new Date("Dec 31, 2025 23:59:59").getTime();
    cl(targetDate);

    let diff = targetDate - currentTime;
    cl(diff);
    let days= Math.floor((diff/(1000 * 60 * 60 * 24)));
    cl(days);
    let hr= Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    cl(hr);
    let min= Math.floor((diff % (1000 * 60 * 60 )) / (1000 * 60));
    cl(min);
    let sec= Math.floor((diff % (1000 * 60)) / 1000);
    cl(sec);
    
    countDown.innerHTML = `${setZero(days)} Days ${setZero(hr)} Hours ${setZero(min)} Min ${setZero(sec)} sec`
    if(diff < 0){
        clearInterval()
        countDown.innerHTML ="Happy New Year 2026🎉 - Cheers to New Beginnings!😊"
    }
}
setInterval(countDownTimer,1000);

countDownTimer();