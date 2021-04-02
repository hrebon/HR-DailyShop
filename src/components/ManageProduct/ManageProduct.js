import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Headers from "../Headers/Headers";
import "./ManageProduct.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router";

const ManageProduct = () => {
  
  const history = useHistory();
  const handleDelete = (id)=> {
      const url =`https://obscure-wave-12433.herokuapp.com/checkout/${id._id}`;
      fetch(url ,{
          method: 'DELETE',
      }).then(res =>{
          window.location.reload();
      })

      
      
  }

  const [productDetails, setProductDetails] = useState([]);
  useEffect(() => {
    fetch("https://obscure-wave-12433.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  }, []);
  return (
    <div>
      <Headers></Headers>
      <h1>Manage Product</h1>
      <table>
        <tr className="head">
          <th>Product Name</th>
          <th>Weight</th>
          <th>Price</th>
          <th>Action</th>
        </tr>

        {productDetails.map(({ name, weight, price, _id }) => (
          <tr>
            <th>{name}</th>
            <th>{weight}</th>
            <th>{price}</th>
            <th>
              <Button
                variant="contained"
                color="secondary"
                onClick={() =>handleDelete({_id})}
                startIcon={<DeleteIcon />}
              ></Button>
            </th>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ManageProduct;
