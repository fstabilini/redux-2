import React from "react";
import { updateUser } from "../Redux/Slices/userSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Profile() {
  const dispatch = useDispatch();
  const usuario = useSelector((state) => state.user);
  console.log(usuario);

  function actualizarUsuario() {
    dispatch(updateUser({ age: "45", gender: "female" }));
    console.log(usuario);
  }
  return (
    <div>
      <h1>Nombre: {usuario.name}</h1>
      <h1>Dirección: {usuario.address}</h1>
      <button onClick={actualizarUsuario}>Cambiar estado</button>
    </div>
  );
}
