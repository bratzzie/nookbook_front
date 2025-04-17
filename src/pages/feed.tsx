import axios from "axios";
import React from "react";

export const Feed: React.FC = () => {
  const [imageData, setImageData] = React.useState({});

  const getImage = () => {
    try {
      axios
        .get("http://localhost:8080/user/picture", {
          params: {
            username: "username",
          },
        })
        .then((response) => {
          setImageData(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      feed
      <button onClick={getImage}>Get Image</button>
      <div className="img">
        <img src={`data:image/jpeg;base64,${imageData}`} alt="" />
      </div>
    </div>
  );
};
