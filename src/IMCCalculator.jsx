import React, { useState } from 'react';

const IMCCalculator = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imc = peso / (alturaMetros * alturaMetros);

    let classificacao = '';

    if (imc < 18.5) {
      classificacao = 'Abaixo do Peso';
    } else if (imc < 24.9) {
      classificacao = 'Peso Normal';
    } else if (imc < 29.9) {
      classificacao = 'Sobrepeso';
    } else if (imc < 34.9) {
      classificacao = 'Obesidade Grau 1';
    } else if (imc < 39.9) {
      classificacao = 'Obesidade Grau 2';
    } else {
      classificacao = 'Obesidade Grau 3';
    }

    setResultado(`Seu IMC é ${imc.toFixed(2)} (${classificacao})`);
  };

  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <div>
        <label>Altura (cm):</label>
        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </div>
      <div>
        <label>Peso (kg):</label>
        <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </div>
      <button onClick={calcularIMC}>Calcular</button>
      {resultado && <p>{resultado}</p>}
    </div>
  );
};

export default IMCCalculator;