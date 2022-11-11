import React, { useState } from "react";
import { saveSale } from "../../services/firebase";
import InputForm from "./InputForm";
import SuccessModal from "../Modal/Modal";


export default function UserForm({ cart, getTotalPrice, clearCart }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [order, setOrder] = useState(null)

  function onInputChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;

    let newUserData = { ...userData };
    newUserData[name] = value;
    setUserData(newUserData);
  }

  async function onSubmit(evt) {
    evt.preventDefault();

    const orderData = {
      buyerData: userData,
      cart: cart,
      total: getTotalPrice(),
    };

    const response = await saveSale(orderData);
        setIsModalOpen(true)
        setOrder({id: response, ...orderData, ...userData})

    // clearCart && clearCart();
  }

  return (
    <>

    <form onSubmit={onSubmit}>
      <InputForm
        value={userData.name}
        title="Nombre"
        name="name"
        required={true}
        onChange={onInputChange}
      />
      <InputForm
        value={userData.email}
        title="Email"
        name="email"
        required={true}
        onChange={onInputChange}
      />
      <InputForm
        value={userData.phone}
        title="Teléfono"
        name="phone"
        onChange={onInputChange}
      />
      <button disabled={cart.length === 0} type="submit">Crear orden</button>
    </form>
    <SuccessModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} orderData={order}/>
    </>
  );
}