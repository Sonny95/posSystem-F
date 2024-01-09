import React, { useState } from "react";

//메뉴랑 카테고리 컴포넌트에서 인터페이스 []의 뭐가 다르징 결국 [] 받는다는건 가튼거아닉가
interface MenuItem {
  id: number;
  name: string;
  price: number;
  src: string;
}

function Menu({ data, clicked }: { data: MenuItem[]; clicked: (item: MenuItem) => void }) {
  return (
    <div className="w-[545px] h-full mx-[22px] overflow-y-visible overflow-x-hidden">
      {/* search bar */}
      <div className="h-[40px] w-[545px] my-[30px] ">
        <input placeholder="Search" className="w-[525px] h-full rounded-lg p-5 mx-[10px]"></input>{" "}
      </div>
      <div className="w-[545px] h-[644px] flex flex-wrap">
        {data?.map((value) => (
          <div
            onClick={() => {
              clicked(value);
            }}
            className="w-[161px] h-[250px] bg-white m-[10px] cursor-pointer	"
            key={value.id}
          >
            <div className="w-[122px] h-[122px] my-0 mx-auto mt-4 flex items-center justify-center">
              <img src={value.src} className="w-[105.92px] h-[90px]" />
            </div>
            <p className="text-center my-2">${value.price}</p>
            <p className="font-bold text-center text-m">{value.name}</p>
          </div>
        ))}
        <div className="bg-gray-100 w-full h-2.5"></div>
      </div>
    </div>
  );
}

export default Menu;
