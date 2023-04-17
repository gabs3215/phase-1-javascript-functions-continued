function saturdayFun(hobby = "roller-skate") {
     return (`This Saturday, I want to ${hobby}!`)
}

const mondayWork = function(work = "go to the office") {
     return (`This Monday, I will ${work}.`) ;
}
function wrapAdjective(string1 = "*") {
     return function (value1 = "special") {
          return (`You are ${string1}${value1}${string1}!`)
     }
}
wrapAdjective("||")("a dedicated programmer")