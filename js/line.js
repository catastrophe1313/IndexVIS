function line(data){
// 绘制折线图

const padding = {
    top: 5,
    left: 5,
    right: 5,
    bottom: 5
};
const height = 150;
const width = 200;
const xAxisWidth = width - padding.left - padding.right;
const yAxisWidth = height - padding.top - padding.bottom;

// 创建svg画布
const svg = d3.select("#downleft1body")
    .append("svg")
    .attr("width", 200)
    .attr("height", 150)

// 打开要用相对路径，否则很容易发生跨域错误，然后凉凉

console.log(111)
    const xScale = d3.scaleLinear()
        .domain([0,4])
        .range([0, xAxisWidth]);

    const yScale = d3.scaleLinear()
        .domain([0, 100])
        .rangeRound([yAxisWidth, 0])

    // const xAxis = d3.axisBottom(xScale)
    // const yAxis = d3.axisLeft(yScale);

    // const gx = svg.append("g")
    //     .attr("transform", `translate(${(padding.left)*3}, ${height - padding.bottom})`);
    // const gy = svg.append('g')
    //     .attr("transform", "translate(" + ((padding.left) * 3 + 12) + "," + (height - padding.bottom - yAxisWidth) + ")");

    // // 绘制x轴
    // gx.call(xAxis)
    //     .append("text")         
    //     .attr("text-anchor", "start")
    //     .attr("stroke", "red")
    //     .style("font-size", "17px")
    //     .style("font-style", "宋体")
    //     .attr("x", width - padding.right * 5)
    //     .attr("y", padding.bottom * 2)
    //     .text(d => "年 / year");

    // // 绘制y轴
    // gy.call(yAxis).append("text")
    //     .attr("text-anchor", "start")
    //     .attr("stroke", "red")
    //     .style("font-size", "17px")
    //     .style("font-style", "宋体")
    //     .attr("x", (padding.left - 10))
    //     .attr("y", 40)
    //     .text(d => "降水量 / mm");

    

    // 创建线生成器
    const pathLine = d3.line()
        .curve(d3.curveBasis) // 如果没有这一行则是折线，有则为曲线
        .x(d => xScale(d.x))
        .y(d => (yScale(0) - yScale(d.y)));

    // 绘制曲线
        svg.append("path")
            .attr("d", pathLine(data))
            .attr("stroke", 'black')
            .attr("stroke-width", "1px")
            .attr("fill", "none")
            .attr("transform", `translate(${(padding.left)*2},0)`);

    // // 添加表头
    // const header = ["1970 - 2013 各站点降水量统计图"];
    // const headers = svg.append("g");
    // headers.selectAll("text")
    // .data(header)
    // .enter()
    // .append("text")     
    // .attr("stroke","black")     
    // .attr("transform",`translate(${width/3 + padding.left * 4},${30})`)     
    // .style("font-size","25px")     
    // .text(d=>d);

}