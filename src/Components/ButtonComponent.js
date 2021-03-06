const ButtonComponent = (props) => {
  const clicked = (event) => {
    console.log("clicked");
  };
  return (
    <div className="mt-3 text-right">
      <button type="submit" className="btn btn-outline-primary" onClick={clicked}>
        {props.children}
      </button>
    </div>
  );
};

export default ButtonComponent;
