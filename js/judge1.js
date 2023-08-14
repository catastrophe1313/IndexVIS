function abjudge(name,data,ff,th){
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
    var sign=[]
    var fl=th
    sign[0]=0
    for(i=0;i<da.length-1;i++){
        var temp
        temp=Math.abs((da[i+1]-da[i]))
        console.log(da[i],temp)
        if(temp>fl){
            sign[i+1]=temp
        }
        else{
            sign[i+1]=0
        }
    }
    return sign
}