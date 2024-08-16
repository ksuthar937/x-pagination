const Table = ({ data, currentPage }) => {
  const indexOfLastEmployee = currentPage * 10;
  const indexOfFirstEmployee = indexOfLastEmployee - 10;

  const currPageData = data.slice(indexOfFirstEmployee, indexOfLastEmployee);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {currPageData.map((employee) => {
          return (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.role}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
