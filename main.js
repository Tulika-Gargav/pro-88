var canvas = new fabric.Canvas('myCanvas');
// Create canvas variable

//Set initial positions for ball and hole images.
ball_y = 0;
ball_x = 0;
hole_y = 400;
ball_x = 800;



block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h1.png", function(Img){
        hole_obj = Img;
        hole_obj.scaleToWidth(50);
        hole_obj.scaleToHeight(50);
        hole_obj.set({
            top:hole_y,
            left:hole_x
        });
        canvas.add(hole_obj);
    });
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
        hole_obj = Img;
        hole_obj.scaleToWidth(50);
        hole_obj.scaleToHeight(50);
        hole_obj.set({
            top:ball_y,
            left:ball_x
        });
        canvas.add(ball_obj);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(player_y >=0)
    {
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("when Up arrow key is pressed,X = " + player_x + " , Y = " +player_y);
        canvas.remove(player_object);
        player_update();
    }
	}

	function down()
	{
		if(player_y <=500)
		{
			player_y = player_y + block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("when Down arrow key is pressed,X = " + player_x + " , Y = " +player_y);
			canvas.remove(player_object);
			player_update();
		}
	}

	function left()
	{
		if(ball_x >5)
		
			{
				player_x = player_x - block_image_height;
				console.log("block image height = " + block_image_height);
				console.log("when Left arrow key is pressed,X = " + player_x + " , Y = " +player_y);
				canvas.remove(player_object);
				player_update();
			}
		}
	

	function right()
	{
		if(ball_x <=1050)
		
    {
        player_x = player_x + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("when Right arrow key is pressed,X = " + player_x + " , Y = " +player_y);
        canvas.remove(player_object);
        player_update();
    }
		}
	
	

