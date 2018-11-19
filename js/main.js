/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

// d3.json("data/buildings.json").then(function (data) {
//   console.log(data)
//   data.forEach(function (d) {
//     d.height = +d.height
//   })

//   var svg = d3.select("#chart-area").append("svg")
//     .attr("width", 500)
//     .attr("height", 500)

//   var rects = svg.selectAll("rect")
//     .data(data)

//   rects.enter()
//     .append("rect")
//     .attr("x", function (d, i) {
//       return (i * 70)
//     })
//     .attr("y", 10)
//     .attr("width", 50)
//     .attr("height", function (d) {
//       return d.height
//     })
//     .attr("fill", "red")
// })

d3.csv("data/heatmap_data_not_sorted.csv").then(function (data) {
  console.log(data)
  data.forEach(function (d) {
    d.Score = +d.Score
  })


  var svg = d3.select("#chart-area").append("svg")
    .attr("width", 1000)
    .attr("height", 1000);

  var rects = svg.selectAll("rect")
    .data(data)

  rects.enter()
    .append("rect")
    .attr("x", function (d, i) {
      console.log(d)
      return (i * 60)

    })
    .attr("y", 10)
    .attr("width", 50)
    .attr("height", 50)

    .attr("fill", "red")

}).catch(function (error) {
  console.log(error)
})
