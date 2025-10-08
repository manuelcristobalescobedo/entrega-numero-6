import { useState } from "react";

export default function Filtro() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          margin: "1rem",
          padding: "0.6rem 1.2rem",
          background: "darkgreen",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "500",
        }}
      >
        Abrir filtros
      </button>

      {/* OVERLAY (only visible when open) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            inset: "0",
            background: "rgba(0, 0, 0, 0.4)", // translucent dark overlay
            zIndex: "10",
          }}
        />
      )}

      {/* FILTER PANEL */}
      <aside
        style={{
          position: "fixed",
          top: "0",
          right: isOpen ? "0" : "-450px",
          width: "400px",
          height: "100vh",
          background: "lightgreen",
          padding: "1.5rem",
          boxShadow: isOpen ? "0 0 20px rgba(0,0,0,0.2)" : "none",
          transition: "right 0.4s ease",
          zIndex: isOpen ? "1001" : "20",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          overflowY: "auto",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "2px solid #000",
            paddingBottom: "0.5rem",
          }}
        >
          <h2 style={{ fontWeight: "600", margin: "0", color: "darkgreen" }}>Filtros</h2>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              background: "darkgreen",
              color: "white",
              border: "none",
              fontSize: "0.9rem",
              cursor: "pointer",
              borderRadius: "4px",
              width: "2rem",
              height: "2rem",
              paddingRight: "1.8rem",
              paddingBottom: "1.8rem"
            }}
          >
            ✕
          </button>
        </div>

        {/* CAMPOS DE FILTRO */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* UBICACIÓN */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
            <label style={{ fontWeight: "500", color: "darkgreen" }}>Ubicación</label>
            <input
              type="text"
              placeholder="Buscar ciudad o región"
              style={{
                padding: "0.5rem",
                borderRadius: "6px",
                border: "1px solid darkgreen",
                backgroundColor: "white",
              }}
            />
          </div>

          {/* FECHA */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
            <label style={{ fontWeight: "500", color: "darkgreen" }}>Fecha</label>
            <input
              type="date"
              style={{
                padding: "0.5rem",
                borderRadius: "6px",
                border: "1px solid darkgreen",
                backgroundColor: "white",
              }}
            />
          </div>

          {/* NÚMERO DE PERSONAS */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
            <label style={{ fontWeight: "500", color: "darkgreen" }}>Número de personas</label>
            <input
              type="number"
              min="1"
              placeholder="Ej: 2"
              style={{
                padding: "0.5rem",
                borderRadius: "6px",
                border: "1px solid darkgreen",
                backgroundColor: "white",
              }}
            />
          </div>

          {/* CATEGORÍA */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
            <label style={{ fontWeight: "500", color: "darkgreen" }}>Categoría</label>
            <select
              style={{
                padding: "0.5rem",
                borderRadius: "6px",
                border: "1px solid darkgreen",
                backgroundColor: "white",
              }}
            >
              <option value="">Selecciona una categoría</option>
              <option value="aventura">Aventura</option>
              <option value="cultura">Cultura</option>
              <option value="relajo">Relajo</option>
            </select>
          </div>
        </div>

        {/* BOTONES */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "0.8rem",
            marginBottom: "4rem"
          }}
        >
          <button
            style={{
              padding: "0.6rem 1.2rem",
              background: "darkgreen",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            Aplicar filtros
          </button>

          <button
            style={{
              padding: "0.6rem 1.2rem",
              background: "transparent",
              color: "darkgreen",
              border: "2px solid darkgreen",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            Limpiar filtros
          </button>
        </div>
      </aside>
    </>
  );
}