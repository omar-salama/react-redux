import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { hideModal, addNewUser } from "../actions";
import { useState } from "react";
const Form = () => {
  const { modal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [user, setUser] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const key = e.currentTarget.name;
    let state = { ...user };
    state[key] = e.target.value;
    setUser(state);
  };
  const handleSubmit = () => {
    dispatch(hideModal());
    dispatch(addNewUser(user));
  };
  return (
    <ReactModal
      isOpen={modal}
      style={{
        content: {
          width: "50%",
          top: "25%",
          left: "25%",
          right: "auto",
          bottom: "auto",
        },
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
    </ReactModal>
  );
};
export default Form;
