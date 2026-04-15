import "./contact.css";
import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"
 
const Contact = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID, 
                import.meta.env.VITE_TEMPLATE_ID, 
                form.current, {
                publicKey: import.meta.env.VITE_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FILED...', error.text);
                }

            );
    };
    return(
        <div className = "contact" ref={ref} onSubmit={sendEmail}>
             <div className="cSection">
                <form>
                    <h1 className="cTitle">Vamos manter em contato</h1>
                    <div className="formItem">
                        <label>Nome</label>
                        <input type="text" placeholder="Gustavo de Andrade" />
                    </div>
                    <div className="formItem">
                        <label>Email</label>
                        <input type="email" placeholder="andrade@gmail.com" />
                    </div>
                    <div className="formItem">
                        <label>Mensagem</label>
                        <textarea rows={10} placeholder="Escreva sua mensagem..."></textarea>
                    </div>
                    <button className="formButton">Enviar</button>

                </form>
             </div>
             <div className="cSection">SVG</div>
        </div>
    )
};

export default Contact;
