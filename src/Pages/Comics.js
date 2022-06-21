import "../Pages/Comics.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const Comics = () => {
  const [comics, setComics] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchComics = async () => {
      try {
        const response = await axios.get("http://localhost:4000/comics");
        setComics(response.data);
        // console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchComics();
  }, [page]);

  return (
    <div>
      {isLoading === true ? (
        <h1>Wait is loading ... !</h1>
      ) : (
        <div className="containerComics">
          <div className="searchBar">
            <button onClick={() => setPage(page - 1)}>Back</button>
            <button onClick={() => setPage(page + 1)}>Next</button>
            <input type="search" />
          </div>
          {comics.results.map((comic) => {
            return (
              <div className="pageComics">
                <div className="pictureComics">
                  <div>
                    <img
                      src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                      alt=""
                    />
                  </div>

                  <div className="titleComics">
                    <span>{comic.title}</span>

                    <p>{comic.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Comics;
