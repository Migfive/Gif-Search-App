import { useState, useEffect } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setcategories] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const onCallCategory = (newImages) => {
    if (categories.includes(newImages)) return;
    const letra = newImages.charAt(0).toUpperCase() + newImages.slice(1);
    setcategories([letra, ...categories]);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Agrega un pequeño retraso
  }, []);

  return (
    <div className={`heading1 ${isLoaded ? "loaded" : ""}`}>
      {/* Titulo */}
      <h1>
        <span className="font1">Gif</span>
        <span className="font2">Category</span>
      </h1>
      {/* Input */}
      <AddCategory onCategory={(value) => onCallCategory(value)} />
      {/* Lista */}

      <ul>
        {categories.map((images) => (
          <GifGrid key={images} category={images} />
        ))}
      </ul>
    </div>
  );
};
export default GifExpertApp;
