import React from 'react';
import logo from "../../public/images/Logo_Holding.png"
import Image from "next/image";
import './Header.css'

export default function NewHeader() {
  return (
    <header>
      
      
      <Image src={logo} alt="Logo" />
      <ul className="nav">
        <li className="">
          <a href="/home">Home</a>
        </li>
        <li className="">
          <a href="/Time">Time</a>
        </li>
        <li className="">
          <a href="Relatorios">Relatórios</a>
        </li>
        <li className="">
          <a href="Solucao">A Solução</a>
        </li>
      </ul>
      <div>
        <span id="menu-icon" class="material-symbols-outlined">menu</span>
      </div>
    </header>
  )
}
