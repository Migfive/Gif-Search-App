import { useState, useEffect } from "react";

export const AddCategory = ({ onCategory }) => {
  const [inputNew, setinputNew] = useState("");
  const [showMessage, setshowMessage] = useState(true); 
  const [isload, setisload] = useState(false); 
  // Carga inicial 
  useEffect(() => {
    setTimeout(() => {
      setshowMessage(true);
      setisload(true);
    }, 1000);
  }, [])
  


  const handleCategorie = (e) => {
    e.preventDefault();
    if (inputNew.trim().length <= 0) return;
    setinputNew("");
    setshowMessage(false);
    onCategory(inputNew);
  };
  return (
    <form onSubmit={handleCategorie} className="form-input">
      <input
        type="text"
        value={inputNew}
        onChange={(e) => setinputNew(e.target.value)}
        placeholder="Search Gifs"
      ></input>
      <p className={`help-text ${showMessage? "visible": "hidden"} ${isload? 'typing' : ''}`}>Escribe un nombre y presiona Enter</p>
    </form>
  );
};
