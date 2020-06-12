import React, { useEffect, useState } from "react";
import Axios from "axios";
import Loader from "./Loader";

const Giphy = () => {
  const [gifs, setGifs] = useState([]);
  const [isloading, setisloading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getGif = async () => {
      setIsError(false);
      setisloading(true);

      try {
        const url =
          "https://api.giphy.com/v1/gifs/trending?api_key=7H3wpKD0RodM5egPCgSs2bQZmqZPWIap&limit=25&rating=G";
        const result = await Axios(url);
        // console.log(result.data.data)
        setGifs(result.data.data);
      } catch (error) {
        setIsError(true);

        console.error(error);

        setTimeout(() => setIsError(false), 1000);
      }

      setisloading(false);
    };
    getGif();
  }, []);

  const renderGifs = () => {
    if (isloading) {
      return <Loader />;
    } else {
      return gifs.map((el) => {
        return (
          <div key={el.id} className="gif">
            <img src={el.images.fixed_height.url} alt="" />
          </div>
        );
      });
    }
  };

  const renderError = () => {
    if (isError) {
      return (
        <div
          className="alert alert-danger alert-dismissable fade show"
          role="alert"
        >
          Refresh the page cuz u broke it u noob :thumbsup:
        </div>
      );
    }
  };

  return (
    <div className="m-2">
      {renderError()}
      <div className="container gifs">{renderGifs()}</div>
    </div>
  );
};

export default Giphy;
