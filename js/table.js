let tooltip = d3.select('#right22body')
        .append('div')
        .attr("id","box")
        .style("width","188px")
        .style("height","286px")
        .style('position', 'relative')
        .style('left', '2px')
        .style('top', '-288px')
        .style('z-index', '30')
        .style('border-radius', '5px 0 0 5px')
        .style('background-color', 'white')
        .style('visibility', 'hidden')   // 是否可见（一开始设置为隐藏）
        .text('')      

var mcolor1 = ["#ff5e63","#6e40aa","#417de0","#aff05b","#efa72f","#bfbf00","#00bfbf"];
function creatTable(name, dt,daa,tit) {
        // console.log(name, dt,daa)
        
        
var date=day(FL)
var bef;
if(dt!=date[0]){
        for(i in date){
                if(dt==date[i]){
                        bef=date[i-1];
                }
        }
}

    var ind, wei, bas, basel, basee, pri, chi = 0, nam;
    var data=[];
    var height = document.getElementById("right22body").clientHeight-30;
    var bb = JSON.parse(JSON.stringify(daa))
    var nn = NAMELIST[name] + "";
//     console.log(NAMELIST)
    var kk;
if(TYPE==0){
    kk=5;
}else{
    kk=6
}

    if (NAMELIST[name] == 0) {
            var occ = [];
            for (i = 1; i <= kk; i++) {
                    var count = bb[dt]["children"][i]["children"].length;
                    var cc;
                    var ccc;
                    var oc = [];
                    for (j = 0; j < count; j++) {
                            cc = bb[dt]["children"][i]
                            ["children"][j]["children"].length;
                            ccc = bb[dt]["children"][i]
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

    }
    if (nn.length == 1) {
            var count = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
            ["children"].length;
            var cc;
            var ccc;
            var oc = [];
            for (i = 0; i < count; i++) {
                    cc = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                    ["children"][i]["children"].length;
                    ccc = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                    ["children"][i]["children"];
                    var ctt=[]
                    mm = cc
                    for(k=0;k<mm;k++){
                 
                //       if(ccc[k].index==0){
                //         cc = cc-1;
                //       }
                //       else if(ccc[k].index!=0){
                        ctt.push(ccc[k]);
                //       }
                    }
                    oc = oc.concat(ctt);
                    chi = chi + cc;
            }
    }
    if (nn.length == 3) {
            chi = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
            ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
            ["children"].length;
            ch = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
            ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
            ["children"]
            mm = chi
                    for(k=0;k<mm;k++){
                  
                //       if(ch[k].index==0){
                //         chi = chi-1;
                //       }
                    
                    }
    }
    if (nn.length == 5) {
        chi = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
        ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
        ["children"].length;
        ch = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
            ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
            ["children"]
            mm = chi
            for(k=0;k<mm;k++){
              
        //       if(ch[k].index==0){
        //         chi = chi-1;
        //       }
            
            }
    }
    CH=chi;
 
//     var tablehead = '<table border=1>';
//     var head = [];
//     if (flag == false) {
//             if (atext == '指数') {
//                     head = ['名称', '指数/%'];
//             }
//             else if (atext == '权重') {
//                     head = ['名称', '权重/%'];
//             }
//             // else if (atext == '基期销售量') {
//             //         head = ['名称', '基期销售量/kg'];
//             // }
//             // else if (atext == '基期销售额') {
//             //         head = ['名称', '基期销售额/万元'];
//             // }
//             else if (atext == '基期价格') {
//                     head = ['名称', '基期价格/元'];
//             }
//             else if (atext == '当日平均价格') {
//                     head = ['名称', '当日平均价格/元'];
//             }
//     }
//     else {
//             head = ['名称', '指数/%', '权重/%', '基期销售量/kg', '基期销售额/万元', '基期价格/元', '当日平均价格/元'];
//     }
//     tablehead += "<tr>"
//     if (flag == false) {
//             for (i = 0; i <= 1; i++) {
//                     tablehead += "<td style='text-align:center;width:180px;' >" + head[i] + "</td>"
//             }
//     }
//     else {
//             for (i = 0; i <= 6; i++) {
//                     tablehead += "<td style='text-align:center;width:180px;' >" + head[i] + "</td>"
//             }
//     }
//     tablehead += "</tr>"
//     var tableData = '<table border=1>';

 var cut=0;
    for (var j = 0; j < chi; j++) {
            var da={};
            da.id=j+1+"";
            if (NAMELIST[name] == 0&& occ[j].index!=null) {
                    da.nam = occ[j].name;
                    da.enam = ELIST[da.nam] 
                    da.ind = occ[j].index.toFixed(2)
                    da.wei = (occ[j].reweight*100).toFixed(2);
                    da.bas = occ[j].base.toFixed(2);
                    // basel = occ[j].basesalel;
                    // basee = occ[j].basesalee / 10000;
                    da.pri = occ[j].price.toFixed(2);
                    if (da.ind == null) {
                        da.ind = 0;
                    }
                    if (da.pri == null) {
                        da.pri = 0;
                    }
                    if(dt!=date[0]){
                           
                        var com=GLOBAL_DATA[bef]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[da.nam].substring(0, 1)]; })
                        ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[da.nam].substring(0, 3)]; })
                        ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[da.nam]];}).index;
                        // console.log(com,parseFloat(da.ind),parseFloat(da.ind)-com)
                        if(com<parseFloat(da.ind)){
                                if(parseFloat(da.ind)-com>2.5){
                                        da.exm="/img/sss.png";
                                }
                                else if(parseFloat(da.ind)-com<=2.5){
                                        da.exm="/img/ss.png";
                                }
                                
                        }
                        else if(com>parseFloat(da.ind)){
                                if(com-parseFloat(da.ind)>2.5){
                                        da.exm="/img/lll.png";
                                }
                                else if(com-parseFloat(da.ind)<=2.5){
                                        da.exm="/img/ll.png";
                                }
                        }
                        else if(com==parseFloat(da.ind)){
                                da.exm="/img/cp.png"; 
                        }
                    }
                    else{
                                da.exm="/img/cp.png";
                    }
                    
                    
            }
            if (nn.length == 1 && NAMELIST[name] != 0&& oc[j].index!=null) {
                da.nam = oc[j].name;
                da.enam = ELIST[da.nam]
                da.ind = oc[j].index.toFixed(2)
                da.wei = (oc[j].reweight*100).toFixed(2);
                da.bas = oc[j].base.toFixed(2);
                // basel = occ[j].basesalel;
                // basee = occ[j].basesalee / 10000;
                da.pri = oc[j].price.toFixed(2);
                if (da.ind == null) {
                    da.ind = 0;
                }
                if (da.pri == null) {
                    da.pri = 0;
                }
                if(dt!=date[0]){
                           
                        var com=GLOBAL_DATA[bef]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[da.nam].substring(0, 1)]; })
                        ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[da.nam].substring(0, 3)]; })
                        ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[da.nam]];}).index;
                        // console.log(com,parseFloat(da.ind),parseFloat(da.ind)-com)
                        if(com<parseFloat(da.ind)){
                                if(parseFloat(da.ind)-com>2){
                                        da.exm="/img/sss.png";
                                }
                                else if(parseFloat(da.ind)-com<=2){
                                        da.exm="/img/ss.png";
                                }
                                
                        }
                        else if(com>parseFloat(da.ind)){
                                if(com-parseFloat(da.ind)>2){
                                        da.exm="/img/lll.png";
                                }
                                else if(com-parseFloat(da.ind)<=2){
                                        da.exm="/img/ll.png";
                                }
                        }
                        else if(com==parseFloat(da.ind)){
                                da.exm="/img/cp.png"; 
                        }
                    }
                    else{
                                da.exm="/img/cp.png";
                    }
            }
            if (nn.length == 3
            && bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
            ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
            ["children"][j].index!=null) {
                da.nam = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                    ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                    ["children"][j].name;
                    da.ind = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                    ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                    ["children"][j].index.toFixed(2)
                    da.wei = (bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                    ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                    ["children"][j].reweight*100).toFixed(2);
                    da.bas = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                    ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                    ["children"][j].base.toFixed(2);
                    da.enam = ELIST[da.nam]
                    // basel = aa[day]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                    // ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                    // ["children"][j].basesalel;
                    // basee = aa[day]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                    // ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                    // ["children"][j].basesalee / 10000;
                    da.pri = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                    ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                    ["children"][j].price.toFixed(2);
                    if (da.ind == null) {
                        da.ind = 0;
                    }
                    if (da.pri == null) {
                        da.pri = 0;
                    }
                    if(dt!=date[0]){
                           
                        var com=GLOBAL_DATA[bef]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[da.nam].substring(0, 1)]; })
                        ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[da.nam].substring(0, 3)]; })
                        ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[da.nam]];}).index;
                        // console.log(com,parseFloat(da.ind),parseFloat(da.ind)-com)
                        if(com<parseFloat(da.ind)){
                                if(parseFloat(da.ind)-com>2){
                                        da.exm="/img/sss.png";
                                }
                                else if(parseFloat(da.ind)-com<=2){
                                        da.exm="/img/ss.png";
                                }
                                
                        }
                        else if(com>parseFloat(da.ind)){
                                if(com-parseFloat(da.ind)>2){
                                        da.exm="/img/lll.png";
                                }
                                else if(com-parseFloat(da.ind)<=2){
                                        da.exm="/img/ll.png";
                                }
                        }
                        else if(com==parseFloat(da.ind)){
                                da.exm="/img/cp.png"; 
                        }
                    }
                    else{
                                da.exm="/img/cp.png";
                    }
            }
            if (nn.length == 5
            &&bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
            ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
            ["children"][j].index!=null) {
                da.nam = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                ["children"][j].name;
                da.enam = ELIST[da.nam]
                da.ind = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                ["children"][j].index.toFixed(2)
                da.wei = (bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                ["children"][j].reweight*100).toFixed(2);
                da.bas = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                ["children"][j].base.toFixed(2);
                // basel = aa[day]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                // ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                // ["children"][j].basesalel;
                // basee = aa[day]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                // ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                // ["children"][j].basesalee / 10000;
                da.pri = bb[dt]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
                ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
                ["children"][j].price.toFixed(2);
                if (da.ind == null) {
                    da.ind = 0;
                }
                if (da.pri == null) {
                    da.pri = 0;
                }
                if(dt!=date[0]){
                           
                        var com=GLOBAL_DATA[bef]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[da.nam].substring(0, 1)]; })
                        ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[da.nam].substring(0, 3)]; })
                        ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[da.nam]];}).index;
                        // console.log(com,parseFloat(da.ind),parseFloat(da.ind)-com)
                        if(com<parseFloat(da.ind)){
                                if(parseFloat(da.ind)-com>2){
                                        da.exm="/img/sss.png";
                                }
                                else if(parseFloat(da.ind)-com<=2){
                                        da.exm="/img/ss.png";
                                }
                                
                        }
                        else if(com>parseFloat(da.ind)){
                                if(com-parseFloat(da.ind)>2){
                                        da.exm="/img/lll.png";
                                }
                                else if(com-parseFloat(da.ind)<=2){
                                        da.exm="/img/ll.png";
                                }
                        }
                        else if(com==parseFloat(da.ind)){
                                da.exm="/img/cp.png"; 
                        }
                    }
                    else{
                                da.exm="/img/cp.png";
                    }
        }
