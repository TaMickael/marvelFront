import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Character = () => {
  const [character, setCharacter] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  //   console.log(id);
  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/comics/${params.characterId}`
        );
        setCharacter(response.data);
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCharacter();
  }, []);
  return isLoading === true ? (
    <div>
      <h1>Wait</h1>
    </div>
  ) : (
    <div>
      {character.comics.map((charactComics) => {
        return (
          <div>
            <img
              src={`${charactComics.thumbnail.path}.${charactComics.thumbnail.extension}`}
              alt=""
            />
            <div>
              <p>{charactComics.title}</p>

              <span>{charactComics.description}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Character;
