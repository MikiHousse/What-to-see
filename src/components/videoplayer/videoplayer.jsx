import React, { useState } from "react";

const Videoplayer = ({ vid, img }) => {
  return (
    <video
      autoPlay={false}
      width="280"
      tabIndex="0"
      height="170"
      poster={img}
      muted
      preload="none"
    >
      <source src={vid} type="video/webm" codecs="vp8, vorbis" />
    </video>
  );
};

export default Videoplayer;
