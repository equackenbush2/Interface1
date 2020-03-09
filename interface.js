
let brush = "red"
let mode = "red"
let lastblink = 0
let blinkon = false
//assigning = is 1 = sign//
function setup() {

    // create a 640x480 pixel canvas and attach it to your HTML
    createCanvas(640, 480).parent('p5')
    background(158, 232, 255)
    print("This is the setup")

}
//behind//


function draw() {
  if (mouseIsPressed) {
    if (mode == "red" && brush == "red") {
    // fill(random(38), random(255), 0, 100)
    circle(mouseX + random(-45, 50), mouseY + random(-30, 50), random(2, 30))
    triangle(mouseX, mouseY - random(50), mouseX - random(10), mouseY + random(20), mouseX + random(50), mouseY - random(30))
  }
  //   if (mode == "blue" && brush == "red") {
  //   // fill(101, 45, 161)
  //   stroke(101, 45, 161, 99)
  //   strokeWeight(1)
  //   line(mouseX - random(30), mouseY - random(40), mouseX, mouseY - random(40))
  //   }
  // if (mode == "green" && brush =="red") {
  //       // background(255, 177, 61)
  //   stroke(random(0, 46), random(0, 128), random(0, 10))
  //   strokeWeight(random(0, 60))
  //   line(pmouseX, pmouseY, mouseX, mouseY)
  //   // background(255, 177, 61)
  //   }

    if (mode == "b1") {
      stroke(0, 0, 0, 80)
      line(mouseX, mouseY, mouseX + random(-50, 50), mouseY + random(-50, 50))
    }

    if (mode == "b2"){
      fill(random(172), random(94), 255, 100)
      circle(mouseX + random(-80, 20), mouseY + random(-80, 20), random(2, 30))
    }

    if (mode == "b3") {
        noStroke()
        fill(random(94), random(255), 97)
        circle(mouseX + random(-20, 20), mouseY + random(-20, 20), random(2, 30))
    }

    if (mode == "b4") {
  fill(random(255), random(191), 94, 100)
  triangle(mouseX, mouseY - random(50), mouseX - random(30), mouseY + random(20), mouseX + random(50), mouseY - random(30))
  fill(random(255), random(255), 0, 100)
  circle(mouseX + random(-20, 20), mouseY + random(-20, 20), random(2, 30))

    }

    if (mode == "b6") {
      stroke(101, 45, 161, 100)
      strokeWeight(30)
      line(mouseX - random(30), mouseY - random(40), mouseX, mouseY - random(40))
    }

      if (mode == "b7") {
        fill(20, 20, 20,)
        line(mouseX + random(20, 20), mouseX, mouseY + random(-50, 50), mouseY + random(-50, 50))
    }

}




stroke(0, 0, 0)
strokeWeight(0)

//testing = is 2 = sign//
  // strokeWeight(1)

  // fill (0, 0, 0)
  // rect(0, 1, 100, 500)
//background rect//
  fill(255, 255, 255, 1)
  rect(0, 0, 75, 300)

  fill(251, 255, 8, 1)
  rect(75, 0, 75, 400)

  // fill(0, 247, 255, 1)
  // rect(150, 0, 75, 300)

  fill(250, 158, 72, 1)
  rect(225, 0, 75, 300)

  fill(255, 0, 204, 1)
  rect(300, 0, 100, 500)

  fill(255, 94, 94, 90)
  rect(400, 0, 100, 500)

  fill(0, 4, 255, 1)
  rect(500, 0, 200, 300)
//backgroundrect//

//backgroundrectsmall//
fill(246, 255, 0, 5)
rect(0, 290, 75, 30)

fill(0, 0, 0,)
rect(75, 290, 75, 30,)

fill(0, 247, 255,)
rect(150, 290, 75, 30,)

fill(0, 0, 0,)
rect(225, 290, 75, 30,)

// fill(255, 0, 204,)
// rect(300, 290, 75, 30,)

// fill(0, 0, 0,)
// rect(375, 290, 75, 30,)
//
fill(255, 255, 255)
rect(450, 290, 75, 30,)

fill(0, 0, 0,)
rect(525, 290, 75, 30,)

fill(0, 25, 250)
rect(600, 290, 75, 30,)

  //red//
  fill(255, 255, 255)
  triangle(106, 89, 106, 66, 134, 77)

  //blue//
  // strokeWeight(1)
  fill(255, 255, 255)
  rect(464, 78, 30, 8)

  //green//
  // strokeWeight(1)
  fill(255, 255, 255)
  rect(505, 78, 30, 8)

//dots//
  fill(255, 255, 255)
  rect(496.5, 75, 5, 5)
  fill(255, 255, 255)
  rect(496.5, 85, 5, 5)

//SLP//
textSize(32);
text('SLP', 106, 397);
// fill(0, 102, 153);
//
if (millis() - lastblink >= 1000) {
  if (blinkon == false) {
    blinkon = true
  } else {
    blinkon = false
  }
  lastblink = millis()
}

print(blinkon)

if (blinkon == true) {
  fill(0, 102, 153)
  text('0:00:00', 464, 397);
  textSize(32);
} else {
  if (mode == "red") {
    fill(73, 52, 235)
  }
  if (mode == "blue") {
    fill(73, 52, 235)
  }
  if (mode == "green") {
    fill(73, 52, 235)
}
text('0:00:00', 464, 397);


}
}

  // fill(0, 0, 255)

//remember to add save code//
function mouseClicked() {

    print(int(mouseX), int(mouseY))

//buttons//

    if (mouseX > 106 && mouseX < 134 && mouseY > 66 && mouseY < 89) {
      print("input1")
      background(158, 232, 255)
      mode = "red"
      //background graphics//
    }

    if (mouseX > 464 && mouseX < 504 && mouseY > 78 && mouseY < 85) {
      print("input2")
      background(143, 1, 30,)
      mode = "blue"
    }
    if (mouseX > 517 && mouseX < 535 && mouseY > 78 && mouseY < 85) {
      print("input3")
      background(255, 177, 61)
      mode = "green"
}

    if (mouseX > 0 && mouseX < 75 && mouseY > 290 && mouseY < 320) {
      print("input4")
      mode = "b1"
    }

    if (mouseX > 75 && mouseX < 150 && mouseY > 290 && mouseY < 320) {
      print("input5")
      mode = "b2"
    }

    if (mouseX > 150 && mouseX < 225 && mouseY > 290 && mouseY < 320) {
      print("input6")
      mode = "b3"
    }

    if (mouseX > 255 && mouseX < 300 && mouseY > 290 && mouseY < 320 ){
      print("input7")
      mode = "b4"
    }

    if (mouseX > 300 && mouseX < 375 && mouseY > 290 && mouseY < 320){
      print("input8")
      mode = "b5"
    }

    if (mouseX > 450 && mouseX < 525 && mouseY > 290 && mouseY < 320) {
      print("input9")
      mode = "b6"
    }

    if (mouseX > 525 && mouseX < 600 && mouseY > 290 && mouseY < 320) {
      print ("input10")
      mode = "b7"
    }

if (mouseX > 107 && mouseX < 164 && mouseY > 371 && mouseY < 744) {
       save()  // saves an image of the canvas

}

}

function keyPressed() {
  print(key)
}
