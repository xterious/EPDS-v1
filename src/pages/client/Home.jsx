import Locations from "@/components/home/Locations";
import UserDetails from "@/components/home/UserDetails";

const Home = () => {
  return (
    <div className='p-4'>
      <div className='flex space-x-8'>
        <Locations />
        <UserDetails />
      </div>
    </div>
  );
};

export default Home;
