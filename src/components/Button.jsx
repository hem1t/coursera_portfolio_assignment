import "./Button.css";
export const Button = ({ onclick, text, boxStyle=null, textStyle=null }) => {
  return (
    <div className="button" onClick={onclick} style={boxStyle}>
        <pre className="button-text" style={textStyle}>{text}</pre>
    </div>
  )
}
