import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent, FormEventHandler, useEffect, useState } from 'react';
import { IUser } from '../../types';
import { RootState } from '../../store';
import { hideModal } from '../modals/modalSlice';
import { useAddUserMutation } from './usersApi';
import { Spinner } from 'reactstrap';
const Form = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.modal);

  type UserState = Omit<IUser, '_id'>;

  const [addUser, { isLoading, isSuccess }] = useAddUserMutation();

  const initValues = {
    name: '',
    email: '',
    avatar: '',
  };

  const [user, setUser] = useState<UserState>(initValues);

  useEffect(() => {
    if (isSuccess) {
      dispatch(hideModal());
      setUser(initValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isSuccess]);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const key = target.name;
    let state = { ...user };
    if (key !== 'avatar') state[key as keyof UserState] = target.value;
    else if (target.files)
      state[key as keyof UserState] = target.files[0] as string & File;
    setUser(state);
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('avatar', user.avatar);
    formData.append('name', user.name);
    formData.append('email', user.email);
    addUser(formData);
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
        <button
          className={`btn btn-success w-25 ${isLoading && 'disabled'}`}
          type="submit"
        >
          {isLoading ? <Spinner size="sm" /> : 'Submit'}
        </button>
      </form>
    </Modal>
  );
};
export default Form;
