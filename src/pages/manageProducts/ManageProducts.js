import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  AddProduct,
  EditProduct,
  RemoveProduct,
} from "../../redux/features/ProductSlice";
import { nanoid } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "./ManageProducts.css";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { categories } from "../../components/category/Category";

const ManageProducts = () => {
  let id = nanoid();
  const [saveID, setSaveID] = useState("");
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState();
  const [sale, setSale] = useState();
  const [inStock, setInStock] = useState();
  const [sold, setSold] = useState(0);
  const [mood, setMood] = useState("add");
  const [modal, setModal] = useState(false);

  const products = JSON.parse(localStorage.getItem("Product"));
  const dispatch = useDispatch();

  // sale
  const onSale = [
    0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80,
  ];

  // brands
  const laptop = ["hp", "lenovo", "dell", "apple"];
  const phone = ["apple", "samsung", "xiaomi", "google"];
  const TV = ["samsung", "LG", "sony", "hisense"];
  const accessories = ["headphone", "airpods", "PS controller"];
  const console = ["PS5", "PS4", "Xbox", "nintendo switch"];

  let type = null;
  let brands = null;

  // category filter
  if (category === "laptop") {
    type = laptop;
  } else if (category === "phone") {
    type = phone;
  } else if (category === "TV") {
    type = TV;
  } else if (category === "accessories") {
    type = accessories;
  } else if (category === "console") {
    type = console;
  }

  // brand filter based on category
  if (type) {
    brands = type.map((element) => <option key={element}>{element}</option>);
  }

  // upload image to ui
  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setImage(null);
    }
  };

  // clear all inputs
  const clearInputs = () => {
    setName("");
    setFullName("");
    setImage(null);
    setCategory("");
    setBrand("");
    setPrice("");
    setInStock(0);
    setSale(0);
  };

  // add product info in the input fields to edit the product
  const handleEdit = (product) => {
    setSaveID(product.id);
    setName(product.name);
    setFullName(product.fullName);
    setImage(product.image);
    setCategory(product.category);
    setBrand(product.brand);
    setPrice(product.price);
    setInStock(product.inStock);
    setSold(product.sold);
    setSale(product.sale);
  };

  // delete product logic
  const handleDelete = (product) => {
    setModal(true);
    setSaveID(product.id);
  };

  // submit the new product / edit an existing product
  const handleSubmit = (e) => {
    e.preventDefault();

    // check if this product is already exists
    const exist = products.find(
      (product) =>
        product.name === name &&
        product.fullName === fullName &&
        product.category === category &&
        product.brand === brand &&
        product.price === price &&
        product.inStock === inStock &&
        product.sale === sale
    );
    if (!exist) {
      // check if any input field is empty
      if (
        name &&
        fullName &&
        image &&
        category &&
        brand &&
        price &&
        inStock &&
        sale
      ) {
        // add a new product
        if (mood === "add") {
          dispatch(
            AddProduct({
              id: id,
              name: name,
              fullName: fullName,
              image: image,
              category: category,
              brand: brand,
              price: price,
              sale: sale,
              inStock: inStock,
              sold: 0,
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
              details:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            })
          );
          toast.success("a new product was added successfully");
          clearInputs();
        }

        // edit an existing product info
        if (mood === "edit") {
          const getID = products.filter((product) => product.id === saveID);
          if (getID) {
            dispatch(
              EditProduct({
                id: saveID,
                name: name,
                fullName: fullName,
                image: image,
                category: category,
                brand: brand,
                price: price,
                sale: sale,
                inStock: inStock,
                sold: sold,
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
                details:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
              })
            );
            toast.success("The product was edited successfully");
            clearInputs();
          }
        }
      } else {
        toast.error("don't leave any empty field");
      }
    } else {
      toast.error("this product is already in the list");
    }
  };

  return (
    <>
      <Container fluid style={{ padding: "30px" }}>
        <div className="d-flex justify-content-center gap-4">
          <Button
            onClick={() => {
              setMood("add");
              clearInputs();
            }}
            className="w-25"
          >
            Add
          </Button>
          <Button
            onClick={() => {
              setMood("edit");
              clearInputs();
            }}
            className="w-25"
          >
            Edit
          </Button>
          <Button
            onClick={() => {
              setMood("delete");
            }}
            className="w-25"
          >
            Delete
          </Button>
        </div>
        <Alert
          className="w-50 info p-3 text-center"
          style={{ margin: "30px auto" }}
        >
          No styling added yet, but all functions are working just fine.
        </Alert>
        <div className="d-flex gap-5 align-items-start justify-content-around p-5">
          {(mood === "edit" || mood === "delete") && (
            <Card
              className="w-50 d-flex justify-content-between  "
              style={{ overflowY: "scroll", height: "70vh" }}
            >
              <Form.Group className="mb-5">
                <Form.Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option className="d-none">Select Category...</option>
                  {categories.map((element) => (
                    <option key={element}>{element}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              <div className="d-flex flex-wrap justify-content-around">
                {products
                  .filter((product) => category === product.category)
                  .map((product, index) => {
                    return (
                      <div className="product-card" key={index}>
                        <img
                          className="product-img"
                          src={product.image}
                          alt={product.name}
                        />
                        <div className="card-body">
                          <div className="card-info">
                            <h4 className="text-center">{product.name}</h4>
                            <span className="h3 text-success">
                              ${product.price}
                            </span>
                          </div>
                          <hr />

                          <div className=" w-50 mt-4">
                            <button
                              type="button"
                              className={
                                mood === "edit"
                                  ? "w-100 btn btn-success mt-3"
                                  : "d-none"
                              }
                              onClick={() => handleEdit(product)}
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className={
                                mood === "delete"
                                  ? "w-100 btn btn-danger mt-3"
                                  : "d-none"
                              }
                              onClick={() => handleDelete(product)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
              {modal && (
                <div className="selected">
                  <p>Are you sure you want to delete this product ?</p>
                  <div>
                    <button
                      onClick={() => {
                        dispatch(RemoveProduct(saveID));
                        setModal(false);
                        toast.success("the product was deleted successfully");
                      }}
                      className="btn btn-success"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => {
                        setModal(false);
                      }}
                      className="btn btn-danger"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </Card>
          )}
          <div
            className={modal ? "blackScreen" : "d-none"}
            onClick={() => {
              setModal(false);
            }}
          ></div>
          {(mood === "add" || mood === "edit") && (
            <Card className="p-5 w-50 " style={{ maxWidth: "600px" }}>
              {/* form for add/edit Product */}

              <Form
                className="d-flex flex-column justify-content-between gap-5 flip w-100  p-2"
                onSubmit={handleSubmit}
              >
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={fullName}
                    placeholder="Full Name"
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Image : </Form.Label>
                  <Form.Control
                    value=""
                    type="file"
                    onChange={handleImage}
                  ></Form.Control>
                  {image != null ? (
                    <img
                      src={image}
                      alt={image}
                      className="  m-4"
                      style={{ width: "90px", height: "90px" }}
                    />
                  ) : (
                    ""
                  )}
                  <button
                    type="button"
                    className={image != null ? "btn btn-primary" : "d-none"}
                    onClick={(e) => setImage(null)}
                  >
                    Remove
                  </button>
                </Form.Group>
                <Form.Group>
                  <Form.Select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  >
                    <option className="d-none">Category...</option>
                    {categories.map((element) => (
                      <option key={element}>{element}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                  <Form.Select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    required
                  >
                    <option className="d-none">Brand...</option>
                    {brands}
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    value={price <= 0 ? 0 : price}
                    placeholder="price"
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    value={inStock <= 0 ? 0 : inStock}
                    placeholder="Amount"
                    onChange={(e) => setInStock(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Sale percent</Form.Label>
                  <Form.Select
                    value={sale}
                    onChange={(e) => setSale(e.target.value)}
                    required
                  >
                    <option className="d-none">sale...</option>
                    {onSale.map((element) => (
                      <option key={element}>{element}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <button className="btn btn-primary" type="submit">
                  {mood === "add" ? "Add Product" : "Edit Product"}
                </button>
              </Form>
            </Card>
          )}
        </div>
      </Container>
    </>
  );
};

export default ManageProducts;
