import React from "react";
function Points(props) {
    const { 
    data, 
    xScale, 
    yScale, 
    height, 
    width, 
    selectedStation, 
    setSelectedStation,
    setTooltipX,
    setTooltipY,
    setTooltipContent
} = props;
        return (
            <g>

                {/* ⭐ STEP 1：黄色背景 */}
                {selectedStation && (
                    <rect
                        x={0}
                        y={0}
                        width={width}
                        height={height}
                        fill="yellow"
                        opacity={0.3}
                    />
                )}

                {/* ⭐ STEP 2：所有点 */}
                {
                    data.map((d, i) => (
                        <circle
                            key={i}
                            cx={xScale(d.start)}
                            cy={yScale(d.end)}
                            r={getRadius(selectedStation, d.station)}
fill={getColor(selectedStation, d.station)}

onMouseEnter={(event) => {
    setSelectedStation(d.station);

    setTooltipX(event.pageX);
    setTooltipY(event.pageY);
    setTooltipContent({
        station: d.station,
        end: d.end,
        start: d.start
    });
}}
                            onMouseOut={() => {
    setSelectedStation(null);
    setTooltipContent("");
}}
                        />
                    ))
                }

                {/* ⭐ STEP 3：选中点（画在最上层） */}
                {selectedStation &&
                    data
                        .filter(d => d.start_station_name === selectedStation)
                        .map((d, i) => (
                            <circle
                                key={"selected-" + i}
                                cx={xScale(d.start)}
                                cy={yScale(d.end)}
                                r={10}
                                fill="red"
                            />
                        ))
                }

            </g>
        );
    } 


function getColor(selectedStation, station) {
    return station === selectedStation ? "red" : "steelblue";
}

function getRadius(selectedStation, station) {
    return station === selectedStation ? 10 : 5;
}

export default Points