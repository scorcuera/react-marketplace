import axios from "axios";
import { useState, useEffect } from "react";

const baseURL = 'http://localhost:3000/products';


function Image() {
    const [images, setImages] = useState([]);
    useEffect(() => {
      fetch(baseURL)
        .then(res => res.json())
        .then(data => setImages(data));
    }, [baseURL])
  return (
    <div>
      {images.map(image => {
        return <img src={image.image} alt="" />
      })}
    </div>
  )
}

export default Image
