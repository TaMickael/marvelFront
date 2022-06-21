import "../Pages/Favorites.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get("http://localhost:4000/favorites");
        setFavorites(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchFavorites();
  }, []);

  return (
    <div>
      {isLoading === true ? <h1>is Loading ... !</h1> : <h1>Hello world</h1>}
    </div>
  );
};

export default Favorites;
