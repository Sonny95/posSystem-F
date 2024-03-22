import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function AdminManageCategoriesManagement() {
  const updateId = useSelector((state: any) => state.admin.adminId);

  const [itemsData, setItemsData] = useState([]);

  //fetching data by redux
  // useEffect(() => {
  //   axios
  //     .get(`/api/adminManageCategory/${updateId}`)
  //     .then((response) => {
  //       setItemsData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [updateId]);

  return (
    <div>
      <div className="w-[309px] h-full p-[10px] mr-[16px]mt-[20px]  bg-white">
        <div className="text-xl mt-[20px]">Manage Category</div>
        {itemsData?.map((value: any) => (
          <>
            <div className=" w-[289px] h-[559px] mt-[40px] overflow-y-visible overflow-x-hidden">
              <input
                placeholder="src"
                className="w-full h-[50px] bg-gray-200 mb-[30px] rounded-lg"
              ></input>
              <input
                placeholder="name"
                className="w-full h-[50px] bg-gray-200 mb-[30px] rounded-lg"
              ></input>
            </div>
            <div className=" w-[289px] h-[48px] bottom-0">
              <button className="w-full h-full bg-gray-100 z-10 flex justify-between items-center rounded-lg px-6 hover:bg-[#003049] hover:text-white text-gray-400">
                <p>Updated</p>
                <p>{">"} </p>
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default AdminManageCategoriesManagement;
