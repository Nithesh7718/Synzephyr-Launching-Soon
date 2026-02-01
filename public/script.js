// Countdown target: March 1, 2026 at 00:00 local time
const launchDate = new Date("Mar 1, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = launchDate - now;

    if (diff <= 0) {
        document.getElementById("timer").innerHTML = "Launched!";
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${d}d : ${h}h : ${m}m : ${s}s`;
}, 1000);
