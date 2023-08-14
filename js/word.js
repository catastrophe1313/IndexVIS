// function word(){
// data=[{text:"猪", size:'60'},
//         {text:"牛", size:'30'}
//         ]
//         console.log(data)
//     var words_list=data;
//     var layout = d3.layout.cloud()
//         .size([100, 50])
//         .words(words_list)
//         .padding(5)
//         .rotate(function() { return ~~(Math.random() * 2) * 0; })
//         .font("Impact")
//         .fontSize(function(d) { return d.size; })
//         .on("end", draw);
//     layout.start();
//     function draw(words) {
//         d3.select("#downleft1body").append("svg")
//             .attr("width", layout.size()[0])
//             .attr("height", layout.size()[1])
//             .append("g")
//             .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
//             .selectAll("text")
//             .data(words)
//             .enter().append("text")
//             .style("font-size", function(d) { return d.size + "px"; })
//             .style("font-family", "Impact")
//             .style("fill", 'red')
//             .attr("text-anchor", "middle")
//             .attr("transform", function(d) {
//                 return "translate(" + [d.x-2, d.y] + ")rotate(" + d.rotate + ")";
//             })
//             .text(function(d) { return d.text; });
//     }   
// }
