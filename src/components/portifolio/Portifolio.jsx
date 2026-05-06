import { useState, useEffect, useRef } from "react";
import "./portifolio.css";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const items = [
    { id: 1, img: "/p1.jpg", title: "Full Stack", desc: "Lorem Ipsum", link: "/" },
    { id: 2, img: "/p2.jpg", title: "Gerencia de Escola", desc: "Lorem Ipsum", link: "/" },
    { id: 3, img: "/p3.jpg", title: "Chat Bot", desc: "Lorem Ipsum", link: "/" },
    { id: 4, img: "/p4.jpg", title: "Rede Social", desc: "Lorem Ipsum", link: "/" },
    { id: 5, img: "/p5.jpg", title: "Site PHP", desc: "Lorem Ipsum", link: "/" }
];

const imgVariants = {
    initial: {
        x: -500,
        y: 500,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    }
};

const textVariants = {
    initial: {
        x: 500,
        y: 500,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            staggerChildren: 0.3,
        },
    }
};

const ListItem = ({ item }) => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-80px" });

    return (
        <div className="pItem" ref={ref}>
            <motion.div
                variants={imgVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                className="pImg"
            >
                <img src={item.img} alt={item.title} />
            </motion.div>

            <motion.div
                variants={textVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                className="pText"
            >
                <motion.h1>{item.title}</motion.h1>
                <motion.p>{item.desc}</motion.p>
                <motion.a href={item.link}>
                    <button>Ver Projeto</button>
                </motion.a>
            </motion.div>
        </div>
    );
};

const Portifolio = () => {
    const [containerDistance, setContainerDistance] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const ref = useRef();

    const isInView = useInView(ref, { margin: "-200px" })

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);

            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                setContainerDistance(rect.left);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const { scrollYProgress } = useScroll({ target: ref });

    const xTranslate = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -windowWidth * items.length]
    );

    return (
        <div className="portfolio" ref={ref}>
            <motion.div className="pList" style={{ x: xTranslate }}>
                <div
                    className="empty"
                    style={{ width: windowWidth - containerDistance }}
                />

                {items.map(item => (
                    <ListItem item={item} key={item.id} />
                ))}
            </motion.div>

            {/* espaço para scroll */}
            {items.map((_, i) => (
                <section key={i} />
            ))}

            <div className="pProgress" style={{display: isInView ? "block" : "none"}}>
                <svg width="100%" height="100%" viewBox="0 0 160 160">
                    <circle
                        cx="80"
                        cy="80"
                        r="70"
                        fill="none"
                        stroke="#ddd"
                        strokeWidth={20}
                    />

                    <motion.circle
                        cx="80"
                        cy="80"
                        r="70"
                        fill="none"
                        stroke="#dd4c62"
                        strokeWidth={20}
                        style={{ pathLength:scrollYProgress }}
                        transform="rotate(-90 80 80)"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Portifolio;