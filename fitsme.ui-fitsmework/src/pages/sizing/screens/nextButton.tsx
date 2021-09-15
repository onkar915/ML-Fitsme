import React, {useState} from 'react';
import {FaAngleRight} from 'react-icons/fa';
const NextButton = (props: any) => {
  return (
    <>
      <button className="btn btn-round btnsoft  btn-position" type="button" onClick={props._next}>
        <FaAngleRight />
      </button>
    </>
  );
};

export default NextButton;
