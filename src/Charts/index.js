import {useD3} from '../hooks/useD3';
import React from 'react';

function Index({ChartComponent, data}) {
    const ref = useD3(ChartComponent, data);

    return (
        <svg ref={ref} style={{height: 500, width: "100%", marginRight: "0px", marginLeft: "0px",}}>
            <g className="plot-area"/>
            <g className="x-axis"/>
            <g className="y-axis"/>
        </svg>
    );
}

export default Index;