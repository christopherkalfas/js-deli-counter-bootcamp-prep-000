function takeANumber(katzDeli, newName){
katzDeli.push(newName);
  
return "Welcome, " + newName + ". You are number " + katzDeli.length + " in line.";
}

function nowServing(katzDeli){
  if (katzDeli === 0){
  return "There is nobody waiting to be served!";
                     } 
  else {
    var newName = katzDeli{[0];
    katzDeli.splice(0,1);
    return "Now serving" + katzDeli;
         }
                              }
