import React, { useState } from "react";

const Videoplayer = ({ videoLink, img, videoRef }) => {
  return (
    <video
      ref={videoRef}
      width="270"
      height="170"
      poster={img}
      muted
      preload="none"
    >
      <source src={videoLink} type="video/webm" codecs="vp8, vorbis" />
    </video>
  );
};

export default Videoplayer;
