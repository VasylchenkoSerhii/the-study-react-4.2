import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import scss from "./App.module.scss";
import { getImages } from "services/api";
import Searchbar from "../Searchbar/Searchbar";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    };
    setIsLoading(true);
    getImages(query, page)
      .then(imgs => {
        const totalPages = Math.ceil(imgs.totalHits / 12);
        setTotalPages(totalPages);

        if (imgs.hits.length === 0) {
          return toast.info(
            "По вашому запросу не знайдено жодного фото"
          );
        };

        if (page >= totalPages) {
           toast.info(
            "Вибачте, не має більше фото для вас"
          );
        };
        setImages(prev => [...prev, ...imgs.hits]);
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));;
  }, [page, query]);

  const handleSubmit = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setTotalPages(null);
  };

  const  handleClick = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className={scss.App}>
      <Searchbar onSubmit={handleSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {page < totalPages && <Button onClick={handleClick} />}
      {isLoading && <Loader />}
      <ToastContainer position="top-right"/>
    </div>
  );
};
