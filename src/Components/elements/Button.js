import React from 'react';
import { Button } from "@mui/material";

const ThemeBtn = (props) => {
  return (
    <Button size="large" variant="outlined" 
                    sx={{
                        color: "white",
                        borderRadius:'25px',
                        borderColor: '#CDA716 !important',
                        transition: "all 0.3s ease",
                        ":hover": {
                        bgcolor: "#CDA716",
                        },
                        ...props.sx,
                    }} >
                        {props.text}
        </Button>
  );
};

export default ThemeBtn;
