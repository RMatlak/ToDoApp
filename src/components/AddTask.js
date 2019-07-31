import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    isChecked: false,
    date: this.minDate
  };

  handleDate = e => {
    const value = e.target.value;
    this.setState({
      date: value
    });
  };

  handleChange = e => {
    const type = e.target.type;
    if (type === "text") {
      this.setState({
        text: e.target.value
      });
    } else if (type === "checkbox") {
      this.setState({
        isChecked: e.target.checked
      });
    }
  };
  //Nie musimy przekazywać propsów poniewaz jest to komponent klasowy
  handleClick = () => {
    const { text, isChecked, date } = this.state;
    const add = this.props.addTask(text, date, isChecked);
    if (add) {
      this.setState({
        text: "",
        isChecked: false,
        date: this.minDate
      });
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";
    return (
      <>
        <div className="form">
          <div className="yes">
            <label htmlFor="">
              <input
                onChange={this.handleChange}
                type="text"
                placeholder="Dodaj zadanie"
                value={this.state.text}
              />
            </label>
            <label htmlFor="important">
              <input
                onChange={this.handleChange}
                type="checkbox"
                checked={this.state.isChecked}
                id="important"
              />
              Priorytet
            </label>
          </div>
          <label htmlFor="date">
            Do kiedy zrobić ?
            <input
              onChange={this.handleDate}
              type="date"
              min={this.minDate}
              max={maxDate}
              value={this.state.date}
            />
          </label>
          <div>
            <button onClick={this.handleClick} className="add">
              Dodaj
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default AddTask;
