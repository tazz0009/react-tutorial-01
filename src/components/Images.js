import React, { useState } from "react";

export default function Images() {
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1607350185227-61d1ceef1de2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1607275667966-5923aacbba8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1607406676346-6f4b0b312cbb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1607406361922-549f5852d218?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=663&q=80",
  ]);
  const [newImageUrl, setnewImageUrl] = useState("");

  function handleRemove(index) {
    console.log("handleRemove :", index);
    setImages(images.filter((_, i) => i !== index));
  }

  function ShowImage(params) {
    return images.map((image, index) => {
      return (
        <div className="w-1/3 my-4 flex justify-center" key={index}>
          <div className="relative">
            <i className="fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100"  onClick={() => handleRemove(index)}></i>
            <img src={image} width="150" />
          </div>
        </div>
      );
    });
  }

  function handleAdd() {
    console.log("handleAdd");
    if (newImageUrl !== "") {
      setImages([
        ...images,
        newImageUrl,
        // https://images.unsplash.com/photo-1607382007923-6ba0d39f8617?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80
      ]);
      setnewImageUrl("");
    }
  }

  function handleChage(event) {
    console.log("handleChage :", event.target.value);
    setnewImageUrl(event.target.value);
  }

  return (
    <section>
      <div className="flex flex-wrap justify-center">
        <ShowImage />
      </div>
      <div className="flex justify-between mt-2">
        <div className="w-full">
          <input
            type="text"
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
