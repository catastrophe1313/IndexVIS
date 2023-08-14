function vor(name, data, daa, namelist, idlist,ff){
  let tooltip = d3.select('body')
.append('div')
.attr("id","draw")
.attr("width","150")
.attr("height","100")
.style('position', 'absolute')
.style('z-index', '30')
.style('color', 'black')
.style('visibility', 'hidden')   // 是否可见（一开始设置为隐藏）
.style('font-size', '16px')
.style('font-weight', 'bold')
.text('')
    function hsv(H,V){
        var c=V*0.5//V*S
        var x=c*(1-Math.abs((H/60)%2-1))
        var m=V-c//V-C
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
    var date=[]
    if(TYPE==0){
        date =day(FL)
      }
      else
    {
    date = ["2018/3/1", "2018/3/2", "2018/3/3", "2018/3/4", "2018/3/5", "2018/3/6", "2018/3/7", "2018/3/8",
    "2018/3/9", "2018/3/10", "2018/3/11", "2018/3/12", "2018/3/13", "2018/3/14", "2018/3/15", "2018/3/16", "2018/3/17",
    "2018/3/18", "2018/3/19", "2018/3/20", "2018/3/21", "2018/3/22", "2018/3/23", "2018/3/24", "2018/3/25", "2018/3/26",
    "2018/3/27", "2018/3/28", "2018/3/29", "2018/3/30", "2018/3/31", "2018/4/1", "2018/4/2", "2018/4/3", "2018/4/4", "2018/4/5",
    "2018/4/6", "2018/4/7", "2018/4/8", "2018/4/9", "2018/4/10", "2018/4/11", "2018/4/12", "2018/4/13", "2018/4/14", "2018/4/15",
    "2018/4/16", "2018/4/17", "2018/4/18", "2018/4/19", "2018/4/20"];
      }
      var z = JSON.parse(JSON.stringify(data))
      var zpro = {}

      for(var i=0;i<date.length;i++){
          var temp={}
          temp.name="总类"
          var tt=[]
          for(var j=1;j<z[date[i]]['children'].length;j++){
            
            tt[j-1]=z[date[i]]['children'][j]
              
              
          }
          temp.children=tt
          zpro[date[i]]=temp
        
      }
      console.log(zpro)
      var nor_data={}
      var top=zpro[daa]['children']
      console.log(top)
      var topt=[]
      for(var i=0;i<top.length;i++){
        var fir=top[i]
        var firt=[]
        for(var j=0;j<fir['children'].length;j++){
          var sec=fir['children'][j]
          var temp2={}
          temp2.name=sec.name
          temp2.children=sec.children
          firt.push(temp2)
        }
        var temp1={}
        temp1.name=fir.name
        temp1.children=firt
        topt.push(temp1)
      }
      nor_data.name='总类'
      nor_data.children=topt
      console.log(nor_data)

    function make_regular_polygon(width, height, border, sides) {
        var center = [width*0.5, height*0.5],
            width_radius = (width - 2*border) * 0.5,
            height_radius = (height - 2*border) * 0.5,
            radius = Math.min( width_radius, height_radius ),
            angle_radians = 2*Math.PI / sides,
            initial_angle = sides%2==0 ? -Math.PI/2 -angle_radians*0.5 : -Math.PI/2, // subtract angles
            result = [],
            somevariable = 0;
        
        // special case few sides
        if (sides == 3) {
            center[1] += height_radius / 3.0; // can always do this (I think?)
        
            radius_for_width = width_radius * 2 / Math.sqrt(3);
            radius_for_height = height_radius * 4.0 / 3.0;
            radius = Math.min(radius_for_width, radius_for_height);
        }
        else if (sides == 4) {
            radius *= Math.sqrt(2);
        }
        
        for (var i = 0; i < sides; i++) {
            result.push([center[0] + radius * Math.cos(initial_angle - i * angle_radians), center[1] + radius * Math.sin(initial_angle - i * angle_radians)]);
        }
    
        return result;
    }
    
    // here we set up the svg
    var width = document.getElementById("right22body").clientWidth;

      var height = document.getElementById("right22body").clientHeight;

      d3.select("#right22body").selectAll("svg").remove()
    var border = 0;
    var svg_vor = d3.select("#right22body").append("svg")
        .attr("width",width)
        .attr("height",height)
        .attr("id","svgid");
    
    ///////// bounding polygon
    function get_selected_polygon() {
        var width_less_border = width - 2*border;
        var height_less_border = height;
        var entire_svg_polygon = [[border,border],
            [border,height_less_border],
            [width_less_border,height_less_border],
            [width_less_border,border]];
          return entire_svg_polygon;
        // return make_regular_polygon(width, height, border, 4);
        // var select_polygon = d3.select("#select_polygon").node().value;
        // if (select_polygon == "rectangle") {
        //     return entire_svg_polygon;
        // }
        // else if (select_polygon == "triangle") {
        //     return make_regular_polygon(width, height, border, 3);
        // }
        // else if (select_polygon == "pentagon") {
        //     return make_regular_polygon(width, height, border, 5);
        // }
        // else if (select_polygon == "octagon") {
        //     return make_regular_polygon(width, height, border, 8);
        // }
        // else if (select_polygon == "circle") {
        //     return make_regular_polygon(width, height, border, 100);
        // }	
    }
    function get_selected_dataset() {
        return nor_data;
    }
    
    function make_d3_poly(d) {
        return "M" + d.join("L") + "Z";
    }
    
    
    var paint = function(root){
      //sort nodes to draw by depth-first
      nodes = root.descendants().sort(function(a,b) { return b.depth - a.depth});
        svg_vor.selectAll("#vor").remove();
        console.log(root)
        // background color
        //var background_color = "lightgray";
        var background_color = "none";
        svg_vor.append("g").append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", width)
            .attr("height", height)
            .attr("fill",'none');
    
        // strokes by depth
        // a bit awkward to use the UI element here
        // var stroke_by_depth = d3.select("#checkbox_stroke").property('checked');		
        var stroke_min = 2,
            stroke_max = 10,
            // stroke_max = stroke_by_depth ? 10 : stroke_min,
            stroke_levels = 3,// could determine from max depth...see color...
            stroke_delta = (stroke_max - stroke_min) * 1.0 / stroke_levels;
        
        // color
            var nodes_max_depth = root.height;
            var color_d3_linear = d3.scaleLinear().domain([0, nodes_max_depth]).range(["blue","lightblue"]);
            var color_func = function(d) {
              
                var z = namelist[d.data.name] + "";
                if(d.data.name=="总类"){
                    return '#709daf7c'
                }
                else{
                    var c=COLLIST[z]
                    return c;
                }
                    
                
                      
        
               };
        // var select_color = d3.select("#select_color").node().value;
        // if (select_color == "linear") {
        
        //     var nodes_max_depth = root.height;
        //     var color_d3_linear = d3.scaleLinear().domain([0, nodes_max_depth]).range(["blue","lightblue"]);
        //     var color_func = function(d) { return color_d3_linear(d.depth); };
        // }
        // else if (select_color == "name") {
        //     var color_d3 = d3.scaleOrdinal(d3.schemeCategory20c);
        //     var color_func = function(d) { return d.data.children ? "none" : d.parent ? color_d3(d.parent.data.name) : "none"; };
        // }
        // else {
        //     // none or some other weird thing ;)
        //     var color_func = "lightblue"; // or whatever color
        // }
        
        // any maximum depth?
        // var select_max_depth = d3.select("#select_max_depth").node().value;
        var max_depth = 12; // or whatever big thing...
        // if (select_max_depth != "none") {
        //     max_depth = parseInt(select_max_depth);
        // }
        
        
        
        // consolidate and draw polygons
        var selected_node_list = [];
        for (var i = 0; i < nodes.length; i++){
            var node = nodes[i];
            if (node.polygon != null && node.depth <= max_depth){
                selected_node_list.push(node);
            }
        }
        var leaf_node_list = [];
        for (var i = 0; i < selected_node_list.length; i++){
            var node = selected_node_list[i];
            if (!node.children || node.depth == max_depth){
                leaf_node_list.push(node);
            }
        }
        var polylines = svg_vor.append("g").selectAll("#vor").data(leaf_node_list);
        console.log(ABS)
        polylines.enter().append("path")
        .attr("id","vor")
                .attr("d", function(d) {return make_d3_poly(d.polygon);})
                .attr("stroke-width", function(d) { return Math.max(stroke_max - stroke_delta*d.depth, stroke_min) + "px";})
                .attr("stroke", '#ddd')
                .attr("fill",color_func)
                  .attr("fill-opacity", function(d){if(d.depth!=3){return 0}else{
                    if(ABS==1){
                      var cnt=0
                      for(var i=0;i<date.length;i++){
                        if(date[i]==CURRENT_DATE){
                          cnt=i
                          break;
                        }
                      }
                      var id=NAMELIST[d.data.name]+''
                      if(ABLIST[id][cnt]!=0&&ABLIST[id][cnt]!=null){
                        return 1
                      }
                      else{
                        return 0
                      }
                    }
                    else{
                      return 1
                    }
                    }})
                  .on("mouseover",function(d){
                    var z = namelist[d.data.name] + "";
                    
                  if(ff==0){
                    return tooltip.style('visibility', 'visible').text("O " + ELIST[d.data.name] + '\n'+ "index: " + (d.data.index).toFixed(2) + "%")
                  }
                  else if(ff==1){
                    return tooltip.style('visibility', 'visible').text("O " + ELIST[d.data.name] + '\n'+"weight: " + (d.data.reweight*100).toFixed(2) + "%")
                  }
                   else{
                    return tooltip.style('visibility', 'visible').text("O " + ELIST[d.data.name] + '\n'+"contribution: " + (d.data.reweight*d.data.index).toFixed(2) + "%")
                   }               
                  })
                
                      .on('mousemove', function (d, i) {
                                    return tooltip.style('top', (event.pageY - 20) + 'px').style('left', (event.pageX- 70) + 'px')
                                })
                                .on('mouseout', function (d, i) {
                                    
                                
                                    return tooltip.style('visibility', 'hidden')
                                })
        polylines.exit().remove();
        
        
        // also circles?  only for leaves?
        // a subset of selected_node_list as it turns out
        
    
        // disabled because of weirdness with non-leaf centroids
        // centroid circles
        //var show_leaf_centroids = d3.select("#checkbox_leaf_centroids").property('checked');
        if (false) {
            var center_circles = svg_vor.append("g").selectAll(".center.circle").data(leaf_node_list);
            center_circles.enter().append("circle")
                .attr("class", "center circle")
                .attr("cx", function(d) {console.log(d);return (d.site.x);})
                .attr("cy", function(d) {return (d.site.y);})
                .attr("r", function(d) {return 5;})
                //.attr("r", function(d) {return (Math.sqrt(d.weight));})
                //.attr("r", function(d) {return (Math.max(Math.sqrt(d.weight), 2));})
                .attr("stroke", "black")
                .attr("fill", "black")
                .attr("opacity", function(d){if(d.depth!=3){return 0}else{return 1}})
        }
        
        // weight circles
        // this does work...but is kind of ugly
        if (false) {
            var radius_circles = svg_vor.append("g").selectAll(".radius.circle").data(leaf_node_list);
            radius_circles.enter().append("circle")
                .attr("class", "radius circle")
                .attr("cx", function(d) {return (d.site.x);})
                .attr("cy", function(d) {return (d.site.y);})
                //.attr("r", function(d) {return 5;})
                .attr("r", function(d) {return (Math.sqrt(d.weight));})
                //.attr("r", function(d) {return (Math.max(Math.sqrt(d.weight), 2));})
                .attr("stroke", "white")
                .attr("stroke-width", "5px")
                .attr("fill", "none");
        }
    }
    
    var newroot;
    function compute() {
        var select_polygon = get_selected_polygon();
        var vt = d3.voronoitreemap()
            .root_polygon(select_polygon)
            .value(function(d) { if(ff==0){
              console.log(d);
              return d.index;
        } 
        else if(ff==1){
          return d.reweight;
        } 
        else{
          return d.index*d.reweight;
        }  })
            .iterations(100);
            
      // d3.json("flare.json", function(error, flare) {	// for debug purpose
      var select_dataset = get_selected_dataset();
            newroot = vt(select_dataset);
            console.log(newroot)
            paint(newroot);
        
    }
    
    
    compute()
    // yeah...should probably update on all input changes
    // nope...only the fast ones!
    // d3.select("#checkbox_stroke").on("click", function() {paint(newroot)});
    // d3.select("#select_color").on("change", function() {paint(newroot)});
    // d3.select("#checkbox_leaf_centroids").on("click", function() {paint(newroot)});
    // d3.select("#select_max_depth").on("change", function() {paint(newroot)});
    
    // d3.select("#button_compute").on("click", function() {compute();});
}