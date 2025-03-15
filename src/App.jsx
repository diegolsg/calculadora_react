import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

function CalculadoraApp() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operaciones, setOperaciones] = useState({
    suma: false,
    resta: false,
    multiplicacion: false,
    division: false,
    potencia: false,
    raiz: false,
  });
  const [resultado, setResultado] = useState([]);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setOperaciones((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const calcularResultado = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    const resultados = [];

    // Validamos las operaciones seleccionadas
    if (operaciones.suma) {
      resultados.push(`Suma: ${n1 + n2}`);
    }
    if (operaciones.resta) {
      resultados.push(`Resta: ${n1 - n2}`);
    }
    if (operaciones.multiplicacion) {
      resultados.push(`Multiplicación: ${n1 * n2}`);
    }
    if (operaciones.division) {
      resultados.push(
        n2 !== 0 ? `División: ${n1 / n2}` : "División: Error (división por 0)"
      );
    }
    if (operaciones.potencia) {
      resultados.push(`Potencia: ${Math.pow(n1, n2)}`);
    }
    if (operaciones.raiz) {
      resultados.push(
        n1 >= 0
          ? `Raíz: ${Math.sqrt(n1)}`
          : "Raíz: Error (no se puede calcular la raíz de un número negativo)"
      );
    }

    setResultado(resultados);
  };

  return (
    <>
      <h1>Calculadora</h1>
      <h2>Seleccione la operación que desea realizar</h2>
      <form>
        <label>
          <input
            type="checkbox"
            name="suma"
            checked={operaciones.suma}
            onChange={handleCheckboxChange}
          />
          Suma
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="resta"
            checked={operaciones.resta}
            onChange={handleCheckboxChange}
          />
          Resta
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="multiplicacion"
            checked={operaciones.multiplicacion}
            onChange={handleCheckboxChange}
          />
          Multiplicación
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="division"
            checked={operaciones.division}
            onChange={handleCheckboxChange}
          />
          División
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="potencia"
            checked={operaciones.potencia}
            onChange={handleCheckboxChange}
          />
          Potencia
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="raiz"
            checked={operaciones.raiz}
            onChange={handleCheckboxChange}
          />
          Raíz
        </label>
      </form>
      <br />
      <input
        type="text"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Número 1"
      />
      <input
        type="text"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Número 2"
        disabled={operaciones.raiz} // Deshabilitar segundo número si es raíz
      />
      <button type="button" onClick={calcularResultado}>
        Calcular
      </button>
      <h3>Resultados:</h3>
      <ul>
        {resultado.map((res, index) => (
          <li key={index}>{res}</li>
        ))}
      </ul>
    </>
  );
}

export default CalculadoraApp;
