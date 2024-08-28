import "./Button.css";
export const Button = ({
  onclick,
  text,
  size = "45px",
  height = null,
  width = null,
}) => {
  return (
    <div
      className="button"
      style={{
        height: height,
        width: width,
      }}
      onClick={onclick}
    >
      <pre
        className="button-text"
        style={{
          fontSize: size,
        }}
      >
        {text}
      </pre>
    </div>
  );
};
