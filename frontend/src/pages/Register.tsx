import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


import AuthenticationService from '../services/AuthenticationService'

const Register = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    username: "",
    age: "",
    email: "",
    password: "",
  });
  
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value, // Se actualiza el campo específico
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthenticationService.createUser(formData); // Llamamos al servicio
      console.log("Usuario registrado con éxito:", response);
      navigate('/');
    } catch (error) {
      console.error("Error en el registro:", error);
    }
  };

  return (
    <section>
      <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
        <label htmlFor="name">NOMBRE: </label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          id="name"
          placeholder="Nombre"
        />

        <label htmlFor="lastname">APELLIDO: </label>
        <input
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          type="text"
          id="lastname"
          placeholder="Apellido"
        />

        <label htmlFor="username">N. DE USUARIO: </label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          type="text"
          id="username"
          placeholder="Nombre de usuario"
        />

        <label htmlFor="age">EDAD: </label>
        <input
          name="age"
          value={formData.age}
          onChange={handleChange}
          type="number"
          min="0"
          id="age"
          placeholder="Edad"
        />

        <label htmlFor="email">CORREO ELECTRÓNICO: </label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          id="email"
          placeholder="Correo electrónico"
        />

        <label htmlFor="password">CONTRASEÑA: </label>
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          id="password"
          placeholder="Contraseña"
        />

        <button type="submit" className="bg-green-500 py-3 mt-4 text-white">
          REGISTRARSE
        </button>
      </form>
    </section>
  );
};

export default Register;
