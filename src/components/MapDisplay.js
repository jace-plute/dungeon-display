import React from "react";
import MapRow from "./MapRow";
import "../style/MapDisplay.css";
const axios = require("axios");

class MapDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = { map: undefined };
  }

  componentDidMount() {
    axios
      .get(
        "http://127.0.0.1:5000/generateMap?width=100&height=100&startX=0&startY=0&endY=99&endX=99"
      )
      .then((response) => {
        this.setState({ map: response.data });
      });
  }

  createMapTiles() {
    let mapCards = <div>No Content</div>;

    if (this.state.map) {
      mapCards = this.state.map.map((row) => {
        return <MapRow mapRow={row} rowCount={row.length} />;
      });
    }

    return mapCards;
  }

  render() {
    return <div className="mapDisplay">{this.createMapTiles()}</div>;
  }
}

export default MapDisplay;
