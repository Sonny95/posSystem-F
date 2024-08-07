import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../general/pagination";
import { useDispatch } from "react-redux";
import { updateId } from "../../../modules/adminSlice";

interface order {
  id: number;
  orderTime: any;
  totalPrice: any;
  payment: string;
  totalQty: number;
}
interface AdminOrderHistoryProps {
  selectedstatus: string;
}

function AdminTransaction() {
  const dispatch = useDispatch();

  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState<order[]>([]);
  const [selectedstatus, setSelectedstatus] = useState("Pending");

  const handlePendingClick = () => {
    setSelectedstatus("Pending");
  };

  const handleCompletedClick = () => {
    setSelectedstatus("Completed");
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleClick = (value: { id: any } | undefined) => {
    dispatch(updateId(value?.id));
  };

  useEffect(() => {
    axios
      .get(`/api/adminOrder?page=${currentPage}&status=${selectedstatus}`)
      .then((response) => {
        setOrder(response.data.data.result);
        setTotalPage(response.data.data.totalPages);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage, selectedstatus]);

  return (
    <div>
      <div className="my-[30px] flex ">
        <button
          onClick={handlePendingClick}
          className={`w-[90px] h-[35px] cursor-pointer mr-[30px] rounded-lg flex items-center justify-center text-black ${
            selectedstatus === "Pending"
              ? "bg-[#003049] text-white"
              : "bg-white hover:bg-[#db0006] hover:text-white"
          }`}
        >
          Pending
        </button>
        <button
          onClick={handleCompletedClick}
          className={`w-[90px] h-[35px] cursor-pointer mr-[30px] rounded-lg flex items-center justify-center text-black ${
            selectedstatus === "Completed"
              ? "bg-[#003049] text-white"
              : "bg-white hover:bg-[#db0006] hover:text-white"
          }`}
        >
          Completed
        </button>
      </div>
      {/* hover */}
      {order?.map((value) => (
        <div
          key={value.id}
          className="w-full h-[98px] p-[10px] bg-white my-[10px] cursor-pointer"
          onClick={() => {
            handleClick(value);
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

export default AdminTransaction;
