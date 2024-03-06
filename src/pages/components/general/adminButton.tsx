import React, { useState } from "react";
import Modal from "react-modal";
import Link from "next/link";

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

function AdminButton() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div className="w-[110px] h-[24px] mt-[10px] flex ml-4 cursor-pointer">
        <button
          onClick={openModal}
          className="w-[250px] h-[35px] bg-white  hover:font-bold rounded-lg px-6 cursor-pointer hover:bg-[#003049] hover:text-white text-black "
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

            {/* TODO */}
            <Link href={"/login"}>
              <button
                // onClick={() => signIn("credentials")}
                className="w-[250px] h-[50px] bg-[#003049] hover:font-bold text-white rounded-lg px-6 mb-[30px]"
              >
                Log In
              </button>
            </Link>
            <Link href={"/signup"}>
              <button className="w-[250px] h-[50px] bg-[#003049]  hover:font-bold text-white rounded-lg px-6 ">
                Signs Up
              </button>
            </Link>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default AdminButton;
