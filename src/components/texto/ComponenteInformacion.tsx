

export default function Informacion() {

    return (
  <>
    <section
      className="SeccionInformacion"
      style={{
        padding: "6rem",
        background: "white",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem",
        color: "green",
        lineHeight: "1.6",
      }}
    >
      {/* Columna 1 */}
      <div style={{ maxWidth: "60ch" }}>
        <h4>En qué consiste</h4>
        <ol>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Curabitur pretium nibh erat, a luctus ante eleifend nec.</li>
          <li>Aenean condimentum velit facilisis ex ultrices commodo.</li>
          <li>In sodales odio sit amet orci facilisis, eget egestas diam blandit.</li>
        </ol>

        <h4>Más información</h4>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Curabitur pretium nibh erat, a luctus ante eleifend nec.</li>
          <li>Aenean condimentum velit facilisis ex ultrices commodo.</li>
          <li>In sodales odio sit amet orci facilisis, eget egestas diam blandit.</li>
        </ul>
      </div>

      {/* Columna 2 */}
      <div>
        <h4>Políticas de cancelación y modificación</h4>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Curabitur pretium nibh erat, a luctus ante eleifend nec.</li>
          <li>Aenean condimentum velit facilisis ex ultrices commodo.</li>
          <li>In sodales odio sit amet orci facilisis, eget egestas diam blandit.</li>
        </ul>

        <h4>Qué está incluido</h4>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Curabitur pretium nibh erat, a luctus ante eleifend nec.</li>
          <li>Aenean condimentum velit facilisis ex ultrices commodo.</li>
          <li>In sodales odio sit amet orci facilisis, eget egestas diam blandit.</li>
        </ul>

        <h4>Qué no está incluido</h4>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Curabitur pretium nibh erat, a luctus ante eleifend nec.</li>
          <li>Aenean condimentum velit facilisis ex ultrices commodo.</li>
          <li>In sodales odio sit amet orci facilisis, eget egestas diam blandit.</li>
        </ul>
      </div>
    </section>
  </>
);
}