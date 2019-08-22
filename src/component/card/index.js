import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function Cards(props) {
  return (
    <CardContent>
      <Typography>{props.judul}</Typography>
      <Typography>{props.konten}</Typography>
    </CardContent>
  );
}

export default Cards;
