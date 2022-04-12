import React from "react";
import {
  EMPTY_SPACE,
  WALL,
  TRAP,
  ENEMY,
  TREASURE,
  START,
  END,
  SAFE_PATH,
  BOSS,
  MIMIC,
  SECRET,
} from "../config/constants";
import "../style/MapTile.css";
import wall from "../assets/Wall.png";

class MapTile extends React.Component {
  constructor(props) {
    super(props);
  }

  convertTileType() {
    // TODO: This method needs refactored to place base images in a Tile, surrounded by a border.
    switch (this.props.tileType) {
      case EMPTY_SPACE:
        return "F";
      case WALL:
        return wall;
      case TRAP:
        return "T";
      case ENEMY:
        return "E";
      case TREASURE:
        return "Z";
      case START:
        return "S";
      case END:
        return "X";
      case SAFE_PATH:
        return "P";
      case BOSS:
        return "B";
      case MIMIC:
        return "M";
      case SECRET:
        return "H";
    }
  }

  render() {
    return (
      <div className="tile">
        <img src={this.convertTileType()}></img>
      </div>
    );
  }
}

export default MapTile;