//             if (flag == false) {
//                     for (var i = 0; i <= 1; i++) {
//                             var datatable = []
//                             if (atext == '指数') {
//                                     datatable.push(nam, ind.toFixed(2));
//                             }
//                             else if (atext == '权重') {
//                                     datatable.push(nam, (wei*100).toFixed(2))
//                             }
//                             // else if (atext == '基期销售量') {
//                             //         datatable.push(nam, basel)
//                             // }
//                             // else if (atext == '基期销售额') {
//                             //         datatable.push(nam, basee)
//                             // }
//                             else if (atext == '基期价格') {
//                                     datatable.push(nam, bas.toFixed(2))
//                             }
//                             else if (atext == '当日平均价格') {
//                                     datatable.push(nam, pri.toFixed(2))
//                             }

//                     }
//             }
//             else {
//                     for (var i = 0; i <= 4; i++) {
//                             var datatable = []
//                             datatable.push(nam, ind.toFixed(2), (wei*100).toFixed(2), bas.toFixed(2), pri.toFixed(2));


//                     }
//             }
//             //动态增加5个td,并且把data数组的五个值赋给每个td
//             if (flag == false) {
//                     for (var i = 0; i <= 1; i++) {
//                             if (atext == '指数') {
//                                     tableData += "<td style='text-align:center;width:180px;' contentEditable='false'>" + datatable[i] + "</td>"
//                             }
//                             else {
//                                     tableData += "<td style='text-align:center;width:180px;' contentEditable='true'>" + datatable[i] + "</td>"
//                             }
//                     }
//             }
//             else {
//                     for (var i = 0; i <= 4; i++) {
//                             if (atext == '指数') {
//                                     tableData += "<td style='text-align:center;width:180px;' contentEditable='false'>" + datatable[i] + "</td>"
//                             }
//                             else {
//                                     tableData += "<td style='text-align:center;width:180px;' contentEditable='true'>" + datatable[i] + "</td>"
//                             }
//                     }
//             }
//             tableData += "</tr>"


