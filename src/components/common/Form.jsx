import React from "react";
import Input from "../common/Input";

const Form = ({
  input,
  location,
  showLocationInput,
  setLocation,
  onSubmit,
}) => {
  return (
    <form
      onSubmit={(e) => onSubmit(e)}
      className={!showLocationInput ? "d-none" : " d-block"}
    >
      <Input
        type="text"
        className="form-control"
        placeholder="Enter your location here"
        ref={input}
        value={location}
        onKeyPress={(e) => (e.key === "Enter" ? onSubmit(e) : null)}
        onChange={(e) => setLocation(e.target.value)}
      />
    </form>
  );
};

export default Form;
