var trip = 3.3;
var trace1 = {
  x: [2.25, 2.5, 2.75, 3, 3.25, 3.5, 3.75, 4, 6],
  y: [81, 90, 99, 108, 117, 126, 135, 144, 216],
  name: 'Pass Value',
  type: 'bar'
};

var trace2 = {
  x: [2.25, 2.5, 2.75, 3, 3.25, 3.5, 3.75, 4, 6],
  y: [Math.abs(40*(trip-2.25)), Math.abs(40*(trip- 2.5)), Math.abs(40*(trip- 2.75)), Math.abs(40*(trip-3)), Math.abs(40*(trip-3.25)), Math.abs(40*(trip-3.5)), Math.abs(40*(trip- 3.75)), Math.abs(40*(trip- 4)), Math.abs(40*(trip-6))],
  name: 'Price Point Difference',
  type: 'bar'
};

var cost = [Math.abs(40*(trip-2.25)), Math.abs(40*(trip- 2.5)), Math.abs(40*(trip- 2.75)), Math.abs(40*(trip-3)), Math.abs(40*(trip-3.25)), Math.abs(40*(trip-3.5)), Math.abs(40*(trip- 3.75)), Math.abs(40*(trip- 4)), Math.abs(40*(trip-6))];

var data = [trace1, trace2];

var layout = {barmode: 'stack'};

Plotly.newPlot('myDiv', data, layout);