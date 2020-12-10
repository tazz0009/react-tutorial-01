import React, { useEffect, useRef, useState } from "react";
import Image from "./Image";
import useScroll from "../utils/hooks/useScroll";
import useFetchImage from "../utils/hooks/useFetchImage";

export default function Images() {
  const [page, setPage] = useState(1);
  const [images, setImages, errors] = useFetchImage(page);

  const [newImageUrl, setNewImageUrl] = useState("");
  const inputRef = useRef(null);
  const scrollPostion = useScroll();

  // input type focus
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleRemove(index) {
    console.log("handleRemove :", index);
    setImages(images.filter((_, i) => i !== index));
  }

  function ShowImage(params) {
    return images.map((img, index) => (
      <Image
        image={img.urls.regular}
        index={index}
        handleRemove={handleRemove}
        key={index}
      />
    ));
  }

  function handleAdd() {
    console.log("handleAdd");
    if (newImageUrl !== "") {
      setImages([
        ...images,
        newImageUrl,
        // https://images.unsplash.com/photo-1607382007923-6ba0d39f8617?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80
      ]);
      setNewImageUrl("");
    }
  }

  function handleChage(event) {
    console.log("handleChage :", event.target.value);
    setNewImageUrl(event.target.value);
  }

  function loadMoreImages() {
    console.log('loadMoreImages');
    setPage(page+1);
  }

  return (
    <section>
      <div className="gap-0" style={{columnCount:3}}>
        <ShowImage />
      </div>
      <button onClick={loadMoreImages}>Load more</button>
      <div className="flex justify-between my-5">
        <div className="w-full">
          <input
            type="text"
            id="inputBox"
            ref={inputRef}
            className="p-2 border border-gray-800 shadow rounded w-full"
            value={newImageUrl}
            onChange={handleChage}
          />
        </div>
        <div className="w-full">
          <button
            disabled={newImageUrl === ""}
            className={`p-2 text-white ${
              newImageUrl !== "" ? "bg-green-600" : "bg-green-300"
            }`}
            onClick={handleAdd}
          >
            Add New
          </button>
        </div>
      </div>
    </section>
  );
}
