let inputBox;
let homeButton;
let finishButton;

function game5Setup(){
  background("green");
  currentActivity = 5;
  
 
  inputBox = createInput();
  inputBox.position(200, 250);

  homeButton = createButton('Home');
  homeButton.position(50, 50);
  homeButton.mousePressed(goToHomePage);

  
  finishButton = createButton('Finish');
  finishButton.position(350, 300);
  finishButton.mousePressed(submitAnswers);

  
  menuButton.show();
  game1Button.show();
  game2Button.show();
  game3Button.show();
  game4Button.show();
  game5Button.hide();
}

function game5Draw(){
  background("white");
  
  
  fill("white");
  rect(10, 10, 100, 25);
  fill("black");
  text("Home Page", 25, 25);

 inputBox.show();

  
  fill('black');
  text('Activity 5 goes here', 200, 200);
}

function goToHomePage() {

}

function submitAnswers() {

}
