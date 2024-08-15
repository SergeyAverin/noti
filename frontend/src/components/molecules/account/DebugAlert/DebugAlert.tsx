import React from "react";

import { useSelector } from "react-redux";

import { Position } from "@atoms/index";


const DEBUG: boolean = process.env.DEBUG == "true";

export const DebugAlert: React.FC = () => {

  return (
    <>
      {DEBUG && (
        <Position position="fixed" bottom="0" right="0">
          
        </Position>
      )}
    </>
  );
};
