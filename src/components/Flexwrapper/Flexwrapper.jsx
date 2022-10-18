import "./Flexwrapper.css";

function FlexWrapper(props) {
  return (
    <div>
      <div className="flex">{props.children}</div>
    </div>
  );
}

export default FlexWrapper;