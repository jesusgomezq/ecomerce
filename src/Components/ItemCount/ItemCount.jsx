import React, { useState } from "react";

const ItemCount = ({}) => {
  let stock = 5;
  const [contador, setContador] = useState(1);

  function suma() {
    contador < stock ? setContador(contador + 1) : setContador(contador);
  }

  function resta() {
    contador >= 2 ? setContador(contador - 1) : setContador(contador);
  }

  return (
    <div className="card text-white bg-dark my-5" style={{ width: "18rem" }}>
      <div className="card-body ">
        <div className=" d-flex justify-content-evenly bg-light rounded-2">
          <button onClick={resta} type="submit" className="btn btn-light">
            <img
              src="https://cdn-icons.flaticon.com/png/128/3608/premium/3608401.png?token=exp=1652243981~hmac=21f1625ff5a9174b43bf1e2c9c199118"
              width={15}
              alt=""
            />
          </button>

          <h1 className="text-dark">{contador}</h1>

          <button onClick={suma} type="submit" className="btn btn-light">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1286/1286857.png"
              width={15}
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-light mb-2">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;
