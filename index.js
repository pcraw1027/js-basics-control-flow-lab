function scuberGreetingForFeet(trip){
  // Write your code here!
  let tripMessage = ""
//  tripGladly = 
  if (trip <= 400) {
    tripMessage = "This one is on me!"
  } else if (trip > 2500) {
    tripMessage = "No can do."
  } else if (trip > 2000) {
    tripMessage = "I will gladly take your thirty bucks."
  }
  return tripMessage
}

function ternaryCheckCity(city){
  // Write your code here!
  let tripMessage = ""
  if (city === "NYC") {
    tripMessage = "Ok, sounds good."
  } else {
    tripMessage = "No go."
  }
  return tripMessage
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let tipMessage = ""
  if (tip === "generous") {
    tipMessage = "Thank you so much."
  } else if (tip === "not as generous"){
    tipMessage = "Thank you."
  } else if (tip ==="thanks for everything") {
    tipMessage = "Bye."
  }
  return tipMessage
}