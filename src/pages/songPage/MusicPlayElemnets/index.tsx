// import React,{ useState } from 'react';
import { IoPlayCircleOutline } from "react-icons/io5";
// import { IoPauseCircleOutline } from "react-icons/io5";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { RiRestartLine } from "react-icons/ri";
import { HeartIconBtn } from "../../../common/icons/heartIconBtn";

export function MusicPlayElements() {

  return (
    <section>
      <div className="mt-12 ml-20">
        <button className="ml-9 text-3xl text-white hover:text-green-500">
          <RiRestartLine />
        </button>
        <button className="ml-10 text-3xl text-white hover:text-green-500">
          <IoPlaySkipBackSharp />
        </button>
        <button className="ml-10 text-3xl text-white hover:text-green-500">
          <IoPlayCircleOutline />
        </button>
        <button className="ml-10 text-3xl text-white hover:text-green-500">
          <IoPlaySkipForward />
        </button>
        {/* <HeartIconBtn /> */}
      </div>
    </section>
  );
}