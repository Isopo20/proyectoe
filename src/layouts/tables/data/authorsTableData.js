import React, { useState, useEffect } from 'react';
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

const Author = ({ image, name, email }) => (
  <MDBox display="flex" alignItems="center" lineHeight={1}>
    <MDAvatar src={image} name={name} size="sm" />
    <MDBox ml={2} lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium">
        {name}
      </MDTypography>
      <MDTypography variant="caption">{email}</MDTypography>
    </MDBox>
  </MDBox>
);

const Job = ({ title, description }) => (
  <MDBox lineHeight={1} textAlign="left">
    <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
      {title}
    </MDTypography>
    <MDTypography variant="caption">{description}</MDTypography>
  </MDBox>
);

export default function Data() {
  const [customerData, setCustomerData] = useState([]);

  const fetchCustomerData = async () => {
    try {
      const response = await fetch('http://localhost:3001/data');
      if (response.ok) {
        const data = await response.json();
        setCustomerData(data);
      } else {
        console.error('Error al obtener los datos');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async (email) => {
    try {
      const response = await fetch(`http://localhost:3001/data/${email}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log('Datos eliminados');
        fetchCustomerData(); // Actualizar los datos después de eliminar
      } else {
        const errorText = await response.text();
        console.error('Error al eliminar los datos:', errorText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchCustomerData();
  }, []);

  return {
    columns: [
      { Header: "Nombre", accessor: "author", width: "45%", align: "left" },
      { Header: "Apellido", accessor: "function", align: "left" },
      { Header: "Email", accessor: "status", align: "center" },
      { Header: "Telefono", accessor: "employed", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: customerData.map((customer, index) => ({
      author: <Author image={team2} name={customer.first_name} email={customer.email} />,
      function: <Job title={customer.last_name} description="" />,
      status: (
        <MDBox ml={-1}>
          <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
        </MDBox>
      ),
      employed: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {customer.phone}
        </MDTypography>
      ),
      action: (
        <div>
          <div>
            <MDTypography
              component="a"
              href="#"
              variant="caption"
              color="text"
              fontWeight="medium"
              onClick={() => handleDelete(customer.email)}
            >
              Delete
            </MDTypography>
          </div>
        </div>
      ),
    })),
  };
}
