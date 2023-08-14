function corr(data, name, start, end){
    var date =day(FL)
    var datelist = []
    var st
    var ed
    for (i=0;i<date.length;i++){
        if(date[i]==start){
            st = i
        }
        if(date[i]==end){
            ed = i
        }
    }
    for (i=st;i<=ed;i++){
        datelist.push(date[i])
    }

    var z = JSON.parse(JSON.stringify(data))

    // var na = ''
    //     if(name == '总'){
    //         na = '总类'
    //     }
    //     else{
    //         na = name
    //     }
    var id = NAMELIST[name]+''
    var corrlist = {}
    for(i=0;i<datelist.length;i++){
        var zz = z[datelist[i]]
        if(id == '0'){
            var index1 = zz['index']
            if(corrlist['0']===undefined) corrlist['0']=[]
            corrlist['0'].push(index1)
            for(j=1;j<=5;j++){
                var index2 = zz['children'][j]['index']
                if(corrlist[j.toString()]===undefined) corrlist[j.toString()]=[]
                corrlist[j.toString()].push(index2)
            }
        }
        if(id.length == 1 && id != '0'){
            var zzz = zz['children'].find(function (x) { return x.name == name; })
            var index1 = zzz['index']
            var lenn = zzz['children'].length
            if(corrlist[id]===undefined) corrlist[id]=[]
            corrlist[id].push(index1)
            for(j=0;j<lenn;j++){
                var index2 = zzz['children'][j]['index']
                var na = zzz['children'][j]['name']
                var idd = NAMELIST[na]+''
                if(corrlist[idd]===undefined) corrlist[idd]=[]
                corrlist[idd].push(index2)
            }
        }
        if(id.length == 3){
            var zzz = zz['children'].find(function (x) { return x.name == IDLIST[id.substring(0,1)]; })
            ['children'].find(function (x) { return x.name == name; })
            var index1 = zzz['index']
            var lenn = zzz['children'].length
            if(corrlist[id]===undefined) corrlist[id]=[]
            corrlist[id].push(index1)
            for(j=0;j<lenn;j++){
                var index2 = zzz['children'][j]['index']
                var na = zzz['children'][j]['name']
                var idd = NAMELIST[na]+''
                if(corrlist[idd]===undefined) corrlist[idd]=[]
                corrlist[idd].push(index2)
            }
        }
        if(id.length == 5){
            var zzz = zz['children'].find(function (x) { return x.name == IDLIST[id.substring(0,1)]; })
            ['children'].find(function (x) { return x.name == IDLIST[id.substring(0,3)]; })
            var index1 = zzz['index']
            var lenn = zzz['children'].length
            if(corrlist[id.substring(0,3)]===undefined) corrlist[id.substring(0,3)]=[]
            corrlist[id.substring(0,3)].push(index1)
            for(j=0;j<lenn;j++){
                var index2 = zzz['children'][j]['index']
                var na = zzz['children'][j]['name']
                var idd = NAMELIST[na]+''
                if(corrlist[idd]===undefined) corrlist[idd]=[]
                corrlist[idd].push(index2)
            }
        }
    }
    var corrres = {}
    var x,y
    if(id.length!=5){
        x = corrlist[id]
    }
    else{
        x= corrlist[id.substring(0,3)]
    }
    for(i in corrlist){
        var flag = i
        y = corrlist[i]
        var res = calcPearson(x, y)
        corrres[flag]=res
    }

    function calcMean(x){
        sum = 0
        len = x.length
        for(i=0;i<len;i++){
            sum += x[i]
        }
        ave = sum/len
        return ave
    }

    function calcPearson(x, y){
        x_mean = calcMean(x)
        y_mean = calcMean(y)
        len = x.length
        sumTop = 0.0
        sumBottom = 0.0
        x_pow = 0.0
        y_pow = 0.0
        for(i=0;i<len;i++){
            sumTop += (x[i]-x_mean)*(y[i]-y_mean)
            x_pow += Math.pow(x[i]-x_mean,2)
            y_pow += Math.pow(y[i]-y_mean,2)
        }
        sumBottom = Math.sqrt(x_pow*y_pow)
        p = sumTop/sumBottom
        return p
    }
    return corrres
}