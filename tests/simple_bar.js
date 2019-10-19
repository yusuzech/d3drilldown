// user inputs
// height given by r2d3
// set height mannually for display
var height = 500;
var width = 500;
var gid = "simplebar"
var data = iris;

// graph settings
// https://bl.ocks.org/mbostock/3019563
var margin = {top:20, right:10, bottom:20, left:10};
var canvas_height = height - margin.top - margin.bottom;
var canvas_width = width - margin.left - margin.right;

var svg = d3.select("#"+"simplebar").append("svg")
    .attr("width", canvas_width + margin.left + margin.right)
    .attr("height", canvas_height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


console.log(iris)