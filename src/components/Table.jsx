import React from "react";
import { Table } from "react-bootstrap";
import propTypes from "prop-types";
import { ReactComponent as FilterC } from "../assets/mambers/FilterC.svg";
import { ReactComponent as ArrowDown } from "../assets/mambers/arrow-down.svg";
import Checkbox from "./Checkbox";
import PaginationComponent from "./Pagination";
import "../assets/css/table.css";

const TableView = ({
  data,
  fields,
  pageChanged,
  hasPagination,
  isChecked,
  extraCells,
  isMemeber,
  extraHeads,
  navigate,
}) => {
  const colspanFields = () => {
    return Object.keys(fields).length + 1;
  };

  // return (
  //   <div className="table-container">
  //     <Table
  //       responsive
  //       className={`tblStyle m-auto table table table-responsive "tblStyleWithWidth`}
  //     >
  //       <thead>
  //         <tr className="thdCls">
  //           <th className="fixed-col">
  //             <Checkbox id={data?._id} />
  //           </th>
  //           {fields?.map((field, fieldIndex) => (
  //             <th key={fieldIndex}>
  //               {field.label === "Full Name" ? (
  //                 <div className="mb-2">
  //                   {field.label}
  //                   <ArrowDown className="filter-icon" />
  //                 </div>
  //               ) : (
  //                 <div className="m-1">
  //                   <span style={{ marginRight: "8px" }}>
  //                     {field.label}
  //                   </span>
  //                   <FilterC className="filter-icon" />
  //                 </div>
  //               )}
  //             </th>
  //           ))}
  //           {extraHeads()}
  //         </tr>
  //       </thead>
  //       <tbody className="p-3">
  //         {hasPagination ? (
  //           <>
  //             {data?.length > 1 &&
  //               data?.map((item, itemIndex) => (
  //                 <tr key={itemIndex} className="tableRow">
  //                   <td className="fixed-col">
  //                     <Checkbox key={itemIndex} />
  //                   </td>
  //                   {fields?.map((field, fieldIndex) => (
  //                     <td className="scrollable-col" key={fieldIndex}>
  //                       {field.format
  //                         ? field.format(data[itemIndex][field.key])
  //                         : data[itemIndex][field.key]}
  //                     </td>
  //                   ))}
  //                   {extraCells(item)}
  //                 </tr>
  //               ))}
  //           </>
  //         ) : (
  //           <>
  //             {data?.map((item, itemIndex) => (
  //               <tr key={itemIndex}>
  //                 {fields?.map((field, fieldIndex) => (
  //                   <td key={fieldIndex}>
  //                     {field.format
  //                       ? field.format(data?.data[itemIndex][field.key])
  //                       : data?.data[itemIndex][field?.key]}
  //                   </td>
  //                 ))}
  //               </tr>
  //             ))}
  //           </>
  //         )}
  //       </tbody>
  //     </Table>
  //     <PaginationComponent />
  //   </div>
  // );

  return (
    <>
      <div className="tblStyle w-full overflow-hidden sticky-table">
        <Table responsive className={`m-auto table table-responsive`}>
          <thead>
            <tr className="thdCls">
              <th className="fixed-left-col">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <Checkbox
                      id={data?._id}
                      style={{ fontSize: "16px", marginLeft: "10px" }}
                    />
                  </div>
                  <div>
                    <span>{fields[0]?.label}</span>
                    <ArrowDown className="filter-icon" />
                    {/* Assuming Bootstrap Icons */}
                  </div>
                </div>
              </th>

              {/* Scrollable Middle Columns */}
              {fields?.map(
                (field, fieldIndex) =>
                  field.label !== fields[0].label && (
                    <th key={fieldIndex} className="scrollable-col">
                      <div className="m-1">
                        <span style={{ marginRight: "8px" }}>{field.label}</span>
                        <FilterC className="filter-icon" />
                      </div>
                    </th>
                  )
              )}
              {/* Status Column */}
              {extraHeads()}
            </tr>
          </thead>
          <tbody className="p-3">
            {
              hasPagination && (
                <>
                  {data?.length > 0 &&
                    data?.map((item, itemIndex) => (
                      <tr key={itemIndex} className="tableRow">
                        {/* Checkbox Column */}
                        {/* <td className="fixed-left-col">
                      </td> */}
                        {/* Full Name Column */}
                        <td className="fixed-left-col left">
                          {/* <div className="display-flex justify-content-center">
                          <Checkbox key={itemIndex} />
                          <span>
                            {" "}
                            {item.first_name ? item.first_name : ""}{" "}
                          </span>
                        </div> */}
                          <div className="d-flex align-items-center">
                            {/* Checkbox */}
                            <div>
                              <Checkbox
                                id={data?._id}
                                style={{ fontSize: "16px", marginLeft: "10px" }}
                              />
                            </div>

                            {/* First Name and optional Arrow Icon */}
                            <div
                              className="d-flex me-2 flex-column text-start ms-3"
                            >
                              <span>
                                {item.first_name ? item.first_name : ""}
                              </span>
                              <span>
                                {item?.user_id?.email}
                              </span>
                              {/* Uncomment if you plan to add an icon */}
                              {/* <i className="filter-icon bi bi-arrow-down ml-2"></i> */}
                            </div>
                          </div>
                          {/* Adjust to match your data structure */}
                        </td>
                        {/* Scrollable Middle Columns */}
                        {fields?.map(
                          (field, fieldIndex) =>
                            field.label !== "Full Name" && (
                              <td className="scrollable-col" key={fieldIndex}>
                                {field.format
                                  ? field.format(data[itemIndex][field.key])
                                  : data[itemIndex][field.key]}
                              </td>
                            )
                        )}
                        {/* Status Column */}
                        {extraCells(item)} {/* Adjust accordingly */}
                        {/* <td className="">
                    </td> */}
                      </tr>
                    ))}
                </>
              )
              // : (
              //   <>
              //     {data?.data?.map((item, itemIndex) => (
              //       <tr key={itemIndex}>
              //         {/* Checkbox Column */}
              //         <td className="fixed-left-col">
              //           <Checkbox key={itemIndex} />
              //         </td>
              //         {/* Full Name Column */}
              //         <td className="fixed-left-col">
              //           {item.fullName} {/* Adjust to match your data structure */}
              //         </td>
              //         {/* Scrollable Middle Columns */}
              //         {fields?.map(
              //           (field, fieldIndex) =>
              //             field.label !== "Full Name" && (
              //               <td className="scrollable-col" key={fieldIndex}>
              //                 {field.format
              //                   ? field.format(data?.data[itemIndex][field.key])
              //                   : data?.data[itemIndex][field?.key]}
              //               </td>
              //             )
              //         )}
              //         {/* Status Column */}
              //         <td className="fixed-right-col">
              //           {extraCells(item).status} {/* Adjust accordingly */}
              //         </td>
              //         {/* Active Column */}
              //         <td className="fixed-right-col">
              //           {extraCells(item).active} {/* Adjust accordingly */}
              //         </td>
              //       </tr>
              //     ))}
              //   </>
              // )
            }
          </tbody>
        </Table>
      </div>
      <div>
        <PaginationComponent
          page={data?.page}
          handlePage={pageChanged}
          totalPages={data?.totalPage}
        />
      </div>
    </>
  );
};

