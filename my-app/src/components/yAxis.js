


import * as d3 from "d3";
import React from "react";

function YAxis(props){
    const { yScale, height, axisLabel } = props;

    const ref = React.useRef();

    React.useEffect(() => {
        const axis = d3.axisLeft(yScale);

        d3.select(ref.current).call(axis);
    }, [yScale]);

    if(yScale){
        return (
            <g ref={ref}>
                <text
                    style={{ textAnchor: "end", fontSize: "15px" }}
                    transform={`rotate(-90)`}
                    x={-10}
                    y={-40}
                >
                    {axisLabel}
                </text>
            </g>
        );
    } else {
        return <g></g>;
    }
}

export default YAxis;