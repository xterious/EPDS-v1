const Header = () => {
  return (
    <>
      <div className='w-full bg-slate-800 flex items-center justify-between px-3 py-1'>
        <p className='text-slate-50 text-[9px]'>
          Note : This is for demonstrating purpose only
        </p>
        <ul className='flex space-x-5 text-xs lg:text-sm lg:w-[20%] text-white font-medium'>
          <li>English</li>
          <li>தமிழ்</li>
          <li>+91 XXXXX XXXXX</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
