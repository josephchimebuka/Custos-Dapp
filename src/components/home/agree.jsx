"use client";

import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import ConnectButtoncomponent from "../connect";
import Footer from "../footer";
import Shape from "./eclipse";
import ShowLaunchDapps from "../showLaunchDapps";
// import "./style.css";

import { TextFade } from "./textFade";
import FadeInSection from "../fadeInSection";
// const printAgreement = (agreement) => {
//   const printContent = `
//     <h1>${agreement.title}</h1>
//     <p>Second Party Address: ${agreement.secondPartyAddress}</p>
//     <p>Created by  : ${agreement.creatorName}</p>
//     <p>${agreement.content}</p>
//   `;
//   const printWindow = window.open('', '', 'width=800,height=600');
//   printWindow.document.write(printContent);
//   printWindow.document.close();
//   printWindow.print();
// };

const Agree = () => {
  const [showLaunchDapps, setShowLaunchDapps] = useState(false);

  const toggleLaunchDapps = () => {
    setShowLaunchDapps(!showLaunchDapps);
  };
  const closeModal = () => {
    setShowLaunchDapps(false);
  };
  return (
    <main className="">
      <FadeInSection>
        <div className="flex mt-8 items-center  justify-center bg-gradient-to-r from-[#EAF9FF] to-[#8E9A9A] bg-clip-text text-transparent">
          <div className="text-center p-8 bg-transparent rounded shadow-lg text-white">
            <p className="text-[1.5em] mb-4">Agreement documentation</p>

            <p className="text-[1em] mb-4 z-40 ">
              Create new legal agreements by providing the agreement content,
              the <br />
              address of the second party, and details about the first party.
            </p>

            {/* <TextFade
            direction="up"
            className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0"
          >
            <p className="text-[1em] mb-4">
              Create new legal agreements by providing the agreement content,
              the <br />
              address of the second party, and details about the first party.
            </p>
          </TextFade> */}
          </div>
        </div>

        <div className="flex justify-center items-center  -mt-10">
          <div className="w-full max-w-4xl p-4">
            <a href="/agreement">
              <Image
                src="/hero.png"
                alt="Card Image"
                width={1000}
                height={800}
                className="w-full h-auto"
              />
            </a>
          </div>
        </div>
      </FadeInSection>

      <div className="justify-center items-center flex mb-[15%]">
        <div onClick={toggleLaunchDapps} href="/agreement">
          <div className="launch-pad-button-container">
            <img src="./launchPadButton.png" alt="Zoom Image" />
          </div>
          {/* <button className="relative max-w-sm br text-white p-3 shadow-lg transform hover:scale-105 transition-transform duration-300 border-gradient bg-opacity-50 mb-5 backdrop-filter backdrop-blur-lg flex items-center justify-center overflow-clip">
            <span className="flex items-center">Launch Dapp</span>
            <svg
              className="ml-2 w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              ></path>
            </svg>
          </button> */}
        </div>
      </div>
      {showLaunchDapps && <ShowLaunchDapps closeModal={closeModal} />}
      <div className="w-full">
        <Shape />
      </div>
      <FadeInSection>
        <div className="w-full mt-[20%]  mx-auto flex justify-center transform hover:scale-105 transition-transform duration-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8  w-[80%]">
            <div className=" text-[2em] whitespace-nowrap mb-2 sm:mb-0 bg-gradient-to-r from-[#0094FF] to-[#A02294] bg-clip-text text-transparent ">
              <p>We paid the gas fee.</p>
            </div>
            <div className="w-fit text-[1em] text-start items-end justify-end bg-gradient-to-r from-[#EAF9FF] to-[#8E9A9A] bg-clip-text text-transparent">
              <p className="">
                Custos lets you record your videos safely on the blockchain
                without paying a gas <br /> fee until you need your video back.{" "}
                <br /> Whether its a business contract, a rental agreement, or a
                partnership <br /> arrangement, Custos ensures that agreements
                are securely stored, easily <br /> accessible, and tamper-proof,
                fostering trust and accountability among parties.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="flex items-center justify-center bg-gradient-to-r from-[#EAF9FF] to-[#8E9A9A] bg-clip-text text-transparent">
          <div className="text-center p-8 bg-transparent rounded shadow-lg my-20">
            <p className=" md:text-[50px] text-[30px] mb-4">Crime recorder</p>
            <p className="text-[20px]  mb-4">
              The Crime Recording App transforms the way individuals contribute{" "}
              <br />
              to societal safety by providing an advanced platform for
              documenting <br />
              and sharing crime events securely and transparently.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center  -mt-10">
          <div className="w-full max-w-4xl p-4">
            <a href="/crimerecorder">
              <Image
                src="/card.png"
                alt="Card Image"
                width={1000}
                height={800}
                className="w-full h-auto"
              />
            </a>
          </div>
        </div>
        <div className="justify-center items-center flex mb-[15%]">
          <div onClick={toggleLaunchDapps}>
            <div className="launch-pad-button-container">
              <img src="./launchPadButton.png" alt="Zoom Image" />
            </div>
            {/* <button className="relative max-w-sm br text-white p-3 shadow-lg transform hover:scale-105 transition-transform duration-300 border-gradient bg-opacity-50 mb-5 backdrop-filter backdrop-blur-lg flex items-center justify-center overflow-clip">
            <span className="flex items-center">Launch Dapp</span>
            <svg
              className="ml-2 w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              ></path>
            </svg>
          </button> */}
          </div>
        </div>
      </FadeInSection>
      <div className="w-full">
        <Shape />
      </div>
      <FadeInSection>
        {" "}
        <div className="flex items-center mt-[20%] justify-center bg-gradient-to-r from-[#EAF9FF] to-[#8E9A9A] bg-clip-text text-transparent">
          <div className="text-center p-8 bg-transparent rounded shadow-lg my-10">
            <p className="md:text-[50px] text-[30px] mb-4">Our Pledge</p>
            <p className="text-[20px] mb-4">
              We are dedicated to revolutionizing safety and security through
              innovative protocol <br />
              platforms. Our mission is to provide solutions that empower
              individuals and communities to <br /> effectively address crime
              scene witnessing and streamline agreement systems.
            </p>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#EAF9FF] to-[#8E9A9A] bg-clip-text text-transparent mb-[10rem]">
          <div className="text-center p-8 bg-transparent rounded shadow-lg mt-10">
            <p className="md:text-[50px] text-[30px] mb-2 bg-gradient-to-r from-[#0094FF] to-[#A02294] bg-clip-text text-transparent">
              Make better decision
            </p>
            <p className="text-[20px] mb-4">
              We paid the price to keep your videos and legal agreements safe.
            </p>
          </div>
          <ConnectButtoncomponent />
        </div>
      </FadeInSection>
    </main>
  );
};

export default Agree;
