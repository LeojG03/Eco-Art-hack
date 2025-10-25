'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SubirProducto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    imagen: '',
    precio: ''
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aquí podrías guardar el producto en localStorage o enviarlo a un backend
    localStorage.setItem("productoNuevo", JSON.stringify(formData));
    
    alert("✅ Producto subido exitosamente");
    router.push('/productos');
  };

  return (
    <div className="subir-producto-page">
      <div className="form-container">
        <h2>Subir Producto</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre del producto</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            name="descripcion"
            rows="3"
            value={formData.descripcion}
            onChange={handleChange}
            required
          />

          <label htmlFor="imagen">Enlace de imagen (Google Drive)</label>
          <input
            type="url"
            id="imagen"
            name="imagen"
            placeholder="https://drive.google.com/..."
            value={formData.imagen}
            onChange={handleChange}
            required
          />

          <label htmlFor="precio">Precio (MXN)</label>
          <input
            type="number"
            id="precio"
            name="precio"
            min="1"
            step="0.01"
            value={formData.precio}
            onChange={handleChange}
            required
          />

          <button type="submit">Subir producto</button>
        </form>

        <Link href="/productos" className="back-link">
          ← Volver a productos
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
          background-color: #f5f0eb;
          color: #3e2f27;
          font-family: "Poppins", sans-serif;
          line-height: 1.6;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .subir-producto-page {
          background-color: #f5f0eb;
          color: #3e2f27;
          font-family: "Poppins", sans-serif;
          line-height: 1.6;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          width: 100%;
          position: relative;
        }

        .subir-producto-page .form-container {
          background-color: #fffaf4;
          border: 1px solid #e0d5cc;
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(80, 60, 50, 0.1);
          padding: 40px;
          width: 90%;
          max-width: 450px;
          text-align: center;
          margin: 80px auto;
        }

        .subir-producto-page .form-container h2 {
          margin-bottom: 30px;
          color: #3b2e26;
          font-size: 1.8rem;
          font-weight: bold;
        }

        .subir-producto-page .form-container label {
          display: block;
          text-align: left;
          margin-top: 20px;
          margin-bottom: 8px;
          font-weight: bold;
          color: #3b2e26;
          font-size: 0.95rem;
        }

        .subir-producto-page .form-container input,
        .subir-producto-page .form-container textarea {
          width: 100%;
          padding: 12px;
          margin-bottom: 5px;
          border: 1px solid #d8c7b9;
          border-radius: 8px;
          background-color: #fff8f3;
          transition: all 0.2s ease;
          font-family: "Poppins", sans-serif;
          font-size: 0.95rem;
          box-sizing: border-box;
        }

        .subir-producto-page .form-container input:focus,
        .subir-producto-page .form-container textarea:focus {
          border-color: #c6a28b;
          outline: none;
          background-color: #fff;
        }

        .subir-producto-page .form-container input::placeholder {
          color: #a0a0a0;
          font-style: italic;
        }

        .subir-producto-page .form-container textarea {
          resize: vertical;
          min-height: 80px;
        }

        .subir-producto-page .form-container button {
          margin-top: 30px;
          padding: 14px 24px;
          background-color: #a6795d;
          color: #fff;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          font-family: "Poppins", sans-serif;
          font-size: 1rem;
          box-shadow: 0 3px 10px rgba(80, 50, 40, 0.15);
        }

        .subir-producto-page .form-container button:hover {
          background-color: #8b624b;
          transform: scale(1.05);
          box-shadow: 0 4px 14px rgba(60, 40, 30, 0.25);
        }

        .subir-producto-page .back-link {
          display: block;
          margin-top: 25px;
          color: #3b2e26;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .subir-producto-page .back-link:hover {
          text-decoration: underline;
        }

        /* Eliminar bordes y líneas no deseadas */
        .subir-producto-page * {
          border: none;
          outline: none;
        }

        .subir-producto-page .form-container {
          border: 1px solid #e0d5cc !important;
          outline: none !important;
        }

        .subir-producto-page input,
        .subir-producto-page textarea {
          border: 1px solid #d8c7b9 !important;
          outline: none !important;
        }

        .subir-producto-page input:focus,
        .subir-producto-page textarea:focus {
          border-color: #c6a28b !important;
          outline: none !important;
        }

        .subir-producto-page button {
          border: none !important;
          outline: none !important;
        }

        .subir-producto-page a {
          text-decoration: none !important;
          border: none !important;
          outline: none !important;
        }
      `}</style>
    </div>
  );
};

export default SubirProducto;
