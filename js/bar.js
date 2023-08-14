function bar(data, day, name,width,height,sp){
  d3.select("#rightdownrightbody1").selectAll("svg").remove()
    var id = namelist[name] + '';
    var list1 = JSON.parse(JSON.stringify(data))
    var da = [];
  if (name == "总") {
    for (i in idlist) {
      if (i.length == 5) {
        var val = list1[day]['children']
          .find(function (x) { return x.name == idlist[i[0]]; })["children"]
          .find(function (x) { return x.name == idlist[i[0] + i[1] + i[2]]; })["children"]
          .find(function (x) { return x.name == idlist[i]; })["price"]
        
          var temo = {}
          temo["name"] = idlist[i]
          temo['value'] = val
          da.push(temo)
       

      }
    }
  }

  else if (id.length == 1) {
    for (i in idlist) {
      if (i.length == 5 && i[0] == id) {
        var val = list1[day]['children']
          .find(function (x) { return x.name == idlist[i[0]]; })["children"]
          .find(function (x) { return x.name == idlist[i[0] + i[1] + i[2]]; })["children"]
          .find(function (x) { return x.name == idlist[i]; })["price"]
        
          var temo = {}
          temo["name"] = idlist[i]
          temo['value'] = val
          da.push(temo)
       

      }
    }
  }
  else if (id.length == 3) {
    for (i in idlist) {
      if (i.length == 5 && (i[0] + i[1] + i[2]) == id) {
        var val = list1[day]['children']
          .find(function (x) { return x.name == idlist[i[0]]; })["children"]
          .find(function (x) { return x.name == idlist[i[0] + i[1] + i[2]]; })["children"]
          .find(function (x) { return x.name == idlist[i]; })["price"]
       
          var temo = {}
          temo["name"] = idlist[i]
          temo['value'] = val
          da.push(temo)
        

      }
    }
  }
  else if (id.length == 5) {
    for (i in idlist) {
      if (i.length == 5 && i == id) {
        var val = list1[day]['children']
          .find(function (x) { return x.name == idlist[i[0]]; })["children"]
          .find(function (x) { return x.name == idlist[i[0] + i[1] + i[2]]; })["children"]
          .find(function (x) { return x.name == idlist[i]; })["price"]
        
          var temo = {}
          temo["name"] = idlist[i]
          temo['value'] = val
          da.push(temo)
        

      }
    }
  }
  dataset=[]
  datatext=[]
  for(i in da){
      if(da[i].value==undefined){
        da[i].value=0;
      }
    dataset.push(da[i].value);
    datatext.push(da[i].name);
  }
  console.log(dataset)
var min = d3.min(dataset);
var max = d3.max(dataset);

var linear = d3.scaleLinear()//比例尺
        .domain([min, max])
        .range([0, 200]);
var svg = d3.select('#rightdownrightbody1')
.append('svg')
.attr('width',width)
.attr('height',height)
.attr("transform", "translate(" + 355 + "," + -372 + ")");

//添加矩形
var rects = svg.selectAll('rect')//选择svg内所有的矩形
.data(dataset)//绑定数组
.enter()//指定选择集的enter部分
.append('rect')//添加足够数量的矩形元素
.attr('x','20')
.attr('y',function(d,i){return i*(sp+3.6)})
.attr("id",function(d,i){
  return i;
})
.on("mouseover",function(d,i){
d3.select(this)
.attr("fill","yellow");
console.log(this.id);
})

.on("mouseout",function(d,i){
d3.select(this)
.transition()
.duration(500)
.attr("fill","#709daf7c");
})
.transition()
.duration(2000)
.attr('width',function(d){return linear(d)})//比例尺在宽度时给定
.attr('height',sp)
.attr("fill","#709daf7c");      //填充颜色不要写在CSS里

// var texts = svg.selectAll("text")
// .data(datatext)
// .enter()
// .append("text")
// .attr("class","MyText")
// .attr("x", function(d){return linear(d)+25}) //左上角
// .attr("y",function(d,i){return i*25+15}) //基线（文字底部）
// //.attr("dx",function(d){return linear(d)})
// // .attr("dy",'20')
// .text(function(d){
// return d;
// });

//定义坐标轴
// var axis = d3.axisBottom()//比例尺的位置
// .scale(linear)
// .ticks(4);//指定比例尺

// console.log(axis);
//  
// svg.append("g")
// .attr("class","axis")
// .attr("transform","translate(20,130)")
//     .call(axis); //axis(svg)
}