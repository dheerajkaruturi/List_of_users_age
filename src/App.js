import React, { useState } from "react";
import FormComponent from "./Components/FormComponent";
import ListComponent from "./Components/ListComponent";

function App() {
  const [usersList, setusersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    // when the state updating function depends on the old state of a form we need do in this way shown below:
    setusersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <FormComponent onAddUser={addUserHandler}></FormComponent>
      <ListComponent users={usersList} />
    </div>
  );
}

export default App;
