import { useState } from "react";

import MENU from "./components/Title.jsx";
import Todolist from "./components/TodoList.jsx";
import Action from "./components/Actions.jsx";
import ImageList, { array_imgPath } from "./components/ImagList.jsx";

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
 
const [List, setList]=useState(todos);

  return (
    <div>
      <MENU />
      <br />
      <section id="body-section">
        <div className="container">
          <div className="row">
            <div className="col-sm" id="left-wall">
              <Action handelSubmit={(value)=>{
                setList([
                  ...List,
                  {
                    title:value,
                    status:false,
                  },
                ]);
              }}/>

              {List.map((item) => {
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
