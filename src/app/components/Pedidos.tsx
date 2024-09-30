"use client";

import React, { useRef, useState } from "react";

import styles from "../styles/pedidos.module.css"; 

type PedidoProps = {
  marca: string;
  modelo: string;
  placa: string;
  nome: string;
  tipoLavagem: string;
};

export default function Pedidos() {
  const dadosPedido = {
    marca: '',
    modelo: '',
    placa: '',
    nome: '',
    tipoLavagem: '',
  };

  const [pedido, setPedido] = useState<PedidoProps>(dadosPedido);
  const [pedidos, setPedidos] = useState<PedidoProps[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPedido({ ...pedido, [name]: value });
  };

  const handleAddPedido = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPedidos([...pedidos, pedido]);
    setPedido(dadosPedido); 
  };

  const placaFoco = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.divPedidos}>
      <div className={styles.divForm}>
        <form onSubmit={handleAddPedido}>
          <fieldset className={styles.formFieldset}>
            <legend className={styles.formLegend}>Criar Pedido</legend>
            <div>
              <label className={styles.label}>Marca:</label>
              <input className={styles.input} name="marca" placeholder="Marca" onChange={handleInputChange} value={pedido.marca} />
            </div>
            <div>
              <label className={styles.label}>Modelo:</label>
              <input className={styles.input} name="modelo" placeholder="Modelo" onChange={handleInputChange} value={pedido.modelo} />
            </div>
            <div>
              <label className={styles.label}>Placa:</label>
              <input className={styles.input} name="placa" ref={placaFoco} placeholder="Placa" onChange={handleInputChange} value={pedido.placa} />
            </div>
            <div>
              <label className={styles.label}>Nome:</label>
              <input className={styles.input} name="nome" placeholder="Nome do dono" onChange={handleInputChange} value={pedido.nome} />
            </div>
            <div>
              <label className={styles.label}>Tipo de Lavagem:</label>
              <input className={styles.input} name="tipoLavagem" placeholder="Tipo de Lavagem" onChange={handleInputChange} value={pedido.tipoLavagem} />
            </div>
            <button className={styles.button} type="submit">Criar Pedido</button>
          </fieldset>
        </form>
      </div>

<div className={styles.divPedidosLista}>
        {pedidos.map((pedido, index) => (
          <div key={index} className={styles.pedidoCard}>
            <p>Marca: {pedido.marca}</p>
            <p>Modelo: {pedido.modelo}</p>
            <p>Placa: {pedido.placa}</p>
            <p>Nome: {pedido.nome}</p>
            <p>Tipo de Lavagem: {pedido.tipoLavagem}</p>
            <button className={styles.concluirButton} onClick={() => setPedidos(pedidos.filter((_, i) => i !== index))}>Concluir</button>
          </div>
        ))}
      </div>
    </div>
  );
}