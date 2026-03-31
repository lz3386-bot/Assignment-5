import React from "react";

function Bars(props) {
    const { data, xScale, yScale, height, width, selectedStation, setSelectedStation } = props;

    return (
        <>
            {data.map((d, i) => (
                <rect
    key={i}
    x={xScale(d.station)}
    y={yScale(d.value)}
    width={xScale.bandwidth()}
    height={height - yScale(d.value)}

    fill={getColor(selectedStation, d.station)}

    onMouseEnter={() => setSelectedStation(d.station)}
    onMouseOut={() => setSelectedStation(null)}
/>
            ))}
        </>
    );
}

function getColor(selectedStation, station) {
    return station === selectedStation ? "red" : "steelblue";
}

export default Bars;