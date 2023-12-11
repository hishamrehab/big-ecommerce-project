import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded() {
  return (
    <Stack
      spacing={5}
      marginLeft={"35%"}
      marginTop={"30px"}
    >
      <Pagination count={20} variant="outlined" shape="rounded" />
    </Stack>
  );
}
