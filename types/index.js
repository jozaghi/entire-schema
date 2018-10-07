const number = require("./number")
const string = require("./string")
const object = require("./object")
const array = require("./array")


module.exports=()=>({
    number,
    string,
    object,
    array
})
