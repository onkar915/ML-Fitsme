import React, {useState} from 'react';
import {FaAngleLeft} from 'react-icons/fa';
const PrevButton = (props: any) => {
  return (
    <>
      <button
        className="btn btnsoft  btn-round btn-rightpos "
        type="button"
        onClick={props._prev}
      >
        <FaAngleLeft />
      </button>
    </>
  );
};

export default PrevButton;
