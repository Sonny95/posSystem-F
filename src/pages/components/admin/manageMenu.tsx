import React, { useEffect, useState } from "react";
import axios from "axios";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  src: string;
}

function ManageMenu() {
  const [menu, setMenu] = useState([]);
  const [menuBtn, setMenuBtn] = useState("");

  useEffect(() => {
    axios
      .get("/api/foods")
      .then((response) => {
        setMenu(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="w-full flex flex-wrap my-[30px]">
        {menu.map((data: MenuItem) => (
          <div
            className={`w-[148px] bg-white h-[250px]  rounded-lg m-2 flex-col flex items-center justify-around cursor-pointer hover:bg-[#003049] hover:text-white 
          ${menuBtn === data.name ? "bg-[#003049] text-white" : "bg-white"}
          `}
          >
            <div className="w-[122px] h-[122px] my-0 mx-auto mt-4 flex items-center justify-center">
              <img src={data.src} className="w-[105.92px] h-[90px]" />
            </div>
            <p className="text-center my-2">${data.price}</p>
            <p className="font-bold text-center text-m">{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageMenu;
