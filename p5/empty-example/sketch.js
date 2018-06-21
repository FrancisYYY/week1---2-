var table;

function preload(){
  table = loadTable( "data/assignment.csv" );
}

function setup(){
  createCanvas(1000, 500);
  console.log( table.getRowCount() );
  console.log( table.getColumnCount() );
  // noStroke()
  strokeWeight(0.4)
  var lastXax = 0;
  var lastYax = 0;
  var lastXay = 0;
  var lastYay = 0;
  var lastXaz = 0;
  var lastYaz = 0;
  for( i=0; i<table.getRowCount(); i++ ){
    var row = table.getRow(i);
    var ax = row.get(0);
    var ay = row.get(1);
    var az = row.get(2);
    var timeStamp = i * 200;
    // x accelerometer
    var y = map( ax,-15, 15, 0, height );
    var x = map( timeStamp, 0, 200*table.getRowCount(), 0, width )
    fill(220, 20, 60);
    stroke(220, 20, 60);
    ellipse( x, y, 2, 2 );
    line( lastXax, lastYax, x, y);
    lastXax = x;
    lastYax = y;
      // y accelerometer
    var y = map( ay,-15, 15, 0, height );
    var x = map( timeStamp, 0, 200*table.getRowCount(), 0, width )
    fill(0,0,128)
    stroke(0,0,128);
    rect( x, y, 2, 2 )
    line( lastXay, lastYay, x, y);
    lastXay = x;
    lastYay = y;
      // z accelerometer
    var y = map( az,-15, 15, 0, height );
    var x = map( timeStamp, 0, 200*table.getRowCount(), 0, width )
    fill(255,215,0)
    stroke(255,215,0);
    ellipse( x, y, 2, 2 )
    line( lastXaz, lastYaz, x, y);
    lastXaz = x;
    lastYaz = y;
  }
}

function draw(){

}
