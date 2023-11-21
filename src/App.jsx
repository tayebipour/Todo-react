import { useEffect, useState } from "react";
import { Fragment } from "react";

import MENU from "./components/Title.jsx";
import Todolist from "./components/TodoList.jsx";
import Action from "./components/Actions.jsx";
import ImageList, { array_imgPath } from "./components/ImagList.jsx";
import {get_todos_List} from "./api/todos.js";

export function App() {
  const [List, setList] = useState([]);
  const [currentFilter, setcurrentFilter] = useState(
    "Status: Open this select menu"
  );

  const [loading,setloading] =useState(false);
  useEffect(()=>{
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 6000);
  },[])


  const handel = (text) => {
    const todo = {
      title: text,
      status: false,
    };
    const nextList = [...List, todo];
    setList(nextList);
  };
  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(List));
  }, [handel]);

  const toggleStatus = (title) => {
    const nextList = List.map((item) => {
      if (item.title === title) {
        return {
          title: item.title,
          status: !item.status,
        };
      }
      return item;
    });
    console.log("toggleStatus", List, nextList);
    setList(nextList);
  };

  const filteredList = List.filter((item) => {
    if (currentFilter === "done") {
      return item.status === true;
    } else if (currentFilter === "todo") {
      return item.status === false;
    } else if (
      currentFilter === "all" ||
      currentFilter === "Status: Open this select menu"
    ) {
      return true;
    }
  });

  useEffect(() => {
    myStorage = JSON.parse(localStorage.getItem("key")) || [];
    setList(myStorage);
  }, []);

  const Delete = (title) => {
    const nextList = List.filter((item) => {
      if (item.title === title) {
        return false;
      } else {
        return true;
      }
    });
    setList(nextList);
  };

  const deleteAll = () => {
    const nextList = List.filter((item) => {
      if (item.status === true) {
        return false;
      } else {
        return true;
      }
    });
    setList(nextList);
  };

 
useEffect(()=>{
  get_todos_List().then((data)=>{
    setList(data);
  });
},[])
 

  return (
    <Fragment>
      <MENU />
      <br />
      <section id="body-section">
        <div className="container">
          <div className="row">
            <div className="col-sm" id="left-wall">
              <Action
                handleSubmit={handel}
                currentFilter={currentFilter}
                setcurrentFilter={setcurrentFilter}
                handleDelAll={deleteAll}
                count={List.length}
              />

              {loading ? <div className="loading">Loading</div> : (
              filteredList.map((item) => {
                return (
                  
                  <Todolist
                    title={item.title}
                    status={item.status}
                    handleCheck={toggleStatus}
                    handleDelete={Delete}
                  />
                );
              }))}
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
    </Fragment>
  );
}
