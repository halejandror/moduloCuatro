import React from "react";
import Title from "./titulo";

const VienEpisode = (props) => {
  return (
    <div>
      <div className="containe">
        <Title title={props.name} />
      </div>
    </div>
  );
};

export default VienEpisode;
