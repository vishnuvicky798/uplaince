import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";

const SignIn: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("auth", "true");
  };

  return (
    <Box textAlign="center">
      {isLoggedIn ? <Typography variant="h5">Welcome, User!</Typography> : 
        <Button variant="contained" onClick={handleLogin}>Sign In</Button>}
    </Box>
  );
};

export default SignIn;
