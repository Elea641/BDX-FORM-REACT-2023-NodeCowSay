let cowsay = require("cowsay");

const info = require('./information')
console.log(cowsay.say({
    text : `${info.information.firstname} étudiante à la ${info.information.nameSchool}`,
    e : "oO",
    T : "U "
}));




