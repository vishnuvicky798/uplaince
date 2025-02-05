import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { animated, useSpring } from "@react-spring/web";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const bgStyle = useSpring({
    backgroundColor: `rgba(0, 100, 255, ${count / 10})`,
    config: { tension: 200, friction: 20 },
  });

  return (
    <Box sx={{ textAlign: "center", padding: "20px" }}>
      <animated.div style={{ ...bgStyle, padding: "20px" }}>
        <Typography variant="h4">Count: {count}</Typography>
      </animated.div>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <Button onClick={() => setCount(count - 1)}>Decrement</Button>
      <Button onClick={() => setCount(0)}>Reset</Button>
    </Box>
  );
};

export default Counter;
