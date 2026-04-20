function Tooltip(props) {
    const { x, y, content } = props;

    if (!content) {
        return null;
    }

    const divStyle = {
        position: "absolute",
        textAlign: "left",
        padding: "10px",
        font: "12px sans-serif",
        background: "#90EE90",
        border: "1px solid black",
        borderRadius: "5px",
        pointerEvents: "none",
        left: `${x + 10}px`,
        top: `${y + 10}px`
    };

    return (
        <div style={divStyle}>
            <strong>{content.station}</strong>
            <div>Trip durations:</div>
            <ul style={{ margin: 0, paddingLeft: "15px" }}>
                <li>End in: {content.end}</li>
                <li>Start from: {content.start}</li>
            </ul>
        </div>
    );
}

export default Tooltip;