if(da.nam!=undefined){
        data.push(da);
        da.id=cut;
        cut++;
}
    }
    datt = JSON.parse(JSON.stringify(data))
    OLDSJ = JSON.parse(JSON.stringify(data))

//     //现在tableData已经生成好了，把他赋值给上面的tbody
//     $("#tbody1").html(tablehead)
//     $("#tbody2").html(tableData)
//     // bgcolor(atext);
//     HH=1742.4;
//     WW=22.8;
//     console.log(HH,WW)
var p1=tit[0]
var p2=tit[1]
var p3=tit[2] 
d3.select("#cg")
.on("click",function(){
        if(TFL==0){
                TFL=1
                TIT=["Index/%","ind","input"]
                creatTable(CURRENT_NAME,CURRENT_DATE,GLOBAL_DATA,TIT)
        }
        else if(TFL==1){
            TFL=2
            TIT=["Weight/%","wei","input"]
          
                creatTable(CURRENT_NAME,CURRENT_DATE,GLOBAL_DATA,TIT)
        }
        else if(TFL==2){
            TFL=3
            TIT=["Base Price/¥","bas","input"]
                creatTable(CURRENT_NAME,CURRENT_DATE,GLOBAL_DATA,TIT)
            
        }
        else if(TFL==3){
            TFL=0
            TIT=["Price of the Day/¥","pri","input"]
                creatTable(CURRENT_NAME,CURRENT_DATE,GLOBAL_DATA,TIT)
        }
  })      
