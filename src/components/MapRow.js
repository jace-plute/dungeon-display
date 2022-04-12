import React from "react";
import MapTile from "./MapTile";

class MapRow extends React.Component {
  constructor(props) {
    super(props);
  }

  constructMapTiles() {
    return this.props.mapRow.map((mapElement) => {
      return <MapTile tileType={mapElement} />;
    });
  }

  render() {
    return <div className="mapRow">{this.constructMapTiles()}</div>;
  }
}

export default MapRow;
