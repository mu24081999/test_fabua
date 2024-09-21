import React, { useEffect, useState } from "react";
import {
  Table,
  Form,
  Dropdown,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { FaTrash, FaFilter } from "react-icons/fa";
import { ReactComponent as FilterC } from "../../assets/mambers/FilterC.svg";
import { ReactComponent as ArrowDown } from "../../assets/mambers/arrow-down.svg";
import Switch from "react-switch";
import { ReactComponent as Trash } from "../../assets/mambers/trash-01.svg";

import { ReactComponent as Trash1 } from "../../assets/mambers/Button.svg";

import H1 from "../../assets/mambers/h1.svg";
import H2 from "../../assets/mambers/h2.svg";
import H3 from "../../assets/mambers/h3.svg";
import H4 from "../../assets/mambers/h4.svg";

const usersData = [
  {
    services: "Lhardy",
    Ss: "Local",
    name: "Hotelston",
    email: "Javier",
    address: "González",
    city: "ES ",
    country: "Hotels",
    status: "0",
    Email1: "Culture",
    active: true,
    avatar: H1,
  },

  {
    services: "Palacio Real",
    Ss: "Private Tour",
    name: "Redsys",
    email: "Javier",
    address: "González",
    city: "ES",
    country: "Restaurants",
    status: "5",
    Email1: "Local",
    active: true,
    avatar: H4,
  },

  {
    services: "Teatro Real",
    Ss: "Turandot Opera",
    name: "Viator",
    email: "Javier",
    address: "González",
    city: "ES",
    country: "Experiences",
    status: "7",
    Email1: "Culture",
    active: true,
    avatar: H2,
  },
  {
    services: "Saddle",
    Ss: "Michelin star",
    name: "Hotelston",
    email: "Javier",
    address: "González",
    city: "ES ",
    country: "Hotels",
    status: "2350",
    Email1: "Culture",
    active: true,
    avatar: H1,
  },
  {
    services: "Santo Mauro",
    Ss: "City Center",
    name: "Redsys",
    email: "Javier",
    address: "789 Rue Principale",
    city: "ES",
    country: "Experiences",
    status: "2350",
    Email1: "Entertainment",
    active: true,
    avatar: H4,
  },
  {
    services: "Orfila",
    Ss: "City Center",
    name: "Hotelston",
    email: "Javier",
    address: "23 Calle Mayor",
    city: "ES ",
    country: "Hotels",
    status: "2350",
    Email1: "Alejandro Blanco",
    active: true,
    avatar: H1,
  },
  {
    services: "ES Edition",
    Ss: "City Center",
    name: "CoverManager",
    email: "Javier",
    address: "789 Calle Granada",
    city: "ES",
    country: "Restaurant",
    status: "2350",
    Email1: "Sonia Reyes",
    active: true,
    avatar: H3,
  },
  {
    services: "Casa Lucio",
    Ss: "Local",
    name: "Redsys",
    email: "Javier",
    address: "789 Rue Principale",
    city: "ES",
    country: "Restaurant",
    status: "2350",
    Email1: "Sonia Reyes",
    active: true,
    avatar: H4,
  },
];

const BookingsTable = ({ selectedBookingFilter }) => {
  const [users, setUsers] = useState(usersData);
  const [filters, setFilters] = useState({
    city: "",
    address: "",
    status: "",
    active: "",
  });

  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleToggleActive = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index].active = !updatedUsers[index].active;
    setUsers(updatedUsers);
  };

  const handleStatusChange = (index, newStatus) => {
    const updatedUsers = [...users];
    updatedUsers[index].status = newStatus;
    setUsers(updatedUsers);
  };

  // useEffect(()=>{
  //   if (selectedBookingFilter) {
  //     const filteredUsers = users.filter(
  //       (user) =>
  //         (filters.city === "" ||
  //           user.city.toLowerCase().includes(filters.city.toLowerCase())) &&
  //         (filters.address === "" ||
  //           user.address.toLowerCase().includes(filters.address.toLowerCase())) &&
  //         (filters.status === "" || user.status === filters.status) &&
  //         (filters.active === "" || String(user.active) === filters.active)
  //     );
  //   }
  // },[selectedBookingFilter])

  const filteredUsers =
    selectedBookingFilter == "All" || selectedBookingFilter == null
      ? users
      : users.filter((user) =>
          user.country
            .toLowerCase()
            .includes(selectedBookingFilter?.toLowerCase())
        );

  return (
    <Table responsive className="tblStyle">
      <thead>
        <tr className="thdCls">
          <th>
            <Form.Check type="checkbox" style={{ fontSize: 18 }} />
          </th>
          <th>Booking</th>
          <th>Name</th>
          <th>Last Name</th>
          <th>
            Nationality
            <ArrowDown
              className="filter-icon"
              onClick={() => setShowFilterModal("address")}
            />
          </th>
          <th>
            Supplier Name{" "}
            <ArrowDown
              className="filter-icon"
              onClick={() => setShowFilterModal("address")}
            />
          </th>
          <th>
            Category{" "}
            <ArrowDown
              className="filter-icon"
              onClick={() => setShowFilterModal("address")}
            />
          </th>
          <th>
            Subcategory
            <ArrowDown
              className="filter-icon"
              onClick={() => setShowFilterModal("address")}
            />
          </th>
          <th>
            Price
            <ArrowDown
              className="filter-icon"
              onClick={() => setShowFilterModal("address")}
            />
          </th>

          <th>
            People
            <ArrowDown
              className="filter-icon"
              onClick={() => setShowFilterModal("address")}
            />
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody style={{ cursor: "pointer" }}>
        {filteredUsers.map((user, index) => (
          <tr key={index}>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              <Form.Check type="checkbox" style={{ fontSize: 18 }} />
            </td>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              {user.services}
              <div className="divCls">{user.Ss}</div>
            </td>

            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              {user.email}
            </td>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              {user.address}
            </td>

            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              {user.city}
            </td>
            <td
              className={
                filteredUsers?.length - 1 == index ? "tblCls tdCls" : "tblCls"
              }
            >
              <img src={user.avatar} alt="avatar" className="avatar-img" />

              <div style={{ marginTop: 10 }}>{user.name}</div>
            </td>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              {user.country}
            </td>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              {user.Email1}
            </td>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              {user.status}
            </td>

            <td className={filteredUsers?.length - 1 == index && "tdCls"}>5</td>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              <Trash className="delete-icon" />
              <Trash1 className="delete-icon" />
            </td>
          </tr>
        ))}
      </tbody>{" "}
      {showFilterModal && (
        <div className="filter-modal">
          <div className="filter-content">
            <h4>Filter by {showFilterModal}</h4>
            <InputGroup className="mb-3">
              <FormControl
                placeholder={`Filter by ${showFilterModal}`}
                name={showFilterModal}
                value={filters[showFilterModal]}
                onChange={handleFilterChange}
              />
              <Button
                variant="primary"
                onClick={() => setShowFilterModal(false)}
              >
                Apply
              </Button>
            </InputGroup>
          </div>
        </div>
      )}
    </Table>
  );
};

export default BookingsTable;
