const steps = document.querySelector("#steps");
const burn = document.querySelector("#burn");
const stepButton = document.querySelector(".button button");
const leftButton = document.querySelector(".calendar button:first-child");
const rightButton = document.querySelector(".calendar button:last-child");

const progress = document.querySelector(".bottom img");
let dateVal = new Date();
const setDefaultClass = () => {
    let daysArray = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    for (let dayName of daysArray) {
        const daysOfWeek = document.querySelector("#" + dayName);
        daysOfWeek.className = "";
    }
}
const refreshDate = () => {
    let daysArray = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    setDefaultClass();
    if (dateVal.getDay() !== 0 && dateVal.getDay() !== 1) {
        rightButton.id = "";
        leftButton.id = "";
    } else if (dateVal.getDay() === 0) {
        rightButton.id = "gray"
    } else if (dateVal.getDay() === 1) {
        leftButton.id = "gray"
    }
    for (let i = 0; i < daysArray.length; i++) {
        if (dateVal.getDay() === i) {
            const day = document.querySelector("#" + daysArray[i]);
            day.className = "chosen";
        }
    }

}


let stepsNum = [0, 0, 0, 0, 0, 0, 0];
let burnNum = [0, 0, 0, 0, 0, 0, 0];
steps.textContent = stepsNum[dateVal.getDay()];
burn.textContent = burnNum[dateVal.getDay()];
const changeProgress = (stepCharts, val1, val2) => {
    progress.src = "progress-overall-" + val1 + ".png";
    if (dateVal.getDay() === 0) {
        stepCharts[6].style.height = val2 + "rem";
    } else {
        stepCharts[dateVal.getDay() - 1].style.height = val2 + "rem";
    }
}
stepButton.addEventListener("click", () => {
    stepsNum[dateVal.getDay()]++;
    burnNum[dateVal.getDay()] += 4;
    steps.textContent = stepsNum[dateVal.getDay()];
    burn.textContent = burnNum[dateVal.getDay()];
    const stepsVal = document.querySelectorAll('h3');
    const stepCharts = document.querySelectorAll('.chart');

    for (let i = 1; i < stepsVal.length; i++) {
        stepsVal[i - 1].textContent = stepsNum[i];
    }
    stepsVal[6].textContent = stepsNum[0];
    if (stepsNum[dateVal.getDay()] >= 10 && stepsNum[dateVal.getDay()] < 20) {
        changeProgress(stepCharts, "25", "1");

    } else if (stepsNum[dateVal.getDay()] >= 20 && stepsNum[dateVal.getDay()] < 30) {
        changeProgress(stepCharts, "50", "2");
    } else if (stepsNum[dateVal.getDay()] >= 30 && stepsNum[dateVal.getDay()] < 40) {
        changeProgress(stepCharts, "75", "3");
    } else if (stepsNum[dateVal.getDay()] >= 40 && stepsNum[dateVal.getDay()] < 50) {
        changeProgress(stepCharts, "100", "4");
    }
}, false);


const dateChange = (conditionVal, sumNum) => {
    console.log(dateVal.getDay())
    if (dateVal.getDay() !== conditionVal) {
        dateVal = new Date(dateVal.getFullYear(), dateVal.getMonth(), dateVal.getDate() + sumNum);
        refreshDate();
        steps.textContent = stepsNum[dateVal.getDay()];
        burn.textContent = burnNum[dateVal.getDay()];
    }
}
leftButton.addEventListener("click", () => {
    dateChange(1, -1);
});
rightButton.addEventListener("click", () => {
    dateChange(0, 1);

});


refreshDate();