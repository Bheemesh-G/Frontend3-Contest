
const setButton = document.getElementById("setButton");

setButton.addEventListener('click',(e)=>{

    document.getElementById("display").textContent="";

    const hour = document.getElementById("hours");
    const minute = document.getElementById("minutes");
    const second = document.getElementById("seconds");

    if (hour.value < 0 || hour.value > 23 || minute.value < 0 || minute.value > 59 || second.value < 0 || second.value > 59) {
        document.getElementById("display").textContent="Please enter valid time values (0-23 for hours, 0-59 for minutes and seconds).";
        return;
    }

    const list = document.getElementById("listItems");

    const listItem = document.createElement('li');
    listItem.innerHTML =`
    <section class="inputTimer">
                <label>Time Left: </label>
                <div class="timer">
                <div class="hour"> ${hour.value} :</div>
                <div class="minute"> ${minute.value} :</div>
                <div class="second"> ${second.value} </div>
               </div>
                <button type="button" id="deleteButton">Delete</button>
               </section>
    `
            list.appendChild(listItem);

const hourDisplay = listItem.querySelector(".hour");
const minuteDisplay = listItem.querySelector(".minute");
const secondDisplay = listItem.querySelector(".second");

let currentHours = parseInt(hour.value) || 0;
let currentMinutes = parseInt(minute.value) || 0;
let currentSeconds = parseInt(second.value) || 0;

const countdown = setInterval(() => {
    if (currentSeconds > 0) {
        currentSeconds--;
    } else if (currentMinutes > 0) {
        currentMinutes--;
        currentSeconds = 59;
    } else if (currentHours > 0) {
        currentHours--;
        currentMinutes = 59;
        currentSeconds = 59;
    } else {
        clearInterval(countdown);
        let item = listItem.querySelector(".inputTimer");
        item.textContent="Time Is Up !"
        item.style.color="rgb(70, 67, 67)";
        item.style.fontSize="large";
        item.style.textAlign = "center";
        item.style.backgroundColor = "yellow";
        let resetButton = document.createElement("button");
        resetButton.id="stop";
        resetButton.textContent = "Stop";
        resetButton.style.backgroundColor = "rgb(70, 67, 67)";
        resetButton.style.width = "6vw";
        resetButton.style.color = "black";
        resetButton.style.fontWeight = "500";
        resetButton.style.borderRadius = "10px";
        resetButton.style.border = "none";
        resetButton.style.height = "3vh";
        resetButton.style.fontSize="large";

        resetButton.addEventListener("mouseover", () => {
            resetButton.style.cursor = "pointer"; 
        });
        
        resetButton.addEventListener("mouseout", () => {
            resetButton.style.cursor = "default"; 
        });

        item.appendChild(resetButton);
        resetButton.addEventListener("click",()=>{
            item.remove();
        })
        return;
    }

    hourDisplay.textContent = `${currentHours} :`;
    minuteDisplay.textContent = `${currentMinutes} :`;
    secondDisplay.textContent = `${currentSeconds}`;
}, 1000);


const deleteButton = listItem.querySelector("#deleteButton");
    deleteButton.addEventListener("click", () => {
        clearInterval(countdown);
        listItem.remove();
    });


});

