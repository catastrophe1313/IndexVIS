function heat(name,da){
var chart = null
		var selectStart = null
		var selectEnd = null
		var invertHighlightRows = false
        var width = document.getElementById("right21body").clientWidth-100;
        var height = document.getElementById("right21body").clientHeight;
    d3.select("#right21body").selectAll("svg").remove()
        var date=day(FL)
var aa = JSON.parse(JSON.stringify(GLOBAL_DATA))
console.log(da)
var len;
var st;
var i
var ti;
var form
var datalist=[]
// if(FL==0||FL==3){
// 	len=40
// 	ti=40
// 	form="%m/%d"
len=40
	for(var i = 0 ;i< date.length;i++){
		if(da == date[i]){
			st = i
			break
		}
	}
	if(st<=20){
		st = 0
	}
	else{
		st = st-20
	}
	for(var i = 0 ;i< CHOSENLIST.length;i++){
		datalist.push(ABRES[CHOSENLIST[i]])
	}
	console.log(datalist)
// }
// else if(FL==1||FL==4){
// 	len=26
// 	ti=13
// 	form="%m/%d"
// 	if(sd=='12'||sd=='1/'||sd=='2/'||sd=='3/'||sd=='4/'||sd=='5/'){
// 		st=0
// 	}
// 	else{
// 		for(i=0;i<date.length;i++){
// 			if(date[i]=='2019/6/4'){
// 				st=i
// 				break;
// 			}
// 		}
// 	}
	
	
// }
// else if(FL==2||FL==5){
// 	len=12
// 	st=0
// 	ti=12
// 	form="%y/%m"
// }
	
console.log(ABRES)
var nn=NAMELIST[name]+"";
var val=[]
var type=[]
var daa = []
for(var i=0;i<CHOSENLIST.length;i++){
	type.push(SLIST[IDLIST[CHOSENLIST[i]]])
}
for(var i=0;i<datalist.length;i++){
	var temp=[]
	for(var j=st;j<st+len;j++){
		daa.push(date[j])
		temp.push(datalist[i][date[j]])
	}
	val[i]=temp
}
	
		function select(cell) {
			if (!selectStart) {
				selectStart = cell
				chart.setHighlight([{"start": selectStart, "end": selectStart}])
				chart.updateHighlight()
			} else if (!selectEnd) {
				selectEnd = cell
				chart.setHighlight([{"start": selectStart, "end": selectEnd}])
				chart.updateHighlight()
			} else {
				selectStart = cell
				selectEnd = null
				chart.setHighlight([{"start": selectStart, "end": selectStart}])
				chart.updateHighlight()
			}
		}

		function hover(cell) {
			if (selectStart && !selectEnd) {
				if (cell[0] > selectStart[0]) { // column is higher
					chart.setHighlight([{"start": selectStart, "end": cell}])
					chart.updateHighlight()
				} else if (cell[0] == selectStart[0]) { // same column
					if (!invertHighlightRows) { // not invert rows
						if (cell[1] >= selectStart[1]) { // row is higher or equal
							chart.setHighlight([{"start": selectStart, "end": cell}])
							chart.updateHighlight()
						} else {
							chart.setHighlight([{"start": selectStart, "end": selectStart}])
							chart.updateHighlight()
						}
					} else { // invert rows
						if (cell[1] <= selectStart[1]) { // row is lower or equal
							chart.setHighlight([{"start": selectStart, "end": cell}])
							chart.updateHighlight()
						} else {
							chart.setHighlight([{"start": selectStart, "end": selectStart}])
							chart.updateHighlight()
						}
					}
				} else {
					chart.setHighlight([{"start": selectStart, "end": selectStart}])
					chart.updateHighlight()
				}
			}
		}

		
			function onClick(d, i, j) {
				console.info("Clicked on range " + data.rows[j] + ", time " + data.columns[i] + ", count " + d)
				select([i, j])
			}

			function onMouseOver(d, i, j) {
				document.getElementById("details").innerHTML = "time: " + data.columns[i] + ", range: " + data.rows[j] + ", count: " + d
				hover([i, j])
			}
            let parseTime = d3.timeParse('%Y/%m/%d')
			chart = d3.heatmap(daa,type,ST,ED,ti,form)
				.title("")
				.subtitle("")
				// .legendLabel("Count")
				.width(width)
				.legendTickFormat(d3.format('.0f'))
				.xAxisScale([])
				.yAxisScale([])
				.xAxisLabels([])
				.yAxisLabels([])
				.highlightColor('#936EB5')
				.highlightOpacity('0.4')
				// .onClick(onClick)
				// .onMouseOver(onMouseOver)
				.invertHighlightRows(invertHighlightRows)
				.gridStrokeOpacity(0.5)
				.colorScale(d3.scaleLinear()
				.domain([-0.1,-0.08,-0.06,-0.02,-0.01,0,0.01,0.02,0.06,0.08,0.1])
    .range(["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#FFFAFA","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"]))
				.margin({
					top: 30,
					right: 40,
					bottom: 15,
					left: 10
				})
				.legendElement("#main")
				.legendHeight(400)
				.legendMargin({
					top: 0,
					right: 0,
					bottom: 0,
					left: (width - Math.min(width * 0.8, 400)) / 2
				})
				

			d3.select("#right21body")
				.datum(val)
				.call(chart)
				console.log(val)
        }