var table = new Tabulator("#tablebody", {
        data:datt,
        height:height,
        movableColumns:true,
        columns:[
                
        // {title:"Name", field:"name", width:150, formatter:function(cell, formatterParams){
        //    var value = cell.getValue();
        //     if(value.indexOf("o") > 0){
        //         return "<span style='color:red; font-weight:bold;'>" + value + "</span>";
        //     }else{
        //         return value;
        //     }
        // }},
       {title:"R/D", field:"exm", formatter:"image", hozAlign:"center",width:60,height:35,formatterParams:{
                height:"12px",
                width:"12px",
            }},
                {title:"Product Name", field:"enam",width:130,formatter:co},
                {title:p1, field:p2,editor:p3,width:141,legend:function(value){
                        return value
                }},
        ],
        rowMouseOver:function(e, row){
                var ro=row.getData()
              
               HL=1;
               var sh={}
               sh['Group']=ELIST[IDLIST[NAMELIST[ro.nam][0]]]
               sh['Index/%']=ro.ind;
               sh["Weight/%"]=ro.wei;
               sh["Contribution/%"]=(ro.ind*ro.wei/100).toFixed(2)
               sh["Base Price/¥"]=ro.bas;
               sh["Price of the Day/¥"]=ro.pri;
        //    console.log(ro.nam)
        //        parallel(CURRENT_NAME,CURRENT_DATE,GLOBAL_DATA,ro.nam);
                },
                rowMouseOut:function(e, row){
                       HL=0;
                       var sh={}
                //        parallel(CURRENT_NAME,CURRENT_DATE,GLOBAL_DATA," ");
                        },
                        dataEdited:function(data){
                                        SJ=JSON.parse(JSON.stringify(data))
                                       console.log(SJ)
                        }, 
                        rowClick:function(e, row){
                                var ro=row.getData()
                                var aa = JSON.parse(JSON.stringify(GLOBAL_DATA))
                                var pos;
                                var name=ro.nam;
                           
                                var pr;
                                var ys=[];
                                for(var i=0;i<date.length;i++){
                                        if(date[i]==CURRENT_DATE){
                                                pos=i+1;
                                                break;
                                        }
                                }
                                // console.log(pos);
                                if(pos<=10){
                                        for(i=0;i<pos-1;i++){
pr = aa[date[i]]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
    ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
    ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name]]; })['price']
                                                ys[i]=pr;
                                        }
                                        for(i=pos;i<=20;i++){
                                                // console.log(aa[date[i]])
pr = aa[date[i]]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
    ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
    ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name]]; })['price']
                                                ys[i-1]=pr;
                                                
                                        }
                                }
                                else{
                                        var k=0;
                                        for(i=pos-10;i<pos;i++){
                                                pr = aa[date[i]]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
    ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
    ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name]]; })['price']
                                                ys[k]=pr;
                                                k++;
                                        }
                                        for(i=pos+1;i<=pos+10;i++){
                                                pr = aa[date[i]]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
    ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
    ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name]]; })['price']
                                                ys[k]=pr;
                                                k++;
                                        }
                                }
                                // console.log(ys);
                                var ref = fit(ys,pos);
                                console.log(ref)
                                d3.select('#box').text('')
                                d3.select('#box')
                                .style('visibility', 'visible')
                                .append('span')
                                .attr("id","tit4")
                                .text('Reference Value')
                                .append('span')
                                .attr("id","da5")
                                .text(function () {
                                        return ref+ " ¥"
                                })
                                boxplot(name, 0, GLOBAL_DATA, ref)
                                d3.select('#box').on('click',function(){
                                        d3.select('#box').style('visibility', 'hidden')
                                })
                                // .append('hr')
                                // .attr('style','height:3px;border:none;border-top:3px solid #ccc;margin: 10px 8px 5px 0px;')
                         var z=NAMELIST[ro.nam]+'' 
                         if(z.length==5){
                                
                                
                              }      
                    },      
        
    });
    
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
    function co(cell, formatterParams){
        var value = cell.getValue();
        var z=NAMELIST[ELIST[value]]
        if(z.length==5){
                
              
              if(ABS==1){
                var cnt=0
                for(var i=0;i<date.length;i++){
                  if(date[i]==CURRENT_DATE){
                    cnt=i
                    break;
                  }
                }
                if(ABLIST[z][cnt]!=0&&ABLIST[z][cnt]!=null){
                        var c=COLLIST[z]
                return "<span style='font-weight:bold;color:"+c+"'>" + value + "</span>";
                }
                else{
                        var c=COLLIST[z]
                return "<span style='color:"+c+"'>" + value + "</span>";
                }
        }
        else{
                var c=COLLIST[z]
                return "<span style='color:"+c+"'>" + value + "</span>";
        }
}
     }
    
