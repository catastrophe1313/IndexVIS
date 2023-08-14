function radar(corr){
    var z = JSON.parse(JSON.stringify(corr))  
    var col = ["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]
    var margin = {top: 0, right: 0, bottom: 0, left: 0};
    var width = document.getElementById("right12body").clientWidth;

var height = document.getElementById("right12body").clientHeight;
var w = document.getElementById("right12head").clientWidth;

var h = document.getElementById("right12head").clientHeight;
d3.select("#right12body").selectAll("svg").remove()
d3.select("#right12head").selectAll("svg").remove()     
////////////////////////////////////////////////////////////// 
////////////////////////// Data ////////////////////////////// 
////////////////////////////////////////////////////////////// 
var title = ['Dec','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov']
var data = []
var len = Object.keys(z[0]).length
var namel = []
for(var i=1;i<len;i++){
    namel[i-1]=Object.keys(z[0])[i]
}
console.log(namel)
for(var i=0;i<len-1;i++){
    // if(DISLIST[Object.keys(z[0])[i]] == 'False'){
    var type=[]
    // for(var j=0;j<title.length;j++){
    //     var temp={axis:title[j],value:'',name:''}
    //     type.push(temp)
    // }
    data.push(type)
    // }
}
console.log(data)
for( var i=0;i<z.length;i++){
    var axiss = title[i]
    var lenn = Object.keys(z[i])
    for(var j=1;j<lenn.length;j++){
        var temp = {}
        temp['axis'] = axiss
        temp['value'] = z[i][lenn[j]]
        temp['id'] = lenn[j]
        data[j-1].push(temp)
    }
}
console.log(data)

var svg = d3.select("#right12head")				//选择文档中的body元素
				.append("svg")				//添加一个svg元素
				.attr("width", w)		//设定宽度
				.attr("height", h);	//设定高度

                svg.selectAll("rect")
                .data(namel)
                .enter()
                .append("rect")
              .attr("x",function(d,i){//每个矩形的起始y坐标
                return (i%5) * 60+30;
          })//每个矩形的起始x坐标
              .attr("y",function(d,i){//每个矩形的起始y坐标
                    if(namel.length<=5){
                        return 30;
                    }
                    else{
                        return parseInt(i/5) * 25+5;
                    }
                      
                })
              .attr("width",10)
              .attr("height",10)//每个矩形的高度
              .attr("fill",function(d,i){
                if( DISLIST[d] == 'True'){
                  return '#ccc'
                }
                else{
                  return col[i]
                }
            })
            .attr('class','ch')
          .on('click',function(d){
              if( DISLIST[d] == 'True'){
                DISLIST[d] = 'False'
              }
              else{
                DISLIST[d] = 'True'
              }
              
              radar(CORRLIST)
          })

          svg.selectAll("text")
          .data(namel)
          .enter()
          .append("text")
        .attr("x",function(d,i){//每个矩形的起始y坐标
          return (i%5) * 60+45;
    })//每个矩形的起始x坐标
        .attr("y",function(d,i){//每个矩形的起始y坐标
            if(namel.length<=5){
                return 40;
            }
            else{
                return parseInt(i/5) * 25+15;
            }
                
          })
          .attr('class','ch')
        .style("font-size",'12px')
        .style("cusor",'hand')
        .attr("fill",function(d){
            if( DISLIST[d] == 'True'){
              return '#ccc'
            }
            else{
              return 'black'
            }
        })
    .text((d)=>SLIST[IDLIST[d]])
    .on('click',function(d){
        if( DISLIST[d] == 'True'){
          DISLIST[d] = 'False'
        }
        else{
          DISLIST[d] = 'True'
        }
        
        radar(CORRLIST)
    })

// var data = [
//           [//iPhone
//             {axis:"Battery Life",value:0.22},
//             {axis:"Brand",value:0.28},
//             {axis:"Contract Cost",value:0.29},
//             {axis:"Design And Quality",value:0.17},
//             {axis:"Have Internet Connectivity",value:0.22},
//             {axis:"Large Screen",value:0.02},
//             {axis:"Price Of Device",value:0.21},
//             {axis:"To Be A Smartphone",value:0.50}			
//           ],[//Samsung
//             {axis:"Battery Life",value:0.27},
//             {axis:"Brand",value:0.16},
//             {axis:"Contract Cost",value:0.35},
//             {axis:"Design And Quality",value:0.13},
//             {axis:"Have Internet Connectivity",value:0.20},
//             {axis:"Large Screen",value:0.13},
//             {axis:"Price Of Device",value:0.35},
//             {axis:"To Be A Smartphone",value:0.38}
//           ],[//Nokia Smartphone
//             {axis:"Battery Life",value:0.26},
//             {axis:"Brand",value:0.10},
//             {axis:"Contract Cost",value:0.30},
//             {axis:"Design And Quality",value:0.14},
//             {axis:"Have Internet Connectivity",value:0.22},
//             {axis:"Large Screen",value:0.04},
//             {axis:"Price Of Device",value:0.41},
//             {axis:"To Be A Smartphone",value:0.30}
//           ]
//         ];
////////////////////////////////////////////////////////////// 
//////////////////// Draw the Chart ////////////////////////// 
////////////////////////////////////////////////////////////// 

var color = d3.scaleOrdinal()
    .range(col);
    
var radarChartOptions = {
  w: width,
  h: height,
  margin: margin,
  maxValue: 0.5,
  levels: 5,
  roundStrokes: true,
  color: color
};
//Call function to draw the Radar chart
RadarChart("#right12body", data, radarChartOptions);
}