import React from "react";
import data from "./data";

const CustomTableInReact = () => {
  return (
    <div>
      <form action="">
        <table>
          <thead>
            <tr>
              <th id="tr" onClick={() => Sort("fullName")}>
                Name
              </th>
              <th id="tr" onClick={() => Sort("userName")}>
                User Name
              </th>
              <th id="tr" onClick={() => Sort("phoneNumber")}>
                Phone Number
              </th>
              <th id="tr" onClick={() => Sort("website")}>
                Website
              </th>
              <th id="tr" onClick={() => Sort("companyName")}>
                Company Name
              </th>
              <th id="tr" onClick={() => Sort("email")}>
                Email
              </th>
              <th id="tr">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <>
                  <tr key={item.id}>
                    <td>{item.fullName}</td>
                    <td>{item.userName}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.website}</td>
                    <td>{item.companyName}</td>
                    <td>{item.email}</td>
                    <td className="">
                      <button className="">
                        <i className="">Edit</i>
                      </button>
                      <button className="">
                        <i className="">Delete</i>
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default CustomTableInReact;
