import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../../store/cartSlice";
import Table from "@mui/material/Table";
import { TableBody, Button, Fab } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import "./cart.css"

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const cartList = cartItems.list;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleQty = (data) => {
    dispatch(updateQuantity(data));
  };
  const handleRemove = (data) => {
    dispatch(removeItem({ id: data?.id }));
  };
  return (
    <div>
      {cartList && cartList.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Quantity.</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Sum</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartList.map((item) => (
                <TableRow key={item.name}>
                  <TableCell>
                    <div>
                      <img
                        src={item.img}
                        alt={item.name}
                        style={{ width: "150px" }}
                      />
                      {item.name}
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <div className="quantity-cart">
                    <Fab
                     sx={{
                      fontSize:"20px",
                      backgroundColor: "#fff", boxShadow: "none",
                    }}
                      variant="contained"
                      size="small"
                      onClick={() => {
                        if (item.quantity > 1) {
                          handleQty({ ...item, quantity: item.quantity - 1 });
                        }
                      }}
                    >
                      -
                    </Fab>
                   <p style={{fontSize:"18px"}}> {item.quantity}</p>
                    <Fab
                     sx={{
                      fontSize:"20px",
                      backgroundColor: "#fff", boxShadow: "none",
                    }}
                    size="small"
                      variant="contained"
                      onClick={() => {
                        handleQty({ ...item, quantity: item.quantity + 1 });
                      }}
                    >
                      +
                    </Fab>
                    </div>
                  </TableCell>
                  <TableCell align="right">{item.price.toFixed(2)} $</TableCell>
                  <TableCell align="right">
                    {(item.price * item.quantity).toFixed(2)} $
                  </TableCell>
                  <TableCell align="right">
                    <Fab
                     sx={{
                      backgroundColor: "#fff", boxShadow: "none",
                      ':hover': {
                        bgcolor: '#red', // theme.palette.primary.main
                        color: 'white',
                      },
                    }}
                      onClick={() => {
                        handleRemove(item);
                      }}
                    >
                      <ClearIcon />
                    </Fab>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell align="right">{cart.total.toFixed(2)} $</TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={2}></TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="error">
                    <DeleteIcon color="white" />
                    Clear cart
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div className="cart-empty">empty</div>
      )}
    </div>
  );
};

export default Cart;
