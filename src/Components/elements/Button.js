import React from 'react';
import { Button } from "@mui/material";
import { HashLink } from 'react-router-hash-link';

const ThemeBtn = (props) => {
  return (
    <Button size="large" variant="outlined" 
                    sx={{
                        color: "white",
                        borderRadius:'25px',
                        borderColor: '#CDA716 !important',
                        ":hover": {
                        bgcolor: "#CDA716",
                        // color: "white",
                        // borderColor: '#CDA716 !important',
                        },
                        ...props.sx,
                    }} >
                        {props.text}
        </Button>
  );
};

export default ThemeBtn;
