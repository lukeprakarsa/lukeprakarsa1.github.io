let timer = null;
let countdownNumber = 10;

let changeState = function (state) {
    document.body.className = 'body-state' + state;
    clearInterval(timer);
    countdownNumber = 10;
    if (state == 1) {
        document.getElementById('countdown').innerHTML = countdownNumber;       
    } else if (state == 2) {
        timer = setInterval(function () {
            document.getElementById('countdown').innerHTML = countdownNumber;
            countdownNumber = countdownNumber - 1;
            console.log('countdownNumber='+countdownNumber);

            if (countdownNumber == 5) {
                document.getElementById('nervous').className = 'nervous show';
            } else {
                document.getElementById('nervous').className = 'nervous';
            }

            if (countdownNumber == 3) {
                document.getElementById('cant-wait').className = 'cant-wait show';
            } else {
                document.getElementById('cant-wait').className = 'cant-wait';
            }
            
            if (countdownNumber < 0) {
                changeState(3);
            }
        }, 500);
     
    } else if (state == 3) {
        let success = setTimeout(function () {
            let randomNumber = Math.round(Math.random()*10);
            if (randomNumber > 4) {
                changeState(4);
            } else {
                changeState(5);
            }
        }, 2000);
    }
}

