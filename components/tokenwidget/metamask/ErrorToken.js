import React, { useState } from "react";

import ButtonFox from "./ButtonFox";
import Button from "../../buttons";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="relative">
        <div
          className={ `fixed bg-dark bg-opacity-80 w-screen h-screen left-0 top-0  ${show ? "  " : "hidden"}`}
          onClick={handleClose}
        >
          &nbsp;
        </div>
        <ButtonFox onClick={handleShow} />
        <div  className={`${show ? "modal-metamask show " : "hidden"} fixed top-0 h-screen w-screen left-0 z-20 flex justify-center items-center `}>
          <div className={` bg-dark-black relative z-50 max-w-md py-5 px-8 rounded  `}>
            <button className="close-button absolute right-4 top-4" onClick={handleClose}>
              &#10006;
            </button>
            <h3 className="text-2xl mb-4">Cambia la red de la cartera</h3>

            <div>
              <p className="mb-4 text-lg">
                Cambia la red de la cartera en la aplicación MetaMask para agregar
                este contrato.
              </p>
            </div>
            <Button onClick={handleClose} variant="primary">
                Entiendo
            </Button>

          </div>

        </div>


      </div>

    </div>
  );
}

export default Example;
