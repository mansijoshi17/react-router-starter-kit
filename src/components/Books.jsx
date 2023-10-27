import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const books = [
  {
    name: "Harry Potter",
    author: "J.K.Rowling",
    price: 200,
    image: "https://m.media-amazon.com/images/I/81m9fP+LIPL._SL1500_.jpg",
  },
  {
    name: "Start with WHY",
    author: "Simon Sinek",
    price: 150,
    image:
      "https://simonsinek.com/wp-content/uploads/2022/02/StartwithWHY.jpeg",
  },
];

export const Books = () => {
  return (
    <div
      className="bookList"
      style={{ marginTop: "80px", marginLeft: "20px", marginRight: "20px" }}
    >
      <Grid container spacing={2}>
        {books.map((book) => {
          return (
            <Grid item xs={12} lg={6} md={6} sm={8}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200px"
                    sx={{ objectFit: "fill" }}
                    image={book.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {book.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {book.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price: {book.price}$
                    </Typography>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Details
                    </Button>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
