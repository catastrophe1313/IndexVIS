// var dd = [];

// var j = 0;
// //var data=[];
// //边框的颜色
// var border_color = "#1E90FF";
// //用于填充的颜色
// var fillcolor = "rgba(204, 238, 255, .1)";
// var dotcolor = "rgba(255, 255, 255, .9)";
// //var data=[];

// let tooltip2 = d3.select('body')
// .append('div')
// .style('position', 'absolute')
// .style('z-index', '30')
// .style('color', '#000')
// .style('visibility', 'hidden')   // 是否可见（一开始设置为隐藏）
// .style('font-size', '16px')
// .style('font-weight', 'bold')
// .text('')


// var palegreen = d3.rgb(255,236,179);	//浅绿
// var darkgreen = d3.rgb(255,61,0);		//深绿
 
// var color = d3.interpolate(palegreen,darkgreen);		//颜色插值函数
// var linear = d3.scale.linear()
// 		.domain([10, 700])
//         .range([0, 1]);

// var palegreen1 = d3.rgb(255,249,196)//d3.rgb(255,128,171);	//浅绿
// var darkgreen1 = d3.rgb(255,61,0)//d3.rgb(3,169,244);
// var color1 = d3.interpolate(palegreen1, darkgreen1);
// var linear1 = d3.scale.linear()
//     .domain([5, 450])
//     .range([0, 1]); 
// function indexscale(a){
//     return parseFloat((2*a)/500+7);
// }
// function basescale(a){
//     return parseFloat((2*a)/20+0);
// }
function drawindextree(name,data,day,namelist,idlist){
    // var z = JSON.parse(JSON.stringify(data))
    // var id = namelist[name]+'';
    // if(id.length==1||name=="tea"){
    //     zz=z[day]
    // }
    // else if(id.length==3){
    //      zz=z[day]["children"].find(function (x) { return x.name == idlist[id[0]];})
    // }
    // else if(id.length==5){
    //     j=id[0]+id[1]+id[2]
    //     zz=z[day]["children"].find(function (x) { return x.name == idlist[id[0]];})["children"].find(function (x) { return x.name == idlist[j];})
    // }
    // d3.select("#downleftbody").select("svg").remove();
    // zz.index=0     
    // var tree = d3.layout.tree()
    // .size([370, 100])//设定尺寸，即转换后的各个节点的坐标在哪一个范围内；
    // .separation(function (a, b) {//设置节点之间的间隔；
    //     return (a.parent == b.parent ? 0.5: 1.5)
    // });
    // var nodes = tree.nodes(zz);
    // var links = tree.links(nodes);

    // var width = document.getElementById("downleftbody").clientWidth;

    // var height = document.getElementById("downleftbody").clientHeight;
    // // var zoom = d3.behavior.zoom()
    // //             .scaleExtent([.1, 1])
    // //             .on('zoom', function () {
    // //                     svg.attr("transform", "translate(" + (d3.event.translate['0']-width/2) +','+(d3.event.translate['1']-height/2)+ ") scale(" + d3.event.scale + ")");
    // //             });
    // var diagonal = d3.svg.diagonal()
    //     .projection(function (d) {
    //         // return [d.y, d.x]; 
    //         var r = d.y, a = (d.x - 90) / 180 * Math.PI;
    //         return [r * Math.cos(a), r * Math.sin(a)];
    //     });


    // var svg = d3.select("#downleftbody").append("svg")
    //     .attr("width", width)
    //     .attr("height", height)
    //     .append("g")
    //     // .call(zoom)
    //     .attr("transform", "translate(" + width / 2 + "," + (height / 2+10) + ")");
    // // 绘制连线方法 
    // nodes.forEach(function (d) {
    //         d.y = d.depth * 50;// 树的x,y倒置了，所以这里Y其实是横向的
    //     });
    //     //
    //     var node = svg.selectAll("g.node")
    //     .data(nodes, function (d) {
    //         return d.id //最初新点开的节点都没有id
    //             || (d.id = ++i); //为没有id的节点添加上ID
    //     });
    // var link = svg.selectAll('.link')
    //     .data(links)
    //     .enter()
    //     .append('path')
    //     .style("stroke",function(d){
    //     //      if(d.target.index!=""){
    //     //         return color( linear(parseFloat(d.target.index)) )
    //     //    }
    //     //    else{
    //           return "grey"
    //     //    }
    //     })
    //     // .attr('class', function(d){
           
    //     // })
    //     .style("opacity",0.5)
    //     .style("stroke-width",2.6)
    //     .attr('d', diagonal)
    // var node = svg.selectAll('.node')
    //     .data(nodes)
    //     .enter()
    //     .append('g')
    //     .attr('class', 'node')
    //     .attr('transform', function (d) {
    //         return "rotate(" + (d.x - 90) + ")translate(" + (d.y )+ ")"; 
    //     })
    //  node.append('circle')
    //      .attr("r", function(d){
    //          return indexscale(parseFloat(d.index))

    //      })
    //      .style("stroke-width",function(d){
    //          return 1
    //      })
    //      .style("stroke",function(d){
    //         if(d.index!=""){
    //             return "grey"//color1( linear1(parseFloat(d.index)) )
    //        }
    //        else{
    //           return ""
    //        }
    //      })
    //     .style("fill", function (d) { 
    //         if(d.index!=""){
    //             return color1( linear1(parseFloat(d.index)) )
    //        }
    //        else{
    //           return "transparent"
    //        }
    //      })
    //     .on('mouseover', function (d, i) {
    //         return tooltip.style('visibility', 'visible').text("O "+d.name+" index: "+d.index)
    //       })
    //       .on('mousemove', function (d, i) {
    //         return tooltip.style('top', (event.pageY-10)+'px').style('left',(event.pageX+10)+'px')
    //       })
    //       .on('mouseout', function (d, i) {
    //         return tooltip.style('visibility', 'hidden')
        //   })
}

