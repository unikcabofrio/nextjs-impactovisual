export default function LoudCard() {
    const count = 8;
    const items = Array.from({ length: count }, (_, index) => index);

    return (
        <>
            {items.map(index => (
                <div key={index} className="LoudCardProdutos">
                    <section className="Loudtop">
                        <div className="Loudtitulo"></div>
                        <div className="Loudimg"></div>
                    </section>
                    <section className="Loudprice">
                        <div>
                            <div className="LoudThead"></div>
                            <div className="LoudTBody"></div>
                        </div>
                    </section>
                </div>
            ))}
        </>
    );
}
