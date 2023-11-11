function onAddItem() {
  console.log("clikcd");
}

export default function Action() {
  return (
    <div>
      <div className="form">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="">
              Write You todo...
            </span>
          </div>

          <form id="todo-from" />
          <input type="text" className="form-control" id="title" />
        </div>

        <select
          id="filter"
          className="form-select"
          aria-label="Default select example"
        >
          <option>Status: Open this select menu</option>
          <option value="done">Done</option>
          <option value="todo">Todo</option>
          <option value="all">All</option>
        </select>
        <br />
        <button
          type="submit"
          className="btn btn-outline-success d-grid gap-2 col-6 mx-auto"
          onClick={onAddItem}
        >
          Save
        </button>
        <button
          type="button"
          className="btn btn-outline-danger d-grid gap-2 col-6 mx-auto"
        >
          Delete-All
        </button>
        <form />
      </div>
    </div>
  );
}
