import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../../store/cartSlice";

import {Table, TableCell, TableContainer, TableHead,TableBody, TableRow, Paper, Button, Fab } from "@mui/material";
import { Clear as ClearIcon} from "@mui/icons-material";

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
    <div className="table-cart">
      {cartList && cartList.length > 0 ? (
        <TableContainer component={Paper} >
          <Table sx={{ minWidth: 700 }} aria-label="spanning table">
            <TableHead >
              <TableRow >
                <TableCell >Name</TableCell>
                <TableCell align="center">Quantity</TableCell>
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
                  <TableCell align="center">
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
                        bgcolor: '#red', 
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
                <TableCell colSpan={3} sx={{border:"none"}}></TableCell>
                <TableCell align="left"><h2>Total:</h2></TableCell>
                <TableCell align="right">{cart.total.toFixed(2)} $</TableCell>
              </TableRow>

              <TableRow>
              <TableCell colSpan={5} align="right">
              <Button variant="contained"  color="error">
                  {/* <DeleteIcon color="warning"/> */}
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
