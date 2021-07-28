import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/ProduceEdit.css";
import blogger from "../assets/images/Writing-a-Blog.png";

export default function ProduceEdit(props) {
  const [produceFormData, setProduceFormData] = useState({
    produce_type: "",
    name: "",
    variety: "",
    img_url: "",
    quantity: "",
    price: "",
  });
  const { produce_type, name, variety, img_url, quantity, price } =
    produceFormData;
  const { produceList, handleUpdate, seasonsList } = props;
  const [seasonId, setSeasonId] = useState();
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const editingProduce = produceList.find(
        (produce) => produce.id === Number(id)
      );
      setProduceFormData({
        produce_type: editingProduce?.produce_type,
        name: editingProduce?.name,
        variety: editingProduce?.variety,
        img_url: editingProduce?.img_url,
        quantity: editingProduce?.quantity,
        price: editingProduce?.price,
      });
    };
    if (produceList.length) {
      prefillFormData();
    }
    // eslint-disable-next-line
  }, [produceList]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduceFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="screen-width-div">
      
      <div className="green-div">
        <h3 className="w-text big-text">edit</h3>
      </div>

      <div className="edit-container">
        <div className="edit-form-container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate(id, { ...produceFormData, season_id: seasonId });
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
                onChange={handleChange}
              />
            </label>
            <br />
            <br />
            <label>
              image url
              <br />
              <input
                type="text"
                name="img_url"
                value={img_url}
                className="input-mobile"
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
                onChange={handleChange}
              />
            </label>
            <br />
            <br />
            <label>
              price
              <br />
              <input
                type="text"
                name="price"
                value={price}
                className="input-mobile"
                onChange={handleChange}
              />
            </label>
            <br />
            <br />
            <select
              onChange={(e) => setSeasonId(e.target.value)}
              defaultValue="default"
              className="selector-mobile"
              name="season"
            >
              {/* value={season.name} */}
              <option disabled value="default">
                - Select a Season -
              </option>
              {seasonsList.map((season, idx) => (
                <option key={idx} value={season.id}>
                  {season.name}
                </option>
              ))}
            </select>
            <br />
            <br />
            <button className="green-button make-larger">Submit</button>
            <br />
          </form>
        </div>
        <div className="edit-image-container">
          <img src={blogger} alt="editing" className="flowers" />
        </div>

      </div>
    </div>
  );
}
