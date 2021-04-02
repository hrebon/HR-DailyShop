import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Headers from "../Headers/Headers";
import './AddProducts.css';

const AddEvents = () => {
  const { register, handleSubmit} = useForm();
  const [imageURL, setImageURL] = useState(null);
  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      weight: data.weight,
      price: data.price,
      imageURL: imageURL,
    };
    const url = `https://obscure-wave-12433.herokuapp.com/addEvent`;
    console.log(eventData);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => {
      console.log(res);
      alert('add successfully')
    });
  };
  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "e7b60aad1e8fc5bd32638cf23e397df2");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <Headers></Headers>
      
      <form className='main-form' onSubmit={handleSubmit(onSubmit)}>
      <h1>Add Product</h1>
        <div className="partOne">
          <div className="name">
            <label htmlFor="ProductName">Product Name</label>
            <br />
            <input
              name="name"
              defaultValue=""
              placeholder="Enter product name"
              ref={register}
            />
          </div>

          <div>
            <label htmlFor="weight">Weight</label>
            <br />
            <input
              name="weight"
              defaultValue=""
              placeholder="Enter weight"
              ref={register}
            />
          </div>
        </div>
        <div className='partTwo'>
          <div className='price'>
            <label htmlFor="price">Price</label>
            <br />
            <input
              name="price"
              defaultValue=""
              placeholder="Enter price"
              ref={register}
            />
          </div>
          <div>
            <label htmlFor="photo">Add Photo</label>
            <br/>
            <input
              name="exampleRequired"
              type="file"
              onChange={handleImageUpload}
            />
          </div>
        </div>
          <div className='submit'>
            <input name="save" value="Save" type="submit" />
          </div>
      </form>
    </div>
  );
};

export default AddEvents;
