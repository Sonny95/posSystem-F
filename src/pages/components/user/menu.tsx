import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  src: string;
}

function Menu({ data, clicked }: { data: MenuItem[]; clicked: (item: MenuItem) => void }) {
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  useEffect(() => {
    if (data && data.length > 0) {
      setLoading(false);
    }
  }, [data]);

  //searchBar Chase onClick
  const onChange = (e: any) => {
    setSearch(e.target.value);
  };

  //filter with some requirement
  const filterName = data.filter((p) => {
    return p.name
      .replace(" ", "")
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase().replace(" ", ""));
  });

  return (
    <div className="w-[545px] h-full mx-[22px] overflow-y-visible overflow-x-hidden">
      {/* search bar */}
      <div className="h-[40px] w-[545px] my-[10px] ">
        <input
          type="text"
          value={search}
          onChange={onChange}
          placeholder="Search"
          className="w-[525px] h-full rounded-lg p-5 mx-[10px]"
        ></input>{" "}
      </div>

      <div className="w-[545px] h-[644px] flex flex-wrap">
        {loading
          ? // skeleton loading
            Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className="w-[161px] h-[250px] bg-white m-[10px] cursor-pointer">
                <Skeleton width={105.92} height={90} style={{ margin: "auto" }} />
              </div>
            ))
          : // after data received
            filterName?.map((value) => (
              <div
                key={value.id}
                onClick={() => clicked(value)}
                className="w-[161px] h-[250px] bg-white m-[10px] cursor-pointer	rounded-lg"
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
