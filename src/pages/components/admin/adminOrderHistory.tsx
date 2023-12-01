import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../../components/general/pagination";

interface order {
  id: number;
  orderTime: any;
  totalPrice: any;
  payment: string;
  totalQty: number;
}

function AdminOrderHistory({ onClickCard }: any) {
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState<order[]>([]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/adminOrder?page=${currentPage}`)
      .then((response) => {
        setOrder(response.data.data.result);
        setTotalPage(response.data.data.totalPages);
        console.log(response.data.data.result, "response.data.data.result");
        console.log(response.data.data.totalPages, "response.data.totalPages");
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage, totalPage]);

  return (
    <div>
      {order?.map((value) => (
        <div
          className="w-full h-[98px] p-[10px] bg-white my-[10px] cursor-pointer"
          onClick={() => {
            onClickCard(value.id);
          }}
        >
          <div className="w-full flex justify-between mb-[20px] ">
            <p className="">orderNumber #{value?.id}</p>
            <p>{`${new Date(value?.orderTime).toLocaleTimeString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}, ${new Date(value?.orderTime).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}`}</p>
          </div>
          <div className="w-full flex justify-between">
            <p>Number of items {value?.totalQty}</p>
            <div className="flex">
              <p className="mr-[20px]">${value?.totalPrice}</p>
              <div className="rounded-xl bg-green-500 w-[67px] h-[24px] flex justify-center alignItms-center ">
                Paid
              </div>
            </div>
          </div>
        </div>
      ))}
      <Pagination totalPage={totalPage} onPageChange={handlePageChange} />
    </div>
  );
}

export default AdminOrderHistory;
