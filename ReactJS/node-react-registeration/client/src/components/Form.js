import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { hideModal, addNewUser } from "../actions";
import { useState } from "react";
const Form = () => {
  const { modal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [user, setUser] = useState({ name: "", email: "", avatar: "" });

  const handleChange = (e) => {
    const key = e.currentTarget.name;
    let state = { ...user };
    if (key !== "avatar") state[key] = e.target.value;
    else state[key] = e.target.files[0];
    setUser(state);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(hideModal());
    const formData = new FormData();
    formData.append("avatar", user.avatar);
    formData.append("name", user.name);
    formData.append("email", user.email);
    dispatch(addNewUser(formData));
  };
  return (
    <Modal
      isOpen={modal}
      ariaHideApp={false}
      onRequestClose={() => {
        dispatch(hideModal());
      }}
      className="modalStyle col-11 col-md-6"
    >
      <button
        className="x-btn btn btn-outline-danger"
        onClick={() => dispatch(hideModal())}
      >
        <i class="bi bi-x-lg"></i>
      </button>
      <form method="post" onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
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
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Choose an avatar
          </label>
          <input
            className="form-control"
            name="avatar"
            type="file"
            id="formFile"
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
    </Modal>
  );
};
export default Form;