// function heat(i, data, id){
//   let tooltip = d3.select('body')
// .append('div')
// .attr("id","draw")
// .attr("width","150")
// .attr("height","100")
// .style('position', 'absolute')
// .style('z-index', '30')
// .style('color', 'black')
// .style('visibility', 'hidden')   // 是否可见（一开始设置为隐藏）
// .style('font-size', '16px')
// .style('font-weight', 'bold')
// .text('')
// 	        var width;
//         // var height = document.getElementById("right21body").clientHeight-30;
//     // d3.select("#right21body").selectAll("svg").remove()
//     var height
//     var cellSize ;   //定义每个方格的大小

// var formatPercent = d3.format(".1%"); //定义一个百分数格式函数，规定百分数精确度小数点后1位

// // 定义颜色函数，使用量化比例尺映射，即定义域为连续的，从-0.05到0.05，而值域是离散的颜色值
// var color = d3.scaleLinear()
//     .domain([-0.1,-0.08,-0.06,-0.02,-0.01,0,0.01,0.02,0.06,0.08,0.1])
//     .range(["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#FFFAFA","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"]);

// // 定义10个svg组，分别用来展示从1990年到2010年的数据
// // for(var i =0;i<3;i++){

//   var svg
//   if(i ==0){
//     cellSize = 16
//     height = 150
//     width = document.getElementById("right21body").clientWidth-20
//   svg = d3.select("#right21body")
//   .selectAll("svg")
//   .data(d3.range(2018, 2019))
//   .enter().append("svg")
//   .attr('id',function(){return 'svg'+i})
//     .attr("width", width)
//     .attr("height", height)
//   .append("g")
//     .attr("transform", "translate(" + ((width - cellSize * 53) / 2) + "," + 20 + ")");
//   }
//   else{
//     cellSize = 15
//     height = 145
//     width = document.getElementById("right21body").clientWidth-40
//     svg = d3.select("#right21body")
//   .selectAll("#svg"+i)
//   .data(d3.range(2018, 2019))
//   .enter().append("svg")
//   .attr('id',function(){return 'svg'+i})
//     .attr("width", width)
//     .attr("height", height)
//   .append("g")
//     .attr("transform", "translate(" + ((width - cellSize * 53) / 2) + "," + 20 + ")");
//   }
// // }


// // 定义每个年份对应的group旁边的标签
// svg.append("text")
//      //定义标签文字(年份)的位置以及文字的旋转角度、文字内容
//     .attr("transform", "translate("+(width/2-20)+"," + (height-25) + ")")
//     .attr("font-size", '12px')
//     .attr("text-anchor", "middle")
//     .text(function(d) { return id; });

// // 定义每个年份中代表天的小方格
// var rect = svg.append("g")
//     .attr("fill", "none")
//   .selectAll("rect")
//   //计算一组小方格的数量，调用d3的timeDays方法，获取两个时间之间的天数，例如，计算从1999年的第一天到2000年的第一天,则参数为new Date(1999,0,1)到 new Date(2000,0,1)，timeDays返回天序列
//   .data(function(d) {  return d3.timeDays(new Date(d, 11, 1), new Date(d + 1, 10, 30)); })
//   .enter().append("rect")
//     .attr("width", cellSize)
//     .attr("height", cellSize)
//     // 返回一年有多少个周，确定一组小方格的横向位置
//     .attr("x", function(d) { 
//       if(d3.timeDay(d)<new Date(2018, 12, 1)){
        
//         return (d3.timeWeek.count(d3.timeYear(d), d) -48) * cellSize;
//       }
//       else{
       
//         return (d3.timeWeek.count(d3.timeYear(d), d)+4) * cellSize;
//       }
//        })
//     // 返回天，确定一组小方格的纵向位置
//     .attr("y", function(d) { return d.getDay() * cellSize; })
//     // 定义当前小方格上对应的日期的格式
//     .datum(d3.timeFormat("%Y-%m-%d"))
//     .on("mouseover",function(d){
//       return tooltip.style('visibility', 'visible').text("O " + d + '\n' + (data[d]*100).toFixed(2) + "%")             
//     })
  
