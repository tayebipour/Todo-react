// server

export function get_todos_List() {
   return fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
      return data;
      })
  }