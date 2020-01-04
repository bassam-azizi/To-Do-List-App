import React, { Component } from "react";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

  updateItems(key, value) {
    // update React State
    this.setState({
      [key]: value
    });
  }

  addItems() {
    // create the new item with a unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
    // coppy the current list of items
    const list = [...this.state.list];

    // add new items to list
    list.push(newItem);

    // update the list and reset the new item to an empty string for new input
    this.setState({ list, newItem: "" });
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="app">
        <h2 className="headerTitle">Add items here..</h2>
        <input
          className="appInput"
          type="text"
          placeholder="Add items here.."
          value={this.state.newItem}
          onChange={e => this.updateItems("newItem", e.target.value)}
        />
        <button className="appButton" onClick={() => this.addItems()}>
          Add
        </button>
        <div className="itemAdded">
          {this.state.list.map(item => {
            return (
              <li key={item.id}>
                {item.value}
                <button
                  className="deleteItem"
                  onClick={() => this.deleteItem(item.id)}
                >
                  X
                </button>
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
