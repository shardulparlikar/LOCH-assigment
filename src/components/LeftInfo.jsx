import React from "react";
import { Bell } from "react-feather";


export default function LeftInfo() {
  return (
    <div className="w-[55%]  my-20">
      <div className="w-[40%] ml-14">
        <a className="font-white">
          <Bell color="white" size={40} />
        </a>
        <h4 className="text-4xl text-white pt-4">
          Get notified when a highly correlated whale makes a move.
        </h4>
        <div className="text-xl text-white pt-4 font-sans">
          Find out when a certain whale move more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </div>
      </div>

      <div className="flex mx-14 mt-16">
        <div className="max-w-[40%]">
          <img
            className="object-contain"
            src="/output-onlinepngtools.png"
            alt="Girl in a jacket"
          />
        </div>

        <div className="text-end pl-8">
          <div className="flex justify-end">
            <img className="object-contain" src="/Vector.png" alt="" />
          </div>
          <h4 className="text-4xl text-white pt-4">
            Watch what the whales are doing
          </h4>
          <p className="text-xl text-white pt-4 font-sans">
            All whales are not equal. Know exactly what the whales impacting
            YOUR portfolio are doing
          </p>
        </div>
      </div>
      <h4 className="text-4xl text-white pt-4 text-end mr-14">Testimonials</h4>

      <hr className="text-[#E5E5E680] mx-14 mt-6" />
    </div>
  );
};
