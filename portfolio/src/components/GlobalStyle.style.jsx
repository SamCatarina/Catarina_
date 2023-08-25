// Importar a função createGlobalStyle do styled-components
import { createGlobalStyle } from "styled-components";

// Criar um componente de estilo global
const GlobalStyle = createGlobalStyle`
  // Definir a fonte Roboto para o elemento body
  body {
    font-family: Roboto, sans-serif;
    
  }

  a{
    text-decoration: none;
  }
  
`;

// Exportar o componente de estilo global
export default GlobalStyle;
