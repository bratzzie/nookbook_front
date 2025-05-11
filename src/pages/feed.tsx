import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/Store";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { setToken } from "../redux/slices/UserSlice";
import { useNavigate } from "react-router-dom";

export const Feed: React.FC = () => {
  /*const [imageData, setImageData] = React.useState({});

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
  };*/
  const state = useSelector((state: RootState) => state.user);
  const [jwt, setJwt, removeJwt] = useLocalStorage("token", "");
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (jwt === "" && state.token != "") {
      console.log("No token found in local storage, one is in state");
      console.log("user just logged in ,store it in local storage");
      setJwt(state.token);
    } else if (jwt !== "" && state.token === "") {
      console.log("user returning, but no token in state");
      console.log("need to store it in state");
      dispatch(setToken(jwt));
    } else {
      console.log("user is not logged in");
      console.log("navigate to login page");
      navigate("/");
    }
  }, []);

  return (
    <div>
      feed
      {/*<button onClick={getImage}>Get Image</button>
      <div className="img">
        <img src={`data:image/jpeg;base64,${imageData}`} alt="" />
      </div>
      */}
    </div>
  );
};
