function pie(name, angle){
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
        function tipFormatter(prams) {
            console.log(prams)
            return ' O ' +ELIST[prams.name]+'</br>'+'Range：'+prams.data.range
        }
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('ulleft'));
        var option = {
            tooltip: {
                trigger: 'item',
                position: 'right',
    backgroundColor: 'transparent', 
    textStyle: {
      color: "black",
      fontSize: 16,
      fontWeight: 'bold'
    },
                formatter: function (prams) {
                  return tipFormatter(prams);
                },
                padding: [0, 0],
              },
            graphic: [{ //环形图中间添加文字
                type: 'text', //通过不同top值可以设置上下显示
                left: 'center',
                top: '45%',
                style: {
                    text: name+'\n'+angle+'°',
                    textAlign: 'center',
                    fill: 'black', //文字的颜色
                    width: 20,
                    height: 20,
                    fontSize: 16,
                    fontFamily: "Microsoft YaHei"
                }
            }],
        
        series : [
            {
                name: '访问来源',
                type: 'pie',    // 设置图表类型为饼图
                radius:["40%", "50%"],
                zlevel: 0,
                
        
                label: {
                    normal: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
        
                },  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
                data:[          // 数据数组，name 为数据项名称，value 为数据项值
                   
                ]
            },
            {
                name: '访问来源',
                type: 'pie',    // 设置图表类型为饼图
                radius:["60%", "75%"],
                zlevel: 0,
                
        
                label: {
                    normal: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
        
                },  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
                data:[          // 数据数组，name 为数据项名称，value 为数据项值
                   
                ]
            },
            {
                name: '访问来源',
                type: 'pie',    // 设置图表类型为饼图
                radius:["75%", "90%"],
                zlevel: 0,
                
        
                label: {
                    normal: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
        
                },  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
                data:[          // 数据数组，name 为数据项名称，value 为数据项值
                   
                ]
            },
        ],
        
        
    }
    for(j=0;j<=359;j++){
        var tt={}
        tt.value=1
        col=hsv(j)
        tt.itemStyle={ normal: {color: col}}
        for(i in COLLIST){
            if(j==COLLIST[i]&&i.length!=5){
                tt.name=ELIST[IDLIST[i]]+'</br>'+j+'°'           
                // tt.label={show: true, fontSize: '8',  fontWeight: 'bold',padding: [0, -70]}
                // tt.labelLine={show: true}
                break;
            }
            else{
                tt.name=''
            }
    }
    option.series[0]['data'].push(tt)
}
var sec=[]
var k=0
for(i in SORT){
    if(SORT[i].length==3){
        sec[k]=SORT[i]
        k++;
    } 
}
var fir=[]
var m=0
for(i in SORT){
    if(SORT[i].length==1&&SORT[i]!=0){
        fir[m]=SORT[i]
        m++;
    } 
}
for(i=0;i<sec.length;i++){
    var tt={}
    tt.name=IDLIST[sec[i]]
    
    if(i<sec.length-1){
        tt.value=COLLIST[sec[i+1]]-COLLIST[sec[i]]
        tt.range=COLLIST[sec[i]]+'° ~ '+COLLIST[sec[i+1]]+'°'
    }
    else{
        tt.value=360-COLLIST[sec[i]]
        tt.range=COLLIST[sec[i]]+'° ~ 360°'
    }
    col=hsv(COLLIST[sec[i]])
    tt.itemStyle={ normal: {color: col,borderWidth: 4, borderColor:'white'}}
    option.series[1]['data'].push(tt)
}
for(i=0;i<fir.length;i++){
    var tt={}
    tt.name=IDLIST[fir[i]]
    
    if(i<fir.length-1){
        tt.value=COLLIST[fir[i+1]]-COLLIST[fir[i]]
        tt.range=COLLIST[sec[i]]+'°~'+COLLIST[sec[i+1]]+'°'
    }
    else{
        tt.value=360-COLLIST[fir[i]]
        tt.range=COLLIST[sec[i]]+'°~ 360°'
    }
    col=hsv(COLLIST[fir[i]])
    tt.itemStyle={ normal: {color: col,borderWidth: 4, borderColor:'white'}}
    option.series[2]['data'].push(tt)
}
console.log(sec,fir)
    var num=angle
    myChart.clear(); //清空数据缓存
    myChart.setOption(option);
    myChart.dispatchAction({type: 'highlight',seriesIndex: 0,dataIndex: num});
}