import Bars from "./bars";
import XAxis from "./xAxis";
import YAxis from "./yAxis";

function BarChart(props){
    const { data, xScale, yScale, height, width, offsetX, offsetY, selectedStation, setSelectedStation } = props;

    return (
        <g transform={`translate(${offsetX}, ${offsetY})`}>

            <Bars 
                data={data} 
                xScale={xScale} 
                yScale={yScale} 
                height={height}
                width={width}
                selectedStation={selectedStation}
                setSelectedStation={setSelectedStation}
            />

            <XAxis xScale={xScale} height={height} />

            <YAxis yScale={yScale} />

        </g>
    );
}

export default BarChart;