let tooltipa = d3.select('body')
        .append('div')
        .style('position', 'absolute')
        .style('z-index', '30')
        .style('color', '#3E98C5')
        .style('visibility', 'hidden')   // 是否可见（一开始设置为隐藏）
        .style('font-size', '12px')
        .text('')
        let tooltip = d3.select('#right12body')
        .append('div')
        .attr("id","box")
        .style("width","120px")
        .style("height","313px")
        .style('position', 'absolute')
        .style('left', '1194px')
        .style('top', '33px')
        .style('z-index', '30')
        .style('border-radius', '0 0 0 5px')
        .style('background-color', 'white')
        .style('visibility', 'hidden')   // 是否可见（一开始设置为隐藏）
        .text('')  
$(function () {
        $("#ex8").slider({ step: 1, min: 0, max: 100 });
        $("#ex7").slider({ step: 1, min: 0, max: 19 });
        $('#mae').val(95)
});

d3.select('#upload').on('click', function () {
        DLL = 357
        d3.select('#tit11').text(function () {
                return 'Source:'
        })
        d3.select('#tit12').text(function () {
                return 'Interval:'
        })
        d3.select('#tit13').text(function () {
                return 'Items:'
        })
        d3.select('#tit14').text(function () {
                return 'Categories:'
        })
        d3.select('#da1').text(function () {
                return 'Agricultural Products'
        })
        d3.select('#da2').text(function () {
                return '2018/12/1~2019/11/27'
        })
        d3.select('#da3').text(function () {
                return '11814'
        })
        d3.select('#da4').text(function () {
                return '56'
        })
        d3.select('#cd').text(function () {
                return '2018/12/1'
        })
        // d3.select('#itn').text(function () {
        //         return 'Daily Fixed Base'
        // })
        // d3.select('#abd').text(function () {
        //         return 'Fixed threshold'
        // })
        d3.select('#cn').text(function () {
                return 'Current Product: Generality'
        })
        d3.select('#ct').text(function () {
                return '1%'
        })
        d3.select('#ss').text(function () {
                return 'Index'
        })
        var date = ["2018/12/1", "2018/12/2", "2018/12/3", "2018/12/4", "2018/12/5", "2018/12/6", "2018/12/7", "2018/12/8", "2018/12/9", "2018/12/10",
                "2018/12/11", "2018/12/12", "2018/12/13", "2018/12/14", "2018/12/15", "2018/12/16", "2018/12/17", "2018/12/18", "2018/12/19", "2018/12/20",
                "2018/12/21", "2018/12/22", "2018/12/23", "2018/12/24", "2018/12/25", "2018/12/26", "2018/12/27", "2018/12/28", "2018/12/29", "2018/12/30", "2018/12/31",
                "2019/1/1", "2019/1/2", "2019/1/3", "2019/1/4", "2019/1/5", "2019/1/6", "2019/1/7", "2019/1/8", "2019/1/9", "2019/1/10",
                "2019/1/11", "2019/1/12", "2019/1/13", "2019/1/14", "2019/1/15", "2019/1/16", "2019/1/17", "2019/1/18", "2019/1/19", "2019/1/20",
                "2019/1/21", "2019/1/22", "2019/1/23", "2019/1/24", "2019/1/25", "2019/1/26", "2019/1/27", "2019/1/28", "2019/1/29", "2019/1/30", "2019/1/31",
                "2019/2/1", "2019/2/2", "2019/2/3", "2019/2/4", "2019/2/5", "2019/2/6", "2019/2/7", "2019/2/9", "2019/2/10",
                "2019/2/11", "2019/2/12", "2019/2/13", "2019/2/14", "2019/2/15", "2019/2/16", "2019/2/17", "2019/2/18", "2019/2/19", "2019/2/20",
                "2019/2/21", "2019/2/22", "2019/2/23", "2019/2/24", "2019/2/25", "2019/2/26", "2019/2/27", "2019/2/28",
                "2019/3/2", "2019/3/3", "2019/3/4", "2019/3/5", "2019/3/6", "2019/3/7", "2019/3/8", "2019/3/9", "2019/3/10",
                "2019/3/11", "2019/3/12", "2019/3/13", "2019/3/14", "2019/3/15", "2019/3/16", "2019/3/17", "2019/3/18", "2019/3/19", "2019/3/20",
                "2019/3/21", "2019/3/22", "2019/3/23", "2019/3/24", "2019/3/25", "2019/3/26", "2019/3/27", "2019/3/28", "2019/3/29", "2019/3/30", "2019/3/31",
                "2019/4/1", "2019/4/2", "2019/4/3", "2019/4/4", "2019/4/5", "2019/4/6", "2019/4/7", "2019/4/8", "2019/4/9", "2019/4/10",
                "2019/4/11", "2019/4/12", "2019/4/14", "2019/4/15", "2019/4/16", "2019/4/17", "2019/4/18", "2019/4/19", "2019/4/20",
                "2019/4/21", "2019/4/22", "2019/4/23", "2019/4/24", "2019/4/25", "2019/4/26", "2019/4/27", "2019/4/28", "2019/4/29", "2019/4/30",
                "2019/5/1", "2019/5/2", "2019/5/3", "2019/5/4", "2019/5/5", "2019/5/6", "2019/5/7", "2019/5/8", "2019/5/9", "2019/5/10",
                "2019/5/11", "2019/5/12", "2019/5/13", "2019/5/14", "2019/5/15", "2019/5/16", "2019/5/17", "2019/5/18", "2019/5/19", "2019/5/20",
                "2019/5/21", "2019/5/22", "2019/5/23", "2019/5/24", "2019/5/25", "2019/5/26", "2019/5/27", "2019/5/28", "2019/5/29", "2019/5/30", "2019/5/31",
                "2019/6/1", "2019/6/2", "2019/6/3", "2019/6/4", "2019/6/5", "2019/6/6", "2019/6/7", "2019/6/8", "2019/6/10",
                "2019/6/11", "2019/6/12", "2019/6/13", "2019/6/14", "2019/6/15", "2019/6/16", "2019/6/17", "2019/6/18", "2019/6/19", "2019/6/20",
                "2019/6/21", "2019/6/22", "2019/6/23", "2019/6/24", "2019/6/25", "2019/6/26", "2019/6/27", "2019/6/28", "2019/6/29", "2019/6/30",
                "2019/7/1", "2019/7/2", "2019/7/3", "2019/7/4", "2019/7/5", "2019/7/6", "2019/7/7", "2019/7/8", "2019/7/9", "2019/7/10",
                "2019/7/11", "2019/7/12", "2019/7/13", "2019/7/14", "2019/7/15", "2019/7/16", "2019/7/17", "2019/7/18", "2019/7/19", "2019/7/20",
                "2019/7/21", "2019/7/22", "2019/7/23", "2019/7/24", "2019/7/25", "2019/7/26", "2019/7/27", "2019/7/28", "2019/7/29", "2019/7/30", "2019/7/31",
                "2019/8/1", "2019/8/2", "2019/8/3", "2019/8/4", "2019/8/5", "2019/8/6", "2019/8/7", "2019/8/8", "2019/8/9", "2019/8/10",
                "2019/8/11", "2019/8/12", "2019/8/13", "2019/8/14", "2019/8/15", "2019/8/16", "2019/8/17", "2019/8/18", "2019/8/19", "2019/8/20",
                "2019/8/21", "2019/8/22", "2019/8/23", "2019/8/24", "2019/8/25", "2019/8/26", "2019/8/27", "2019/8/28", "2019/8/29", "2019/8/30", "2019/8/31",
                "2019/9/1", "2019/9/2", "2019/9/3", "2019/9/4", "2019/9/5", "2019/9/6", "2019/9/7", "2019/9/8", "2019/9/9", "2019/9/10",
                "2019/9/11", "2019/9/12", "2019/9/13", "2019/9/14", "2019/9/15", "2019/9/16", "2019/9/17", "2019/9/18", "2019/9/19", "2019/9/20",
                "2019/9/21", "2019/9/22", "2019/9/23", "2019/9/24", "2019/9/25", "2019/9/26", "2019/9/27", "2019/9/28", "2019/9/29", "2019/9/30",
                "2019/10/1", "2019/10/2", "2019/10/3", "2019/10/4", "2019/10/5", "2019/10/6", "2019/10/7", "2019/10/8", "2019/10/9", "2019/10/10",
                "2019/10/11", "2019/10/12", "2019/10/13", "2019/10/14", "2019/10/15", "2019/10/16", "2019/10/17", "2019/10/18", "2019/10/19", "2019/10/20",
                "2019/10/21", "2019/10/22", "2019/10/23", "2019/10/24", "2019/10/25", "2019/10/26", "2019/10/27", "2019/10/28", "2019/10/29", "2019/10/30", "2019/10/31",
                "2019/11/1", "2019/11/2", "2019/11/3", "2019/11/4", "2019/11/5", "2019/11/6", "2019/11/7", "2019/11/8", "2019/11/9", "2019/11/10",
                "2019/11/11", "2019/11/12", "2019/11/13", "2019/11/14", "2019/11/15", "2019/11/16", "2019/11/17", "2019/11/18", "2019/11/19", "2019/11/20",
                "2019/11/21", "2019/11/22", "2019/11/23", "2019/11/24", "2019/11/25", "2019/11/26", "2019/11/27"]
        DA = JSON.parse(JSON.stringify(date))
        d3.csv("data/code.csv", function (Name_data) {
                d3.csv("data/mrcj.csv", function (newdata) {
                        d3.csv("data/result.csv", function (lstmdata) {

                        NEWDATA = JSON.parse(JSON.stringify(newdata))
                        LSTMDATA = JSON.parse(JSON.stringify(lstmdata))
                        var abres = {}
                        var maelist = {}
    for(var i = 0;i<lstmdata.length;i++){
      var id = lstmdata[i]['id']
      var date = lstmdata[i]['date']
      var diff = lstmdata[i]['diff']
      var result = lstmdata[i]['result']
      var mae = parseFloat(lstmdata[i]['MAE'])
      if(maelist[id]===undefined) maelist[id]=[]
      maelist[id].push(mae)
      if(abres[id]===undefined) abres[id]={}
      if(abres[id][date]===undefined) abres[id][date]=0
      if(result == 'TRUE'){
        abres[id][date] = parseFloat(diff)
      }
      else{
        abres[id][date]=0
      }
    }
    for(i in maelist){
            maelist[i].sort()
    }
                        MAELIST = JSON.parse(JSON.stringify(maelist))
                        ABRES = JSON.parse(JSON.stringify(abres))
                        console.log(ABRES)
                        var namelist = {}
                        var da = []
                        for (i in Name_data) {
                                namelist[Name_data[i].name] = Name_data[i].id;
                        }
                        var idlist = {}
                        for (i in Name_data) {
                                idlist[Name_data[i].id] = Name_data[i].name;
                        }
                        var elist = {}
                        for (i in Name_data) {
                                elist[Name_data[i].name] = Name_data[i].ename;
                        }
                        var clist = {}
                        for (i in Name_data) {
                                elist[Name_data[i].ename] = Name_data[i].name;
                        }
                        var slist = {}
                        for (i in Name_data) {
                                slist[Name_data[i].name] = Name_data[i].short;
                        }
                        var llist = {}
                        for (i in Name_data) {
                                llist[Name_data[i].short] = Name_data[i].name;
                        }
                        var sort = {}
                        for (i in Name_data) {
                                sort[Name_data[i].id] = Name_data[i].sort
                        }
                        var collist = {}
                        for (i in Name_data) {
                                collist[Name_data[i].id] = Name_data[i].color
                        }
                        var dislist = {}
                        for (i in Name_data) {
                                dislist[Name_data[i].id] = 'False'
                        }
                        

                        NAMELIST = JSON.parse(JSON.stringify(namelist))
                        IDLIST = JSON.parse(JSON.stringify(idlist))
                        ELIST = JSON.parse(JSON.stringify(elist))
                        CLIST = JSON.parse(JSON.stringify(clist))
                        SLIST = JSON.parse(JSON.stringify(slist))
                        LLIST = JSON.parse(JSON.stringify(llist))
                        SORT = JSON.parse(JSON.stringify(sort))
                        COLLIST = JSON.parse(JSON.stringify(collist))
                        DISLIST = JSON.parse(JSON.stringify(dislist))

                        pro(newdata, DA, "2018/12/1", "name", "dataname", "datavalue", 0, FL);
                        for(m in GLOBAL_DATA){
                                var ind0 = GLOBAL_DATA[m]['index']
                                if(INDLIST['0']===undefined)INDLIST['0']=[]
                                INDLIST['0'].push(ind0)
                                for(var i=1;i<GLOBAL_DATA[m]['children'].length;i++){
                                        var na1 = NAMELIST[GLOBAL_DATA[m]['children'][i]['name']]
                                        var ind1 = GLOBAL_DATA[m]['children'][i]['index']
                                        if(INDLIST[na1]===undefined)INDLIST[na1]=[]
                                        INDLIST[na1].push(ind1)
                                        for(var j=0;j<GLOBAL_DATA[m]['children'][i]['children'].length;j++){
                                                var na2 = NAMELIST[GLOBAL_DATA[m]['children'][i]['children'][j]['name']]
                                        var ind2 = GLOBAL_DATA[m]['children'][i]['children'][j]['index']
                                        if(INDLIST[na2]===undefined)INDLIST[na2]=[]
                                        INDLIST[na2].push(ind2)
                                                for(var k=0;k<GLOBAL_DATA[m]['children'][i]['children'][j]['children'].length;k++){
                                                        var na3 = NAMELIST[GLOBAL_DATA[m]['children'][i]['children'][j]['children'][k]['name']]
                                                        var ind3 = GLOBAL_DATA[m]['children'][i]['children'][j]['children'][k]['index']
                                                        if(INDLIST[na3]===undefined)INDLIST[na3]=[]
                                                        INDLIST[na3].push(ind3)
                                                }
                                        }
                                }
                            }
                        drawstack('总', GLOBAL_DATA, ST, ED, namelist, idlist, '#fff', CURRENT_DATE)
                        // creatTable('总', CURRENT_DATE, GLOBAL_DATA, ["Index/%", "ind", "input"]);
                        loll('总', CURRENT_DATE, GLOBAL_DATA, TB)
                        drawtree(GLOBAL_DATA, CURRENT_DATE, CURRENT_NAME, namelist)
                        par('总',"2019/1/18",GLOBAL_DATA)
                        var corrlist = []
                        for(var j=0;j<MON.length;j=j+2){
                                var temp = []
                                temp = corr(GLOBAL_DATA, '总',MON[j],MON[j+1])
                                corrlist.push(temp)
                        }
                        CORRLIST = JSON.parse(JSON.stringify(corrlist))
                        console.log(CORRLIST)
                        // radar(CORRLIST)
                        d3.select("#right21head").selectAll("svg").remove()
                        var width = document.getElementById("right21body").clientWidth-20;
                        var legendSvg = d3.select('#right21head')
                        .append('svg')
                        .attr('width',width)
                        .attr('height',40)
                        .append('g')
                        var defs = legendSvg.append("defs");
                        
var off = []
for(var i=0;i<11;i++){
        off[i] = 10*i.toString()+'%'
}
 var col = ["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#FFFAFA","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"]
var linearGradient = defs.append("linearGradient")
						.attr("id","linearColor")
						.attr("x1","0%")
						.attr("y1","0%")
						.attr("x2","100%")
						.attr("y2","0%")
                                                .selectAll('stop')
        .data(off)
        .enter().append('stop')
        .attr('offset', function (d, i) {
          return d
        })
        .attr('stop-color', function (d, i) {
          return col[i]
        });
 
                                var colorRect = legendSvg.append("rect")
				.attr("x", width/2-100)
				.attr("y", 15)
				.attr("width", 200)
				.attr("height", 15)
				.style("fill","url(#linearColor)");

                                legendSvg.append('text')
                                .attr('class', 'legendTitle')
                                .attr('x', width/2-120)
                                .attr('y', 27.5)
                                .style('text-anchor', 'middle')
                                .style('font-size', '12px')
                                .text("-10%");
                                legendSvg.append('text')
                                .attr('class', 'legendTitle')
                                .attr('x', width/2+115)
                                .attr('y', 27.5)
                                .style('text-anchor', 'middle')
                                .style('font-size', '12px')
                                .text("10%");

                         d3.select("#right21body").selectAll("svg").remove() 
                         heat('总',CURRENT_DATE)       
                        // for(i=0;i<CHOSENLIST.length;i++){
                        //         heat(i,ABRES[CHOSENLIST[i]], ELIST[IDLIST[CHOSENLIST[i]]])
                        //       }
                        // vor(CURRENT_NAME, GLOBAL_DATA, CURRENT_DATE, namelist, idlist, FF)
                        // d3.select('#hh').on('click',function(){
                        //         ABS=1
                               
                        // })
                        d3.select('#change').on("click", function () {
                                if (FF == 0) {
                                        FF = 1;
                                        d3.select('#ss').text(function () {
                                                return 'Weight';
                                        })
                                        vor(CURRENT_NAME, GLOBAL_DATA, CURRENT_DATE, NAMELIST, IDLIST, FF)

                                }
                                else if (FF == 2) {
                                        FF = 0;
                                        d3.select('#ss').text(function () {
                                                return 'Index';
                                        })
                                        vor(CURRENT_NAME, GLOBAL_DATA, CURRENT_DATE, NAMELIST, IDLIST, FF)
                                }
                                else if (FF == 1) {
                                        FF = 2;
                                        d3.select('#ss').text(function () {
                                                return 'Contribution';
                                        })
                                        vor(CURRENT_NAME, GLOBAL_DATA, CURRENT_DATE, NAMELIST, IDLIST, FF)
                                }
                        })
                                .on('mouseout', function (d, i) {

                                        d3.select('#ch')
                                                .style('opacity', '0')
                                })
                                .on('mouseover', function (d, i) {
                                        d3.select('#ch')
                                                .style('opacity', '1')
                                });
                                d3.selectAll('#yyy').on('click',function(){
                                        
                                        var dom = this
                                        var val = dom.innerHTML
                                        d3.select('#yy').text(val+' ')
                                        var div = document.getElementById("yy")
                                        var span = document.createElement("span");  
                                        span.setAttribute('class', 'caret'); 
                                        div.appendChild(span);
                                })
                                d3.selectAll('#mmm').on('click',function(){
                                        var dom = this
                                        var val = dom.innerHTML
                                        d3.select('#mm').text(val+' ')
                                        var div = document.getElementById("mm")
                                        var span = document.createElement("span");  
                                        span.setAttribute('class', 'caret'); 
                                        div.appendChild(span);
                                })
                                d3.selectAll('#ddd').on('click',function(){
                                        var dom = this
                                        var val = dom.innerHTML
                                        d3.select('#dd').text(val+' ')
                                        var div = document.getElementById("dd")
                                        var span = document.createElement("span");  
                                        span.setAttribute('class', 'caret'); 
                                        div.appendChild(span);
                                })
                                d3.select('#ok').on('click',function(){
                                        var mon = {'Jan':1,'Feb':2,'Mar':3,'Apr':4,'May':5,'Jun':6,
                                        'Jul':7,'Aug':8,'Sep':9,'Oct':10,'Nov':11,'Dec':12}
                                        var yy =(d3.select('#yy').text().replace(/\s*/g,"")).toString()
                                        var mm =(d3.select('#mm').text().replace(/\s*/g,"")).toString()
                                        var dd =(d3.select('#dd').text().replace(/\s*/g,"")).toString()
                                        CURRENT_DATE = yy+'/'+mon[mm]+'/'+dd
                                        var newmae = document.getElementById('mae').value
                                        console.log(newmae)
                                        var prop = 0
                                        if(newmae != LASTMAE){
                                                LASTMAE=newmae
                                                prop =parseInt(354*LASTMAE/100)
                                                var abres = {}
    for(var i = 0;i<LSTMDATA.length;i++){
      var id = LSTMDATA[i]['id']
      var date = LSTMDATA[i]['date']
      var diff = LSTMDATA[i]['diff']
      var result = LSTMDATA[i]['result']
      var mae = parseFloat(LSTMDATA[i]['MAE'])
      if(abres[id]===undefined) abres[id]={}
      if(abres[id][date]===undefined) abres[id][date]=0
      if(MAELIST[id][prop]<=mae){
              console.log(111,MAELIST[id][prop])
        abres[id][date] = parseFloat(diff)
      }
      else{
        abres[id][date]=0
      }
    }
    ABRES = JSON.parse(JSON.stringify(abres))
                                        }
                                        console.log(ABRES)

                                        heat(CURRENT_NAME,CURRENT_DATE)
                                        loll("总", CURRENT_DATE, GLOBAL_DATA, TB)
                                        drawstack(CURRENT_NAME, GLOBAL_DATA, ST, ED, namelist, idlist, '#fff', CURRENT_DATE)
                                        // par(AB_NAME,CURRENT_DATE,GLOBAL_DATA)
                                })
                        d3.select("#on").on('click',function(){
                                ABS=1
                                d3.select("#on").attr('class','btn btn-default active')
                                d3.select("#off").attr('class','btn btn-default')
                                heatline(GLOBAL_DATA,CURRENT_NAME);
                                loll('总', CURRENT_DATE, GLOBAL_DATA, TB)
                                // vor(CURRENT_NAME, GLOBAL_DATA, CURRENT_DATE, namelist, idlist, FF)
                                // creatTable(CURRENT_NAME, CURRENT_DATE, GLOBAL_DATA, TIT);
                        })
                        d3.select("#off").on('click',function(){
                                ABS=0
                                d3.select("#on").attr('class','btn btn-default')
                                d3.select("#off").attr('class','btn btn-default active')
                                drawstack(CURRENT_NAME, GLOBAL_DATA, ST, ED, namelist, idlist, '#fff', CURRENT_DATE)
                                loll('总', CURRENT_DATE, GLOBAL_DATA, TB)
                                // vor(CURRENT_NAME, GLOBAL_DATA, CURRENT_DATE, namelist, idlist, FF)
                                // creatTable(CURRENT_NAME, CURRENT_DATE, GLOBAL_DATA, TIT);
                        })
                        d3.select("#redo").on('click',function(){
                                var peek = OPERATING_REDO.peek()
          OPERATING_HISTORY.push(peek)
          if(peek.drawname!=DRAWNAME){
                      drawstack(peek.drawname, GLOBAL_DATA, ST, ED, NAMELIST, IDLIST,'#fff',CURRENT_DATE)
          }
          OPERATING_REDO.pop()
                        })
                        d3.select("#undo").on('click',function(){
                                var top = OPERATING_HISTORY.top
                                var na = OPERATING_HISTORY.dataStore[top-1].drawname
                                OPERATING_REDO.push(na)
                                console.log(na, DRAWNAME)
                                if(na!=DRAWNAME){
                                  drawstack(na, GLOBAL_DATA, ST, ED, NAMELIST, IDLIST,'#fff',CURRENT_DATE)
                                }
                                OPERATING_HISTORY.pop()
                        })
                        d3.select("#sort").on('click',function(){
                                drawstack(CURRENT_NAME, GLOBAL_DATA, ST, ED, NAMELIST, IDLIST,'#fff',CURRENT_DATE)
                        })
                        d3.select("#init").on('click',function(){
                                ST='2018/12/1'
                                ED='2019/11/27'
          drawstack(CURRENT_NAME, GLOBAL_DATA, ST, ED, NAMELIST, IDLIST,'#fff',CURRENT_DATE)
                        })
                        d3.select("#app").on('click',function(){
                                TEMP = 0
                                console.log(CURRENT_DATE)
                                pro(NEW_NEWDATA, DA, CURRENT_DATE, NAA, '当日平均价格', VAL , 1, FL);
                                d3.select("#box").style('visibility', 'hidden')
                                loll("总", CURRENT_DATE, GLOBAL_DATA, TB)
                        })
                        d3.select("#can").on('click',function(){
                                d3.select("#box").style('visibility', 'hidden')
                                drawstack(CURRENT_NAME, GLOBAL_DATA, ST, ED, NAMELIST, IDLIST,'#fff',CURRENT_DATE)
                        })
                        d3.select("#show").on('click',function(){
                                TEMP = 1
                                pro(NEW_NEWDATA, DA, CURRENT_DATE, NAA, '当日平均价格', VAL , 1, FL);
                        })
                        d3.select("#cg").on('click',function(){
                                if(TB==0){
                                        console.log(111)
                                        TB=1
                                        loll("总", CURRENT_DATE, GLOBAL_DATA, TB)
                                }
                                else if(TB==1){
                                        console.log(22)
                                        TB=2
                                        loll("总", CURRENT_DATE, GLOBAL_DATA, TB)
                                }
                                else if(TB==2){
                                        console.log(33)
                                        TB=3
                                        loll("总", CURRENT_DATE, GLOBAL_DATA, TB)
                                }
                                else if(TB==3){
                                        console.log(44)
                                        TB=0
                                        loll("总", CURRENT_DATE, GLOBAL_DATA, TB)
                                }
                        })
                        $(function () {
                                $("#ex8").slider({ step: 1, min: 0, max: 100 });
                                $("#ex7").slider({ step: 1, min: 0, max: 19 });
                                $("#fb").click(function(){
                                        ITY=0
                                        d3.select("#fb").attr('class','btn btn-default active')
                                        d3.select("#c").attr('class','btn btn-default')
                                        if(IP==0){
                                                FL = 0
                                                ED = 357
                                        }
                                        else if(IP==1){
                                                FL = 1
                                                ED = 50
                                        }
                                        else{
                                                FL = 2
                                                ED = 11
                                        }
                                        pro(NEW_NEWDATA, date, CURRENT_DATE, "name", "dataname", "datavalue", 0, FL);
                                        aa(day(FL));
                                        drawstack(CURRENT_NAME, GLOBAL_DATA, ST, ED, namelist, idlist, '#fff', CURRENT_DATE)
                                        vor(CURRENT_NAME, GLOBAL_DATA, CURRENT_DATE, NAMELIST, IDLIST, FF)
                                       


                                        d3.select("#right21body").selectAll("svg").remove()        
                        for(i=0;i<CHOSENLIST.length;i++){
                                heat(i,ABRES[CHOSENLIST[i]], ELIST[IDLIST[CHOSENLIST[i]]])
                              }
                                        if(ABS==0){
                                                drawstack(CURRENT_NAME, GLOBAL_DATA, ST, ED, NAMELIST, IDLIST, '#fff', CURRENT_DATE)
                                        }
                                        else{
                                                heatline(GLOBAL_DATA,CURRENT_NAME);
                                        }
                                        creatTable(CURRENT_NAME, CURRENT_DATE, GLOBAL_DATA, TIT);

                                        DA = day(FL)
                                        var len = DA.length - 1
                                        $("#ex8").slider({ step: 1, min: 0, max: 100 });
                                })
                                $("#c").click(function(){
                                        ITY=1
                                        d3.select("#c").attr('class','btn btn-default active')
                                        d3.select("#fb").attr('class','btn btn-default')
                                        if(IP==0){
                                                FL = 3
                                                ED = 356
                                        }
                                        else if(IP==1){
                                                FL = 4
                                                ED = 50
                                        }
                                        else{
                                                FL = 5
                                                ED = 11
                                        }
                                        pro(NEW_NEWDATA, date, CURRENT_DATE, "name", "dataname", "datavalue", 0, FL);
                                        aa(day(FL));
                                        drawstack(CURRENT_NAME, GLOBAL_DATA, ST, ED, namelist, idlist, '#fff', CURRENT_DATE)
                                        vor(CURRENT_NAME, GLOBAL_DATA, CURRENT_DATE, NAMELIST, IDLIST, FF)
                                       


                                        d3.select("#right21body").selectAll("svg").remove()        
                        for(i=0;i<CHOSENLIST.length;i++){
                                heat(i,ABRES[CHOSENLIST[i]], ELIST[IDLIST[CHOSENLIST[i]]])
                              }
                                        if(ABS==0){
                                                drawstack(CURRENT_NAME, GLOBAL_DATA, ST, ED, NAMELIST, IDLIST, '#fff', CURRENT_DATE)
                                        }
                                        else{
                                                heatline(GLOBAL_DATA,CURRENT_NAME);
                                        }
                                        creatTable(CURRENT_NAME, CURRENT_DATE, GLOBAL_DATA, TIT);

                                        DA = day(FL)
                                        var len = DA.length - 1
                                        $("#ex8").slider({ step: 1, min: 0, max: 100 });
                                })
                                $("#da").click(function(){
                                        IP=0
                                        d3.select("#da").attr('class','btn btn-default active')
                                        d3.select("#we").attr('class','btn btn-default')
                                        d3.select("#mo").attr('class','btn btn-default')
                                        d3.select("#ye").attr('class','btn btn-default')
                                        if(ITY==0){
                                                FL = 0
                                                ED = 357
                                        }
                                        else{
                                                FL = 3
                                                ED = 356
                                        }
                                        pro(NEW_NEWDATA, date, CURRENT_DATE, "name", "dataname", "datavalue", 0, FL);
                                        aa(day(FL));
                                        drawstack(CURRENT_NAME, GLOBAL_DATA, ST, ED, namelist, idlist, '#fff', CURRENT_DATE)
                                        vor(CURRENT_NAME, GLOBAL_DATA, CURRENT_DATE, NAMELIST, IDLIST, FF)
                                        


                                        d3.select("#right21body").selectAll("svg").remove()        
                        for(i=0;i<CHOSENLIST.length;i++){
                                heat(i,ABRES[CHOSENLIST[i]], ELIST[IDLIST[CHOSENLIST[i]]])
                              }
                                        if(ABS==0){
                                                drawstack(CURRENT_NAME, GLOBAL_DATA, ST, ED, NAMELIST, IDLIST, '#fff', CURRENT_DATE)
                                        }
                                        else{
                                                heatline(GLOBAL_DATA,CURRENT_NAME);
                                        }
                                        creatTable(CURRENT_NAME, CURRENT_DATE, GLOBAL_DATA, TIT);

                                        DA = day(FL)
                                        var len = DA.length - 1
                                        $("#ex8").slider({ step: 1, min: 0, max: 100 });
                                })
                                $("#we").click(function(){
                                        IP=1
                                        d3.select("#da").attr('class','btn btn-default')
                                        d3.select("#we").attr('class','btn btn-default active')
                                        d3.select("#mo").attr('class','btn btn-default')
                                        d3.select("#ye").attr('class','btn btn-default')
                                        if(ITY==0){
                                                FL = 1
                                                ED = 50
                                        }
                                        else{
                                                FL = 4
                                                ED = 50
                                        }
                                        pro(NEW_NEWDATA, date, CURRENT_DATE, "name", "dataname", "datavalue", 0, FL);
                                        aa(day(FL));
                                        drawstack(CURRENT_NAME, GLOBAL_DATA, ST, ED, namelist, idlist, '#fff', CURRENT_DATE)
                                        vor(CURRENT_NAME, GLOBAL_DATA, CURRENT_DATE, NAMELIST, IDLIST, FF)
                                        


                                        d3.select("#right21body").selectAll("svg").remove()        
                        for(i=0;i<CHOSENLIST.length;i++){
                                heat(i,ABRES[CHOSENLIST[i]], ELIST[IDLIST[CHOSENLIST[i]]])
                              }
                                        if(ABS==0){
                                                drawstack(CURRENT_NAME, GLOBAL_DATA, ST, ED, NAMELIST, IDLIST, '#fff', CURRENT_DATE)
                                        }
                                        else{
                                                heatline(GLOBAL_DATA,CURRENT_NAME);
                                        }
                                        creatTable(CURRENT_NAME, CURRENT_DATE, GLOBAL_DATA, TIT);

                                        DA = day(FL)
                                        var len = DA.length - 1
                                        $("#ex8").slider({ step: 1, min: 0, max: 100 });
                                })
                                $("#mo").click(function(){
                                        IP=2
                                        d3.select("#da").attr('class','btn btn-default')
                                        d3.select("#we").attr('class','btn btn-default')
                                        d3.select("#mo").attr('class','btn btn-default active')
                                        d3.select("#ye").attr('class','btn btn-default')
                                        if(ITY==0){
                                                FL = 2
                                                ED = 11
                                        }
                                        else{
                                                FL = 5
                                                ED = 11
                                        }
                                        pro(NEW_NEWDATA, date, CURRENT_DATE, "name", "dataname", "datavalue", 0, FL);
                                        aa(day(FL));
                                        drawstack(CURRENT_NAME, GLOBAL_DATA, ST, ED, namelist, idlist, '#fff', CURRENT_DATE)
                                        vor(CURRENT_NAME, GLOBAL_DATA, CURRENT_DATE, NAMELIST, IDLIST, FF)
                                        


                                        d3.select("#right21body").selectAll("svg").remove()        
                                        for(i=0;i<CHOSENLIST.length;i++){
                                                heat(i,ABRES[CHOSENLIST[i]], ELIST[IDLIST[CHOSENLIST[i]]])
                                              }
                                        if(ABS==0){
                                                drawstack(CURRENT_NAME, GLOBAL_DATA, ST, ED, NAMELIST, IDLIST, '#fff', CURRENT_DATE)
                                        }
                                        else{
                                                heatline(GLOBAL_DATA,CURRENT_NAME);
                                        }
                                        creatTable(CURRENT_NAME, CURRENT_DATE, GLOBAL_DATA, TIT);

                                        DA = day(FL)
                                        var len = DA.length - 1
                                        $("#ex8").slider({ step: 1, min: 0, max: 100 });
                                })
                                $("#ye").click(function(){
                                        d3.select("#da").attr('class','btn btn-default')
                                        d3.select("#we").attr('class','btn btn-default')
                                        d3.select("#mo").attr('class','btn btn-default')
                                        d3.select("#ye").attr('class','btn btn-default active')
                                        
                                })
                                        
                                       
                                $("#ex8").on("slide", function (slideEvt) {
                                        $('#mae').val(slideEvt.value)
                                        
                                });
                        });

                });
        });
        });
});
