var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var placeInLine = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${placeInLine} in line.`;
}

function nowServing(katzDeliLine) {
  var peopleInLine = katzDeliLine.length;
  
  
  if( peopleInLine > 0) {
    var next = katzDeliLine.shift();
    return `Currently serving ${next}.`
    
  } else {
    return "There is nobody waiting to be served!"
  }
  
}
