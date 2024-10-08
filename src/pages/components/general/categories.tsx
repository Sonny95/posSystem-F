import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useQuery } from "react-query";
import axios from "axios";
import AdminButton from "./adminButton";

interface categories {
  id: number;
  name: string;
  src: string;
}

interface MenuItem {
  id: number;
  name: string;
  price: number;
  src: string;
  foodType: string;
}

//send the selected category
function Categories({
  foods,
  setFilteredFoods,
}: {
  foods?: MenuItem[];
  setFilteredFoods?: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [hoveredCategory, setHoveredCategory] = useState("");
  //useQuery
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

  //receive a onclick event parameter / optinal chaning for use a categories component to another component
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    // setHoveredCategory(category);
    const filteredFoods = foods?.filter((food) => food.foodType === category);
    // updating setfilteredFood when not undefined
    if (filteredFoods !== undefined) {
      setFilteredFoods?.(filteredFoods);
    }
  };

  const handleHover = (para: any) => {
    setHoveredCategory(para);
  };

  return (
    <div className="w-[126px] h-full flex flex-col">
      <AdminButton />
      {/* Logo container */}

      <div className="w-[102px] h-[102px] mt-[10px] ml-4 flex flex-col items-center justify-center">
        <Link href={"/"}>
          <img
            src="/logo.png"
            className="ml-2 mt-4 w-[91px] h-[51px] flex flex-col items-center justify-cente"
          />
        </Link>
      </div>

      {/* categories container */}
      <div className="w-[110px] h-full  mt-[10px] ml-4">
        {isLoading
          ? // Skeleton
            Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="rounded-lg cursor-pointer w-[110px] h-[95px] bg-white flex flex-col items-center justify-center my-[20px] hover:bg-[#febb10] hover:text-white text-black"
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
                onClick={() => {
                  handleCategoryClick(values.name);
                  handleHover(values.name);
                }}
                key={values.id}
                className={`rounded-lg cursor-pointer w-[110px] h-[95px]  flex flex-col
                items-center justify-center my-[20px] hover:bg-[#db0006] hover:text-white 
                ${hoveredCategory === values.name ? "bg-[#db0006] text-white" : "bg-white"}
                `}
              >
                <div className="w-[110px] h-[65px] flex flex-col items-center justify-center">
                  <img src={values.src} className="w-[30px] h-[30px] " />
                  <p>{values.name}</p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Categories;
