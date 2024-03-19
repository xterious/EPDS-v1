import Navbar from "@/components/Navbar";
import Download from "@/components/home/Download";
import AuthForm from "@/components/home/Form";
import HelpInfo from "@/components/home/HelpInfo";
import Hero from "@/components/home/Hero";
import Locations from "@/components/home/Locations";
import UserDetails from "@/components/home/UserDetails";

const Home = () => {
  return (
    <div className='space-y-4'>
      <Navbar />
      <div className='p-4 space-y-4'>
        <Hero />
        <div className='flex flex-col lg:flex-row items-center gap-8'>
          <Locations />
          <UserDetails />
        </div>
        <div className='flex flex-col lg:flex-row justify-center gap-4 items-center w-full'>
          <HelpInfo
            title={"Call Helpline - Tollfree"}
            phone={"1967 (or) 1800-425-5901"}
          />
          <AuthForm />
          <HelpInfo
            title={"Call Helpline - Tollfree"}
            phone={"1967 (or) 1800-425-5901"}
          />
        </div>
      </div>
      <Download />
    </div>
  );
};

export default Home;
