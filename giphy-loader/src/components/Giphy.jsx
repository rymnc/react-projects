import React, { useEffect, useState } from "react";
import Axios from "axios";
import Loader from "./Loader";
import Paginate from "./Paginate";

const Giphy = () => {
  const [gifs, setGifs] = useState([]);
  const [isloading, setisloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const [searchChange, setSearchChange] = useState("");

  const [finalSearch, setFinalSearch] = useState("");

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexofFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = gifs.slice(indexofFirstItem, indexOfLastItem);

  useEffect(() => {
    const getGif = async () => {
      setIsError(false);
      setisloading(true);

      try {
        const url =
          "https://api.giphy.com/v1/gifs/trending?api_key=7H3wpKD0RodM5egPCgSs2bQZmqZPWIap&limit=50&rating=G";
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
      return currentItems.map((el) => {
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
          Refresh the page cuz u broke it u noob 👎
        </div>
      );
    }
  };

  const handleChange = (event) => {
    setSearchChange(event.target.value);
    // console.log(event.target.value)
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    setFinalSearch(searchChange);
    //console.log(searchChange)
    setIsError(false);
    setisloading(true);
    try {
      const result = await Axios(
        `https://api.giphy.com/v1/gifs/search?api_key=7H3wpKD0RodM5egPCgSs2bQZmqZPWIap&q=${searchChange}&limit=50&offset=0&rating=G&lang=en`
      );
      //console.log(result.data.data)
      setGifs(result.data.data);
    } catch (error) {
      setIsError(true);
      console.error(error);
    }

    setisloading(false);
  };

  const pageSelected = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="m-2">
      {renderError()}
      <form action="" className="form-inline m-3 justify-content-center">
        <input
          type="text"
          name=""
          id=""
          className="form-control m-2 text-center"
          placeholder="Search"
          onChange={handleChange}
          value={searchChange}
        />
        <button className="btn btn-outline-info m-2" onClick={handleSearch}>
          Search
        </button>
      </form>

      <Paginate
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={gifs.length}
        pageSelected={pageSelected}
      />

      <div className="container gifs">{renderGifs()}</div>
    </div>
  );
};

export default Giphy;
