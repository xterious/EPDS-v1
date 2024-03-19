import {
  faGasPump,
  faLocationDot,
  faMap,
  faMapLocationDot,
  faScaleBalanced,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Locations = () => {
  return (
    <div className='rounded-lg border lg:w-1/2'>
      <h1 className='bg-green-800 text-white p-2 rounded-t-lg font-semibold text-xl'>
        Public Distribution System Details
      </h1>
      <div className='flex flex-wrap'>
        <Card icon={faLocationDot} name={"districts"} no={39} />
        <Card icon={faMap} name={"taluks"} no={317} />
        <Card icon={faWarehouse} name={"godowns"} no={255} />
        <Card icon={faScaleBalanced} name={"fair price shops"} no={34793} />
        <Card icon={faGasPump} name={"kerosene bunker"} no={289} />
        <Card icon={faMapLocationDot} name={"total locations"} no={35082} />
      </div>
    </div>
  );
};

const Card = ({ no, name, icon }) => {
  return (
    <div className='w-1/3 p-2 flex items-center justify-between text-green-800 border'>
      <div>
        <p className='text-2xl'>{no}</p>
        <p className='capitalize'>{name}</p>
      </div>
      <FontAwesomeIcon className='text-3xl' icon={icon} />
    </div>
  );
};

export default Locations;
