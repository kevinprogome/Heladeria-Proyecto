// LoadingScreen.jsx
import React from "react";
import "../styles/LoadingScreen.css"; // opcional para estilos personalizados

const LoadingScreen = () => {
  return (
    <div>
      <div class="page-wrapper">
        <div class="loader">
          <div class="jelly">
            <div class="body"></div>
            <div class="stick"></div>
            <div class="eye"></div>
            <div class="eye"></div>
            <div class="mouth"></div>
          </div>
          <div class="shadow"></div>
        </div>
        <div class="loader-container">
          <div class="loading-text">
            Cargando<span class="dots"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
