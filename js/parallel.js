
let tooltip1 = d3.select('body')
.append('div')
.style('position', 'absolute')
.style('z-index', '30')
.style('color', 'black')
.style('visibility', 'hidden')   // 是否可见（一开始设置为隐藏）
.style('font-size', '16px')
.style('font-weight', 'bold')
.text('')
var mcolor1 = ["#ff5e63","#6e40aa","#417de0","#aff05b","#efa72f","#bfbf00","#00bfbf"];
function parallel(name,day,daa,rr){
  
    function hsv(H){
        var c=1
        var x=1-Math.abs((H/60)%2-1)
        if(0<=H&&H<60){
          return "rgb("+c*255+","+Math.round(x*255)+","+0+")"
        }
        else if(60<=H&&H<120){
          return "rgb("+Math.round(x*255)+","+c*255+","+0+")"
        }
        else if(120<=H&&H<180){
          return "rgb("+0+","+c*255+","+Math.round(x*255)+")"
        }
        else if(180<=H&&H<240){
          return "rgb("+0+","+Math.round(x*255)+","+c*255+")"
        }
        else if(240<=H&&H<300){
          return "rgb("+Math.round(x*255)+","+0+","+c*255+")"
        }
        else if(300<=H&&H<360){
          return "rgb("+c*255+","+0+","+Math.round(x*255)+")"
        }
}

    var mcolor1 = ["#ff5e63","#6e40aa","#417de0","#aff05b","#efa72f","#bfbf00","#00bfbf"];
    d3.csv("data/code.csv", function (Name_data) {
        d3.csv("data/number.csv", function (tea) {
        var namelist = {}
        var date=[]
        var idlist = {}
        if(TYPE==0){
          date =[  "2018/12/1", "2018/12/2", "2018/12/3", "2018/12/4", "2018/12/5","2018/12/6", "2018/12/7", "2018/12/8", "2018/12/9", "2018/12/10", 
"2018/12/11", "2018/12/12", "2018/12/13", "2018/12/14", "2018/12/15","2018/12/16", "2018/12/17", "2018/12/18", "2018/12/19", "2018/12/20", 
"2018/12/21", "2018/12/22", "2018/12/23", "2018/12/24", "2018/12/25", "2018/12/26", "2018/12/27", "2018/12/28", "2018/12/29", "2018/12/30", "2018/12/31",
"2019/1/1", "2019/1/2", "2019/1/3", "2019/1/4", "2019/1/5","2019/1/6", "2019/1/7", "2019/1/8", "2019/1/9", "2019/1/10", 
"2019/1/11", "2019/1/12", "2019/1/13", "2019/1/14", "2019/1/15","2019/1/16", "2019/1/17", "2019/1/18", "2019/1/19", "2019/1/20", 
"2019/1/21", "2019/1/22", "2019/1/23", "2019/1/24", "2019/1/25", "2019/1/26", "2019/1/27", "2019/1/28", "2019/1/29", "2019/1/30", "2019/1/31",
"2019/2/1", "2019/2/2", "2019/2/3", "2019/2/4", "2019/2/5","2019/2/6", "2019/2/7",  "2019/2/9", "2019/2/10", 
"2019/2/11", "2019/2/12", "2019/2/13", "2019/2/14", "2019/2/15","2019/2/16", "2019/2/17", "2019/2/18", "2019/2/19", "2019/2/20", 
"2019/2/21", "2019/2/22", "2019/2/23", "2019/2/24", "2019/2/25", "2019/2/26", "2019/2/27", "2019/2/28",
 "2019/3/2", "2019/3/3", "2019/3/4", "2019/3/5","2019/3/6", "2019/3/7", "2019/3/8", "2019/3/9", "2019/3/10", 
"2019/3/11", "2019/3/12", "2019/3/13", "2019/3/14", "2019/3/15","2019/3/16", "2019/3/17", "2019/3/18", "2019/3/19", "2019/3/20", 
"2019/3/21", "2019/3/22", "2019/3/23", "2019/3/24", "2019/3/25", "2019/3/26", "2019/3/27", "2019/3/28", "2019/3/29", "2019/3/30", "2019/3/31",
"2019/4/1", "2019/4/2", "2019/4/3", "2019/4/4", "2019/4/5","2019/4/6", "2019/4/7", "2019/4/8", "2019/4/9", "2019/4/10", 
"2019/4/11", "2019/4/12", "2019/4/14", "2019/4/15","2019/4/16", "2019/4/17", "2019/4/18", "2019/4/19", "2019/4/20", 
"2019/4/21", "2019/4/22", "2019/4/23", "2019/4/24", "2019/4/25", "2019/4/26", "2019/4/27", "2019/4/28", "2019/4/29", "2019/4/30",
"2019/5/1", "2019/5/2", "2019/5/3", "2019/5/4", "2019/5/5","2019/5/6", "2019/5/7", "2019/5/8", "2019/5/9", "2019/5/10", 
"2019/5/11", "2019/5/12", "2019/5/13", "2019/5/14", "2019/5/15","2019/5/16", "2019/5/17", "2019/5/18", "2019/5/19", "2019/5/20", 
"2019/5/21", "2019/5/22", "2019/5/23", "2019/5/24", "2019/5/25", "2019/5/26", "2019/5/27", "2019/5/28", "2019/5/29", "2019/5/30", "2019/5/31",
"2019/6/1", "2019/6/2", "2019/6/3", "2019/6/4", "2019/6/5","2019/6/6", "2019/6/7", "2019/6/8", "2019/6/10", 
"2019/6/11", "2019/6/12", "2019/6/13", "2019/6/14", "2019/6/15","2019/6/16", "2019/6/17", "2019/6/18", "2019/6/19", "2019/6/20", 
"2019/6/21", "2019/6/22", "2019/6/23", "2019/6/24", "2019/6/25", "2019/6/26", "2019/6/27", "2019/6/28", "2019/6/29", "2019/6/30", 
"2019/7/1", "2019/7/2", "2019/7/3", "2019/7/4", "2019/7/5","2019/7/6", "2019/7/7", "2019/7/8", "2019/7/9", "2019/7/10", 
"2019/7/11", "2019/7/12","2019/7/13", "2019/7/14", "2019/7/15","2019/7/16", "2019/7/17", "2019/7/18", "2019/7/19", "2019/7/20", 
"2019/7/21", "2019/7/22", "2019/7/23", "2019/7/24", "2019/7/25", "2019/7/26", "2019/7/27", "2019/7/28", "2019/7/29", "2019/7/30", "2019/7/31",
"2019/8/1", "2019/8/2", "2019/8/3", "2019/8/4", "2019/8/5","2019/8/6", "2019/8/7", "2019/8/8", "2019/8/9", "2019/8/10", 
"2019/8/11", "2019/8/12","2019/8/13", "2019/8/14", "2019/8/15","2019/8/16", "2019/8/17", "2019/8/18", "2019/8/19", "2019/8/20", 
"2019/8/21", "2019/8/22", "2019/8/23", "2019/8/24", "2019/8/25", "2019/8/26", "2019/8/27", "2019/8/28", "2019/8/29", "2019/8/30", "2019/8/31",
"2019/9/1", "2019/9/2", "2019/9/3", "2019/9/4", "2019/9/5","2019/9/6", "2019/9/7", "2019/9/8", "2019/9/9", "2019/9/10", 
"2019/9/11", "2019/9/12", "2019/9/13", "2019/9/14", "2019/9/15","2019/9/16", "2019/9/17", "2019/9/18", "2019/9/19", "2019/9/20", 
"2019/9/21", "2019/9/22", "2019/9/23", "2019/9/24", "2019/9/25", "2019/9/26", "2019/9/27", "2019/9/28", "2019/9/29", "2019/9/30",
"2019/10/1", "2019/10/2", "2019/10/3", "2019/10/4", "2019/10/5","2019/10/6", "2019/10/7", "2019/10/8", "2019/10/9", "2019/10/10", 
"2019/10/11", "2019/10/12", "2019/10/13", "2019/10/14", "2019/10/15","2019/10/16", "2019/10/17", "2019/10/18", "2019/10/19", "2019/10/20", 
"2019/10/21", "2019/10/22", "2019/10/23", "2019/10/24", "2019/10/25", "2019/10/26", "2019/10/27", "2019/10/28", "2019/10/29", "2019/10/30", "2019/10/31",
"2019/11/1", "2019/11/2", "2019/11/3", "2019/11/4", "2019/11/5","2019/11/6", "2019/11/7", "2019/11/8", "2019/11/9", "2019/11/10", 
"2019/11/11", "2019/11/12", "2019/11/13", "2019/11/14", "2019/11/15","2019/11/16", "2019/11/17", "2019/11/18", "2019/11/19", "2019/11/20", 
"2019/11/21", "2019/11/22", "2019/11/23", "2019/11/24", "2019/11/25", "2019/11/26", "2019/11/27"]
            for (i in Name_data) {
                if(Name_data[i].count==370||Name_data[i].count==0){
                      namelist[Name_data[i].name] = Name_data[i].id;
                }
              }
            for (i in Name_data) {
              if(Name_data[i].count==370||Name_data[i].count==0){
                    idlist[Name_data[i].id] = Name_data[i].name;
              }
            }
        }
        else{
          date = ["2018/3/1", "2018/3/2", "2018/3/3", "2018/3/4", "2018/3/5", "2018/3/6", "2018/3/7", "2018/3/8",
"2018/3/9", "2018/3/10", "2018/3/11", "2018/3/12", "2018/3/13", "2018/3/14", "2018/3/15", "2018/3/16", "2018/3/17",
"2018/3/18", "2018/3/19", "2018/3/20", "2018/3/21", "2018/3/22", "2018/3/23", "2018/3/24", "2018/3/25", "2018/3/26",
"2018/3/27", "2018/3/28", "2018/3/29", "2018/3/30", "2018/3/31", "2018/4/1", "2018/4/2", "2018/4/3", "2018/4/4", "2018/4/5",
"2018/4/6", "2018/4/7", "2018/4/8", "2018/4/9", "2018/4/10", "2018/4/11", "2018/4/12", "2018/4/13", "2018/4/14", "2018/4/15",
"2018/4/16", "2018/4/17", "2018/4/18", "2018/4/19", "2018/4/20"];
            for (i in tea) {
                namelist[tea[i].name] = tea[i].id;
        }
        
        for (i in tea) {
                idlist[tea[i].id] = tea[i].name;
        }
        }
        
var ind, wei, bas, basel, basee, pri, chi = 0, nam;
var data=[];
var aa = JSON.parse(JSON.stringify(daa))
var nn = namelist[name] + "";
var kk;
if(TYPE==0){
    kk=5;
}else{
    kk=6
}
if(PP==0){
// if (namelist[name] == 0) {
    var occ = [];
    for (i = 1; i <= kk; i++) {
            var count = aa[day]["children"][i]["children"].length;
            var cc;
            var ccc;
            var oc = [];
            for (j = 0; j < count; j++) {
                    cc = aa[day]["children"][i]
                    ["children"][j]["children"].length;
                    ccc = aa[day]["children"][i]
                    ["children"][j]["children"];
                    var ctt=[]
                    mm = cc
                    for(k=0;k<mm;k++){
                      if(ccc[k].index==0){
                        cc = cc-1;
                      }
                      else if(ccc[k].index!=0){
                        ctt.push(ccc[k]);
                      }
                    }
                    oc = oc.concat(ctt);
                    chi = chi + cc;
                    
            }
            occ = occ.concat(oc);
    }


CH=chi;
var cut=0
for (var j = 0; j < chi; j++) {
    var da={};
    da.id=j+1+"";
    if (occ[j].index!=0&&occ[j].index!= null) {
            da.nam = occ[j].name;
            id = namelist[da.nam] +'';
            da.Group = ELIST[idlist[id[0]]];
            da['Index/%'] = occ[j].index.toFixed(2)
            da["Weight/%"] = (occ[j].reweight*100).toFixed(2);
            da["Contribution/%"] = (da['Index/%']*da["Weight/%"]/100).toFixed(2);
            da["Base Price/¥"] = occ[j].base.toFixed(2);
            // basel = occ[j].basesalel;
            // basee = occ[j].basesalee / 10000;
            da["Price of the Day/¥"] = occ[j].price.toFixed(2);
            
            if (da['Index/%'] == null) {
                da['Index/%'] = 0;
            }
            if (da["Price of the Day/¥"] == null) {
                da["Price of the Day/¥"] = 0;
            }
            
    }



if(da.nam!=undefined){
    data.push(da);
    
    da.id=cut;
    cut++;
}
}
console.log(data)
var width = document.getElementById("downright1body").clientWidth-140;

var height = document.getElementById("downright1body").clientHeight-60;
var margin = {top: 30, right: 40, bottom: 10, left: 100}
d3.select("#downright1body").selectAll("svg").remove()
 
var types = {
  "Number": {
      key: "Number",
      coerce: function(d) { return +d; },
      extent: d3.extent,
      within: function(d, extent, dim) {
          return extent[0] <= dim.scale(d) && dim.scale(d) <= extent[1];
      },
      defaultScale: d3.scaleLinear().range([0, height])
  },
  "String": {
      key: "String",
      coerce: String,
      extent: function (data) { return data.sort(); },
      within: function(d, extent, dim) {
          return extent[0] <= dim.scale(d) && dim.scale(d) <= extent[1];
          },
      defaultScale: d3.scalePoint().range([0, height])

  },
  "Date": {
      key: "Date",
      coerce: function(d) { return new Date(d); },
      extent: d3.extent,
      within: function(d, extent, dim) { return extent[0] <= dim.scale(d) && dim.scale(d) <= extent[1]; },
      defaultScale: d3.scaleTime().range([0, height])
  }
};

var dimensions = [
  {
      key: "Group",
      description: "Network community",
      type: types["String"],
      scale: d3.scalePoint().range([height, 0])
  },
  {
      key: "Index/%",
      type: types["Number"],
      scale: d3.scaleLinear().range([height, 0])
  },
  {
      key: "Weight/%",
      description: "Closness centrality",
      type: types["Number"],
      scale: d3.scaleLinear().range([height, 0])
  },
  {
      key: "Contribution/%",
      description: "Harmonic closness centrality",
      type: types["Number"],
      scale: d3.scaleLinear().range([height, 0])
  },
  {
      key: "Price of the Day/¥",
      description: "Betweeness centrality",
      type: types["Number"],
      scale: d3.scaleLinear().range([height, 0])
  },
  {
      key: "Base Price/¥",
      description: "Eigenvector centrality",
      type: types["Number"],
      scale: d3.scaleLinear().range([height, 0])
  }
];

var x_scale = d3.scalePoint()
      .domain(dimensions.map(function(dim) { return dim.key; }))
      .range([0, width]),
  y = {},
  dragging = {};

// var line = d3.line().curve(d3.curveBasis),
var line = d3.line(),
  y_axis = d3.axisLeft(),
  background,
  foreground;

var svg = d3.select("#downright1body").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");




  // pre-processing for each type of data
  data.forEach(function(d) {
      dimensions.forEach(function(p) {
          d[p.key] = !d[p.key] ? null : p.type.coerce(d[p.key]);
      });
      // truncate long text strings to fit in data table
      for (var key in d) {
          if (d[key] && d[key].length > 35) d[key] = d[key].slice(0,36);
      }
  });

  // type/dimension default setting happens here
  dimensions.forEach(function(dim) {
      if (!("domain" in dim)) {
          // detect domain using dimension type's extent function
          dim.domain = d3_functor(dim.type.extent)(data.map(function(d) { return d[dim.key]; }));

          // setting y's range of each dimension (axis)
          if(dim.type.key == types["Number"].key){
              y[dim.key] = d3.scaleLinear()
                  .domain(dim.domain)
                  .range([height, 0]);

          }else if(dim.type.key == types["String"].key){
              y[dim.key] = d3.scalePoint()
                  .domain(dim.domain)
                  .range([height, 0]);
          }
      }
      if (!("scale" in dim)) {
          // use type's default scale for dimension
          dim.scale = dim.type.defaultScale.copy();
      }

      // set domain to scale
      dim.scale.domain(dim.domain);
  });

  // Add grey background lines for context.
  background = svg.append("g")
      .attr("class", "background")
      .selectAll("path")
      .data(data)
      .enter().append("path")
      .attr("d", path);

  // Add blue foreground lines for focus.
  var c1=c2=c3=c4=c5=0
  foreground = svg.append("g")
      .attr("class", "foreground")
      .selectAll("path")
      .data(data)
      .enter().append("path")
      .style("stroke",function(d){
        
        if(rr==d.nam){
            return 'black';
          }
          else{
            var z = namelist[d.nam] + "";
            if(z.length==5){
              var c=hsv(COLLIST[z])
              return c;
              }
          }
      })
      .style("stroke-width",function(d){
        if(rr==d.nam){
            return '4';
          }
      })
      .style("opacity",function(d){
        if(rr==d.nam){
            return 1;
          }
        else{
            return 0.6
        }
      })
      .attr("d", path)
      .on('click',function(d){
        var z = namelist[d.nam] + "";
        if(z.length==5){
            box(d.nam, CURRENT_TYPE, GLOBAL_DATA)
            pie(ELIST[d.nam], COLLIST[z])
        }
       })

  // Add a group element for each dimension.
  var g = svg.selectAll(".dimension")
      .data(dimensions)
      .enter().append("g")
      .attr("class", "dimension")
      .attr("transform", function(d) { return "translate(" + x_scale(d.key) + ")"; })
      .call(d3.drag()

          .on("start", function(d) {
              dragging[d.key] = x_scale(d.key);
              background.attr("visibility", "hidden");
          })
          .on("drag", function(d) {
              dragging[d.key] = Math.min(width, Math.max(0, d3.event.x));
              foreground.attr("d", path);
              dimensions.sort(function(a, b) { return position(a.key) - position(b.key); });
              x_scale.domain(dimensions.map(function(dim){return dim.key;}));
              g.attr("transform", function(d) { return "translate(" + position(d.key) + ")"; })
          })
          .on("end", function(d) {
              delete dragging[d.key];
              transition(d3.select(this)).attr("transform", "translate(" + x_scale(d.key) + ")");
              transition(foreground).attr("d", path);
              background
                  .attr("d", path)
                  .transition()
                  .delay(500)
                  .duration(0)
                  .attr("visibility", null);
          }));

  // Add an axis and title.
  g.append("g")
      .attr("class", "axis")
      .each(function(d) {
          d3.select(this).call(y_axis.scale(y[d.key])); })
      .append("text")
      .style("text-anchor", "middle")
      .style("fill",'black')
      .attr('y', -6)
      .style("font-size",'12px')
      .style("font-weight",'bold')
      .style("line-height",'20px')
      .text(function(d) { return d.key; });

  // Add and store a brush for each axis.
  g.append("g")
      .attr("class", "brush")
      .each(function(d) {
          d3.select(this).call(y[d.key].brush = d3.brushY()
              .extent([[-10, 0], [10, height]])
              .on("start", brushstart)
              .on("brush", brush)
              .on("end", brush)
          )

          // d3.select(this).call(y[d].brush = d3.brush().extent([ [0,0], [1,y[d]] ]).on("start", brushstart).on("brush", brush));
          // d3.select(this).call(d3.brushY().on("start", brushstart).on("brush", brush));
      })
      .selectAll("rect")
      .attr("x", -8)
      .attr("width", 16);



  // Handles a brush event, toggling the display of foreground lines.
  function brush() {

      // get active brush objects
      var actives = [];
      d3.selectAll(".brush")
          .filter(function(d) {
              return d3.brushSelection(this);
          })
          .each(function(d) {
              actives.push({
                  dimension: d,
                  extent: d3.brushSelection(this)
              });
          });

      foreground.style("display", function(d) {
          return actives.every(function(active) {
              var dim = active.dimension;
              // test if point is within extents for each active
              return dim.type.within(d[dim.key], active.extent, dim);
              // return extents[i][0] <= d[p.dimension] && d[p.dimension] <= extents[i][1];
          }) ? null : "none";
      });


      var selected = data.filter(function(d) {
          if (actives.every(function(active) {
                  var dim = active.dimension;
                  // test if point is within extents for each active brush
                  return dim.type.within(d[dim.key], active.extent, dim);
              })) {
              return true;
          }
      });

      // selected가 활성화된 pc-lines.

  }



function position(d) {
  var v = dragging[d];
  return v == null ? x_scale(d) : v;
}

function transition(g) {
  return g.transition().duration(500);
}

// Returns the path for a given data point.
function path(d) {
  return line(dimensions.map(function(p) {
      return [position(p.key), y[p.key](d[p.key])]; }));
}

function brushstart() {
  d3.event.sourceEvent.stopPropagation();
}


function d3_functor(v) {
  return typeof v === "function" ? v : function() { return v; };
};
}
else{
  var cut=0
  for(i=0;i<date.length;i++){
    var da={}
    ch = aa[date[i]]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
        ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
        ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name]]; })
        da.nam = ch.name;
        id = namelist[da.nam] +'';
        da.Date = date[i];
        da['Index/%'] = ch.index.toFixed(2)
        da["Weight/%"] = (ch.reweight*100).toFixed(2);
        da["Contribution/%"] = (da['Index/%']*da["Weight/%"]/100).toFixed(2);
        da["Base Price/¥"] = ch.base.toFixed(2);
        // basel = occ[j].basesalel;
        // basee = occ[j].basesalee / 10000;
        da["Price of the Day/¥"] = ch.price.toFixed(2);
        
        if (da['Index/%'] == null) {
            da['Index/%'] = 0;
        }
        if (da["Price of the Day/¥"] == null) {
            da["Price of the Day/¥"] = 0;
        }
        if(da.nam!=undefined){
          data.push(da);
          
          da.id=cut;
          cut++;
      }
    }
var width = document.getElementById("downright1body").clientWidth-140;

var height = document.getElementById("downright1body").clientHeight-40;
var margin = {top: 30, right: 60, bottom: 10, left: 80}
d3.select("#downright1body").selectAll("svg").remove()
 
var types = {
  "Number": {
      key: "Number",
      coerce: function(d) { return +d; },
      extent: d3.extent,
      within: function(d, extent, dim) {
          return extent[0] <= dim.scale(d) && dim.scale(d) <= extent[1];
      },
      defaultScale: d3.scaleLinear().range([0, height])
  },
  "String": {
      key: "String",
      coerce: String,
      extent: function (data) { return data.sort(); },
      within: function(d, extent, dim) {
          return extent[0] <= dim.scale(d) && dim.scale(d) <= extent[1];
          },
      defaultScale: d3.scalePoint().range([0, height])

  },
  "Date": {
      key: "Date",
      coerce: function(d) { return new Date(d); },
      extent: d3.extent,
      within: function(d, extent, dim) { return extent[0] <= dim.scale(d) && dim.scale(d) <= extent[1]; },
      defaultScale: d3.scaleTime().range([0, height])
  }
};

var dimensions = [
  {
      key: "Date",
      description: "Network community",
      type: types["Date"],
      scale: d3.scaleTime().range([height, 0])
  },
  {
      key: "Base Price/¥",
      type: types["Number"],
      scale: d3.scaleLinear().range([height, 0])
  },
  {
      key: "Weight/%",
      description: "Closness centrality",
      type: types["Number"],
      scale: d3.scaleLinear().range([height, 0])
  },
  {
      key: "Index/%",
      description: "Harmonic closness centrality",
      type: types["Number"],
      scale: d3.scaleLinear().range([height, 0])
  },
  {
      key: "Contribution/%",
      description: "Betweeness centrality",
      type: types["Number"],
      scale: d3.scaleLinear().range([height, 0])
  },
  {
      key: "Price of the Day/¥",
      description: "Eigenvector centrality",
      type: types["Number"],
      scale: d3.scaleLinear().range([height, 0])
  }
];

var x_scale = d3.scalePoint()
      .domain(dimensions.map(function(dim) { return dim.key; }))
      .range([0, width]),
  y = {},
  dragging = {};

// var line = d3.line().curve(d3.curveBasis),
var line = d3.line(),
  y_axis = d3.axisLeft(),
  background,
  foreground;

var svg = d3.select("#downright1body").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");




  // pre-processing for each type of data
  data.forEach(function(d) {
      dimensions.forEach(function(p) {
          d[p.key] = !d[p.key] ? null : p.type.coerce(d[p.key]);
      });
      // truncate long text strings to fit in data table
      for (var key in d) {
          if (d[key] && d[key].length > 35) d[key] = d[key].slice(0,36);
      }
  });

  // type/dimension default setting happens here
  dimensions.forEach(function(dim) {
      if (!("domain" in dim)) {
          // detect domain using dimension type's extent function
          if(dim.key!="Index/%"&&dim.key!="Price of the Day/¥"&&dim.key!="Contribution/%"){
          dim.domain = d3_functor(dim.type.extent)(data.map(function(d) { return d[dim.key]; }));
          if(dim.key=='Base Price/¥'){
            dim.domain=[dim.domain[0]-1,dim.domain[0]+1]
          }
          console.log(dim.domain)
          }
          else{
          var gc=[]
              for(i=0;i<data.length;i++){
                gc[i]=data[i][dim.key]
              }
          gc.sort()
          var qq=[]
          var max
          var min
          qq=boxQuartiles(gc)
          var IQR = qq[2]-qq[0]
          var lMin = qq[0]-1.5*IQR
          var lMax = qq[2]+1.5*IQR
          if(lMin>=gc[0]){
            min=gc[0]
          }
          else{
            min=lMin
          }
          if(lMax>=gc[gc.length-1]){
            max=lMax
          }
          else{
            max=gc[gc.length-1]
          }
          dim.domain=[min-10, max+10]
        }
          // setting y's range of each dimension (axis)
          if(dim.type.key == types["Number"].key){
              y[dim.key] = d3.scaleLinear()
                  .domain(dim.domain)
                  .range([height, 0]);

          }else if(dim.type.key == types["String"].key){
              y[dim.key] = d3.scalePoint()
                  .domain(dim.domain)
                  .range([height, 0]);
          }else if(dim.type.key == types["Date"].key){
            y[dim.key] = d3.scaleTime()
                .domain(dim.domain)
                .range([height, 0]);
        }
      }
      if (!("scale" in dim)) {
          // use type's default scale for dimension
          dim.scale = dim.type.defaultScale.copy();
      }

      // set domain to scale
      dim.scale.domain(dim.domain);
  });

  // Add grey background lines for context.
  background = svg.append("g")
      .attr("class", "background")
      .selectAll("path")
      .data(data)
      .enter().append("path")
      .attr("d", path);

  // Add blue foreground lines for focus.
  var c1=c2=c3=c4=c5=0
  foreground = svg.append("g")
      .attr("class", "foreground")
      .selectAll("path")
      .data(data)
      .enter().append("path")
      .style("stroke",function(d){
        
        if(rr==d.nam){
            return 'black';
          }
          else{
            var z = namelist[d.nam] + "";
            if(z.length==5){
              var c=hsv(COLLIST[z])
              return c;
              }
          }
      })
      .style("stroke-width",function(d){
        if(rr==d.nam){
            return '4';
          }
      })
      .style("opacity",function(d){
        if(rr==d.nam){
            return 1;
          }
        else{
            return 0.6
        }
      })
      .attr("d", path)
      .on('click',function(d){
        var z = namelist[d.nam] + "";
        if(z.length==5){
            pie(ELIST[d.nam], COLLIST[z])
        }
       })

  // Add a group element for each dimension.
  var g = svg.selectAll(".dimension")
      .data(dimensions)
      .enter().append("g")
      .attr("class", "dimension")
      .attr("transform", function(d) { return "translate(" + x_scale(d.key) + ")"; })
      .call(d3.drag()

          .on("start", function(d) {
              dragging[d.key] = x_scale(d.key);
              background.attr("visibility", "hidden");
          })
          .on("drag", function(d) {
              dragging[d.key] = Math.min(width, Math.max(0, d3.event.x));
              foreground.attr("d", path);
              dimensions.sort(function(a, b) { return position(a.key) - position(b.key); });
              x_scale.domain(dimensions.map(function(dim){return dim.key;}));
              g.attr("transform", function(d) { return "translate(" + position(d.key) + ")"; })
          })
          .on("end", function(d) {
              delete dragging[d.key];
              transition(d3.select(this)).attr("transform", "translate(" + x_scale(d.key) + ")");
              transition(foreground).attr("d", path);
              background
                  .attr("d", path)
                   .transition()
                  .delay(500)
                  .duration(0)
                  .attr("visibility", null);
          }));

  // Add an axis and title.
  g.append("g")
      .attr("class", "axis")
      .each(function(d) {
        
          if(d.key!="Index/%"&&d.key!="Price of the Day/¥"&&d.key!="Contribution/%"){
           
            d3.select(this).call(y_axis.scale(y[d.key]))
            var yScale = d3.scaleLinear()
            .domain(d.domain)
            .range([height, 0]);
            var dm=d.domain
    
            var boxPlotData=[]
            var g = d3.select(this).append("g")
            var horizontalLineConfigs = [
              
              {
                x1: function() { return 0 - 8 },
                y1: function(datum) { return yScale(dm[0]) },
                x2: function() { return 0 + 8 },
                y2: function(datum) { return yScale(dm[0]) },
            
                },
                // Bottom whisker
              {
                x1: function() { return 0 - 8 },
                y1: function(datum) { return yScale(dm[1]) },
                x2: function() { return 0 + 8 },
                y2: function(datum) { return yScale(dm[1]) },
                
                },
                 // Bottom whisker
              {
                x1: function() { return 0 - 8 },
                y1: function(datum) { return yScale(dm[0]) },
                x2: function() { return 0 - 8 },
                y2: function(datum) { return yScale(dm[1]) },
                },
                {
                  x1: function() { return 0 + 8 },
                  y1: function(datum) { return yScale(dm[0]) },
                  x2: function() { return 0 + 8 },
                  y2: function(datum) { return yScale(dm[1]) },
                  },
              ];
              
              for(var i=0; i < horizontalLineConfigs.length; i++) {
              var lineConfig = horizontalLineConfigs[i];
              // Draw the whiskers at the min for this series
              var horizontalLine = g.selectAll(".whiskers")
              .data(boxPlotData)
              .enter()
              .append("line")
              .attr("x1", lineConfig.x1)
              .attr("y1", lineConfig.y1)
              .attr("x2", lineConfig.x2)
              .attr("y2", lineConfig.y2)
              .attr("stroke", "#000")
              .attr("stroke-width", 1)
              .attr("fill", "none");
          }
        }
          else{
            var dm=d.domain
              var groupCount=[]
              for(i=0;i<data.length;i++){
                groupCount[i]=data[i][d.key]
              }
          
            // set the dimensions and margins of the graph
            var margin = {top: 0, right: 0, bottom: 0, left: 0};
            var width = 40; 
            
            var barWidth = 10;
            // // Generate five 100 count, normal distributions with random means
            // var groupCounts = {};
            // var globalCounts = [];
            // var meanGenerator = d3.randomUniform(10);
            // for(i=0; i <= 5; i++) {
            // var randomMean = meanGenerator();
            // var generator = d3.randomNormal(randomMean);
            // var key = i.toString();
            // groupCounts[key] = [];
            
            // for(j=0; j<100; j++) {
            // var entry = generator();
            // groupCounts[key].push(entry);
            // globalCounts.push(entry);
            // }
            // }
            
            // // Sort group counts so quantile methods work
            // for(var key in groupCounts) {
            // var groupCount = groupCounts[key];
            // groupCounts[key] = groupCount.sort(sortNumber);
            // }
            
            // // Setup a color scale for filling each box
            // var colorScale = d3.scaleOrdinal(d3.schemeCategory10)
            // .domain(Object.keys(groupCounts));
            
            // Prepare the data for the box plots
            var boxPlotData = [];
            
            var obj = {};
            obj["key"] = 0;
            obj["counts"] = groupCount;
            var gc=JSON.parse(JSON.stringify(groupCount))
            gc.sort()
            // var sorted=groupCount.sort()
            obj["quartile"] = boxQuartiles(gc);
            var IQR = obj["quartile"][2]-obj["quartile"][0]
            var localMin = obj["quartile"][0]-1.5*IQR
            var localMax = obj["quartile"][2]+1.5*IQR
            obj["whiskers"] = [localMin, localMax,];
            boxPlotData.push(obj);

            
            var yScale = d3.scaleLinear()
            .domain(d.domain)
            .range([height, 0]);
            
            // append the svg obgect to the body of the page
            // appends a 'group' element to 'svg'
            // moves the 'group' element to the top left margin
            var g = d3.select(this).append("g")

            
            // append a group for the box plot elements
            
            // Draw the box plot vertical lines
            var verticalLines = g.selectAll(".verticalLines")
            .data(boxPlotData)
            .enter()
            .append("line")
            .attr("x1", function() { return 0; })
            .attr("x2", function() { return 0; })
            .attr("y1", function(datum) { return yScale(datum.whiskers[0]); })
            .attr("y2", function(datum) { return yScale(datum.whiskers[1]); })
            .attr("stroke", "#000")
            .attr("stroke-width", 1)
            .attr("fill", "none")
         
            // Draw the boxes of the box plot, filled and on top of vertical lines
            var rects = g.selectAll("rect")
            .data(boxPlotData)
            .enter()
            .append("rect")
            .attr("width", barWidth)
            .attr("height", function(datum) {
            var quartiles = datum.quartile;
            var height =  yScale(quartiles[0]) - yScale(quartiles[2]);      
            return height;
            })
            .attr("x", function() { return 0 - (barWidth/2); })
            .attr("y", function(datum) { return yScale(datum.quartile[2]); })
            .attr("fill", 'none')
            .attr("stroke", "#000")
            .attr("stroke-width", 1);
            
            // Now render all the horizontal lines at once - the whiskers and the median
            var horizontalLineConfigs = [
            // Top whisker
            {
            x1: function() { return 0- barWidth/2 },
            y1: function(datum) { return yScale(datum.whiskers[0]) },
            x2: function() { return 0 + barWidth/2 },
            y2: function(datum) { return yScale(datum.whiskers[0]) },
            x3: function() { return 0+35 + barWidth/2 },
            text: function(datum) { return (datum.whiskers[0]).toFixed(2) },
            },
            // Median line
            {
            x1: function() { return 0 - barWidth/2 },
            y1: function(datum) { return yScale(datum.quartile[1]) },
            x2: function() { return 0 + barWidth/2 },
            y2: function(datum) { return yScale(datum.quartile[1]) },
            x3: function() { return 0+35 + barWidth/2 },
            text: function(datum) { return (datum.quartile[1]).toFixed(2) },
            },
            //Q1
            {
              x1: function() { return 0 - barWidth/2 },
              y1: function(datum) { return yScale(datum.quartile[0]) },
              x2: function() { return 0 + barWidth/2 },
              y2: function(datum) { return yScale(datum.quartile[0]) },
              x3: function() { return 0-10 - barWidth/2 },
              text: function(datum) { return (datum.quartile[0]).toFixed(2) },
              },
            //Q3
            {
              x1: function() { return 0 - barWidth/2 },
              y1: function(datum) { return yScale(datum.quartile[2]) },
              x2: function() { return 0 + barWidth/2 },
              y2: function(datum) { return yScale(datum.quartile[2]) },
              x3: function() { return 0-10 - barWidth/2 },
              text: function(datum) { return (datum.quartile[2]).toFixed(2) },
              },
            // Bottom whisker
            {
            x1: function() { return 0 - barWidth/2 },
            y1: function(datum) { return yScale(datum.whiskers[1]) },
            x2: function() { return 0 + barWidth/2 },
            y2: function(datum) { return yScale(datum.whiskers[1]) },
            x3: function() { return 0+35 + barWidth/2 },
            text: function(datum) { return (datum.whiskers[1]).toFixed(2) },
            },
            // Bottom whisker
            {
              x1: function() { return 0 - 8 },
              y1: function(datum) { return yScale(dm[0]) },
              x2: function() { return 0 + 8 },
              y2: function(datum) { return yScale(dm[0]) },
              x3: function() { return 0-10 - barWidth/2 },
              text: function(datum) { return (dm[0]).toFixed(2) },
              },
              // Bottom whisker
            {
              x1: function() { return 0 - 8 },
              y1: function(datum) { return yScale(dm[1]) },
              x2: function() { return 0 + 8 },
              y2: function(datum) { return yScale(dm[1]) },
              x3: function() { return 0-10 - barWidth/2 },
              text: function(datum) { return (dm[1]).toFixed(2) },
              },
               // Bottom whisker
            {
              x1: function() { return 0 - 8 },
              y1: function(datum) { return yScale(dm[0]) },
              x2: function() { return 0 - 8 },
              y2: function(datum) { return yScale(dm[1]) },
              },
              {
                x1: function() { return 0 + 8 },
                y1: function(datum) { return yScale(dm[0]) },
                x2: function() { return 0 + 8 },
                y2: function(datum) { return yScale(dm[1]) },
                },
            ];
            
            for(var i=0; i < horizontalLineConfigs.length; i++) {
            var lineConfig = horizontalLineConfigs[i];
            // Draw the whiskers at the min for this series
            var horizontalLine = g.selectAll(".whiskers")
            .data(boxPlotData)
            .enter()
            .append("line")
            .attr("x1", lineConfig.x1)
            .attr("y1", lineConfig.y1)
            .attr("x2", lineConfig.x2)
            .attr("y2", lineConfig.y2)
            .attr("stroke", "#000")
            .attr("stroke-width", 1)
            .attr("fill", "none");
            g.selectAll(".whiskers")
            .data(boxPlotData)
            .enter()
            .append("text")
                      .attr("class", "box")
                      .attr("dy", ".3em")
                      .attr("dx", ".3em")
                      .attr("x", lineConfig.x3)
                      .attr("y", lineConfig.y1)
                      .style('font-size','10px')
                      .attr("text-anchor", function(d, i) { return i & 1 ? "start" : "end"; })
                      .text(lineConfig.text)
            }
            
              
           
            
           
          }
      })
      .append("text")
      .style("text-anchor", "middle")
      .style("fill",'black')
      .attr('y', -6)
      .style("font-size",'12px')
      .style("font-weight",'bold')
      .style("line-height",'20px')
      .text(function(d) { return d.key; });

  // Add and store a brush for each axis.
  g.append("g")
      .attr("class", "brush")
      .each(function(d) {
        console.log(d)
          d3.select(this).call(y[d.key].brush = d3.brushY()
              .extent([[-10, 0], [10, height]])
              .on("start", brushstart)
              .on("brush", brush)
              .on("end", brush)
          )
          // d3.select(this).call(y[d].brush = d3.brush().extent([ [0,0], [1,y[d]] ]).on("start", brushstart).on("brush", brush));
          // d3.select(this).call(d3.brushY().on("start", brushstart).on("brush", brush));
      })
      .selectAll("rect")
      .attr("x", -8)
      .attr("width", 16)
      .attr("stroke", "black")
      .attr("stroke-width", 1)
      .style("fill",'black')
      .style("opacity","0.2")

      function boxQuartiles(d) {
        return [
          d3.quantile(d, .25),
          d3.quantile(d, .5),
          d3.quantile(d, .75)
        ];
        }

  // Handles a brush event, toggling the display of foreground lines.
  function brush() {

      // get active brush objects
      var actives = [];
      d3.selectAll(".brush")
          .filter(function(d) {
              return d3.brushSelection(this);
          })
          .each(function(d) {
              actives.push({
                  dimension: d,
                  extent: d3.brushSelection(this)
              });
          });

      foreground.style("display", function(d) {
          return actives.every(function(active) {
              var dim = active.dimension;
              // test if point is within extents for each active
              return dim.type.within(d[dim.key], active.extent, dim);
              // return extents[i][0] <= d[p.dimension] && d[p.dimension] <= extents[i][1];
          }) ? null : "none";
      });


      var selected = data.filter(function(d) {
          if (actives.every(function(active) {
                  var dim = active.dimension;
                  // test if point is within extents for each active brush
                  return dim.type.within(d[dim.key], active.extent, dim);
              })) {
              return true;
          }
      });

      // selected가 활성화된 pc-lines.

  }



function position(d) {
  var v = dragging[d];
  return v == null ? x_scale(d) : v;
}

function transition(g) {
  return g.transition().duration(500);
}

// Returns the path for a given data point.
function path(d) {
  return line(dimensions.map(function(p) {
      return [position(p.key), y[p.key](d[p.key])]; }));
}

function brushstart() {
  d3.event.sourceEvent.stopPropagation();
}


function d3_functor(v) {
  return typeof v === "function" ? v : function() { return v; };
};
}
    

        });
    });
}
