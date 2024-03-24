import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

interface categories {
  adminCategory: any;
  id: number;
  name: string;
  src: string;
}
function AdminManageCategoriesManagement() {
  const updateId = useSelector((state: any) => state.adminCategory.adminId);

  const [itemsData, setItemsData] = useState([]);
  const [newName, setNewName] = useState("");

  const handleChange = (event: any) => {
    setNewName(event.target.value);
  };

  //fetch data by id
  useEffect(() => {
    axios
      .get(`/api/adminCategoryDetail/${updateId}`)
      .then((response) => {
        setItemsData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [updateId]);

  //change the name and rerendering
  const submitStatus = () => {
    const requestData = {
      newName: newName,
    };
    axios
      .post(`/api/updateCategoryName/${updateId}`, requestData)
      .then((updateResponse) => {
        if (updateResponse.status === 200) {
          alert("Category Name Updated");
          window.location.reload();
        }
      })
      .catch((statusError) => {
        console.info(statusError);
      });
  };

  return (
    <div>
      <div className="w-[309px] h-full p-[10px] mr-[16px]mt-[20px] bg-white">
        <div className="w-full h-[629px] ">
          <div className="text-xl mt-[20px]">Manage Category</div>

          {itemsData.map((value: categories) => (
            <>
              <div className="w-[289px] mt-[40px] overflow-y-visible overflow-x-hidden flex-col items-center justify-center">
                <div className="flex flex-col items-center mb-[10px]">
                  <div className="w-[110px] h-[100px] flex-col rounded-lg border-4 border-[#003049] flex items-center justify-center">
                    <img src={value.src} className="h-1/3" alt="Category Image" />
                    <div className="text-lg">{value.name}</div>
                  </div>
                </div>
              </div>
            </>
          ))}

          <div className=" w-[289px] h-full mt-[40px] overflow-y-visible overflow-x-hidden">
            <input
              placeholder="name"
              onChange={handleChange}
              className="w-full h-[50px] bg-gray-200 mb-[30px] rounded-lg"
            ></input>
          </div>
        </div>
        <div className=" w-full h-[48px] bottom-0 flex justify-center items-center">
          <button
            onClick={submitStatus}
            className="w-full h-full bg-[#003049] z-10 flex justify-between items-center rounded-lg px-6 hover:bg-[#003049] hover:text-white text-gray-400"
          >
            <p>Updated</p>
            <p>{">"} </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminManageCategoriesManagement;
