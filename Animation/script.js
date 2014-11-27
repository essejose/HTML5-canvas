


var canvas = null;
var ctx = null;
var frameRate = 1000/30;
var frame = 0;
var assets = ['images/robowalk/robowalk00.png',
              'images/robowalk/robowalk01.png',
              'images/robowalk/robowalk02.png',
              'images/robowalk/robowalk03.png',
              'images/robowalk/robowalk04.png',
              'images/robowalk/robowalk05.png',
              'images/robowalk/robowalk06.png',
              'images/robowalk/robowalk07.png',
              'images/robowalk/robowalk08.png',
              'images/robowalk/robowalk09.png',
              'images/robowalk/robowalk10.png',
              'images/robowalk/robowalk11.png',
              'images/robowalk/robowalk12.png',
              'images/robowalk/robowalk13.png',
              'images/robowalk/robowalk14.png',
              'images/robowalk/robowalk15.png',
              'images/robowalk/robowalk16.png',
              'images/robowalk/robowalk17.png',
              'images/robowalk/robowalk18.png'
             ];
var frames = [];

var onImageLoad = function(){
    console.log("IMAGE!!!");
};

var setup = function() {
 
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    

    // Load each image URL from the assets array into the frames array 
    // in the correct order.
    // Afterwards, call setInterval to run at a framerate of 30 frames 
    // per second, calling the animate function each time.
    
    for ( var i = 0; i<assets.length; i++){
        frames.push(new Image());
        frames[i].src = assets[i];
        frames[i].onload = onImageLoad;
    }
    setInterval(animate, frameRate);
};

var animate = function(){
    // Draw each frame in order, looping back around to the 
    // beginning of the animation once you reach the end.
    // Draw each frame at a position of (0,0) on the canvas.
  
    // Try your code with this call to clearRect commented out
    // and uncommented to see what happens!
    

    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(frames[frame] , 192, 192);
    frame = (frame + 1) % frames.length;
    

};

// We'll call your setup function in our test code, so
// don't call it in your code.
setup();
