import Download from "@/components/home/Download";
import Locations from "@/components/home/Locations";
import UserDetails from "@/components/home/UserDetails";

const Home = () => {
  return (
    <div className='p-4'>
      <div className='flex flex-col lg:flex-row items-center gap-8'>
        <Locations />
        <UserDetails />
      </div>
    </div>
  );
};

export default Home;
