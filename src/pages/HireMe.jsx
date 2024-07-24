import React from "react";
import "./Hire.css";

const SubmitButton = () => <div className="hire-submit-button">SUBMIT</div>;

const HireMe = () => {
  return (
    <section className="hire-page-root">
      <div className="hire-page-upper">
        <h1 className="hire-me-head">HireMe</h1>
        <input
          className="input-round hire-input-text-style email-input"
          type="text"
          placeholder="Email"
          required
        />
        <textarea
          className="input-round hire-input-text-style brief-input"
          placeholder="Idea in brief"
          maxLength={100}
          spellCheck
          required
        />
      </div>
      <SubmitButton />
    </section>
  );
};

export default HireMe;
