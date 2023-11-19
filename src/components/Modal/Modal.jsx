import { useDispatch } from 'react-redux';
import css from "./Modal.module.css"
import { closeModal } from '../../redux/cars/modalSlice';
import CrossIcon from "./component/CrossIcon"
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');
const Modal = () => {
  const dispatch = useDispatch();

  const hendleCloseModal = e => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        dispatch(closeModal());
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

  return createPortal(
    <div className={css.Modal_backdrop} onClick={hendleCloseModal}>
      <div className={css.Modal_content}>
        <div className='absolute top-4 right-4'>
          <button
            className="transition-all rounded-md border-solid border-2 border-gray-600 bg-grey-600 py-1 px-1 hover:bg-gray-600 text-black hover:text-white"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            <CrossIcon />
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;