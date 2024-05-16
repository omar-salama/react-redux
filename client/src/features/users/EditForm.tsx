import { ChangeEvent, FormEventHandler, useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { useUpdateUserMutation } from './usersApi';
import { IUser } from '../../types';
import { useModal } from '../../hooks/useModal';

const Form = ({
  userInfo,
  isDisabled,
}: {
  userInfo: IUser;
  isDisabled: boolean;
}) => {
  const [isOpen, setIsOpen] = useModal(false);

  type UserState = Omit<IUser, '_id'>;
  const [updateUser, { isSuccess, isLoading }] = useUpdateUserMutation();

  const [user, setUser] = useState<UserState>(userInfo);

  useEffect(() => {
    if (isSuccess) {
      setIsOpen(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const key = e.currentTarget.name;
    let state = { ...user };
    if (key !== 'avatar') state[key as keyof UserState] = e.target.value;
    else if (e.target.files)
      state[key as keyof UserState] = e.target.files[0] as string & File;
    setUser(state);
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('avatar', user.avatar);
    formData.append('name', user.name);
    formData.append('email', user.email);
    updateUser({ _id: userInfo._id, body: formData });
  };
  return (
    <>
      <button
        className="btn btn-primary me-1"
        onClick={() => {
          setIsOpen(true);
        }}
        disabled={isDisabled}
      >
        Edit
      </button>
      <ReactModal
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        className="modalStyle col-11 col-md-6"
      >
        <button
          className="x-btn btn btn-outline-danger"
          onClick={() => setIsOpen(false)}
        >
          <i className="bi bi-x-lg"></i>
        </button>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 mt-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={user.name}
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
              value={user.email}
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
          <button
            className="btn btn-success"
            disabled={isLoading}
            type="submit"
          >
            Update
          </button>
        </form>
      </ReactModal>
    </>
  );
};
export default Form;
