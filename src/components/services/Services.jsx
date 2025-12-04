import "./services.css";
import MacbookContainer from "./cpu/MacbookContainer";
import Counter from "./Counter";

const service =[
    {
        id: 1,
        img: "/service1.png",
        title: "Desenvolvimento Web",
        counter: 35,
    },
    {
        id: 2,
        img: "/service2.png",
        title: "Design de Produto",
        counter: 23,
    },
    {
        id: 3,
        img: "/service3.png",
        title: "Branding",
        counter: 13,

    }
]

const Services = () => {
    return (
        <div className="services">
            <div className="sSection left">
                <h1 className="sTitle">Como posso ajudar?</h1>
                <div className="serviceList">
                    {service.map((service) => (
                        <div className="service" key={service.id}>

                            <div className="serviceIcon">
                                <img src={service.img} alt="" />
                            </div>

                            <div className="serviceInfo">
                                <h2>{service.title}</h2>
                                <h3>{service.counter} Projetos</h3>
                            </div>

                        </div>
                    ))}

                </div>

                <div className="counterList">
                    <Counter from={0} to={104} text="Projetos Completos"/>
                    <Counter from={0} to={72} text="Clientes Felizes"/>
                </div>
            </div>

            <div className="sSection right">
                <MacbookContainer/>
            </div>
        </div>
    )
};

export default Services;