// var date = ["2018-3-1", "2018-3-2", "2018-3-3", "2018-3-4", "2018-3-5", "2018-3-6", "2018-3-7", "2018-3-8",
//     "2018-3-9", "2018-3-10", "2018-3-11", "2018-3-12", "2018-3-13", "2018-3-14", "2018-3-15", "2018-3-16", "2018-3-17",
//     "2018-3-18", "2018-3-19", "2018-3-20", "2018-3-21", "2018-3-22", "2018-3-23", "2018-3-24", "2018-3-25", "2018-3-26",
//     "2018-3-27", "2018-3-28", "2018-3-29", "2018-3-30", "2018-3-31", "2018-4-1", "2018-4-2", "2018-4-3", "2018-4-4", "2018-4-5",
//     "2018-4-6", "2018-4-7", "2018-4-8", "2018-4-9", "2018-4-10", "2018-4-11", "2018-4-12", "2018-4-13", "2018-4-14", "2018-4-15",
//     "2018-4-16", "2018-4-17", "2018-4-18", "2018-4-19", "2018-4-20"]
// d3.csv("data/number.csv", function (Name_data) {
//     d3.csv("data/new.csv", function (newdata) {
//         // #region
//         var namelist = {}
//         for (i in Name_data) {
//             namelist[Name_data[i].name] = Name_data[i].id;
//         }
//         var idlist = {}
//         for (i in Name_data) {
//             idlist[Name_data[i].id] = Name_data[i].name;
//         }
//         d3.select("#cha").on("click",function(){
//             if(FLAG==0){
//                 d3.select("#downleftbody").select('svg').remove();
//                     trees(CURRENT_NAME,GLOBAL_DATA,CURRENT_DATE,namelist,idlist);
//                     FLAG=1;
//             }
//             else if(FLAG==1){
//                 d3.select("#downleftbody").select('svg').remove();
//                     pack(CURRENT_NAME,GLOBAL_DATA,CURRENT_DATE,namelist,idlist);
//                     FLAG=0;
//             }
//     })  
        

//     });
// });
