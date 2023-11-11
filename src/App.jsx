import MENU from "./components/Title.jsx";
import Todolist from "./components/TodoList.jsx";
import Action from "./components/Actions.jsx";
import ImageList from "./components/ImagList.jsx";

const array_imgPath = [
  "https://images.pexels.com/photos/4586902/pexels-photo-4586902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7888969/pexels-photo-7888969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/5990265/pexels-photo-5990265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
const todos = [
  {
    title: "item1",
    status: false,
  },
  {
    title: "item2",
    status: true,
  },
  {
    title: "item3",
    status: true,
  },
];

export function App() {
  return (
    <div>
      <MENU />
      <br />
      <section id="body-section">
        <div className="container">
          <div className="row">
            <div className="col-sm" id="left-wall">
              <Action />

              {todos.map((item) => {
                return <Todolist title={item.title} status={item.status} />;
              })}
            </div>

            <div className="col-sm" id="right-wall">
              {array_imgPath.map((pictrue) => {
                return <ImageList imgPath={pictrue} />;
              })}
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <footer className="blockquote-footer">
        Copy & Right <cite title="Source Title">2023</cite>
      </footer>
    </div>
  );
}
