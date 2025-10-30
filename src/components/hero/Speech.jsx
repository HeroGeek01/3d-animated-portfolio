import { TypeAnimation } from "react-type-animation";
import "./hero.css";

const Speech = () => {
  return (
    <div className='bubbleContainer'>
        <div className = "bubble">
            <TypeAnimation
                sequence={[
                    1000,
                    "Seja bem vindo ao meu portfolio",
                    1000,
                    "Lorem ipsum dolor sit amet lerinat consectetur adipisicing. ",
                    1000,
                ]}
                wraper="span"
                speed={40}
                deletionSpeed={50}
                repeat={Infinity}
            />

        </div>
        <img src="/man.png" alt=""/>
    </div>
  )
}

export default Speech