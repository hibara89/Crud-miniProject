import React from "react";
import Cat from "./cat";
import "./style.css";
import axios from "axios";

class AppCat extends React.Component {
  state = { catsArr: [], newCat: "", newCatImage: "" };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        "https://628e86faa339dfef87af8055.mockapi.io/api/v1/cats"
      );

      this.setState({ catsArr: data });
    } catch (e) {
      console.log(e);
    }
  }

  displayCats = () => {
    return this.state.catsArr.map((cat) => {
      return (
        <Cat key={cat.id} name={cat.name} img={cat.imageUrl} id={cat.id} />
      );
    });
  };
  handleInputChange = (event) => {
    this.setState({ newCat: event.target.value });
  };

  handleCreate = () => {
    const newCat = {
      name: this.state.newCat,
      img: this.state.newCatImage,
    };
    axios.post(
      "https://628e86faa339dfef87af8055.mockapi.io/api/v1/cats",
      newCat
    );
    console.log(newCat);
  };

  render() {
    return (
      <div className="wrapper">
        <input
          id="newCat"
          onChange={this.handleInputChange}
          value={this.state.newCat}
          placeholder="New cat name"
        />
        <input
          id="newCatImage"
          onChange={this.handleInputChange}
          value={this.state.newCatImage}
          placeholder="New cat image"
        />
        <button onclick={this.handleCreate}>Create</button>
        <div className="item-wrapper">{this.displayCats()}</div>
      </div>
    );
  }
}

export default AppCat;
