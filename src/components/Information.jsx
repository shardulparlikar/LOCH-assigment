import React from "react";
import LeftInfo from "./LeftInfo";
import { RightInfo } from "./RightInfo";


export const Information = () => {
  return (
    <>
      <div className="full-body mx-auto w-full h-screen">
        <div className="flex mx-auto">
          {/* left component */}
          <LeftInfo />

          {/* right component */}
          <RightInfo/>
        </div>
      </div>
    </>
  );
};
