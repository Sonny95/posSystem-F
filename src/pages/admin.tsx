import React, { useEffect, useState } from "react";
import CheckoutContainer from "./components/checkout/checkoutContainer";
import Categories from "./components/admin/adminCategories";
import { useSelector } from "react-redux";
import axios from "axios";
import AdminCategories from "./components/admin/adminCategories";
import AdminMiddleComponent from "./components/admin/adminMiddleComponent";
import AdminOrder from "./components/admin/adminOrder";
import { GetServerSideProps } from "next";
import { getSession, signIn } from "next-auth/react";

interface RootState {
  cart: {
    cartItem: any[];
    cartTotalPrice: number;
  };
}

interface result {
  id: number;
  orderTime: any;
  totalPrice: any;
  payment: string;
  totalQty: number;
}
interface MyPageProps {
  session: any; // 사용자 세션 정보의 타입에 따라 수정해야 함
}

function PendingPage({ session }: MyPageProps) {
  console.log(session, "session");
  const [categories, setCategories] = useState([]);
  const [order, setOrder] = useState([]);
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get("/api/adminCategories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="w-full flex items-center justify-center bg-gray-100 ">
      <div className="w-[1024px] h-[744px] bg-gray-100 flex">
        <AdminCategories categories={categories} />
        <AdminMiddleComponent />
        <AdminOrder />
      </div>
    </div>
  );
}

export default PendingPage;

export const getServerSideProps: GetServerSideProps<MyPageProps> = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
