import { useState, useEffect } from "react";
import Pagination from "./components/general/pagination";
import axios from "axios";

function Page() {
  // const totalPage = 23;
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState([]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/adminOrder?page=${currentPage}`)
      .then((response) => {
        setOrder(response.data.data.result);
        setTotalPage(response.data.data.totalPages); // Update order state with response.data.result
        console.log(response.data.data.result, "response.data.data.result");
        console.log(response.data.data.totalPages, "response.data.totalPages");
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage, totalPage]);
  return (
    <div>
      {/* onPageChange페이지 변경될때마다 currentpage */}
      <Pagination
        totalPage={totalPage}
        onPageChange={handlePageChange}
        // onPageChange={(page) => handlePageChange(page, totalPage)}
      />
    </div>
  );
}

export default Page;
