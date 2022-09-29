import React from "react";
import "./index.css";
import { InputBase } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@mui/material/Button";
import { IoIosArrowRoundBack } from "react-icons/io";
import Checkbox from "@material-ui/core/Checkbox";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function AddBookForm({
  bookInfo,
  genre,
  type,
  onChange,
  handleChangeType,
  handleSubmit,
}) {
  const navigate = useHistory();
  const navigateToHome = () => {
    navigate.push("/");
  };
  return (
    <div className="containerForm">
      <IoIosArrowRoundBack
        style={{ fontSize: "40px", cursor: "pointer", marginLeft: "-6px" }}
        onClick={navigateToHome}
      />
      <div className="addBookForm">
        <div className="inputField">
          <label htmlFor="bookName">Book Name</label>
          <InputBase
            id="bookName"
            name="bookName"
            type="text"
            onChange={(e) => onChange(e)}
            value={bookInfo.bookName}
            placeholder="Enter book name"
          />
        </div>
        <div className="inputField">
          <label htmlFor="genre">Genre</label>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="genre"
            onChange={(e) => onChange(e)}
            value={bookInfo.genre}
            placeholder="Enter book name"
          >
            {genre.map((item) => (
              <MenuItem value={item.genre} key={item.id}>
                {item.genre}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div className="inputFieldGroup">
          {type.map((item, index) => (
            <div key={index}>
              <label htmlFor="type">{item.name}</label>
              <Checkbox
                checked={item.checked}
                onChange={() => handleChangeType(item.name)}
                inputProps={{ "aria-label": "primary checkbox" }}
                name="type"
              />
            </div>
          ))}
        </div>
        <div className="inputField">
          <label htmlFor="price">Price (₹)</label>
          <InputBase
            id="price"
            name="price"
            type="text"
            onChange={(e) => onChange(e)}
            value={bookInfo.price}
            placeholder="Enter book price"
          />
        </div>
        <Button
          variant="contained"
          type="submit"
          onClick={() => handleSubmit(bookInfo.id)}
          className="buttonClass"
          style={{ marginTop: "30px" }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default AddBookForm;
