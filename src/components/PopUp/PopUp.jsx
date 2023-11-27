import { Toaster } from 'react-hot-toast';

const PopUp = () => {
  return (
    <Toaster
      position='top-center'
      toastOptions={{
        duration: 2000,
      }}
    />
  );
};

export default PopUp;
