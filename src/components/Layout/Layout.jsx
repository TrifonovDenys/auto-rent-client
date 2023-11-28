import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import PopUp from '../PopUp/PopUp';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <PopUp />
        <div className='w-[1200px] px-2 mx-auto my-0'>
          <Suspense fallback={`loading...`}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Layout;
