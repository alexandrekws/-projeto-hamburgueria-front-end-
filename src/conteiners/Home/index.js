import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import BurguerHome from "../../assets/burger-home.svg";

import Container from "../../components/Conteiner";
import ContainerItens from "../../components/ConteinerItens";
import H1 from "../../components/Title";
import Button from "../../components/Button";

import { Image, InputLabel, Input } from "./styles";

const App = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const inputName = useRef();
  const inputOrder = useRef();
  const inputPrice = useRef();

  async function addNewOrder() {
    const { data: newOrder } = await axios.post("http://localhost:3001/order", {
      clientName: inputName.current.value,
      order: inputOrder.current.value,
      price: inputPrice.current.value,
    });

    setOrders([...orders, newOrder]);

    navigate("/pedidos");
  }

  return (
    <Container>
      <ContainerItens>
        <Image alt="logo-burguer-imagem" src={BurguerHome} />

        <H1>Faça seu Pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="Pedido" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Preço</InputLabel>
        <Input ref={inputPrice} placeholder="Valor do Pedido" />
        
        <Button onClick={addNewOrder}>Novo Pedido</Button>
      </ContainerItens>
    </Container>
  );
};

export default App;
