function pro(initialdata, dayli, selday, name, dataname, datavalue, ad, ff) {
    console.log(name,dataname,datavalue)
    var a =5
    var edaname = ''
    // if (dataname == '基期销售额') {
    //     edaname = 'basesalee'
    // }
    // else if (dataname == '基期销售量') {
    //     edaname = 'basesalel'
    // }
    if (dataname == '基期价格'){
        edaname = 'base'
    }
    else if (dataname == '当日平均价格') {
        edaname = 'price'
    }
    else if (dataname == '权重') {
        edaname = 'weight'
    }
    var dd={}
    var dt = {}
    var sday = dayli.indexOf(selday)
    // console.log(sday)
    count=0
    for(j in dayli){
        jj=[]
        dd[j]=jj;
    }
        for(i in initialdata){
            for(j in dayli){
                
            if((initialdata[i].date==dayli[j])&&(initialdata[i].date!=undefined)&&(initialdata[i].flag=="")){
                var temo = {};
                var temo1= {}
            temo["name"] = initialdata[i].name
            temo['id'] = NAMELIST[temo["name"]]
            temo['price'] = parseFloat(initialdata[i].price)
            temo['baseprice'] = parseFloat(initialdata[i].base)
            temo['weight'] = (parseFloat(initialdata[i].weight3))/100
            temo['secweight'] = (parseFloat(initialdata[i].weight2))/100
            temo['firweight'] = (parseFloat(initialdata[i].weight1))/100
            if(temo['baseprice'] != 0){
                temo['index'] = temo['price'] / temo['baseprice']
            }
            else{
                temo['index'] = 0
            }
            temo["uncertainty"] = a/10
            // console.log(temo)
            var b = (JSON.stringify(temo) == "{}")
            
            if(b==false){
                dd[j].push(temo)
            }
        }
        }
            
        }
        
        if((ff==1||ff==4)&&ad == 0){
            var pri1=[]
        for(var i=0;i<357;i++){
            var pri2 = []
            for(var j=0;j<dd[i].length;j++){
                pri2[j]=dd[i][j].price
            }
            pri1[i]=pri2
        }
        for(var j=0;j<33;j++){
            var sum = 0
            for(var i=0;i<357;i++){
                sum = sum + pri1[i][j]
                if((i+1)%7==0){
                    for(var k=-6;k<1;k++){
                        dd[k+i][j].price = sum/7
                    }
                    sum = 0
                }
            }
        }
        }
        if((ff==2||ff==5)&&ad == 0){
            var pri1=[]
        for(var i=0;i<357;i++){
            var pri2 = []
            for(var j=0;j<dd[i].length;j++){
                pri2[j]=dd[i][j].price
            }
            pri1[i]=pri2
        }
            for(var j=0;j<33;j++){
                var sum = 0
                for(var i=0;i<357;i++){
                    sum = sum + pri1[i][j]
                    if((i+1)%29==0){
                        for(var k=-28;k<1;k++){
                            dd[k+i][j].price = sum/29
                        }
                        sum = 0
                    }
                }
            }
            }
    if (ad != 0) {
        console.log(dd[sday],dd,sday)
        dd[sday].find(function (x) { return x.name == name; })[edaname] = parseFloat(datavalue)
            dd[sday].find(function (x) { return x.name == name; })['baseprice'] = dd[sday].find(function (x) { return x.name == name; }).baseprice
        if(dd[sday].find(function (x) { return x.name == name; }).baseprice == 0){
            dd[sday].find(function (x) { return x.name == name; })['index'] = 0;
        }
        else{
            dd[sday].find(function (x) { return x.name == name; })['index'] = dd[sday].find(function (x) { return x.name == name; }).price / dd[sday].find(function (x) { return x.name == name; }).baseprice
        } 
        for( var i=0;i<initialdata.length;i++){
            if(initialdata[i]['name']==name&&initialdata[i]['date']==selday){
                initialdata[i]['price']=datavalue.toString()
                console.log(initialdata[i])
            }
        }
    }
    console.log(initialdata,NEW_NEWDATA)
    NEW_NEWDATA=JSON.parse(JSON.stringify(initialdata))
    if(ad==0){
    DD=JSON.parse(JSON.stringify(dd))
    var arr=Object.keys(dd)
    var ar=Object.keys(dd[0])
    var le=arr.length-3;
    var de={}
    for(i=0;i<le;i++){
            for(k=0;k<Object.keys(dd[i]).length;k++){
                var nn=dd[i][k]['id']
                
                if(de[nn]==undefined){
                    de[nn]=[];
                }
                de[nn].push(dd[i][k]['index']);
        }
    }
    var dhb={}
    ddw = JSON.parse(JSON.stringify(dd[0]))
    hd = JSON.parse(JSON.stringify(dd[0]))
    for(i=0;i<357;i++){
        dhb[i]=JSON.parse(JSON.stringify(ddw));
        for(j=0;j<33;j++){
            var iid=IDLIST[Object.keys(de)[j]]
            if(i==0){
                dhb[i].find(function (x) { return x.name == iid; })['index']=de[Object.keys(de)[j]][i] 
            }
            else{
                dhb[i].find(function (x) { return x.name == iid; })['index']=de[Object.keys(de)[j]][i]/de[Object.keys(de)[j]][i-1]
            }
            
        }
    }
    var arr=Object.keys(dd)
    var ar=Object.keys(dd[0])
    var len=arr.length-3;
    var we={}
    for(i=0;i<len/7;i++){
        for(j=0;j<7;j++){
            for(k=0;k<Object.keys(dd[j+i*7]).length;k++){
                var nn=dd[j+i*7][k]['id']
                if(we[nn]==undefined){
                    we[nn]=[];
                }
                we[nn].push(dd[j+i*7][k]['index']);
            }
        }
    }
    var wee={}
    var k=0;
    for(i in we){
        var kk=Object.keys(we)[k];
        if(wee[kk]==undefined){
            wee[kk]=[];
        }
        for(m=0;m<51;m++){
            var sum=0;
            for(j=0;j<7;j++){
                    sum=sum+we[i][j+m*7];
                }
                sum=sum/7
                wee[kk].push(sum);
            }
            k++;
    }
    var ww={}
    var whb={}
    dw = JSON.parse(JSON.stringify(dd[0]))
    hw = JSON.parse(JSON.stringify(dd[0]))
    for(i=0;i<51;i++){
        ww[i]=JSON.parse(JSON.stringify(dw));
        for(j=0;j<33;j++){
            var iid=IDLIST[Object.keys(wee)[j]]
            ww[i].find(function (x) { return x.name == iid; })['index']=JSON.parse(JSON.stringify(wee[Object.keys(wee)[j]][i]))
        }
    }
    console.log(wee)
    for(i=0;i<51;i++){
        whb[i]=JSON.parse(JSON.stringify(hw));
        for(j=0;j<33;j++){
            var iid=IDLIST[Object.keys(wee)[j]]
            if(i==0){
                whb[i].find(function (x) { return x.name == iid; })['index']=wee[Object.keys(wee)[j]][i] 
            }
            else{
                whb[i].find(function (x) { return x.name == iid; })['index']=wee[Object.keys(wee)[j]][i]/wee[Object.keys(wee)[j]][i-1]
            }
            
        }
    }
    var arr=Object.keys(dd)
    var ar=Object.keys(dd[0])
    var lenn=arr.length-12;
    var me={}
    for(i=0;i<lenn/29;i++){
        for(j=0;j<29;j++){
            for(k=0;k<Object.keys(dd[j+i*29]).length;k++){
                var nn=dd[j+i*29][k]['id']
                if(me[nn]==undefined){
                    me[nn]=[];
                }
                me[nn].push(dd[j+i*29][k]['index']);
            }
        }
    }
    var mee={}
    var k=0;
    for(i in me){
        var kk=Object.keys(me)[k];
        if(mee[kk]==undefined){
            mee[kk]=[];
        }
        for(m=0;m<12;m++){
            var sum=0;
            for(j=0;j<29;j++){
                    sum=sum+me[i][j+m*29];
                }
                sum=sum/29
                mee[kk].push(sum);
            }
            k++;
    }
    var mm={}
    var mhb={}
    dm = JSON.parse(JSON.stringify(dd[0]))
    hm = JSON.parse(JSON.stringify(dd[0]))
    for(i=0;i<12;i++){
        mm[i]=JSON.parse(JSON.stringify(dm));
        for(j=0;j<33;j++){
            var iid=IDLIST[Object.keys(mee)[j]]
            mm[i].find(function (x) { return x.name == iid; })['index']=mee[Object.keys(mee)[j]][i]
        }
    }
    for(i=0;i<12;i++){
        mhb[i]=JSON.parse(JSON.stringify(hm));
        for(j=0;j<33;j++){
            var iid=IDLIST[Object.keys(mee)[j]]
            if(i==0){
                mhb[i].find(function (x) { return x.name == iid; })['index']=mee[Object.keys(mee)[j]][i] 
            }
            else{
                mhb[i].find(function (x) { return x.name == iid; })['index']=mee[Object.keys(mee)[j]][i]/mee[Object.keys(mee)[j]][i-1]
            }
            
        }
    }
    if(ff==0){
        dt=JSON.parse(JSON.stringify(dd))
    }
    else if(ff==1){
        dt=JSON.parse(JSON.stringify(ww))
    }
    else if(ff==2){
        dt=JSON.parse(JSON.stringify(mm))
    }
    else if(ff==3){
        dt=JSON.parse(JSON.stringify(dhb))
    }
    else if(ff==4){
        dt=JSON.parse(JSON.stringify(whb))
    }
    else if(ff==5){
        dt=JSON.parse(JSON.stringify(mhb))
    }
}
    else{
        dt=JSON.parse(JSON.stringify(dd))
    }
    var sec = []
    var fir = []
    var sum = []
    // 计算上一级销售额
    for (i in dt) {
        var se = {};
        var fi = {};
        var ta = {};
        var sumsalee = 0;
        for (j in dt[i]) {
            var idd = dt[i][j]['id']
            if(idd == null)break;
            var ids = idd[0] + idd[1] + idd[2];
            var idf = idd[0]
            if (se[ids] == undefined) {
                se[ids] = {}
                se[ids]['basesalee'] = 0
            }
            se[ids]['basesalee'] += dt[i][j].basesalee
            if (fi[idf] == undefined) {
                fi[idf] = {}
                fi[idf]['basesalee'] = 0
            }
            fi[idf]['basesalee'] += dt[i][j].basesalee
            sumsalee += dt[i][j].basesalee
        }
        ta['basesalee'] = sumsalee
        sec.push(se)
        fir.push(fi)
        sum.push(ta)
    }
    //计算权重
    var ds = {}
    for (i in dt) {
        // var se = {};
        // var fi = {};
        // var ta = {};
        for (j in dt[i]) {
            // console.log(i,sec[i])
            var id = dt[i][j]['id']
            if(id==null)break;
            var sid = id[0] + id[1] + id[2]
            // if (se[sid] == undefined) {
            //     se[sid] = {}
            //     se[sid]['basesalee'] = 0
            //  }
            //  sec.push(se);
            //  if (fi[id[0]] == undefined) {
            //     fi[id[0]] = {}
            //     fi[id[0]]['basesalee'] = 0
            //  }
            //  fir.push(fi)
            //  ta['basesalee'] = 0
            //  sum.push(ta)
            sec[i][sid]['weight'] = dt[i][j]['secweight']
            fir[i][id[0]]['weight'] = dt[i][j]['firweight']
            // if (isNaN(dt[i][j]['price']) == false) {
            //     dt[i][j]['weight'] = dt[i][j]['basesalee'] / sec[i][sid].basesalee
            // }
            // else {
            //     dt[i][j]['weight'] = 0
            // }
        }
        // console.log(dt[i])

    }
   
    //计算二级调整权重之和
    for (i in dt) {
        for (j in dt[i]) {
            var id = dt[i][j].id
            if(id==null)break;
            var ids = id[0] + id[1] + id[2];
            if (sec[i][ids]['sumweight'] == undefined) {
                // sec[i][ids] = {}
                sec[i][ids]['sumweight'] = 0
            }
            if(dt[i][j].index != 0){
                sec[i][ids]['sumweight'] += dt[i][j].weight;
            }
        }
    }
    //计算二级指数
    for (i in dt) {
        for (j in dt[i]) {
                var id = dt[i][j].id
                if(id==null)break;
                var ids = id[0] + id[1] + id[2]+'';
                var idf = id[0]
                if (sec[i][ids]['index'] == undefined||isNaN(sec[i][ids]['index'])==true) {
                    // sec[i][ids] = {}
                    sec[i][ids]['index'] = 0
                }
                if(dt[i][j].index != 0){
                    dt[i][j].relweight = dt[i][j].weight / sec[i][ids]['sumweight'];
                }
                else{
                    dt[i][j].relweight = 0;
                }
                sec[i][ids]['index'] += dt[i][j].index * dt[i][j].relweight
            // else {
            //     var id = dt[i][j].id
            //     if(id==null)break;
            //     var ids = id[0] + id[1] + id[2];
            //     var idf = id[0]
            //     if (sec[i][ids]['index'] == undefined) {
            //         // sec[i][ids] = {}
            //         sec[i][ids]['index'] = 0
            //     }
               
            //     dt[i][j].relweight = 0
            //     // console.log(dt[i][j]);Q
            //     sec[i][ids]['index'] += 0
            // }
            
        }
        
    }
    //计算一级调整权重之和
    for (i in sec) {
        for (j in sec[i]) {
            var idl = j
            var ids = idl[0]
            if(!isNaN(parseInt(ids))){
            if (fir[i][ids]['sumweight'] == undefined) {
            //     // sec[i][ids] = {}
                fir[i][ids]['sumweight'] = 0
            }
            if (sec[i][j].index != 0||sec[i][j].index != NaN) {
                fir[i][ids]['sumweight'] += sec[i][j].weight
            }
            else {
                fir[i][ids]['sumweight'] += 0
            }
        }
    }
    }
    
    //计算一级指数
    for (i in sec) {
        for (j in sec[i]) {
            if(sec[i][j].index!=0){
                  var idl = j
            var ids = idl[0]
            if(!isNaN(parseInt(ids))){
            if (fir[i][ids]['index'] == undefined) {
                // sec[i][ids] = {}
                fir[i][ids]['index'] = 0
            }
            sec[i][j]['relweight'] = sec[i][j].weight / fir[i][ids].sumweight
            if (fir[i][ids].sumweight == 0) {
                sec[i][j]['relweight'] = 0
            }
            fir[i][ids]['index'] += sec[i][j].index * sec[i][j].relweight

            }
            
                  }
                }

    }
    //计算总调整权重之和
    for (i in fir) {
        for (j in fir[i]) {
            var idl = j
            var ids = idl[0]
            if (sum[i]['sumweight'] == undefined) {
                // sec[i][ids] = {}
                sum[i]['sumweight'] = 0
            }
            if (fir[i][j].index != 0) {
                sum[i]['sumweight'] += fir[i][j].weight
            }
            else {
                sum[i]['sumweight'] += 0
            }
        }
    }
    //计算总指数
    for (i in fir) {
        for (j in fir[i]) {
            if(fir[i][j].index!=0){
                            var idl = j
            var ids = idl[0]
            if (sum[i]['index'] == undefined) {
                // sec[i][ids] = {}
                sum[i]['index'] = 0
            }
            fir[i][j]['relweight'] = fir[i][j].weight / sum[i].sumweight
            if (sum[i].sumweight == 0) {
                fir[i][j]['relweight'] = 0
            }
            sum[i]['index'] += fir[i][j].index * fir[i][j].relweight
            }
else{
           var idl = j
            var ids = idl[0]
            if (sum[i]['index'] == undefined) {
                // sec[i][ids] = {}
                sum[i]['index'] = 0
            }
            fir[i][j]['relweight'] = 0
            if (sum[i].sumweight == 0) {
                fir[i][j]['relweight'] = 0
            }
            sum[i]['index'] += 0
}
        }

    }
    THR=JSON.parse(JSON.stringify(dt))
    SEC=JSON.parse(JSON.stringify(sec))
    FIR=JSON.parse(JSON.stringify(fir))
    ALL=JSON.parse(JSON.stringify(sum))
    // console.log(sum,fir)
    var nodelistc = {}
    var teml = []
    var teml2 = []
    for (i in IDLIST) {
        if (i.length == 1) {
            var temo = {}
            temo["name"] = IDLIST[i]
            temo["index"] = 0
            temo["weight"] = 0
            temo["base"] = 0
            temo['reweight'] = 0
            temo["uncertainty"] = a/3
            temo["children"] = []
            teml.push(temo)
            nodelistc["children"] = teml;
        }
        else if (i.length == 3) {
            var j = i + "";
            var temo = {}
            temo["name"] = IDLIST[i];
            temo["index"] = 0
            temo["weight"] = 0
            temo['reweight'] = 0
            temo["base"] = 0
            temo["uncertainty"] = a/5
            temo["children"] = [];
            nodelistc["children"].find(function (x) { return x.name == IDLIST[j[0]]; })["children"].push(temo)
        }
        else if (i.length == 5) {
            var j = i + "";
            var temo = {}
            var mm = j[0] + j[1] + j[2];
            temo["name"] = IDLIST[i];
            temo["index"] = 0
            temo["weight"] = 0
            temo['reweight'] = 0
            temo["base"] = 0
            temo["uncertainty"] = a/10
            temo['price'] = 0
            // temo['basesalel'] = 0
            // temo['basesalee'] = 0
            nodelistc["children"].find(function (x) { return x.name == IDLIST[j[0]]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["children"].push(temo)
        }
    }
    var date1=day(FL);
    var h = 0;
    var te = date1[h];
    var treelist = {}
    nodelist = JSON.parse(JSON.stringify(nodelistc))
    for (i in dt) {
        for (j in dt[i]) {
            var id = dt[i][j].id
            if(id==null)break;
            var ids = id[0] + id[1] + id[2]
            friname = IDLIST[id[0]]
            secname = IDLIST[ids]
            thrname = dt[i][j].name
            // console.log(dt[i][j])
            if (friname != '一级类别' && friname != "") {
                var friid = NAMELIST[friname] + ''
                var idf = friid[0];
                var frindex = parseFloat(fir[i][id[0]].index)
                // var fribas = parseFloat(fir[i][id[0]].basesalee)
                var friweight = parseFloat(fir[i][id[0]].weight)
                var frireweight = parseFloat(fir[i][id[0]].relweight)
                nodelist["children"].find(function (x) { return x.name == IDLIST[friid]; })["index"] = 100*frindex
                // nodelist["children"].find(function (x) { return x.name == IDLIST[friid]; })["base"] = fribas
                nodelist["children"].find(function (x) { return x.name == IDLIST[friid]; })["weight"] = friweight
                nodelist["children"].find(function (x) { return x.name == IDLIST[friid]; })["reweight"] = frireweight
            }
            if (secname != '二级类别' && secname != "") {
                var secid = NAMELIST[secname] + ""
                var idf = secid[0];
                var mm = secid[0] + secid[1] + secid[2]
                var secindex = parseFloat(sec[i][ids].index)
                // var secbas = parseFloat(sec[i][ids].basesalee)
                var secweight = parseFloat(sec[i][ids].weight)
                var secreweight = parseFloat(sec[i][ids].relweight)
                nodelist["children"].find(function (x) { return x.name == IDLIST[idf]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["index"] = 100 * secindex
                // nodelist["children"].find(function (x) { return x.name == IDLIST[idf]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["base"] = secbas
                nodelist["children"].find(function (x) { return x.name == IDLIST[idf]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["weight"] = secweight
                nodelist["children"].find(function (x) { return x.name == IDLIST[idf]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["reweight"] = secreweight
            }
            var thrid = NAMELIST[thrname] + '';
            var idf = thrid[0];
            var mm = thrid[0] + thrid[1] + thrid[2]
            var thrindex = parseFloat(dt[i][j].index)
            var thrbas = parseFloat(dt[i][j].baseprice)
            var thrweight = parseFloat(dt[i][j].weight)
            var thrreweight = parseFloat(dt[i][j].relweight)
            nodelist["children"].find(function (x) { return x.name == IDLIST[idf[0]]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["children"].find(function (x) { return x.name == IDLIST[thrid]; })["index"] = 100*thrindex
            nodelist["children"].find(function (x) { return x.name == IDLIST[idf[0]]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["children"].find(function (x) { return x.name == IDLIST[thrid]; })["base"] = thrbas
            nodelist["children"].find(function (x) { return x.name == IDLIST[idf[0]]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["children"].find(function (x) { return x.name == IDLIST[thrid]; })["weight"] = thrweight
            nodelist["children"].find(function (x) { return x.name == IDLIST[idf[0]]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["children"].find(function (x) { return x.name == IDLIST[thrid]; })["reweight"] = thrreweight
            nodelist["children"].find(function (x) { return x.name == IDLIST[idf[0]]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["children"].find(function (x) { return x.name == IDLIST[thrid]; })["price"] = parseFloat(dt[i][j].price)
            // nodelist["children"].find(function (x) { return x.name == IDLIST[idf[0]]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["children"].find(function (x) { return x.name == IDLIST[thrid]; })["basesalel"] = parseFloat(dt[i][j].basesalel)
            // nodelist["children"].find(function (x) { return x.name == IDLIST[idf[0]]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["children"].find(function (x) { return x.name == IDLIST[thrid]; })["basesalee"] = parseFloat(dt[i][j].basesalee)
        }
        te = date1[h]
        nodelist.name = "总类"
        nodelist["uncertainty"] = a/2
        nodelist["index"]=sum[i]["index"]*100;
        if(te!=undefined){
            treelist[te] = nodelist;
        }
        h++;
        nodelist = JSON.parse(JSON.stringify(nodelistc))
    }temo["uncertainty"] = a/2
    console.log(TEMP)
    if(TEMP == 0){
        GLOBAL_DATA = JSON.parse(JSON.stringify(treelist))
        drawstack(CURRENT_NAME, GLOBAL_DATA, ST, ED, NAMELIST, IDLIST,'#fff',CURRENT_DATE)
    }
    else if(TEMP == 1){
        var tempda = JSON.parse(JSON.stringify(treelist))
        console.log(tempda)
        drawstack(CURRENT_NAME, tempda, ST, ED, NAMELIST, IDLIST,'#fff',CURRENT_DATE)
    }
    
}