
import XAxis from "./xAxis";
import YAxis from "./yAxis";
import Points from "./points";
function ScatterPlot(props){
    const { offsetX, offsetY, data, xScale, yScale, height, width } = props;
    //task1: transform the <g> with the offsets so that the barchart can show properly 
    //task2: import the components needed and uncomment the components in the return 
    return <g transform={`translate(${offsetX}, ${offsetY})`}>
           <Points 
    data={data}
    xScale={xScale}
    yScale={yScale}
/>

<XAxis 
    xScale={xScale}
    height={height}
/>

<YAxis 
    yScale={yScale}
/>
        </g>
}

export default ScatterPlot