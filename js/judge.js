function smoothed_z_score_test(name,data,ff){
    if(TYPE==0){
        date=day(ff)

}
else{
        date = ["2018/3/1", "2018/3/2", "2018/3/3", "2018/3/4", "2018/3/5", "2018/3/6", "2018/3/7", "2018/3/8",
        "2018/3/9", "2018/3/10", "2018/3/11", "2018/3/12", "2018/3/13", "2018/3/14", "2018/3/15", "2018/3/16", "2018/3/17",
        "2018/3/18", "2018/3/19", "2018/3/20", "2018/3/21", "2018/3/22", "2018/3/23", "2018/3/24", "2018/3/25", "2018/3/26",
        "2018/3/27", "2018/3/28", "2018/3/29", "2018/3/30", "2018/3/31", "2018/4/1", "2018/4/2", "2018/4/3", "2018/4/4", "2018/4/5",
        "2018/4/6", "2018/4/7", "2018/4/8", "2018/4/9", "2018/4/10", "2018/4/11", "2018/4/12", "2018/4/13", "2018/4/14", "2018/4/15",
        "2018/4/16", "2018/4/17", "2018/4/18", "2018/4/19", "2018/4/20"];
}
    var aa = JSON.parse(JSON.stringify(data))
    var id = NAMELIST[name] + "";
    var da=[]
    if(id==0){
        for(i=0;i<date.length;i++){
            da[i]=aa[date[i]]["index"]
        }
    }
    if(id.length==1&&id!=0){
        for(i=0;i<date.length;i++){
            da[i]=aa[date[i]]["children"].find(function (x) { return x.name == name; })["index"]
        }
    }
    if(id.length==3){
        for(i=0;i<date.length;i++){
            da[i]=aa[date[i]]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
            ["children"].find(function (x) { return x.name == name; })["index"]
        }
    }
    if(id.length==5){
        for(i=0;i<date.length;i++){
            da[i]=aa[date[i]]["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 1)]; })
            ["children"].find(function (x) { return x.name == IDLIST[NAMELIST[name].substring(0, 3)]; })
            ["children"].find(function (x) { return x.name == name; })["index"]
        }
    }
    var abnflag={}
    var lag=4
    // if(FL==0||FL==3){
    //     lag=4
    // }
    // else if(FL==1||FL==4){
    //     lag=4
    // }
    // else if(FL==2||FL==5){
    //     lag=4
    // }
    var threshold=8
    var influence = 0.5
    var y=da
    var signals=[]
    var rate=[]
    var filteredY=da
    var avgFilter=[]
    var stdFilter=[]
    
    for(var i=0;i<da.length;i++){
     signals[i]=0
     avgFilter[i]=0
     stdFilter[i]=0
    }
    function ava(l,r,m){
       var sum=0
       var ava=0
       for(var i=l;i<r;i++){
           sum=sum+m[i]
       }
       ava=sum/(r-l)
       return ava
    }
    function std(l,r,ava,m){
       var powsum=0
       var std=0
       for(var i=l;i<r;i++){
           powsum=powsum+Math.pow(m[i]-ava,2);
       }
       std=Math.sqrt(powsum/(r-l));
       return std
    }
   avgFilter[lag - 1] = ava(0,lag,y)
   stdFilter[lag - 1] = std(0,lag,ava(0,lag,y),y)
   var abn=[]
   var k=0
   for(var i=0;i<lag;i++){
    var flag
    var daa
       flag=0
       daa=date[i]
       abnflag[i]={flag,daa}
   }
   for (var i=lag;i<y.length;i++){
       var flag
       var daa
        if (Math.abs(y[i] - avgFilter[i - 1]) > threshold * stdFilter[i - 1]){
            rate[i]=Math.abs(y[i] - avgFilter[i - 1])
            if (y[i] > avgFilter[i - 1]){
                signals[i] = 1
                abn[k]=date[i]
                flag=1
                daa=date[i]
                k++;
               }
            else{
                signals[i] = -1
                flag=1
                daa=date[i]
                abn[k]=date[i]
                k++;
               }
   
            filteredY[i] = influence * y[i] + (1 - influence) * filteredY[i - 1]
            avgFilter[i] = ava(i - lag + 1,i + 1,filteredY)
            
            stdFilter[i] = std(i - lag + 1,i + 1,ava(i - lag + 1,i + 1,filteredY),filteredY)
           }
        else{
            rate[i]=0
            signals[i] = 0
            flag=0
            daa=date[i]
            filteredY[i] = y[i]
            avgFilter[i] = ava(i - lag + 1,i + 1,filteredY)
            stdFilter[i] = std(i - lag + 1,i + 1,ava(i - lag + 1,i + 1,filteredY),filteredY)
           
       }
       abnflag[i]={flag,daa}
           }
           return rate;
//            ABNFLAG=JSON.parse(JSON.stringify(abnflag))
//            console.log(ABNFLAG)
//            var sed=document.getElementById("sed");
//            console.log(signals)
// sed.innerHTML = "";

// for(var i=0;i<sed.childNodes.length;i++){
//     sed.removeChild(sed.options[0]);
//     sed.remove(0);
//     sed.options[0] = "select";
// }
//     for(i=0;i<abn.length;i++){
//         var optionObj=document.createElement("option");
//         optionObj.innerHTML=abn[i];
//         optionObj.value=abn[i];
//         console.log(optionObj.value)
//         sed.appendChild(optionObj); 
//     }
       
       }