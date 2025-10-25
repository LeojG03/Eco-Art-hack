'use client';

import Link from 'next/link';

const Perfil = () => {
  return (
    <div className="perfil-page">
      <div className="perfil-container">
        <img
          src="data:image/jpeg;base64,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"
          alt="Foto de perfil"
          className="perfil-foto"
        />
        <div className="perfil-info">
          <label>Nombre de usuario</label>
          <h2>@EcoArtUser</h2>

          <label>Descripción</label>
          <p>Amante del arte sostenible y de la creación con propósito</p>

          <label>Edad</label>
          <p>22 años</p>
        </div>

        <Link href="/productos" className="btn-volver">
          Volver a productos
        </Link>
      </div>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          margin: 0;
          padding: 0;
          background-color: #f5f3ef;
          color: #3e2f27;
          font-family: "Poppins", sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .perfil-page {
          background-color: #f5f3ef;
          color: #3e2f27;
          font-family: "Poppins", sans-serif;
          margin: 0;
          padding: 0;
          min-height: 100vh;
          width: 100%;
          position: relative;
        }

        .perfil-page .perfil-container {
          max-width: 500px;
          margin: 80px auto;
          background-color: #fffaf4;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(62, 47, 39, 0.1);
          text-align: center;
        }

        .perfil-page .perfil-foto {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #c19a6b;
          margin: 0 auto 20px auto;
          display: block;
        }

        .perfil-page .perfil-info h2 {
          margin: 5px 0;
          font-size: 1.5rem;
          color: #3e2f27;
          font-weight: bold;
        }

        .perfil-page .perfil-info label {
          display: block;
          margin-top: 15px;
          font-weight: bold;
          color: #3b2e26;
          font-size: 0.9rem;
          text-align: left;
        }

        .perfil-page .perfil-info p {
          background-color: #f0ebe6;
          padding: 8px 12px;
          border-radius: 10px;
          font-size: 0.95rem;
          color: #3e2f27;
          margin: 6px 0 14px;
          text-align: left;
        }

        .perfil-page .btn-volver {
          display: inline-block;
          margin-top: 20px;
          background-color: #a6795d;
          color: white;
          padding: 12px 24px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 3px 10px rgba(80, 50, 40, 0.15);
        }

        .perfil-page .btn-volver:hover {
          background-color: #8b624b;
          transform: scale(1.05);
          box-shadow: 0 4px 14px rgba(60, 40, 30, 0.25);
        }

        /* Eliminar bordes y líneas no deseadas */
        .perfil-page * {
          border: none;
          outline: none;
        }

        .perfil-page .perfil-container {
          border: none !important;
          outline: none !important;
        }

        .perfil-page img {
          border: 3px solid #c19a6b !important;
          outline: none !important;
        }

        .perfil-page a {
          text-decoration: none !important;
          border: none !important;
          outline: none !important;
        }

        .perfil-page button {
          border: none !important;
          outline: none !important;
        }
        
      `}</style>
    </div>
  );
};

export default Perfil;  