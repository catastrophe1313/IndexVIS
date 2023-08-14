function prot(initialdata, dayli, selday, name, dataname, datavalue, aa) {
    // var selday = '2018-3-27'
    // var name = '峨眉山茶'
    // var dataname = '平均价格'
    // var datavalue = 33000000;
    // // console.log(initialdata)
    var date1=["2018/3/1", "2018/3/2", "2018/3/3", "2018/3/4", "2018/3/5", "2018/3/6", "2018/3/7", "2018/3/8",
    "2018/3/9", "2018/3/10", "2018/3/11", "2018/3/12", "2018/3/13", "2018/3/14", "2018/3/15", "2018/3/16", "2018/3/17",
    "2018/3/18", "2018/3/19", "2018/3/20", "2018/3/21", "2018/3/22", "2018/3/23", "2018/3/24", "2018/3/25", "2018/3/26",
    "2018/3/27", "2018/3/28", "2018/3/29", "2018/3/30", "2018/3/31", "2018/4/1", "2018/4/2", "2018/4/3", "2018/4/4", "2018/4/5",
    "2018/4/6", "2018/4/7", "2018/4/8", "2018/4/9", "2018/4/10", "2018/4/11", "2018/4/12", "2018/4/13", "2018/4/14", "2018/4/15",
    "2018/4/16", "2018/4/17", "2018/4/18", "2018/4/19", "2018/4/20"];
    var edaname = ''
    if (dataname == '基期销售额') {
        edaname = 'basesalee'
    }
    else if (dataname == '基期销售量') {
        edaname = 'basesalel'
    }
    else if (dataname == '当日平均价格') {
        edaname = 'price'
    }
    var dt = {}
    var day = 0;
    var sday = dayli.indexOf(selday)
    dt[day] = [];
    for (i in initialdata) {
        if (initialdata[i].一级权重 == '一级权重') {
            day++; dt[day] = []
            continue;
        }
        if(NAMELIST[initialdata[i].三级类别]!=undefined){
      
        var temo = {}
        temo["name"] = initialdata[i].三级类别
        temo['id'] = NAMELIST[temo['name']]
        temo['basesalee'] = parseFloat(initialdata[i].基期销售额)
        temo['basesalel'] = parseFloat(initialdata[i].基期销售量)
        temo['price'] = parseFloat(initialdata[i].平均价格)
        temo['baseprice'] = temo['basesalee'] / temo['basesalel']
        temo['index'] = temo['price'] / temo['baseprice']
        dt[day].push(temo)
        }
    }
    // var y=dt[sday].find(function (x) { return x.name == name; })
    if (aa != 0) {
        dt[sday].find(function (x) { return x.name == name; })[edaname] = datavalue
        dt[sday].find(function (x) { return x.name == name; })['baseprice'] = dt[sday].find(function (x) { return x.name == name; }).basesalee / dt[sday].find(function (x) { return x.name == name; }).basesalel
        dt[sday].find(function (x) { return x.name == name; })['index'] = dt[sday].find(function (x) { return x.name == name; }).price / dt[sday].find(function (x) { return x.name == name; }).baseprice
        var x = dt[sday].find(function (x) { return x.name == name; })
    }

    var sec = []
    var fir = []
    var sum = []
    //计算上一级销售额
    
    for (i in dt) {
        var se = {};
        var fi = {};
        var ta = {};
        var sumsalee = 0;
        for (j in dt[i]) {
            var id = dt[i][j].id
            if(id == null)break;
            var ids = id[0] + id[1] + id[2];
            var idf = id[0]
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
        for (j in dt[i]) {
            // console.log(i,sec[i])
            var id = dt[i][j]['id']
            if(id==null)break;
            var sid = id[0] + id[1] + id[2]
            sec[i][sid]['weight'] = sec[i][sid]['basesalee'] / fir[i][id[0]]['basesalee']
            fir[i][id[0]]['weight'] = fir[i][id[0]]['basesalee'] / sum[i]['basesalee']
            
            if (isNaN(dt[i][j]['price']) == false) {
                dt[i][j]['weight'] = dt[i][j]['basesalee'] / sec[i][sid].basesalee
            }
            else {
                dt[i][j]['weight'] = 0
            }
        }
        // console.log(dt[i])

    }
    //计算二级调整权重之和
    for (i in dt) {
        for (j in dt[i]) {
            var id = dt[i][j].id
            if(id==null)break;
            var ids = id[0] + id[1] + id[2];
            var idf = id[0]
            if (sec[i][ids]['sumweight'] == undefined) {
                // sec[i][ids] = {}
                sec[i][ids]['sumweight'] = 0
            }
            sec[i][ids]['sumweight'] += dt[i][j].weight
        }
    }
    //计算二级指数
    for (i in dt) {
        for (j in dt[i]) {
            if (isNaN(dt[i][j].price) == false) {
                var id = dt[i][j].id
                if(id==null)break;
                var ids = id[0] + id[1] + id[2];
                var idf = id[0]
                if (sec[i][ids]['index'] == undefined) {
                    // sec[i][ids] = {}
                    sec[i][ids]['index'] = 0
                }
                dt[i][j].relweight = dt[i][j].weight / sec[i][ids]['sumweight']
                sec[i][ids]['index'] += dt[i][j].index * dt[i][j].relweight
            }
            else {
                var id = dt[i][j].id
                if(id==null)break;
                var ids = id[0] + id[1] + id[2];
                var idf = id[0]
                if (sec[i][ids]['index'] == undefined) {
                    // sec[i][ids] = {}
                    sec[i][ids]['index'] = 0
                }
               
                dt[i][j].relweight = 0
                // console.log(dt[i][j]);Q
                sec[i][ids]['index'] += 0
            }
        }
    }
    //计算一级调整权重之和
    for (i in sec) {
        for (j in sec[i]) {
            var idl = j
            var ids = idl[0]
            
            if(!isNaN(parseInt(ids))){
            if (fir[i][ids]['sumweight'] == undefined) {
                // sec[i][ids] = {}
                fir[i][ids]['sumweight'] = 0
            }
            if (sec[i][j].index != 0) {
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
            else{
                 var idl = j
            var ids = idl[0]
            if(!isNaN(parseInt(ids))){
            if (fir[i][ids]['index'] == undefined) {
                // sec[i][ids] = {}
                fir[i][ids]['index'] = 0
            }
            sec[i][j]['relweight'] = 0
            if (fir[i][ids].sumweight == 0) {
                sec[i][j]['relweight'] = 0
            }
            fir[i][ids]['index'] += 0

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
            var ids = idl[0]+''
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
            temo["value"] = null

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
            temo["value"] = null
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
            temo["value"] = null
            temo['price'] = 0
            temo['basesalel'] = 0
            temo['basesalee'] = 0
            nodelistc["children"].find(function (x) { return x.name == IDLIST[j[0]]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["children"].push(temo)
        }
    }

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
                var fribas = parseFloat(fir[i][id[0]].basesalee)
                var friweight = parseFloat(fir[i][id[0]].weight)
                var frireweight = parseFloat(fir[i][id[0]].relweight)
                nodelist["children"].find(function (x) { return x.name == IDLIST[friid]; })["index"] = 100 * frindex
                nodelist["children"].find(function (x) { return x.name == IDLIST[friid]; })["base"] = fribas
                nodelist["children"].find(function (x) { return x.name == IDLIST[friid]; })["weight"] = friweight
                nodelist["children"].find(function (x) { return x.name == IDLIST[friid]; })["reweight"] = frireweight
            }
            if (secname != '二级类别' && secname != "") {
                var secid = NAMELIST[secname] + ""
                var idf = secid[0];
                var mm = secid[0] + secid[1] + secid[2]
                var secindex = parseFloat(sec[i][ids].index)
                var secbas = parseFloat(sec[i][ids].basesalee)
                var secweight = parseFloat(sec[i][ids].weight)
                var secreweight = parseFloat(sec[i][ids].relweight)
                nodelist["children"].find(function (x) { return x.name == IDLIST[idf]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["index"] = 100 * secindex
                nodelist["children"].find(function (x) { return x.name == IDLIST[idf]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["base"] = secbas
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
            nodelist["children"].find(function (x) { return x.name == IDLIST[idf[0]]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["children"].find(function (x) { return x.name == IDLIST[thrid]; })["index"] = 100 * thrindex
            nodelist["children"].find(function (x) { return x.name == IDLIST[idf[0]]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["children"].find(function (x) { return x.name == IDLIST[thrid]; })["base"] = thrbas
            nodelist["children"].find(function (x) { return x.name == IDLIST[idf[0]]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["children"].find(function (x) { return x.name == IDLIST[thrid]; })["weight"] = thrweight
            nodelist["children"].find(function (x) { return x.name == IDLIST[idf[0]]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["children"].find(function (x) { return x.name == IDLIST[thrid]; })["reweight"] = thrreweight
            nodelist["children"].find(function (x) { return x.name == IDLIST[idf[0]]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["children"].find(function (x) { return x.name == IDLIST[thrid]; })["price"] = parseFloat(dt[i][j].price)
            nodelist["children"].find(function (x) { return x.name == IDLIST[idf[0]]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["children"].find(function (x) { return x.name == IDLIST[thrid]; })["basesalel"] = parseFloat(dt[i][j].basesalel)
            nodelist["children"].find(function (x) { return x.name == IDLIST[idf[0]]; })["children"].find(function (x) { return x.name == IDLIST[mm]; })["children"].find(function (x) { return x.name == IDLIST[thrid]; })["basesalee"] = parseFloat(dt[i][j].basesalee)

        }
        te = dayli[h]
        nodelist.name = "tea叶"
        treelist[te] = nodelist;
        h++;
        nodelist = JSON.parse(JSON.stringify(nodelistc))
        
    }
    GLOBAL_DATA = treelist
}