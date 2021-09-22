import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import Card from "./Card";
import ModalComponent from "./ModalComponent";

const FormComponent = (props) => {
  // catching the data entered by the user:
  const [error, setError] = useState();
  const [oldName, newName] = useState("");
  const nameEnteredHandler = (event) => {
    newName(event.target.value);
  };
  const [oldAge, newAge] = useState("");
  const ageEnteredHandler = (e) => {
    newAge(e.target.value);
  };
  const formSubmission = (event) => {
    event.preventDefault();

    // basic validations:
    if (oldName.trim().length === 0 || oldAge.trim().length === 0) {
      //alert("fill the fields");
      setError({
        title: "Invalid Input",
        message: "Please enter valid name and age 🤦🏼‍♂️🤦🏼‍♂️🤦🏼‍♂️",
      });
      return;
    }
    // Note: value given in the input box is a string so we need to consider the string value hence added plus infront of the oldAge variable.
    if (+oldAge < 1) {
      //alert("invalid age");
      setError({
        title: "Invalid Input",
        message: "Please enter valid age (should be > 0)🤦🏼‍♂️🤦🏼‍♂️🤦🏼‍♂️ ",
      });
      return;
    }

    // logging the entered values tha fetched in above
    console.log(oldName, oldAge);
    // now using this values we can not only log the data of the user but also we can we can enter this data in to the array and we display them in list. this can be achieved by the technique lifting the state up. This means forwording the date to app.js component from this component, this is a child to parent communication and hence we created a function in the parent component and called it inside the child component as that is shown below.

    props.onAddUser(oldName, oldAge);

    // clearing the input values after clicking submit
    newName("");
    newAge("");
  };

  // now we need to clear our error state, as if have an error it is truthy value so to get rid of that we need to make it a falsy stmt.
  const errorHandler = (props) => {
    setError(null);
  };
  return (
    <div>
      {/* conditionally show the error in jsx code */}
      {error && (
        <ModalComponent
          title={error.title}
          content={error.message}
          on_toCloseModal={errorHandler}
        ></ModalComponent>
      )}
      <Card>
        <form className="p-3" onSubmit={formSubmission}>
          <div className="container">
            <div className="row mt-3">
              <div className="col-sm-6">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    className="form-control"
                    type="text"
                    onChange={nameEnteredHandler}
                    value={oldName}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label className="form-label">Age(years)</label>
                  <input
                    className="form-control"
                    type="number"
                    min="0"
                    max="100"
                    onChange={ageEnteredHandler}
                    value={oldAge}
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <ButtonComponent>Submit</ButtonComponent>
              </div>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default FormComponent;
