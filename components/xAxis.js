import React from "react";
import * as d3 from "d3";

//`<XAxis />` has the following properties,
// - xScale: the scale of the x-axis
// - height: the height of the scatter plot
// - width: the width of the scatter plot
// - axisLabel: the name of the axis
// - `<YAxis />` has the following properties,
// - yScale: the scale of y-axis
// - height: the height of the scatter plot
// - axisLabel: the name of the axis
// - **`<Points />`**: it is defined in the module points.js. The radius of each `<circle />` is 5 and the color is `steelblue`, and the `<Points />` has the following properties,
// - data: the data items
// - xScale: the scale for the x coordinate
// - yScale: the scale for the y coordinate


function XAxis(props){
    const { xScale, height, width, axisLabel } = props;

    const ref = React.useRef();

    React.useEffect(() => {
        const axis = d3.axisBottom(xScale);

        d3.select(ref.current).call(axis);
    }, [xScale]);

    if(xScale){
        return (
            <g
                ref={ref}
                transform={`translate(0, ${height})`}
            >
                <text
                    style={{ textAnchor: "end", fontSize: "15px" }}
                    x={width}
                    y={-5}
                >
                    {axisLabel}
                </text>
            </g>
        );
    } else {
        return <g></g>;
    }
}

export default XAxis;