

var mcolor1 = ["#ff5e63","#6e40aa","#417de0","#aff05b","#efa72f"];
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
//红 300-10
//绿 80-165
//紫 280-265
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
function trees(name, data, daa, namelist, idlist,ff) {

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
   // 节点宽度
   var rectWidth = 110;
   // 节点高度
   var rectHeight = 46;
    var z = JSON.parse(JSON.stringify(data))
    var mcolor1 = ["#ff5e63","#6e40aa","#417de0","#aff05b","#efa72f"];
var cc = [1, 2, 3, 4, 5]
    var id = namelist[name] + '';
    zz = z[daa]
    var zzz={}
    zzz.name="总"
    zzz["children"]=[]
    zzz["children"][0]=zz["children"]["1"]
    zzz["children"][1]=zz["children"]["2"]
    zzz["children"][2]=zz["children"]["3"]
    zzz["children"][3]=zz["children"]["4"]
    zzz["children"][4]=zz["children"]["5"]
  
    // if (id.length == 1 || name == "总") {
        
    // }
    // else if (id.length == 3) {
    //     zz = z[day]["children"].find(function (x) { return x.name == idlist[id[0]]; })
    // }
    // else if (id.length == 5) {
    //     j = id[0] + id[1] + id[2]
    //     zz = z[day]["children"].find(function (x) { return x.name == idlist[id[0]]; })["children"].find(function (x) { return x.name == idlist[j]; })
    // }
    var width = document.getElementById("right12body").clientWidth;

    var height = document.getElementById("right12body").clientHeight-30;
    d3.select("#right12body").selectAll("svg").remove()
    var svg = d3.select("#right12body").append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      var treemap=d3.treemap()
      .tile(d3.treemapBinary)
      .size([width,height])
      .round(true)
      .padding(1);
     
     
     
    var hi=d3.hierarchy(zzz)
    .sum(function(d){
      if(ff==0){
          return d.index;
    } 
    else if(ff==1){
      return d.reweight;
    } 
    else{
      return d.index*d.reweight;
    }
  })
    
     
    treemap(hi);
     var c1=c2=c3=c4=c5=0
    var cell=svg.selectAll("g")
    .data(hi.descendants())
    .enter().append("g");
    cell.append("rect")
      .attr("x",function(d){ return d.x0; })
      .attr("y",function(d){ return d.y0; })
      .attr("id",function(d){ return namelist[d.data.name]; } )
      .attr("width",function(d){ return d.x1-d.x0; })
      .attr("height",function(d){ return d.y1-d.y0; })
      .attr("stroke",function(d){
        if(d.data.name==CURRENT_NAME){
          return "black";
        }
        else{
          return "white";
        }
      })
      
      .attr("fill",function(d){
        var z = namelist[d.data.name] + "";
        if(z.length!=5){
          return 'gray';
        }
      else {
                  var c=hsv(COLLIST[z])
                  return c;
                }
              

      })
      .on("mouseover",function(d){
        var z = namelist[d.data.name] + "";
        if(z.length==5){
          
//           bb=JSON.parse(JSON.stringify(GLOBAL_DATA))
//           var data=[]
//           var so=[]
//           var he=[]
//           var daa
//           if(TYPE==0){
//             daa=357
//           }
//           else{
//             daa=50
//           }
//           for(i=0;i<=daa;i++){
//            var xy={}
           
//            if(bb[date[i]]["children"].find(function (x) { return x.name == idlist[namelist[d.data.name].substring(0, 1)]; })
//            ["children"].find(function (x) { return x.name == idlist[namelist[d.data.name].substring(0, 3)]; })
//            ["children"].find(function (x) { return x.name == idlist[namelist[d.data.name].substring(0, 5)]; }).index!=null){

           
//               xy.y = bb[date[i]]["children"].find(function (x) { return x.name == idlist[namelist[d.data.name].substring(0, 1)]; })
//               ["children"].find(function (x) { return x.name == idlist[namelist[d.data.name].substring(0, 3)]; })
//               ["children"].find(function (x) { return x.name == idlist[namelist[d.data.name].substring(0, 5)]; }).index
//               xy.x=i
//               if((d.y1-d.y0)>(d.x1-d.x0)){
//                 xy.height=parseInt(this.attributes.x.value)+2
//                 xy.width=parseInt(this.attributes.width.value)
//                 }
//                 else{
//                 xy.height=parseInt(this.attributes.height.value)+parseInt(this.attributes.y.value)-2
//                 xy.width=parseInt(this.attributes.height.value)
//                 }
//               so[i]=xy.y
//               he[i]=xy.height;
//               xy.name=d.data.name;
              
//             data.push(xy)
//            }
//           }
          
//             // line(data)
//             var a
//             var a1
//             var b
//             var b1
//             var flag
//             var aa
//             var aa1
//             if((d.y1-d.y0)>(d.x1-d.x0)){
//             flag=0
//             a=parseInt(this.attributes.y.value)
//             a1=parseInt(this.attributes.height.value)
//             b=parseInt(this.attributes.x.value)
//             b1=parseInt(this.attributes.width.value)
//             aa=b
//             aa1=b1+b
//             }
//             else{
//             flag=1
//             a=parseInt(this.attributes.x.value)
//             a1=parseInt(this.attributes.width.value)
//             b=parseInt(this.attributes.y.value)
//             b1=parseInt(this.attributes.height.value)
//             aa=b1+b
//             aa1=b+10
//             }
      
           
// const xScale = d3.scaleLinear()
// .domain([0,daa])
// .range([a, a+a1]);

// const yScale = d3.scaleLinear()
// .domain([70, so.sort(function(a, b){return b-a})[daa]+120])
// .range([aa, aa1])



// var myArea = d3.area()
// .x1(function (d) {
// if(flag==1){
// return xScale(d.x)
// }
// else{
// return yScale(d.y)
// }
// })
// .x0(function (d) {
// if(flag==1){
// return xScale(d.x)
// }
// else{
// return yScale(70);
// }
// })
// .y1(function(d){
// if(flag==1){
// return yScale(70);
// }
// else{
// return xScale(d.x);
// }
// }) 
// .y0(function(d){
// if(flag==1){
// return yScale(d.y)
// }
// else{
// return xScale(d.x)
// }
// })
// d3.select(this).attr("fill","white");
// svg.append("path")
// .data(data)
// .attr("d",myArea(data))
// .style("stroke","none")
// .style("fill",function(d) { 
// console.log(d);

// var z = namelist[d.name] + "";

//            if (z.length!=5) {
//           return "none"
//       }
//       else {
//           var z = namelist[d.name] + "";
//               if(z.length==5){
//                   var c=hsv(COLLIST[z])
//                   return c;
//                 }
              
//       }
      
// })
        }
        if (d.data.name != "总") {
          
      if(ff==0){
        return tooltip.style('visibility', 'visible').text("O " + ELIST[d.data.name] + '\n'+ "index: " + (d.data.index).toFixed(2) + "%")
      }
      else{
        return tooltip.style('visibility', 'visible').text("O " + ELIST[d.data.name] + '\n'+"weight: " + (d.data.reweight*100).toFixed(2) + "%")
      }
                      
                  }
      })
       .on('click',function(d){
        var z = namelist[d.data.name] + "";
        if(z.length==5){
            pie(ELIST[d.data.name], COLLIST[z])
          
        }
       })
          .on('mousemove', function (d, i) {
                        return tooltip.style('top', (event.pageY - 20) + 'px').style('left', (event.pageX- 70) + 'px')
                    })
                    .on('mouseout', function (d, i) {
                        d3.select(this).attr("fill",function(d){
                          var z = namelist[d.data.name] + "";
                          if(z.length==5){
                              var c=hsv(COLLIST[z])
                              return c;
                            } 
                        })
                        d3.select('#downleft1body').selectAll('path').remove()
                            HL=0;
                            var sh={}
                              //  parallel(CURRENT_NAME,CURRENT_DATE,GLOBAL_DATA," ");
                        return tooltip.style('visibility', 'hidden')
                    })

      cell.append("text")
      // .attr("x",function(d) {return d.x0;})
      // .attr("y",function(d) {return d.y0;})
      .attr("x",function(d) { 
        if((d.y1-d.y0)>(d.x1-d.x0)){
        return d.x0;
      }
      else{
        return d.x0+(d.x1-d.x0)/2;
      }
      })
      .attr("y",function(d) {
        if((d.y1-d.y0)>(d.x1-d.x0)){
          return d.y0;
        }
        else{
          return d.y0+(d.y1-d.y0)/2;
        }
          })
      .attr("font-size",function(d){
        if((d.y1-d.y0)>(d.x1-d.x0)){
          if((d.y1-d.y0)/(d.x1-d.x0)>1.2&&(d.y1-d.y0)/(d.x1-d.x0)<2.2){
            return parseInt((d.y1-d.y0)/3.5);
          }
          else if((d.y1-d.y0)/(d.x1-d.x0)>=2.2&&(d.y1-d.y0)/(d.x1-d.x0)<3.2){
            return parseInt((d.y1-d.y0)/4.5)
          }
          else if((d.y1-d.y0)/(d.x1-d.x0)>=3.2){
            return parseInt((d.y1-d.y0)/5.5)
          }
          else if((d.y1-d.y0)/(d.x1-d.x0)<=1.2){
            return parseInt((d.y1-d.y0)/3.5)
          } 
          }
          else{
            if((d.x1-d.x0)/(d.y1-d.y0)>1.1&&(d.x1-d.x0)/(d.y1-d.y0)<2.2){
              return parseInt((d.x1-d.x0)/3.5);
            }
            else if((d.x1-d.x0)/(d.y1-d.y0)>=2.2&&(d.x1-d.x0)/(d.y1-d.y0)<3.2){
              return parseInt((d.x1-d.x0)/4.5)
            }
            else if((d.x1-d.x0)/(d.y1-d.y0)>=3.2){
              return parseInt((d.x1-d.x0)/5.5)
            }
            else if((d.x1-d.x0)/(d.y1-d.y0)<=1.1){
              return parseInt((d.x1-d.x0)/3.5);
            }
            
          }
      })
      .style("text-anchor", "middle")
      .style("dominant-baseline", "middle")
      .style("font-family","Arial Black")
      .attr("fill",function(d){
        var z = namelist[d.data.name] + "";
        if(z.length==5){
          return 'white'
        }
        else{
          return 'transparent'
        }
      })
      .attr("transform", function(d){
        if((d.y1-d.y0)>(d.x1-d.x0)){
          return 'rotate(90,'+d.x0+','+d.y0+')'+'translate('+(d.y1-d.y0)/2+','+(-(d.x1-d.x0)/2)+')' 
        }
    })
          
      .text(function(d){
        
        var z = namelist[d.data.name] + "";
          if(isNaN(d.x0)==false&&z.length==5){return SLIST[d.data.name]}
    } )
    
       
           
          // d3.selectAll('rect').append('div')
          // .attr("x",function(d){ return d.x0; })
          // .attr("y",function(d){ return d.y0; })
          // .attr("id",function(d){ return namelist[d.data.name]; } )
          // .attr("width",function(d){ return d.x1-d.x0; })
          // .attr("height",function(d){ return d.y1-d.y0; })
          
         
        
    // var words_list=data;
  
    // var layout = d3.layout.cloud()
    //     .size([100, 50])
    //     .words(words_list)
    //     .padding(5)
    //     .rotate(function() { return ~~(Math.random() * 2) * 0; })
    //     .font("Impact")
    //     .fontSize(function(d) { return d.size/10; })
    //     .on("end", draw);
    // layout.start();
    // function draw(words) {
    //   cell.attr("width", layout.size()[0])
    //         .attr("height", layout.size()[1])
    //         .selectAll("text")
    //         .data(words)
    //         .enter().append("text")
    //         .style("font-size", function(d) { return d.size + "px"; })
    //         .style("font-family", "Impact")
    //         .style("fill", 'white')
    //         .attr("text-anchor", "middle")
    //         .attr("transform", function(d) {
    //           console.log(d)
    //             return "translate(" + [d.xoff, d.yoff] + ")rotate(" + d.rotate + ")";
    //         })
    //         .text(function(d) { return d.text; });
    // } 
  //  // 绘制文本
  //  function drawText(g, type) {
  //   let fontSize = 14;
  //   // 方法一 使用 text,手动设置换行
  //   appendText(g,type,fontSize);

  //   // 方法二 使用 foreignObject 插入 DOM 节点
  //   // IE 浏览器不支持
  //   // appendXhtml(g,type,fontSize);
    

  // }
  // // 使用 text 添加多个 tspan 绘制文字(方法一)
  // function appendText(g,type,fontSize){
  //   // 给text标签加唯一的class,以便后面为每个拆分的文字添加tspan
  //   let texts = g.selectAll('rect')
  //     .append('text')
  //     .attr('class', function (d) {
  //       console.log(d);
  //       return 'text-id' + NAMELIST[d.data.name].toString().replace(/\./g, '')
  //     })
  //     .attr('width', function (d) {
  //       let rectWidth1 = d.x1-d.x0;
  //       return rectWidth1
  //     })
  //     .attr('height', function(d){
  //       return d.y1-d.y0;
  //     })
  //     .attr('x', function (d) {
          
  //       // let rectWidth1 = d.x1-d.x0;
  //       // let nameLen = d.data.name.length * fontSize;
  //       // let x = 0;
  //       // if (nameLen > rectWidth1) {
  //       //   x = d.x0
  //       // } else {
  //       //   x = (rectWidth1 - nameLen) / 2
  //       // }
  //       return d.x0
  //     })
  //     .attr('y', function(d){
  //       return d.y0
  //     })
  //     .style('font-size',fontSize+'px')
  //     .append('title')
  //     .text(d => d.data.name)
  //     // 可跳转的链接加样式

  //   // 设置text文字自动换行
  //   texts.each(d => {
  //     var text = g.selectAll('text.text-id' + NAMELIST[d.data.name].toString().replace(/\./g, ''));
  //     console.log(d.data)
  //     let rectWidth1 = d.x1-d.x0;
  //     d.data.names = insertEnter(d.data.name, rectWidth1);
  //     let x = +text.attr('x'),
  //       y = +text.attr('y');
  //     let lineHight = fontSize + 4;
  //     for (let i = 0; i < d.data.names.length; i++) {
  //       console.log(d.data.names.length)
  //       text
  //         .append("tspan")
  //         .attr('x', x)
  //         .attr('y', function (d) {
  //           return y + lineHight * i
  //         })
  //         .text(function (d) {
  //           console.log(d.data.name[i])
  //           return d.data.name[i];
  //         })
  //     }
  //   })
  //   // 拆分文字字符串 (文字字符串,外框宽度)
  //   function insertEnter(name, width) {
  //     // 文字宽度
  //     let nameLen = name.length * fontSize;
  //     // 每行字数,超过换行
  //     let num = 4;
  //     // 文字宽度大于rect宽度时,计算每行最大字数
  //     console.log('nameLen',nameLen,width,name)
  //     if (nameLen > width) {
  //       num = Math.floor(width / fontSize)
  //     } else {
  //       num = Math.floor(nameLen / fontSize)
  //     }
  //     if(!num) num = 1;
  //     var s = name,
  //       reg = new RegExp(`.{1,${num}}`, 'g'),
  //       rs = s.match(reg);

  //     if (name.length <= num) {
  //       return [name];
  //     } else {
  //       rs.push(s.substring(rs.join('').length));
  //     }
  //     console.log('rs',rs)
  //     return rs;
  //   }
  // }

    //   const color = d3.scaleOrdinal(d3.schemeCategory10)
    //   // 数据转化
    //   const treemap = d3.treemap().size([width, height])
    //   const root = d3.hierarchy(zz).
    //   const tree = treemap(root) // 获取treemap结构树
    //   const leaves = tree.leaves() // 将生成的树形结构转化成叶子节点数组
    //   // 用叶子节点数组绘图
    //   const g = svg.selectAll('.rects')
    //     .data(leaves)
    //     .enter()
    //     .append('g')
    //     .attr('class', 'rects')
    //   // 添加矩阵
    //   g.append('rect')
    //     .attr('x', (d) => {
    //         if(d.data.index==0){
    //         return 0;
    //     }
    //     else{
    //         return d.x0
    //     } 
    // })
    //     .attr('y', (d) => {if(d.data.index==0){
    //         return 0;
    //     }
    //     else{
    //         return d.y0
    //     }} )
    //     .attr('width', (d) => {if(d.data.index==0){
    //         return 0;
    //     }
    //     else{
    //         return d.x1
    //     }} )
    //     .attr('height', (d) => {if(d.data.index==0){
    //         return 0;
    //     }
    //     else{
    //         return d.y1
    //     }} )
    //     .style('fill', (d) => {
    //                         if (d.data.name == "总") {
    //                     return "gray"
    //                 }
    //                 else {
    //                     // if (d.data.index != 0) {
    //                         var z = namelist[d.data.name] + "";
    //                         if(z.length==5){
    //                             switch (z[0]) {
    //                                 case '1': return mcolor1[0]; break;
    //                                 case '2': return mcolor1[3]; break;
    //                                 case '3': return mcolor1[1]; break;
    //                                 case '4': return mcolor1[4]; break;
    //                                 case '5': return mcolor1[2]; break;
    //                             };
    //                         }
    //                         else {
    //                             return "transparent"
    //                         }
    //                     // }
    //                     // else {
    //                     //     return "transparent"
    //                     // }
    //                 }
    //     })
    //     .style('stroke', '#cccccc')
      // 添加描述
    //   g.append('text')
    //     .attr('x', (d) => (d.x1 - d.x0) / 2 + d.x0)
    //     .attr('y', (d) => (d.y1 - d.y0) / 2 + d.y0)
    //     .attr('dx', (d) => { return -d.data.name.length / 2 + 'em' })
    //     .attr('dy', (d) => { return '-0.5em' })
    //     .text((d) => { return d.data.name })
    //     .attr('font-size', (d) => { return 14 - d.depth + 'px' })
    //     .attr('fill', '#f0f0f0')
    //   g.append('text')
    //     .attr('x', (d) => (d.x1 - d.x0) / 2 + d.x0)
    //     .attr('y', (d) => (d.y1 - d.y0) / 2 + d.y0)
    //     .attr('dx', (d) => { return -(d.value.toString().length + 2) / 4 + 'em' })
    //     .attr('dy', (d) => { return '1em' })
    //     .text((d) => { return '(' + d.value + ')' })
    //     .attr('font-size', (d) => { return 14 - d.depth + 'px' })
    //     .attr('fill', '#ffffff')



    //   var color = d3.scale.category20c();
    //   var treemap = d3.layout.treemap()
    //       .size([width, height])
    //       .value(function (d) {
              
    //           if(ff==0){
    //             return (parseFloat(d.index));
    //           }
    //           else if(ff==1){
    //             return (parseFloat(d.reweight));
    //           }
    //       })
    //       .sort(function (a, b) { return b.value - a.value; })
    //       .padding(1);
    //   var root = d3.layout.hierarchy(zz)
    //   var nodes = treemap.nodes(zz);
    //   var links = treemap.links(nodes);
    //   var groups = svg.selectAll("g")
    //       .data(nodes.filter(function (d) {
    //           return d.parent;
    //       }))
    //       .enter()
    //       .append("g");
         
    //   var rects = groups.append("rect")
    //       .attr("class", "nodeRect")
    //       .attr("id", function (d) {
    //           return d.name;
    //       })
    //       .attr("x", function (d) { return d.x; })
    //       .attr("y", function (d) { return d.y; })
    //       .attr("width", function (d) { return d.dx; })
    //       .attr("height", function (d) { return d.dy; })
    //       .style('stroke', 'white')
    //       .style('opacity',function(d){
    //         var za= namelist[name] + ""; 
    //         var z = namelist[d.name] + "";
    //           if(za=='0'){
    //               return 1;
    //           }
    //           else if(za.length==1){
    //               if(z[0]==za[0]){
    //                   return 1;
    //               }
    //               else{
    //                   return 0.3;
    //               }
    //           }
    //           else if(za.length==3){
    //             if(z[0]+z[1]+z[2]==za[0]+za[1]+za[2]){
    //                 return 1;
    //             }
    //             else{
    //                 return 0.3;
    //             }
    //         }
    //         else if(za.length==5){
    //             if(z==za){
    //                 return 1;
    //             }
    //             else{
    //                 return 0.3;
    //             }
    //         }
    //       })
    //       .style("fill", function (d) {
        
    //                 if (d.name == "总") {
    //                     return "gray"
    //                 }
    //                 else {
    //                     if (d.index != 0) {
    //                         var z = namelist[d.name] + "";
    //                         if(z.length==5){
    //                             switch (z[0]) {
    //                                 case '1': return mcolor1[0]; break;
    //                                 case '2': return mcolor1[3]; break;
    //                                 case '3': return mcolor1[1]; break;
    //                                 case '4': return mcolor1[4]; break;
    //                                 case '5': return mcolor1[2]; break;
    //                             };
    //                         }
    //                         else {
    //                             return "transparent"
    //                         }
    //                     }
    //                     else {
    //                         return "transparent"
    //                     }
    //                 }
        
    //             })
    //             .on('mouseover', function (d, i) {
                  
    //                 d3.select('#dialog1')
    //                     .attr('text-anchor', 'middle')
    //                     .style('opacity', '1')
                       
    //                     var texts = groups.append("text")
    //                     .attr("class","nodeName")
    //                     .attr("x",function(d){ return d.x; })
    //                     .attr("y",function(d){ return d.y; })
    //                     .attr("dx","0.5em")
    //                     .attr("dy","1em")
    //                     .attr("font-size","12px")
    //                     .attr("font-weight","light")
    //                     .text(function(d){
    //                         var z = namelist[d.name] + "";
    //                         console.log(z.length)
    //                         if(ff==0){
    //                             if(z.length==5&&d.index!=0){
    //                                 return SLIST[d.name]+"\n"+(d.index).toFixed(2);
    //                             }
    //                             else{
    //                                 return ""
    //                             }
    //                         }
    //                         else{
    //                             if(z.length==5&&d.reweight!=0){
    //                                 return SLIST[d.name]+"\n"+(d.reweight*100).toFixed(2);
    //                             }
    //                             else{
    //                                 return ""
    //                             }
    //                         }
    //                     });       
    //     if (d.name != "总") {
    //         HL=1;
    //         var sh={}
    //            sh['Group']=ELIST[idlist[namelist[d.name][0]]]
    //            sh['Index/%']=(d.index).toFixed(2);
    //            sh["Weight/%"]=(d.reweight*100).toFixed(2);
    //            sh["Contribution/%"]=(sh["Weight/%"]*sh['Index/%']/100).toFixed(2)
    //            sh["Base Price/¥"]=d.base;
    //            sh["Price of the Day/¥"]=d.price;
        
    //            parallel(CURRENT_NAME,CURRENT_DATE,GLOBAL_DATA,sh);
    //     if(ff==0){
    //       return tooltip.style('visibility', 'visible').text("O " + ELIST[d.name] + '\n'+ "index: " + (d.index).toFixed(2) + "%")
    //     }
    //     else{
    //       return tooltip.style('visibility', 'visible').text("O " + ELIST[d.name] + '\n'+"weight: " + (d.reweight*100).toFixed(2) + "%")
    //     }
                        
    //                 }
    //             })
    //       .on('mousemove', function (d, i) {
    //                     return tooltip.style('top', (event.pageY - 10) + 'px').style('left', (event.pageX + 10) + 'px')
    //                 })
    //                 .on('mouseout', function (d, i) {
                        
    //                     d3.select('#dialog1')
    //                         .attr('text-anchor', 'middle')
    //                         .style('opacity', '0')
    //                         HL=0;
    //                         var sh={}
    //                            parallel(CURRENT_NAME,CURRENT_DATE,GLOBAL_DATA,sh);
    //                     return tooltip.style('visibility', 'hidden')
    //                 })



}
