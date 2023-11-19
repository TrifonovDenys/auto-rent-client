import { useDispatch } from 'react-redux';
import css from "./Hi.module.css"
import { closeModal } from '../../redux/cars/modalSlice';
import CrossIcon from "./component/CrossIcon"

const Modal = () => {
  const dispatch = useDispatch();

  const hendleCloseModal = e => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
    }
  };

  return(
    <div className={css.Modal_backdrop} onClick={hendleCloseModal} style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.5)",
    }}>
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
    </div>
  );
};

export default Modal;