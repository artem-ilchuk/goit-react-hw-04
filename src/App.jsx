import { useEffect, useState } from "react";
import "./App.css";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { fetchImages } from "./services/unsplash-api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const getImagesData = async () => {
      if (!query.trim()) return;
      try {
        setIsLoading(true);
        setIsError(false);
        const { results } = await fetchImages(query, page);
        if (results.length < 12) {
          setHasMore(false);
          toast.success(
            "We are sorry, but you have reached the end of search results."
          );
        }
        setImages((prev) => [...prev, ...results]);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getImagesData();
  }, [query, page]);

  const handleChangeQuery = (newQuery) => {
    if (newQuery === query) {
      toast.error("Please change query!");
      return;
    }
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setHasMore(true);
  };

  const handlePagination = () => {
    setPage((prev) => prev + 1);
  };

  const handleOpen = (image) => {
    setModalImage(image);
  };

  const handleClose = () => {
    setModalImage(null);
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <SearchBar onSearchChanged={handleChangeQuery} />
      {images.length > 0 && (
        <ImageGallery images={images} handleOpen={handleOpen} />
      )}
      {!isLoading && images.length > 0 && hasMore && (
        <LoadMoreBtn handlePagination={handlePagination} />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {modalImage && (
        <ImageModal
          image={modalImage}
          isOpen={!!modalImage}
          onRequestClose={handleClose}
        />
      )}
    </>
  );
}

export default App;
