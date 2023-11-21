import { Fragment, useState } from "react";
// let my_string="";

export default function Action(props) {
  const [inputValue, setInputValue] = useState("");

  return (
    <Fragment>
      <div className="form">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="">
              Write You todo...
            </span>
          </div>

          <form id="todo-from" />
          <input
            value={inputValue}
            type="text"
            className="form-control"
            id="title"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </div>

        {props.count > 0 ? (<select
          value={props.currentFilter}
          id="filter"
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => {
            props.setcurrentFilter(e.target.value);
          }}
        >
          <option disabled>Status: Open this select menu</option>
          <option value="done">Done</option>
          <option value="todo">Todo</option>
          <option value="all">All</option>
        </select>) :null}
        
        <br />
        <button
          disabled={inputValue === ""}
          type="submit"
          className="btn btn-outline-success d-grid gap-2 col-6 mx-auto"
          onClick={(e) => {
            e.preventDefault();
            props.handleSubmit(inputValue);
            setInputValue("");
          }}
        >
          Save
        </button>
        {props.count > 0 ? (
          <button
            type="button"
            className="btn btn-outline-danger d-grid gap-2 col-6 mx-auto"
            onClick={() => {
              props.handleDelAll();
            }}
          >
            Delete-All ({props.count})
          </button>
        ) : null}
        <form />
      </div>
    </Fragment>
  );
}
