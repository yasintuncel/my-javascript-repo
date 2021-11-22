const days = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
};

const onSunday = function (parameters) { console.log("sunday. parameters: " + parameters); }
const onMonday = function (parameters) { console.log("monday. parameters: " + parameters); }
const onTuesday = function (parameters) { console.log("tuesday. parameters: " + parameters); }
const onWednesday = function (parameters) { console.log("wednesday. parameters: " + parameters); }
const onThursday = function (parameters) { console.log("thursday. parameters: " + parameters); }
const onFriday = function (parameters) { console.log("friday. parameters: " + parameters); }
const onSaturday = function (parameters) { console.log("saturday. parameters: " + parameters); }

let dayStrategies = {};

const addDayStrategy = function (day, func) {
    dayStrategies[day] = func;
};

addDayStrategy(days.sunday, onSunday);
addDayStrategy(days.monday, onMonday);
addDayStrategy(days.tuesday, onTuesday);
addDayStrategy(days.wednesday, onWednesday);
addDayStrategy(days.thursday, onThursday);
addDayStrategy(days.friday, onFriday);
addDayStrategy(days.saturday, onSaturday);

for (let i = 0; i < 7; i++) {
    const randomDay = Math.floor(Math.random() * 10);
    try {
        dayStrategies[randomDay](Math.floor(Math.random() * 10000));
    }
    catch (err) {
        console.log("Not a day of the week.");
    }
}