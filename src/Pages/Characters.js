import "../Pages/Characters.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Characters = () => {
  const [characters, setCharacters] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get("http://localhost:4000/characters");
        setCharacters(response.data);
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCharacters();
  }, [page]);
  return (
    <div>
      {isLoading === true ? (
        <h1>Wait is Loading ... !</h1>
      ) : (
        <div className="containerCharacters">
          <div className="searchBar">
            <button onClick={() => setPage(page - 1)}>Back</button>
            <button onClick={() => setPage(page + 1)}>Next</button>
            <input type="search" />
          </div>

          {characters.results.map((character) => {
            return (
              <div className="pageCharacters">
                <div>
                  <Link to={`/comics/${character._id}`}>
                    <div className="pictureCharacters">
                      <img
                        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                        alt=""
                      />
                      <div class="round-heart">
                        <i class="fa-regular fa-heart"></i>
                      </div>
                    </div>
                    <div className="titleCharacters">
                      <p>{character.name}</p>

                      <p>{character.description}</p>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Characters;