//         .on('mousemove', function (d, i) {
//                       return tooltip.style('top', (event.pageY - 20) + 'px').style('left', (event.pageX- 70) + 'px')
//                   })
//                   .on('mouseout', function (d, i) {
                      
                  
//                       return tooltip.style('visibility', 'hidden')
//                   })
//                   .attr("stroke",function(d){
//               //       var fir = CURRENT_DATE.indexOf("/")
//               // var las = CURRENT_DATE.lastIndexOf("/")
             
//               // var yy = CURRENT_DATE.substring(0, fir)
//               // var mm = CURRENT_DATE.substring(fir+1, las)
//               // var dd = CURRENT_DATE.substring(las+1, CURRENT_DATE.length)
//               // if(mm.length==1){
//               //         mm='0'+mm
//               // }
//               // if(dd.length==1){
//               //         dd='0'+dd
//               // }
//               // var dat = yy+'-'+mm+'-'+dd
//               // if(dat==d){
//               //   return 'red'
//               // }
//               // else{
//                 return'#ccc'
//               // }
//                     })
// // 勾勒月份的分割线
// svg.append("g")
//     .attr("fill", "none")
//     .attr("stroke", "#000")
//   .selectAll("path")
//   .data(function(d) {return d3.timeMonths(new Date(d, 11, 1), new Date(d + 1, 10, 30)); })
//   .enter().append("path")
//     .attr("d", pathMonth);


  
// var myDate = new Date();
// var timescale = d3.timeFormat("%Y-%m-%d")
//   // 这里的d3.nest可以参考http://blog.csdn.net/gdp12315_gu/article/details/51721988
//   // var data = d3.nest()
//   //     // 以d.Date来对数据进行分组
//   //     .key(function(d) { return d.date; })
//   //     // rollup函数用来获取每个组的values，因为一组为一天，只有一行数据，因此这里定义每个组的values 用d[0],即d[0].Close - d[0].Open) / d[0].Open来计算产生数值values
//   //     .rollup(function(d) { return d[0].diff; })
//   //   // 个人理解，这里的.object()函数类似于call()函数，用来将定义的分组机制应用到csv数据上,返回分组后的对象，官网对nest().object()的解释：Applies the nest operator to the specified array, returning a nested object.有没有醍醐灌顶的感觉，哈哈
//   //   .object(csv);
//   // // 过滤操作，挑出日期在data中的小方格（因为周六、周日没有在data中，周六周日小方格填充色为默认白色）
//   rect
// //   .filter(function(d) { return d in data; })
//       // 定义小方格的填充色，通过每个小方格中的values值来映射颜色函数
//       .attr("fill", function(d) {
//         // console.log(data[d],d)
//         if(data[d]==undefined){
//           return '#FFFAFA'
//         }
//         if(data[d]!=0||data[d]!=undefined){
//           return color(data[d])
//         }
//         else{
//           return '#FFFAFA'
//         }
//         })
//     .append("title")
//       // 定义小方格的title属性文本为 日期后面加小方格value对应的的百分比格式
     

      
//       let week = ['Sun', 'Mon', 'Tue', 'Wed', 'Tur', 'Fri', 'Sat'];

        
//             svg.append('g')
//             .attr('class', 'week')
//             .selectAll('.label')
//             .data(week)
//             .enter()
//             .append('text')
//             .style("font-size", '12px')
//             .attr('x', cellSize*52+5)
//             .attr('y', (d,i) => (i+1) * cellSize-5)
//             .text((d)=>d);

//         let months = d3.timeMonth.range(new Date(2018, 11, 1), new Date(2019, 10, 30));

//         months = months.map((d) => d3.timeFormat("%b")(d));

//             svg.append('g')
//             .attr('class', 'month-label')
//             .selectAll('text')
//             .data(months)
//             .enter()
//             .append('text')
//             .attr("font-size", '12px')
//             .attr('x', (d,i) => i*cellSize*4.25 + cellSize*2)
//             .attr('y', -5)
//             .text((d) => d)
// // 定义月份分割线路径
// function pathMonth(t0) {
//   var t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
//       d0 = t0.getDay(), 
//       w0 = d3.timeWeek.count(d3.timeYear(t0), t0),
//       d1 = t1.getDay(), 
//       w1 = d3.timeWeek.count(d3.timeYear(t1), t1);
//       if(d3.timeDay(t0)<new Date(2018, 12, 1)){
        
//         w0 = w0 - 48
//         w1 = w1 - 48
//       }
//       else{
      
//         w0 = w0 +4
//         w1 = w1 +4
//       }
    
//   return "M" + (w0 + 1) * cellSize + "," + d0 * cellSize
//       + "H" + w0 * cellSize + "V" + 7 * cellSize
//       + "H" + w1 * cellSize + "V" + (d1 + 1) * cellSize
//       + "H" + (w1 + 1) * cellSize + "V" + 0
//       + "H" + (w0 + 1) * cellSize + "Z";
// }
// }