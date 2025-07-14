import { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { DateTime } from "./DateTime";

export const TodoPractice = () => {
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  saveToStorage();

  const [timeDate, setTimeDate] = useState(<DateTime />);

  useEffect(() => {
    setInterval(() => {
      setTimeDate(<DateTime />);
    }, 1000);
  }, []);

  const handleFormSubmit = (inputValue, setInputValue) => {
    let found = false;

    const iterateTodo = todo.map((todoObject) => {
      if (todoObject.content === inputValue.toLowerCase()) {
        found = true;
      } else {
        return todoObject;
      }
    });

    if (!found && inputValue != "") {
      setTodo((previousTodo) => [
        ...previousTodo,
        { id: inputValue, content: inputValue, checked: false },
      ]);
    }
    setInputValue("");
    saveToStorage();
  };

  function saveToStorage() {
    localStorage.setItem("todos", JSON.stringify(todo));
  }

  const removeTodo = (Todo) => {
    const removedClickedTodo = todo.filter((todoObject) => {
      return todoObject.content != Todo;
    });
    console.log(removedClickedTodo);
    setTodo(removedClickedTodo);
    saveToStorage();
  };

  const removeAll = () => {
    setTodo([]);
    saveToStorage();
  };

  const updateChecked = (event, todoItem) => {
    let isChecked = event.target.checked;

    const updatedCheckedTodo = todo.map((todoObject) => {
      if (todoObject.content === todoItem) {
        return { ...todoObject, checked: isChecked };
      } else {
        return todoObject;
      }
    });
    setTodo(updatedCheckedTodo);
    saveToStorage();
  };

  return (
    <>
    <div className="container">
      <header>
        {timeDate}
        <h1>Todo</h1>
        <TodoForm handleOnSubmit={handleFormSubmit} />
      </header>

      <section>
        <ul className="todo-container">
          {todo.map((todoObject) => {
            return (
              <TodoList
                key={todoObject.id}
                todoObject={todoObject}
                removeTodo={removeTodo}
                updateChecked={updateChecked}
              />
            );
          })}
        </ul>
        <button onClick={removeAll} className="remove">Remove All</button>
      </section>
      </div>
    </>
  );
};
