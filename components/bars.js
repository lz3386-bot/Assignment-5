import React from "react";

function Bars(props) {
    const { data, xScale, yScale, height } = props;

    return (
        <>
            {data.map((d, i) => (
                <rect
                    key={i}
                    x={xScale(d.station)}
                    y={yScale(d.value)}
                    width={xScale.bandwidth()}
                    height={height - yScale(d.value)}
                    fill="steelblue"
                />
            ))}
        </>
    );
}

export default Bars;