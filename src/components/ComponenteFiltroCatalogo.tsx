export default function FiltroCatalogo() {

    return (
        <>
            <section style={{padding: "3rem 3rem 0 rem 3rem",
                             display: "flex",
                             flexDirection: "row",
                             justifyContent: "space-between",
            }}>
                <button className="abrir-filtros">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                        <path d="M222.92-202v-242.31h-72v-52h197v52h-73V-202h-52Zm0-381.69V-758h52v174.31h-52Zm159.08 0v-52h72V-758h52v122.31h72v52H382ZM454-202v-294.31h52V-202h-52Zm231.08 0v-122.31h-73v-52h197v52h-72V-202h-52Zm0-261.69V-758h52v294.31h-52Z"/>
                    </svg>
                    <p>Filtros</p>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                        <path d="M395.15-284v-52h169.31v52H395.15ZM256.16-454v-52h447.3v52h-447.3ZM164-624v-52h632v52H164Z"/>
                    </svg>
                    <p>Ordenar</p>
                </button>
            </section>
        </>
    )
}