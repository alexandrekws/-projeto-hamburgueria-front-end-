import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import BurguerOrder from "../../assets/burger-order.svg";
import Trash from "../../assets/trash.svg";

import Container from "../../components/Conteiner";
import ConteinerItens from "../../components/ConteinerItens";
import H1 from "../../components/Title";
import Button from "../../components/Button";

import { Image, Order } from "./styles";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchOrders(){
      const { data: newOrders } = await axios.get("http://localhost:3001/order/");
  
      setOrders(newOrders);
    }

    fetchOrders();

  }, []);

  async function deleteOrder(orderID) {
    await axios.delete(`http://localhost:3001/order/${orderID}`);

    const newOrders = orders.filter((order) => order.id !== orderID);

    setOrders(newOrders);
  }

  function goBackPage(){
    navigate("/");
  }

  return (
    <Container>
      <ConteinerItens>
        <Image alt="logo-burguer-pedido-imagem" src={BurguerOrder} />

        <H1>Pedidos</H1>

        <ul>
          {orders.map((order) => (
            <Order key={order.id}>
              <div className="divOrder">
              <p id="order">{order.order}</p> 
              <p id="clientName">{order.clientName}</p> 
              <p id="price">R$ {order.price}</p>
              </div>
              <button onClick={() => deleteOrder(order.id)}>
                <img alt="lata-de-lixo" src={Trash} />
              </button>
            </Order>
          ))}
        </ul>

        <Button onClick={goBackPage} isBack={true}>Voltar</Button>
      </ConteinerItens>
    </Container>
  );
};

export default Orders;
