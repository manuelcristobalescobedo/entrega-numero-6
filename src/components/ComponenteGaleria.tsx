

export default function Galeria() {

   return (
  <>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: "auto auto",
        gap: "0.5rem",
        marginBottom: "4rem",
      }}
    >
      <div
        style={{
          backgroundImage: "url('/photos/Imagen1.jpg')",
          width: "100%",
          aspectRatio: "4 / 3",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          gridColumn: "1 / 3",
          gridRow: "1 / 3",
        }}
      ></div>

      <div
        style={{
          backgroundImage: "url('/photos/Imagen2.jpg')",
          width: "100%",
          aspectRatio: "4 / 3",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>

      <div
        style={{
          backgroundImage: "url('/photos/Imagen3.jpg')",
          width: "100%",
          aspectRatio: "4 / 3",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  </>
);
}