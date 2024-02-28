import React, { useEffect, useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useQuery } from "react-query";
import axios from "axios";

interface categories {
  id: number;
  name: string;
  src: string;
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

function Categories() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const openModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  //if data received, false
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    });
  }, []);

  const {
    error: categoriesError,
    data: categoriesData,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => axios.get("/api/categories").then((response) => response.data),
  });

  // checking the cashing data or error
  if (categoriesError) return <div>Error fetching categories</div>;

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

            {/* TODO */}
            <Link href={"/login"}>
              <button
                // onClick={() => signIn("credentials")}
                className="w-[250px] h-[50px] bg-[#003049] hover:font-bold text-white rounded-lg px-6 mb-[30px]"
              >
                Log In
              </button>
            </Link>
            <Link href={"/signsUp"}>
              <button className="w-[250px] h-[50px] bg-[#003049]  hover:font-bold text-white rounded-lg px-6 ">
                Signs Up
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
        {isLoading
          ? // Skeleton
            Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="rounded-lg cursor-pointer w-[110px] h-[95px] bg-white flex flex-col items-center justify-center my-[20px] hover:bg-[#003049] hover:text-white text-black"
              >
                <div className="w-[110px] h-[65px] flex flex-col items-center justify-center">
                  <Skeleton width={30} height={30} />
                  <Skeleton height={20} width="80%" />
                </div>
              </div>
            ))
          : // after loading
            categoriesData?.map((values: categories) => (
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
