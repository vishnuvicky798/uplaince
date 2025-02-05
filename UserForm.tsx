import React, { useState, useEffect } from "react";
import { Button, TextField, Box } from "@mui/material";

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("userForm");
    if (savedData) setFormData(JSON.parse(savedData));
  }, []);

  useEffect(() => {
    if (formData.name || formData.email) {
      localStorage.setItem("userForm", JSON.stringify(formData));
    }
  }, [formData]);

  return (
    <Box>
      <TextField label="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <TextField label="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <TextField label="Address" onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
      <TextField label="Phone" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
      <Button onClick={() => localStorage.setItem("userForm", JSON.stringify(formData))}>Save</Button>
    </Box>
  );
};

export default UserForm;
