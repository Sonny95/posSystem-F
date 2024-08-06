import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  src: string;
}

function AdminManageMenuManagement() {
  const updateId = useSelector((state: any) => state.adminMenu.adminId);

  const [itemsData, setItemsData] = useState([]);

  const [newPrice, setNewPrice] = useState("");
  const [newName, setNewName] = useState("");

  const handlePriceChange = (event: any) => {
    setNewPrice(event.target.value);
  };

  const handleNameChange = (event: any) => {
    setNewName(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`/api/adminMenuDetail/${updateId}`)
      .then((response) => {
        setItemsData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [updateId]);

  const submitStatus = () => {
    const requestData = {
      newPrice: newPrice,
      newName: newName,
    };
    axios
      .post(`/api/updateMenu/${updateId}`, requestData)
      .then((updateResponse) => {
        if (updateResponse.status === 200) {
          alert("Menu is Updated");
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
          <div className="text-xl mt-[20px]">Manage Food Category</div>
          {itemsData.map((value: MenuItem) => (
            <>
              <div className="w-[289px]  mt-[40px] overflow-y-visible overflow-x-hidden flex-col items-center justify-center">
                <div className="flex flex-col items-center mb-[30px] ">
                  <div
                    key={value.id}
                    className="w-[161px] h-[260px] border-4 border-[#003049] m-[10px] cursor-pointer	rounded-lg"
                  >
                    <div className="w-[122px] h-[122px] my-0 mx-auto mt-4 flex items-center justify-center">
                      <img src={value.src} className="w-[105.92px] h-[90px]" />
                    </div>
                    <p className="text-center my-2">${value.price}</p>
                    <p className="font-bold text-center text-m">{value.name}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
          <div className=" w-[289px] h-[559px] mt-[40px] overflow-y-visible overflow-x-hidden">
            <input
              placeholder="Price"
              onChange={handlePriceChange}
              className="w-full h-[50px] bg-gray-200 mb-[30px] rounded-lg"
            ></input>
            <input
              placeholder="Food name"
              onChange={handleNameChange}
              className="w-full h-[50px] bg-gray-200 mb-[30px] rounded-lg"
            ></input>
          </div>
        </div>
        <div className=" w-full h-[48px] bottom-0 flex justify-center items-center">
          <button
            onClick={submitStatus}
            className="w-full h-full bg-[#003049] z-10 flex justify-between items-center rounded-lg px-6 hover:bg-[#db0006] hover:text-white text-gray-400"
          >
            <p>Updated.</p>
            <p>{">"} </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminManageMenuManagement;
