window.addEventListener('load',function(e) {
    const daysItem = document.querySelector('.days');
    const hoursItem = document.querySelector('.hours');
    const minutesItem = document.querySelector('.minutes');
    const secondsItem = document.querySelector('.seconds');
    function countdown(dateEnd) {
        const timerEnd = new Date(dateEnd).getTime();
        const timer = setInterval(function() {
            console.log('a');
            handleCountdown();//'Fri May 27 2022 11:29:50 GMT+0700 (Giờ Đông Dương)'
        },1000);
        function handleCountdown() {
            let timerNow = new Date().getTime();
            if(timerEnd-timerNow<=0) {
                clearInterval(timer);
                return;
            }
            let timestamp = parseInt((timerEnd- timerNow)/1000);
            let days = parseInt(timestamp/86400);
            timestamp = timestamp%86400;
            let hours = parseInt(timestamp/3600);
            timestamp = timestamp%3600;
            let minutes = parseInt(timestamp/60);
            timestamp = timestamp%60;
            daysItem.textContent = `0${days}`.slice(-2);
            hoursItem.textContent = `0${hours}`.slice(-2);
            minutesItem.textContent = `0${minutes}`.slice(-2);
            secondsItem.textContent = `0${timestamp}`.slice(-2);
        }
    }
    countdown('Fri May 30 2022 11:37:50 GMT+0700 (Giờ Đông Dương)');
})