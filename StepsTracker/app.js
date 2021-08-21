const steps = document.querySelector("#steps");
const burn = document.querySelector("#burn");
const stepButton = document.querySelector(".button button");
const leftButton = document.querySelector(".calendar button:first-child");
const rightButton = document.querySelector(".calendar button:last-child");

const progress = document.querySelector(".bottom img");
const week = document.querySelector(".week-summary h2:first-child");
let dateVal = new Date();

const refreshDate = () => {
    let day = "";
    switch (dateVal.getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursady";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            ;
    }
    week.textContent = day;
}


let stepsNum = [0, 0, 0, 0, 0, 0, 0];
let burnNum = [0, 0, 0, 0, 0, 0, 0];
steps.textContent = stepsNum[dateVal.getDay()];
burn.textContent = burnNum[dateVal.getDay()];

stepButton.addEventListener("click", () => {
    stepsNum[dateVal.getDay()]++;
    burnNum[dateVal.getDay()] += 4;
    steps.textContent = stepsNum[dateVal.getDay()];
    burn.textContent = burnNum[dateVal.getDay()];
    if (stepsNum[dateVal.getDay()] >= 10 && stepsNum[dateVal.getDay()] < 20) {
        progress.src = "progress-overall-25.png"
    } else if (stepsNum[dateVal.getDay()] >= 20 && stepsNum[dateVal.getDay()] < 30) {
        progress.src = "progress-overall-50.png"
    } else if (stepsNum[dateVal.getDay()] >= 30 && stepsNum[dateVal.getDay()] < 40) {
        progress.src = "progress-overall-75.png"
    } else if (stepsNum[dateVal.getDay()] >= 40 && stepsNum[dateVal.getDay()] < 50) {
        progress.src = "progress-overall-100.png"
    }
}, false);
leftButton.addEventListener("click", () => {
    dateVal = new Date(dateVal.getFullYear(), dateVal.getMonth(), dateVal.getDate() - 1);
    refreshDate();
    steps.textContent = stepsNum[dateVal.getDay()];
    burn.textContent = burnNum[dateVal.getDay()];
});
rightButton.addEventListener("click", () => {
    dateVal = new Date(dateVal.getFullYear(), dateVal.getMonth(), dateVal.getDate() + 1);
    refreshDate();
    steps.textContent = stepsNum[dateVal.getDay()];
    burn.textContent = burnNum[dateVal.getDay()];
});
refreshDate();