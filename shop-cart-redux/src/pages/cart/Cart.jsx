import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../../store/cartSlice";
import Table from '@mui/material/Table';
import {TableBody, Button} from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const cartList = cartItems.list;
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const TAX_RATE = 0.07;

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }
  
  function priceRow(qty, unit) {
    return qty * unit;
  }
  
  function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
  }
  
  function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }
  
  const rows = [
    createRow('Paperclips (Box)', 100, 1.15),
    createRow('Paper (Case)', 10, 45.99),
    createRow('Waste Basket', 2, 17.99),
  ];
  
  const invoiceSubtotal = subtotal(rows);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;
  

const handleQty = (data) => {
  dispatch(updateQuantity(data))
}
const handleRemove = (data) => {
  dispatch(removeItem({id: data?.id}))
}
  return (
    <div>
      {cartList && cartList.length > 0 ? (
        // <div className="cart-main" style={{display:"flex", padding:"20px"}}>
        //   {cartList.map((item) => {
        //     return (
        //       <div className="cart-item" key={item.id} style={{padding:"20px"}} >
        //         <img src={item.img} alt={item.name} style={{width:"200px"}} />
        //         <h1>{item.name}</h1>
        //         <p>{item.price.toFixed(2)}$</p>
        //       <div style={{display:"flex"}}>
        //       <button onClick={() => {
        //         handleQty({...item, quantity : item.quantity+1})
        //       }}>+</button>
        //       <p>{item.quantity}</p>
        //       <button onClick={() => {
        //         if(item.quantity>1) {
        //           handleQty({...item, quantity : item.quantity-1})
        //         }
        //       }} >-</button>
        //       </div>
        //       <p>
        //         {(item.price * item.quantity).toFixed(2)} $
        //       </p>
        //         <button onClick={()=> {
        //           handleRemove(item)
        //         }}>Remove</button>
        //         <button>Clear all</button>
        //       </div>
        //     );
        //   })}
        //   <h2>Total : {cart.total}</h2>
        // </div>
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
                    <img src={item.img} alt={item.name} style={{width:"150px"}}/>
                    {item.name}
                  </div>
                </TableCell>
                <TableCell align="right">
                <Button onClick={() => {
                if(item.quantity>1) {
                  handleQty({...item, quantity : item.quantity-1})
                }
              }} >-</Button>
                  {item.quantity}
                  <Button onClick={() => {
             
                 handleQty({...item, quantity : item.quantity+1})
               
             }} >+</Button>
                  </TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right">{item.price * item.quantity}</TableCell>
                <TableCell align="right"><Button onClick={()=> {handleRemove(item)}}><DeleteIcon/></Button></TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell  align="right">{cart.total.toFixed(2)} $</TableCell>
            </TableRow>
            
            <TableRow>
              <TableCell colSpan={2}></TableCell>
              <TableCell align="right">
                <Button variant="contained" color="error">
                  <DeleteIcon />
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
