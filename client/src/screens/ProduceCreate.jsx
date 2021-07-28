import React from "react";
import { useState } from "react";
import "../assets/css/ProduceCreate.css";
import farmer from "../assets/images/Organic-Farming.png";

export default function ProduceCreate(props) {
  const [produceFormData, setProduceFormData] = useState({
    produce_type: "",
    name: "",
    variety: "",
    img_url: "",
    quantity: "",
    price: "",
  });
  const [seasonId, setSeasonId] = useState();

  const { produce_type, name, variety, img_url, quantity, price } =
    produceFormData;
  const { handleCreate, seasonsList } = props;

  console.log(seasonsList);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProduceFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="screen-width-div">
      <div className="green-div">
        <h3 className="w-text big-text">create</h3>
      </div>
      <div className="create-container">
        <div className="create-form-container">

        <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate({ ...produceFormData, season_id: seasonId });
        }}
      >
        <label>
          produce type
          <br />
          <input
            type="text"
            name="produce_type"
            value={produce_type}
            className="input-mobile"
            required
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          name
          <br />
          <input
            type="text"
            name="name"
            value={name}
            className="input-mobile"
            required
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          variety
          <br />
          <input
            type="text"
            name="variety"
            value={variety}
            className="input-mobile"
            required
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          image url (optional)
          <br />
          <input
            type="text"
            name="img_url"
            value={img_url}
            className="input-mobile"
            required
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          quantity
          <br />
          <input
            type="text"
            name="quantity"
            value={quantity}
            className="input-mobile"
            required
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          price (per unit)
          <br />
          <input
            type="text"
            name="price"
            value={price}
            className="input-mobile"
            required
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <select
          onChange={(e) => setSeasonId(e.target.value)}
          defaultValue="default"
          className="selector-mobile"
          required
        >
          <option disabled value="default">
            - Select a Season -
          </option>
          {seasonsList.map((season) => (
            <option value={season.id}>{season.name}</option>
          ))}
        </select>
        <br />
        <br />
        <button className="green-button make-larger">Submit</button>
      </form>
          
        </div>
        <div className="create-image-container">
        <img
              src={farmer}
              alt="organic farmer"
              className="flowers"
            />
        </div>
      </div>


    </div>
  );
}
