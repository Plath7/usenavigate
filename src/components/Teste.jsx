import { useNavigate } from 'react-router-dom';
import  './style.css';

function MyComponent() {
  const navigate = useNavigate();

  function handleClick() {
    // Navega para a rota especificada
    navigate('/outra-rota', {state: { objeto: "teste 222222"}, replace: true});
  }

  return (
    <button className='botao' onClick={handleClick}>Ir para Outra Rota</button>
  );
}

export default MyComponent;
