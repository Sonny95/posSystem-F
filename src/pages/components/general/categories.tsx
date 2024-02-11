import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import Link from "next/link";

interface burger {
  id: number;
  name: string;
  src: string;
}

interface categoriesProps {
  categories: burger[];
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Categories({ categories }: categoriesProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="w-[126px] h-full flex flex-col">
      <div className="w-[110px] h-[24px] mt-[20px] flex ml-4 cursor-pointer">
        <button
          onClick={openModal}
          className="w-[250px] h-[35px] bg-yellow-500  hover:font-bold text-white rounded-lg px-6 "
        >
          {" "}
          Admin
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="w-[400px] h-[300px] bg-gray-200 flex flex-col items-center justify-center rounded-lg">
            <img src="logo.png" className="mb-[30px]" />

            <Link href={"/login"}>
              <button className="w-[250px] h-[50px] bg-[#003049] hover:font-bold text-white rounded-lg px-6 mb-[30px]">
                Log In
              </button>
            </Link>
            <Link href={"/signup"}>
              <button className="w-[250px] h-[50px] bg-[#003049]  hover:font-bold text-white rounded-lg px-6 ">
                Sign Up
              </button>
            </Link>
          </div>
        </Modal>
      </div>

      {/* Logo container */}
      <div className="w-[102px] h-[102px] mt-[10px] ml-4 flex flex-col items-center justify-center">
        <img
          src="/logo.png"
          className="w-[91px] h-[51px] flex flex-col items-center justify-cente"
        />
      </div>
      {/* categories container */}
      <div className="w-[110px] h-full  mt-[10px] ml-4 ">
        {categories?.map((values) => (
          <div
            key={values.id}
            className="rounded-lg cursor-pointer w-[110px] h-[95px] bg-white flex flex-col items-center justify-center my-[20px] hover:bg-[#003049] hover:text-white text-black"
          >
            <div className="w-[110px] h-[65px] flex flex-col items-center justify-center">
              <img src={values.src} className="w-[30px] h-[30px]" />
              <p>{values.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
