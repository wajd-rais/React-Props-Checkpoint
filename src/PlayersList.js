import React from "react";
import Player from "./Player";
import players from "./players";

const PlayersList = () => {
  return (
    <div style={{ justifyContent: "center", display: "flex", flexWrap: "wrap", marginTop: "5px" }}>
      {players.map((player, x) => (
        <Player key={x} {...player}/>
      ))}
    </div>
  );
};

export default PlayersList;



