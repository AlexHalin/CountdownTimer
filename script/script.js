class Countdown {
    gettingDate() {
        const currentDate = new Date();
        const nextYearAlways = currentDate.getFullYear() + 1
        const yoursDate = '1 jan ' + nextYearAlways;
        const desiredDate = new Date(yoursDate);

        this.countDown(desiredDate, currentDate)
    }


    countDown(desiredDate, currentDate) {
        const totalSeconds = (desiredDate - currentDate) / 1000;

        const days = Math.floor(totalSeconds/ 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const minutes = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;

        this.showCount (days, hours, minutes, seconds)
    }


    showCount (days, hours, minutes, seconds) {
        const daysEl = document.querySelector("#day")
        const hourEl = document.querySelector("#hour")
        const minEl = document.querySelector("#min")
        const secEl = document.querySelector("#sec")

        daysEl.innerHTML = days;
        hourEl.innerHTML = this.formatTime(hours);
        minEl.innerHTML = this.formatTime(minutes);
        secEl.innerHTML = this.formatTime(seconds);
    }

    formatTime(time) {
        return time < 10 ? (`0${time}`) : time;
    }

    interval() {
        setInterval(() => {
            this.gettingDate()
        }, 1000);

    }
}

let countdown = new Countdown()
countdown.interval()

