import React from "react";
import "./Video.css";
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Recommendet from "../../Components/Recommendet/Recommendet";
import { useParams } from "react-router-dom";
const Video = () => {
  const { videoId, categoryId } = useParams();
  return (
    <div className="play-container">
      <PlayVideo videoId={videoId} />
      <Recommendet categoryId={categoryId}/>
    </div>
  );
};

export default Video;
