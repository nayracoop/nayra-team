const sketch = p5 => {

  p5.disableFriendlyErrors = true; 
  
  let r = 40;
  let layers = 20;

  let theme = 1;
  let backgroundColors = [];
  let lineColors = [];

  let centerX;
  let centerY;
  

  p5.setup = () => {
  
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WebGL);
    //fullScreen(P3D);

    r = (p5.height > p5.width ? p5.height : p5.width) * 0.03;
    layers = 20;
    
    backgroundColors[0] = '#04090d';
    backgroundColors[1] = '#f8f8f8';
    lineColors[0] = '#1ac69e';
    lineColors[1] = '#1ac69e';
    
    centerX = p5.width*0.35; //p5.random(p5.width*0.4, p5.width*0.6);
    centerY = p5.height*0.75; //p5.random(p5.height*0.1, p5.height*0.9); 
    
    //colorMode(HSB, 360, 100, 100);
    
    p5.background(backgroundColors[theme]);
    
  }
  
  p5.draw = () => {
    
    
    //p5.background(backgroundColors[theme]);
    p5.clear();
    
    
    // p5.fill(p5.red(backgroundColors[theme]), p5.green(backgroundColors[theme]), p5.blue(backgroundColors[theme]), 10);
    // p5.noStroke();
    // p5.rect(0,0,p5.width,p5.height);
    
    
    p5.translate(centerX, centerY);
    p5.rotate(p5.frameCount*0.001);
    // stroke(lineColors[theme], 50); //(frameCount*0.5)%360, 80, 100, 100);
    
    
    let rr = r;
    for (let layer = 0; layer < layers; layer += 1) {
      //stroke(lineColors[theme], map(rr, r, r+0.5*layers, 3, 100)); //(frameCount*0.5)%360, 80, 100, 100);
      p5.stroke(p5.red(lineColors[theme]), p5.green(lineColors[theme]), p5.blue(lineColors[theme]), p5.map(rr, r, r+0.5*layers, 3, 100));
      if(layer%4 === 0) {
        p5.strokeWeight(2); 
      } else {
        p5.strokeWeight(.5); 
      }
      p5.beginShape();  
      for (let angle = 0; angle < 360; angle += p5.map(layer, 0, layers-1, 10, 1)) {
        let theta = p5.radians(180 + angle);
        let r1 = p5.noise(theta*0.45, rr*layer*0.001, p5.millis()*0.00003);
        let a = p5.map(p5.abs(180-angle), 0, 180, 1, 0);
        r1 = p5.map(r1, 0, 1, 0, 100 + rr*layer);
        let r2 = r1*a + rr*layer*(1-a) + p5.sin(p5.frameCount*0.01)*rr*0.5;
        p5.vertex(p5.cos(theta)*r2, p5.sin(theta)*r1);
        
      }
      rr += 0.5;
      p5.noFill();
      p5.endShape(p5.CLOSE);
    }
    //r += 5;

  }

  // p5.keyPressed = () => {
  //   let numb = p5.abs(Number(p5.key)-1); 
  //   theme = numb%backgroundColors.length;
  //   if(theme > backgroundColors.length-1) theme = backgroundColors.length;
  //   else if(theme < 0) theme = 0;
  //   p5.background(backgroundColors[theme]);
  // }
  
  // p5.mousePressed = () => {
  //   centerX = p5.mouseX;
  //   centerY = p5.mouseY;
  // }
  

}

export default sketch;



