export default function Todolist(props) {
  return (
    <div className="list">
      <div className="item form-check form-switch">
        <div className="container">
          <div className="row">
            <div className="col-sm" id="">
              <input
                checked={props.status}
                type="checkbox"
                className="form-check-input"
                onClick={() => {
                  props.handleCheck(props.title);
                }}
              />
              <span><b>{props.title}</b> {props.status===true ? <b> (It's done) </b>  : ""}</span>
            </div>
            <div className="col-sm" id="">
              <div className="btn-list">
                <button
                  className="btn btn-outline-danger btn-sm "
                  onClick={() => {
                    props.handleDelete(props.title);
                  }}
                >
                  <i className="fa-solid fa-delete-left"></i>
                </button>
                <button className="btn btn-outline-warning btn-sm ">
                  <i class="fa-solid fa-paperclip"></i>
                </button>
                <button className="btn btn-outline-info btn-sm ">
                  <i className="fa-regular fa-file-lines"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
