function drawChart(data, padding, curvature) {
  function hsv(H){
    var c=0.7*0.8//V*S
    var x=c*(1-Math.abs((H/60)%2-1))
    var m=0.7-c//V-C
    if(0<=H&&H<60){
      return "rgb("+(c+m)*255+","+(x+m)*255+","+(0+m)*255+")"
    }
    else if(60<=H&&H<120){
      return "rgb("+(x+m)*255+","+(c+m)*255+","+(0+m)*255+")"
    }
    else if(120<=H&&H<180){
      return "rgb("+(0+m)*255+","+(c+m)*255+","+(x+m)*255+")"
    }
    else if(180<=H&&H<240){
      return "rgb("+(0+m)*255+","+(x+m)*255+","+(c+m)*255+")"
    }
    else if(240<=H&&H<300){
      return "rgb("+(x+m)*255+","+(0+m)*255+","+(c+m)*255+")"
    }
    else if(300<=H&&H<360){
      return "rgb("+(c+m)*255+","+(0+m)*255+","+(x+m)*255+")"
    }
    }
  function sc(num) {
    var di=namelist[name]+''
    if(ff==0){
       if(di=='0'){
        num=num*0.35
       }
       else if(di.length==1){
        num=num*0.16
       }
       else if(di.length==3){
        num=num*0.1;
       }
       else if(di.length==5){
        num=num*0.1;
       }
    }
    else{
     if(di=='0'){
       if(num<10){
         num=num*5;
       }
       else{
        num=num*2.5;
       }
       
     }
     else if(di.length==1){
        num=num*0.75;
      
     }
     else if(di.length==3){
      if(num>60){
        num=num*0.2;
      }
      else{
       num=num*0.3;
      }
     }
     else if(di.length==5){
      if(num>60){
        num=num*0.2;
      }
      else{
       num=num*0.3;
      }
     }
    }
    return num;
  }
  // Create hierarchy.
  let root = d3.hierarchy(data)
      .sum(function(d) {return d.index/10; })
      .sort(function(a, b) { return b.index/10 - a.index/10; });

      var width = document.getElementById("right22body").clientWidth;

      var height = document.getElementById("right22body").clientHeight;

      d3.select("#right22body").selectAll("svg").remove()
      var svg = d3.select("#right22body").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width/2.5  + "," + height/2 + ")");

        console.log(root)
  // Create bubbletreemap.
  let bubbletreemap = d3.bubbletreemap()
      .padding(padding)
      .curvature(curvature)
      .hierarchyRoot(root)
      .width(40)
      .height(40)
      .colormap([]); // Color brewer: 12-class Paired

  // Do layout and coloring.
  let hierarchyRoot = bubbletreemap.doLayout().doColoring().hierarchyRoot();

  let leafNodes = hierarchyRoot.descendants().filter(function (candidate) {
      return !candidate.children;
  });

  // Draw contour.
  let contourGroup = svg.append("g")
      .attr("class", "contour")

  contourGroup.selectAll("path")
      .data(bubbletreemap.getContour())
      .enter().append("path")
      .attr("d", function(arc) { return arc.d; })
      .style("stroke", "black")
      .style("stroke-width", function(arc) { return arc.strokeWidth; })
      .style("stroke-linejoin","miter")
      .attr("transform", function(arc) {return arc.transform;});

  // Draw circles.
  let circleGroup = svg.append("g")
      .attr("class", "circlesAfterPlanck")
      

  circleGroup.selectAll("circle")
      .data(leafNodes)
      .enter().append("circle")
      .attr("r", function(d) {console.log(d);return d.r; })
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; })
      .style("fill", function(d) {  var z = NAMELIST[d.data.name] + "";
      if(z.length!=5){
        return 'gray';
      }
    else {
                var c=hsv(COLLIST[z])
                return c;
              } })
      .style("stroke", "black")
      .style("stroke-linejoin","bevel")
      .style("stroke-width", "2");
}