//      function p1() {
//         return "Weight/%"
// }
//     $("#tablebody").tabulator("setData",data);
//     $("#tablebody").tabulator({
//         rowContext:function(e,id,data, row){
//                 var list1=GLOBAL_DATA

//                                 var id = NAMELIST[data.nam] + '';
//                                 console.log(id)
//                                 var sum=0
//                                 var count=[]
//                                 var be;
//                                 var af;
//                                 var max;
//                                 var min;
//                                 var ave;
//                                 var s=0;
//                                 while(CURRENT_DATE!=date[s]){
//                                         s++;
//                                 }
        
//                                 var tid = id.slice(0,3);
//                                 var as = list1[date[s+1]]["children"]
//                                 .find(function (x) { return x.name == IDLIST[id[0]]; })["children"]
//                                 .find(function (x) { return x.name == IDLIST[tid]; })["children"]
//                                 .find(function (x) { return x.name == IDLIST[id]; })["price"]
                             
//                                 if(s==0){
//                                         be='none';
//                                 }
//                                 else if(s==date.length){
//                                         af='none'
//                                 }
//                                 else if(s>=1){
//                                 var be = list1[date[s-1]]["children"]
//                                 .find(function (x) { return x.name == IDLIST[id[0]]; })["children"]
//                                 .find(function (x) { return x.name == IDLIST[tid]; })["children"]
//                                 .find(function (x) { return x.name == IDLIST[id]; })["price"]
//                                 }
//                                 else if(s<362){
//                                 var af = list1[date[s+1]]["children"]
//                                 .find(function (x) { return x.name == IDLIST[id[0]]; })["children"]
//                                 .find(function (x) { return x.name == IDLIST[tid]; })["children"]
//                                 .find(function (x) { return x.name == IDLIST[id]; })["price"]
//                                 } 
//                                 for (i in list1) {
//                                                 var tid = id.slice(0,3);
//                                                 // if(TEXT=='权重'){
//                                                 //         var vv = list1[i]["children"]
//                                                 //         .find(function (x) { return x.name == IDLIST[id[0]]; })["children"]
//                                                 //         .find(function (x) { return x.name == IDLIST[tid]; })["children"]
//                                                 //         .find(function (x) { return x.name == IDLIST[id]; })["reweight"]
//                                                 // }
//                                                 // else if(TEXT=='基期价格'){
//                                                 //         var vv = list1[i]["children"]
//                                                 //         .find(function (x) { return x.name == IDLIST[id[0]]; })["children"]
//                                                 //         .find(function (x) { return x.name == IDLIST[tid]; })["children"]
//                                                 //         .find(function (x) { return x.name == IDLIST[id]; })["base"]
//                                                 // }
//                                                 // else if(TEXT=='当日平均价格'){
//                                                         var vv = list1[i]["children"]
//                                                         .find(function (x) { return x.name == IDLIST[id[0]]; })["children"]
//                                                         .find(function (x) { return x.name == IDLIST[tid]; })["children"]
//                                                         .find(function (x) { return x.name == IDLIST[id]; })["price"]
//                                                 // }
//                                                 count.push(vv);
//                                                 sum=sum+vv;             
//                 }
//                 ave=sum/count.length;
//                 count.sort(function(a,b){return a-b;});
//                 k=0;
//                 while(count[k]==0){
//                         k++;
//                 }
// 　　            min = count[k];
// 　　            max = count[count.length-1];
//                 if(min==undefined){
//                         min=0;
//                 }
//                 $("#re").html("average: "+ave.toFixed(2)+" min: "+min+" max: "+max+" before: "+be+" after: "+as);
//         },
//     });
    d3.select(".app").on("click",function(){
        var table = new Tabulator("#tablebody", {
                height:height,
                data:SJ,
                layout:"fitColumns",
                columns:[
                        
                // {title:"Name", field:"name", width:150, formatter:function(cell, formatterParams){
                //    var value = cell.getValue();
                //     if(value.indexOf("o") > 0){
                //         return "<span style='color:red; font-weight:bold;'>" + value + "</span>";
                //     }else{
                //         return value;
                //     }
                // }},
                        //custom formatter definition
 
    
    //column definition in the columns array
    {title:"R/D", field:"exm", formatter:"image",hozAlign:"center",width:50, formatterParams:{
        height:"12px",
        width:"12px",
    }},
        {title:"Product Name", field:"enam",width:134,formatter:co},
        {title:p1, field:p2,editor:p3,width:139,legend:function(value){
                return value
        }},
                ],
                rowMouseOver:function(e, row){
                        var ro=row.getData()
                      
                       HL=1;
                       var sh={}
                       sh['Group']=ELIST[IDLIST[NAMELIST[ro.nam][0]]]
                       sh['Index/%']=ro.ind;
                       sh["Weight/%"]=ro.wei;
                       sh["Contribution/%"]=(ro.ind*ro.wei/100).toFixed(2)
                       sh["Base Price/¥"]=ro.bas;
                       sh["Price of the Day/¥"]=ro.pri;
                   
                //        parallel(CURRENT_NAME,CURRENT_DATE,GLOBAL_DATA,ro.nam);
                        },
                        rowMouseOut:function(e, row){
                               HL=0;
                               var sh={}
                        //        parallel(CURRENT_NAME,CURRENT_DATE,GLOBAL_DATA,'');
                                },
                                rowClick:function(e, row){
                                        var ro=row.getData()
                                 var z=NAMELIST[ro.nam]+'' 
                                 
                                        
                                       
                                        
                            },      
                        });            
                                
        dat=JSON.parse(JSON.stringify(SJ)) 
        sjj=JSON.parse(JSON.stringify(OLDSJ)) 
        // console.log(dat,sjj)
        var na;
        var text;
        var ed;
        for(i in dat){
                if(dat[i].bas!=sjj[i].bas){
                        
                        na=dat[i].nam;
                        text='基期价格'
                        ed=dat[i].bas;
                }
                if(dat[i].wei!=sjj[i].wei){
                        
                        na=dat[i].nam;
                        text='权重'
                        ed=dat[i].wei;
                }
                if(dat[i].pri!=sjj[i].pri){
                        
                        na=dat[i].nam;
                        text='当日平均价格'
                        ed=dat[i].pri;
                }
        }
        // console.log(na,ed)
        aa(day(FL),'solid');
        pro(NEWDATA, date, CURRENT_DATE, na, text, ed , 1, FL);
        creatTable(CURRENT_NAME, CURRENT_DATE,GLOBAL_DATA,TIT);
        // parallel(CURRENT_NAME,CURRENT_DATE,GLOBAL_DATA,'');
        // trees(CURRENT_NAME, GLOBAL_DATA, CURRENT_DATE, NAMELIST, IDLIST,FF)
        // drawstack(CURRENT_NAME, GLOBAL_DATA, ST, ED, NAMELIST, IDLIST,'#fff',CURRENT_DATE)
    }
)
    .on('mouseout', function (d, i) {
                        
        d3.select('#ap')
            .style('opacity', '0')
    })
    .on('mouseover', function (d, i) {
        d3.select('#ap')
            .style('opacity', '1')

});
d3.select("#show").on("click",function(){
        DAT=JSON.parse(JSON.stringify(SJ)) 
        dat=JSON.parse(JSON.stringify(SJ)) 
        sjj=JSON.parse(JSON.stringify(OLDSJ)) 
        var na;
        var text;
        var ed;
        for(i in dat){
                if(dat[i].bas!=sjj[i].bas){
                        
                        na=dat[i].nam;
                        text='基期价格'
                        ed=dat[i].bas;
                }
                if(dat[i].wei!=sjj[i].wei){
                        
                        na=dat[i].nam;
                        text='权重'
                        ed=dat[i].wei;
                }
                if(dat[i].pri!=sjj[i].pri){
                        
                        na=dat[i].nam;
                        text='当日平均价格'
                        ed=dat[i].pri;
                }
        }
        aa(day(FL),'dotted');
        pro(NEWDATA, date, CURRENT_DATE, na, text, ed , 1, FL);
        // trees(CURRENT_NAME, GLOBAL_DATA, CURRENT_DATE, NAMELIST, IDLIST,FF)
        // drawstack(CURRENT_NAME, GLOBAL_DATA, ST, ED, NAMELIST, IDLIST,'black',CURRENT_DATE)
    })
    .on('mouseout', function (d, i) {
                        
        d3.select('#sh')
            .style('opacity', '0')
    })
    .on('mouseover', function (d, i) {
        d3.select('#sh')
            .style('opacity', '1')

});
d3.select(".can").on("click",function(){
        var table = new Tabulator("#tablebody", {
                height:height,
                data:OLDSJ,
                layout:"fitColumns",
                columns:[
                        
                // {title:"Name", field:"name", width:150, formatter:function(cell, formatterParams){
                //    var value = cell.getValue();
                //     if(value.indexOf("o") > 0){
                //         return "<span style='color:red; font-weight:bold;'>" + value + "</span>";
                //     }else{
                //         return value;
                //     }
                // }},
                {title:"R/D", field:"exm", formatter:"image",hozAlign:"center",width:80, formatterParams:{
                        height:"12px",
                        width:"12px",
                    }},
                        {title:"Product Name", field:"enam",width:134,formatter:co},
                        {title:p1, field:p2,editor:p3,width:139,legend:function(value){
                                return value
                        }},
                ],
                rowMouseOver:function(e, row){
                        var ro=row.getData()
                      console.log(ro)
                       HL=1;
                       var sh={}
                       sh['Group']=ELIST[IDLIST[NAMELIST[ro.nam][0]]]
                       sh['Index/%']=ro.ind;
                       sh["Weight/%"]=ro.wei;
                       sh["Contribution/%"]=(ro.ind*ro.wei/100).toFixed(2)
                       sh["Base Price/¥"]=ro.bas;
                       sh["Price of the Day/¥"]=ro.pri;
                   
                //        parallel(CURRENT_NAME,CURRENT_DATE,GLOBAL_DATA,sh);
                        },
                        rowMouseOut:function(e, row){
                               HL=0;
                               var sh={}
                        //        parallel(CURRENT_NAME,CURRENT_DATE,GLOBAL_DATA,sh);
                                },
                                rowClick:function(e, row){
                                        var ro=row.getData()
                                 var z=NAMELIST[ro.nam]+'' 
                                 if(z.length==5){
                                        
                                        
                                      
                                      }      
                            },      
                        });
                        dat=JSON.parse(JSON.stringify(SJ)) 
        sjj=JSON.parse(JSON.stringify(OLDSJ)) 
        // console.log(dat,sjj)
        var na;
        var text;
        var ed;
        for(i in dat){
                if(dat[i].bas!=sjj[i].bas){
                        
                        na=sjj[i].nam;
                        text='基期价格'
                        ed=sjj[i].bas;
                }
                if(dat[i].wei!=sjj[i].wei){
                        
                        na=sjj[i].nam;
                        text='权重'
                        ed=sjj[i].wei;
                }
                if(dat[i].pri!=sjj[i].pri){
                        
                        na=sjj[i].nam;
                        text='当日平均价格'
                        ed=sjj[i].pri;
                }
        }
        // console.log(na,ed)
        aa(day(FL),'solid');
        pro(NEWDATA, date, CURRENT_DATE, na, text, ed , 1, FL);
        creatTable(CURRENT_NAME, CURRENT_DATE,GLOBAL_DATA,TIT);
        console.log(text,ed)
        // parallel(CURRENT_NAME,CURRENT_DATE,GLOBAL_DATA,'');
        // trees(CURRENT_NAME, GLOBAL_DATA, CURRENT_DATE, NAMELIST, IDLIST,FF)
        // drawstack(CURRENT_NAME, GLOBAL_DATA, ST, ED, NAMELIST, IDLIST,'#fff',CURRENT_DATE)
                }
    )
    .on('mouseout', function (d, i) {
                        
        d3.select('#ca')
            .style('opacity', '0')
    })
    .on('mouseover', function (d, i) {
        d3.select('#ca')
            .style('opacity', '1')

});
d3.select("#cg")
.on('mouseout', function (d, i) {
                        
        d3.select('#cha')
            .style('opacity', '0')
    })
    .on('mouseover', function (d, i) {
        d3.select('#cha')
            .style('opacity', '1')

});
}