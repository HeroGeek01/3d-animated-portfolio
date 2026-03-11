import { div, title } from "motion/react-client";
import "./portifolio.css";

const items =[
    {
        id: 1,
        img: "/p1.jpg",
        title: "Full Stack Blog Application",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur.",
        link: "/",

    },
    {
        id: 2,
        img: "/p2.jpg",
        title: "School Management System",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur.",
        link: "/",
    },

    {
        id: 3,
        img: "/p3.jpg",
        title: "Real-time Chat Application",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur.",
        link: "/",
    },

    {
        id: 4,
        img: "/p4.jpg",
        title: "Social Media Project",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur.",
        link: "/",
    },

    {
        id: 5,
        img: "/p5.jpg",
        title: "Animated Portifolio Website",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur.",
        link: "/",
    },
]

const ListItem = ({item}) => {
    return(
        <div className = "pItem">
            <div className = "pImg">
                <img src="{item.img}" alt="" />
            </div>
            <div className = "pText">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <a href={item.link}>
                    <button>View Project</button>
                </a>
            </div>
        </div>
    )
}
const Portfolio = () => {
    return ( 
        <div className = "portfolio">
            <div className ="pList">
                {items.map(items => (
                    <ListItem item ={item} key = {item.id}/>
                ))}
            </div>
        </div>
    )
};

export default Portfolio;
