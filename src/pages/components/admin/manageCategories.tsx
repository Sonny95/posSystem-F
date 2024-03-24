import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateId } from "../../../modules/adminCategorySlice";

interface categories {
  id: number;
  name: string;
  src: string;
}

function ManageCategories() {
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);
  const [categoryBtn, setCategoryBtn] = useState("");

  useEffect(() => {
    axios
      .get("/api/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleClick = (value: { id: any } | undefined) => {
    dispatch(updateId(value?.id));
    console.log(value?.id, "dispatch");
  };

  return (
    <div>
      <div className="w-full flex items-center justify-center my-[30px] flex-col">
        {categories.map((data: categories) => (
          <div
            onClick={() => {
              handleClick(data);
            }}
            className={`w-[110px] bg-white h-[90px]  rounded-lg m-2 flex-col flex items-center justify-around cursor-pointer hover:bg-[#003049] hover:text-white 
          ${categoryBtn === data.name ? "bg-[#003049] text-white" : "bg-white"}
          `}
          >
            <img src={data.src} className="h-1/3" />
            <div className="text-lg">{data.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageCategories;
