import React, { useEffect, useState } from "react";
import CompleteButton from "../admin/completeButton";
import Link from "next/link";
import axios from "axios";
import { useSelector } from "react-redux";

interface Item {
  orderNumber: number;
  item: string;
  qty: number;
}

interface idProps {
  admin: any;
  id: number;
}

function AdminOrder() {
  const updateId = useSelector((state: idProps) => {
    console.log(state.admin.adminId, "state.admin.adminId");
    return state.admin.adminId;
  });

  const [cardClick, setCardClick] = useState();
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/adminOrderDetail/${updateId}`)
      .then((response) => {
        setItemsData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [updateId]);

  return (
    <div className="w-[309px] h-full p-[10px] mr-[16px] bg-white">
      <div className="w-[289px] h-[24px] flex mt-[24px] text-xl">
        <p className="font-semibold mr-3">Order</p>
        <p>#{updateId}</p>
      </div>
      <div className="w-[239px] flex justify-between my-[20px]">
        <p>Item</p>
        <p>Qty</p>
      </div>

      {/* card */}

      <div className=" w-[289px] h-[559px] mt-[20px] overflow-y-visible overflow-x-hidden">
        {itemsData?.map((value: Item) => (
          <div className="w-[289px] mb-[10px] flex justify-between">
            <div className="w-[239px] justify-between flex">
              <div className="w-[184px]">
                <p>{value?.item}</p>
              </div>
              <div className="w-[30px] flex justify-center items-center">
                <p>{value?.qty}</p>
              </div>
            </div>

            <input type="checkbox"></input>
          </div>
        ))}
      </div>

      {/* completeButton */}
      <div className=" w-[289px] h-[48px] bottom-0">
        <Link href="/admin">
          <CompleteButton />
        </Link>
      </div>
    </div>
  );
}

export default AdminOrder;