TableView.propTypes = {
  fields: propTypes.array,
  hasPagination: propTypes.bool,
  extraCells: propTypes.func,
  pageChanged: propTypes.func,
  extraHeads: propTypes.func,
};

TableView.defaultProps = {
  data: {},
  fields: [],
  hasPagination: true,
  extraCells: (item) => { },
  extraHeads: (item) => { },
  pageChanged: (item) => { },
};

export default TableView;

// import React from 'react';
// import { useReactTable, getCoreRowModel } from '@tanstack/react-table';
// import '../assets/table.css'; // Custom CSS for styling

// const TableView = ({ data ,columns}) => {

//   const { getHeaderGroups, getRowModel } = useReactTable({
//     data,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//   });

//   return (
//     <div className="table-container">
//       <table className="fixed-columns-table">
//         <thead>
//           {getHeaderGroups().map(headerGroup => (
//             <tr key={headerGroup.id}>
//               {headerGroup.headers.map((header, index) => (
//                 <th
//                   key={header.id}
//                   style={{
//                     position: index === 0 ? 'sticky' : index >= columns.length - 2 ? 'sticky' : undefined,
//                     left: index === 0 ? 0 : undefined,
//                     right: index >= columns.length - 2 ? 0 : undefined,
//                     zIndex: 1,
//                     backgroundColor: 'white',
//                   }}
//                 >
//                   {header.column.columnDef.header} {/* Use header.column.columnDef.header */}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody>
//           {getRowModel().rows.map(row => (
//             <tr key={row.id}>
//               {row.getVisibleCells().map((cell, index) => (
//                 <td
//                   key={cell.id}
//                   style={{
//                     position: index === 0 ? 'sticky' : index >= columns.length - 2 ? 'sticky' : undefined,
//                     left: index === 0 ? 0 : undefined,
//                     right: index >= columns.length - 2 ? 0 : undefined,
//                     zIndex: 1,
//                     backgroundColor: 'white',
//                   }}
//                 >
//                   {cell.getValue()} {/* Use cell.getValue() */}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TableView;
