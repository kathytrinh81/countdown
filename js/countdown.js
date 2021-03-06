
function CountDownTimer(dateTime, id) {
    var end       = new Date(dateTime);
    var _second   = 1000;
    var _minute   = _second * 60;
    var _hour     = _minute * 60;
    var _day      = _hour * 24;
    var timer;
    
    function showRemaining() {
        var now = new Date();
        var distance = end - now;

        if (distance < 0) {   
            clearInterval(timer);
            document.getElementById(id).innerHTML = 'EXPIRED!';
            return;
        }

        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
        
        document.getElementById(id).innerHTML = ' GroundHog&#39;s Day will be in: ' + '<br />' + days + ' days ';
        document.getElementById(id).innerHTML += hours + ' hours ';
        document.getElementById(id).innerHTML += minutes + ' mins ';
        document.getElementById(id).innerHTML += seconds + ' secs';
    };
    
    timer = setInterval(showRemaining, 1000);
}

CountDownTimer('February 02, 2015 12:00:00', 'countdown');

