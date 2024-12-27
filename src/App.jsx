import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [images, setImages] = useState([]);
  const [page.setPage] = useState(0);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  useEffect(() => {
    const getImagesData = async () => {
      try {
        const { hits } = await fetchImages({ query, page });
        setImages(prev => [...prev, ...hits]);
      } catch (error) {
        console.log(error);
      } finally {
        
      }
    };
    getImagesData();
},[page,query])

  return (
    <>
      <SearchBar onSearchChanged={} />
    </>
  );
}

export default App;
