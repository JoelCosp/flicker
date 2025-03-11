import React from 'react'

const Register = () => {
  return (
    <section>
      <form className='flex flex-col' action="" method="post">
        <label htmlFor="name">NOMBRE: </label>
        <input type="text" id="name" placeholder='Nombre'/>

        <label htmlFor="lastname">APELLIDO: </label>
        <input type="text" id="lastname" placeholder='Apellido'/>

        <label htmlFor="username">N. DE USUARIO: </label>
        <input type="text" id="username" placeholder='Nombre de usuario'/>

        <label htmlFor="age">EDAD: </label>
        <input type="number" min="0" id="age" placeholder='Edad'/>

        <label htmlFor="email">CORREO ELECTRÓNICO: </label>
        <input type="email" id="email" placeholder='Correo electrónico'/>

        <label htmlFor="password">CONTRASEÑA: </label>
        <input type="password" id="password" placeholder='Contraseña'/>
      </form>
    </section>
  )
}

export default Register
