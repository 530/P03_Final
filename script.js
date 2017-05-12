/* Jeremiah Howell */
var workoutArray = ["chest", "back", "arms", "legs"];
var current;

//Return to home button
function reset(){
  window.location.href="index.html";
}

//Takes length variable as a parameter then
//generates a random number in between 0-3
function mathRandom(length){
  return Math.floor(Math.random()*(length));
}

//Uses mathRandom function to choose a random
//number between 0-3 and then takes the user
//to the directed page according to randomIndex
function random(){
	var randomIndex = mathRandom(workoutArray.length);
	while(current == randomIndex){
		randomIndex = mathRandom(workoutArray.length);
	}

  if(randomIndex == 0){
    window.location.href="chest.html";
  }
  else if(randomIndex == 1){
    window.location.href="back.html";
  }
  else if(randomIndex == 2){
    window.location.href="arms.html";
  }
	else if(randomIndex == 3){
		window.location.href="legs.html";
	}
}

//Takes the user input w/ id "muscleGroup"
//then directs the use to the specified page
//if the index is not in the array, the user
//is notified
function workout(){
  var selection = document.getElementById("muscleGroup").value;
  if(selection == "chest"){
    window.location.href="chest.html";
  }
	else if(selection == "back"){
		window.location.href="back.html";
	}
  else if(selection == "arms"){
    window.location.href="arms.html";
  }
  else if(selection == "legs"){
    window.location.href="legs.html";
  }
	else
		document.getElementById("error").innerHTML = "Please enter a valid workout"
}