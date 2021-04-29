import React, { useState, useEffect } from "react";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import firebase from "../../../config/Firebase";

const Dashboard = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const [product, setProduct] = useState([]);

  const [button, setButton] = useState("Save");

  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    firebase
      .database()
      .ref("products")
      .on("value", (res) => {
        if (res.val()) {
          //ubah menjadi array object
          const rawData = res.val();
          const productArray = [];
          Object.keys(rawData).map((item) => {
            productArray.push({
              id: item,
              ...rawData[item],
            });
          });
          setProduct(productArray);
          console.log(productArray);
        }
      });
  }, []);

  const resetFrom = () => {
    setProductName("");
    setCategory("");
    setPrice("");
    setButton("Save");
    setSelectedProduct({});
  };

  const handleSubmit = () => {
    const data = {
      productName: productName,
      category: category,
      price,
      price,
    };
    if (button === "Save") {
      //Insert
      firebase.database().ref("products").push(data);
    } else {
      //Update
      firebase.database().ref(`products/${selectedProduct.id}`).set(data);
    }

    resetFrom();
  };

  const onUpdateData = (item) => {
    setProductName(item.productName);
    setCategory(item.category);
    setPrice(item.price);
    setButton("Update");
    setSelectedProduct(item);
  };

  const onDelete = (item) => {
    //delete
    firebase.database().ref(`products/${item.id}`).remove();
  };

  return (
    <div className="container mt-5">
      <h3>Dashboard</h3>
      <div className="col-6">
        <Input
          className="form-control"
          label="Product Name"
          placeholder=" Type the product name"
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
        />

        <Input
          className="form-control"
          label="Catagory"
          placeholder=" Type the category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <Input
          className="form-control"
          label="Price"
          placeholder=" Type the price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <br />
        <Button text={button} onSubmit={handleSubmit} />
        {button === "Update" && (
          <Button
            text="Cancel"
            className="btn btn-secondary"
            onClick={resetFrom}
          />
        )}
      </div>
      <hr />
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => (
            <tr>
              <td>{item.productName}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => onUpdateData(item)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(item)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
