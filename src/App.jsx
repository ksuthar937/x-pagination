import { useEffect } from "react";
import { useState } from "react";
import Table from "./Table";

function App() {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(employees.length / 10);

  let pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const fetchData = async () => {
    try {
      await fetch(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      )
        .then((res) => res.json())
        .then((data) => setEmployees(data));
    } catch (error) {
      alert("failed to fetch data");
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePrevious = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <h1>Employee Data Table</h1>
      <Table data={employees} currentPage={currentPage} />
      <div className="pagination">
        <button
          type="button"
          onClick={handlePrevious}
          disabled={currentPage <= 1}
        >
          Previous
        </button>

        {pages.map((page) => (
          <button
            className={currentPage === page ? "activeBtn" : ""}
            type="button"
            key={page}
            onClick={() => handleClick(page)}
          >
            {page}
          </button>
        ))}
        <button
          type="button"
          onClick={handleNext}
          disabled={currentPage >= totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default App;
