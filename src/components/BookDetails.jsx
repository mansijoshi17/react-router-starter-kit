import React from "react";
import Box from "@mui/material/Box";

const book = {
    name: "Harry Potter",
    author: "J.K.Rowling",
    price: 200,
    image: "https://m.media-amazon.com/images/I/81m9fP+LIPL._SL1500_.jpg",
  };

export const Details = () => {
  return (
    <Box
      sx={{
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={book.image} height={200}></img>
      <h3>Name: {book.name}</h3>
      <h3>Author: {book.author}</h3>
      <h3>price: {book.price}</h3>
    </Box>
  );
};
