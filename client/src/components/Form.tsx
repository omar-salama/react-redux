import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { hideModal, addNewUser } from "../actions";
import { ChangeEvent, FormEventHandler, useState } from "react";
import { IRootState } from "../store";
import { IModal, IUser } from "../types";
const Form = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector<IRootState, IModal>((state) => state.modal);

  type UserState = Omit<IUser, "_id">; 

  const [user, setUser] = useState<UserState>({
    name: "",
    email: "",
    avatar: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const key = e.currentTarget.name;
    let state = { ...user };
    if (key !== "avatar") state[key as keyof UserState] = e.target.value;
    else if (e.target.files) state[key as keyof UserState] = e.target.files[0] as string & File;
    setUser(state);
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
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
      isOpen={isOpen}
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
        <i className="bi bi-x-lg"></i>
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
