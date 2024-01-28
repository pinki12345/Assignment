import React, { useState, useEffect } from "react";
import img1 from "../assets/Images/shopping1.jpg";
import img2 from "../assets/Images/shopping2.jpg";

const Home = () => {
  return (
    <React.Fragment>
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between mt-16 gap-20">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent  items-center justify-between gap-8 text-white">
          <div>
            <h1 className="text-[1.2rem] font-semibold leading-[2.375rem] text-richblack-5">
              <p>“Ever notice there are no clocks in stores?</p>
              <p>It’s like casinos;</p>
              <p>they don’t want you to know how</p>
              <p> much time you’ve spent dropping your quarters.”</p>
            </h1>
          </div>
          <img src={img1} width={300} height={225} loading="lazy" />
        </div>
        <div className="relative mx-auto flex w-11/12 max-w-maxContent  items-center justify-between gap-8 text-white">
          <img src={img2} width={300} height={225} loading="lazy" />
          <div>
            <h1 className="text-[1.2rem] font-semibold leading-[2.375rem] text-richblack-5">
              <p>
                The thing about shopping is that you never know exactly what you
                are going to find.
              </p>
              <p>
                {" "}
                A shopping experience can be filled with joyous surprises or
                unexpected pitfalls.
              </p>
              <p>No matter how hard you try,</p>
              <p>
                you cannot plan every detail of a shopping trip, and you never
                know exactly how it will end up.
              </p>
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
