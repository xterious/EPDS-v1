import {
  faAddressCard,
  faFingerprint,
  faLocationDot,
  faMap,
  faMobileScreenButton,
  faScaleBalanced,
  faUserGroup,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const UserDetails = () => {
  return (
    <div className='rounded-lg border lg:w-1/2'>
      <h1 className='bg-yellow-600 text-white p-2 rounded-t-lg font-semibold text-xl'>
        Family Card Details
      </h1>
      <div className='flex flex-wrap'>
        <Card icon={faAddressCard} name={"family cards"} no={22419976} />
        <Card icon={faUserGroup} name={"beneficiaries"} no={70083901} />
        <Card icon={faFingerprint} name={"aadhar regd."} no={69682440} />
        <Card icon={faMobileScreenButton} name={"mobile regd."} no={22415693} />
      </div>
    </div>
  );
};

const Card = ({ no, name, icon }) => {
  return (
    <div className='w-1/2 p-2 flex items-center justify-between text-yellow-700 border'>
      <div>
        <p className='text-2xl'>{no}</p>
        <p className='capitalize'>{name}</p>
      </div>
      <FontAwesomeIcon className='text-3xl' icon={icon} />
    </div>
  );
};

export default UserDetails;
