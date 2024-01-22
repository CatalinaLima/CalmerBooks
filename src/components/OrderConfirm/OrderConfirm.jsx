import { useParams, useLocation } from "react-router-dom";
import Flex from "../Flex/Flex";
import './OrderConfirm.css';
//import { cartContext } from "../../context/cartContext";
import React, { useEffect } from "react";

function OrderConfirm() {
  const { orderid } = useParams();
  const location = useLocation()
  const order = location.state?.order;

  useEffect(() => {
    // You can now access the order details in the order variable
    console.log("Order details:", order);
  }, [order]);

  return (
    <div>
        <div className="order">
          <div className="orderResume">
            <h1>Gracias por tu compra!</h1>
            <p>Este es tu comprobante de la orden: {orderid}</p>
            {/* Iterate over items in the order */}
            {order?.items.map((item) => (
              <div className="cardoc" key={item.id}>
                <img className="imgoc" src={item.image} alt="" />
                <p className="titleoc">{item.title}</p>
                <small>Cantidad: {item.count}</small>
                {/* Add any other information you want to display */}
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}

export default OrderConfirm;


