import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [60.0, -8.0, 0],
        center: [-2, -3],
        scale: 800
      }}
      style={{width: "100%", height: "100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#fff"
        stroke="#01B9ED"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-73.3522, 2.8566]}
        dx={-70}
        dy={-30}
        connectorProps={{
          stroke: "#000",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-9" textAnchor="end" alignmentBaseline="middle" fill="#000">
          {"Colombia"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;