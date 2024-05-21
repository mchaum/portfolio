import React from 'react'
import emailjs from 'emailjs-com';
import LinkedinLogo from '../assets/Linkedin.webp';
import GithubLogo from '../assets/GitHub.png';

const SERVICE_ID = "service_1zhf4si";
const TEMPLATE_ID = "template_43ooham";
const PUBLIC_KEY = "tGM939Rg_T6VpDQUh";

const ContactForm = () => {

    // Fontion permattant l'envoi du formulaire via emailJS //
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
          .then((result) => {
            console.log(result.text);
            alert('Votre message a bien été envoyé !')
          }, (error) => {
            console.log(error.text);
            alert('Une erreur est survenue, merci de réessayer.')
          });
        e.target.reset()
      };

    return (
        <div className='form'>
            <form className="formContainer" onSubmit={handleOnSubmit}>
                <div className="formElement">
                    <label for="from_name">Nom</label>
                    <input type="text" id="from_name" name="from_name" placeholder="Votre nom.." required />
                </div>

                <div className="formElement">
                    <label>E-mail</label>
                    <input type="email" id="from_email" name="from_email" placeholder="Votre email.." required />
                </div>

                <div className="formElement">
                    <label for="message">Message</label>
                    <textarea name="message" rows="8" cols="30" placeholder="Votre message.." required />
                </div>
                <button type='submit' className='formButton'>Envoyer</button>
            </form>
        <div className='socials-container'>
        <a href="https://www.linkedin.com/in/mathilde-chaumard/"><img className='socials-img' src={LinkedinLogo} alt='Logo Linkedin' /></a>
            <a href='https://github.com/mchaum' ><img className='socials-img' src={GithubLogo} alt='Logo Github' /></a>
        </div>
        </div>
    )
}

export default ContactForm;