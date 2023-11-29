$(document).ready(function () {

    updateCountdown();
    setInterval(updateCountdown, 1000);

});

function updateCountdown() {
    let countdownData = countdown(new Date('2024-01-01'));
    let $countdown = $('.countdown-wrapper');

    if (countdownData === false) {
        $countdown.remove();
        return;
    }

    for (const i in countdownData) {

        countdownData[i] = String(countdownData[i]).padStart(2, "0")
    }

    let html = `
            <td>${countdownData.days || "00"}</td>
            <td>${countdownData.hours || "00"}</td>
            <td>${countdownData.minutes || "00"}</td>
            <td>${countdownData.seconds || "00"}</td>`;

    $countdown.find('table .countdown').html(html);
}

function countdown(targetDate) {

    let diff = (targetDate - new Date()) / 1000;

    if (diff < 0) {
        return false;
    }

    return {
        'days': Math.floor(diff / 86400),
        'hours': Math.floor(diff / 3600 % 24),
        'minutes': Math.floor(diff / 60 % 60),
        'seconds': Math.floor(diff % 60),
    }
}