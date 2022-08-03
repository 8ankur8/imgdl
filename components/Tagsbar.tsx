import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';

// import SuggestedAccounts from './SuggestedAccounts';
import Discover from './Discover';
// import Footer from './Footer';
// import useAuthStore from '../store/authStore';

const Tagsbar: NextPage = () => {
const [showSidebar, setShowSidebar] = useState<Boolean>(true);
//   const { pathname } = useRouter();
//   const { fetchAllUsers, allUsers }: any = useAuthStore();

  return (
    <div>
        <div className='bg-[#031D30] w-full justify-between items-center border-b-2 border-gray-200 py-2 px-20 '>
          <div className='flex flex-auto text-s font-regular text-gray-300 '>
            <div className='flex-auto py-4 px-4'>DISCOVER TAGS</div>
            {/* <div className='cursor-pointer hover:text-gray-100 py-4 px-4'>MORE TAGS+</div> */}
          </div>
          <Discover />
          {/*<SuggestedAccounts
            fetchAllUsers={fetchAllUsers}
            allUsers={allUsers}
          />
          <Footer /> */}
        </div>      
    </div>
  );
};

export default Tagsbar;