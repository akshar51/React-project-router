import React from "react";

const EmployeeData = (props) => {
  let { list , handleDelete , handleEdit} = props;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-5">
            <h2 className="text-center mb-4">Employee Detail :</h2>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Sr No.</th>
                  <th>Name</th>
                  <th>Post</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {list.map((val, idx) => (
                  <tr key={val.id}>
                    <td>{idx + 1}</td>
                    <td>{val.ename}</td>
                    <td>{val.post}</td>
                    <td>{val.salary}</td>
                    <td>
                      <button className="btn btn-warning me-2" onClick={()=> handleEdit(val.id)}>Edit</button>
                      <button className="btn btn-danger" onClick={()=> handleDelete(val.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeData;
