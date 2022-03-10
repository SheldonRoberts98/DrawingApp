//creates a constructor function for the "line to" tool to be be carried out when that tool is selected and used by the user
function LineToTool(){
	//sets the icon of the tool to the image of the line in the assets folder and sets it to the name "LineTo"
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	//initialising the mouse position to (-1,-1) when not drawing so that the mouse is off the canvas. 
	var startMouseX = -1;
	var startMouseY = -1;
	//sets drawing to false because the user is not currently drawing and the draw function doesnt have to be carried out 
	var drawing = false;

	this.draw = function(){

		//checks if mouse is being pressed to identify when the user is attempting to draw something
		if(mouseIsPressed){
			//checks if mouse position is not on screen so it can set the new start position to whether the mouse is currently set
			if(startMouseX == -1){
				//sets new mouse start positions to position of the mouse when the user presses the mouse, signifies beginning of the line
				startMouseX = mouseX;
				startMouseY = mouseY;
				//sets drawing to true in order to allow the user to draw the line 
				drawing = true;
				//pushes the postion with the loadPixel function to the pixels array  so that it can be used with UpdatePixels to draw the line
				loadPixels();
			}

			else{
				//calls updatePixels to update the drawing state with the pixels in the array to apply the drawings
				updatePixels();
				//draws a line from the start positions found previously to the current position of the mouse 
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		//checks whether the user is drawing in order to create a statement that stops the drawing
		else if(drawing){
			//sets drawing back to false and resets the mouse start position back to (-1,-1) so that it is ready to be set to the mouses current position when drawing is reinitiated
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
