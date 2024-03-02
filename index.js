const first_name = document.getElementById("first_name")
const first_name_text = first_name.textContent.trim();

const first_name_letters = first_name_text.split("");

first_name.textContent = "";
first_name_letters.forEach( (letter, i) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i * 0.1}s`;
    first_name.appendChild(span);
} )

const second_name = document.getElementById("second_name")
const second_name_text = second_name.textContent.trim();

const second_name_letters = second_name_text.split("");

second_name.textContent = "";
second_name_letters.forEach( (letter, i) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i * 0.1}s`;
    second_name.appendChild(span);
} )

const flip_card = document.getElementById("flip-card");
const flip_card_inner = document.getElementById("flip-card-inner");
var flipped = false

setInterval(() => {
    flip_card_inner.style.transform = flipped ? "rotateY(0deg)" : "rotateY(180deg)"
    flipped = !flipped
}, 10000)

const remaining_days = document.getElementById("remaining_days")
const remaining_time = document.getElementById("remaining_time")

setInterval(() => {
    time = calcRemainingTime('2024-08-24 10:00:00')
    remaining_days.textContent = `Faltam ${time.days} dias`
    remaining_time.textContent = `${formatWithZeros(time.hours)}:${formatWithZeros(time.minutes)}:${formatWithZeros(time.seconds)}`
}, 1000)

function calcRemainingTime(targetDateString) {
    const now = new Date();
    const targetDate = new Date(targetDateString);
    const difference = targetDate.getTime() - now.getTime();

    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    hours = hours % 24;
    minutes = minutes % 60;
    seconds = seconds % 60;

    return {
        days, hours, minutes, seconds
    }
}

function formatWithZeros(num) {
    return num.toString().padStart(2, '0');
}