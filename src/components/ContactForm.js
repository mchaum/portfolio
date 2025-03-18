import React from 'react'
import emailjs from 'emailjs-com';
import LinkedinLogo from '../assets/Linkedin.webp';
import GithubLogo from '../assets/GitHub.webp';
import { useTranslation, Trans } from 'react-i18next';

const SERVICE_ID = "service_1zhf4si";
const TEMPLATE_ID = "template_43ooham";
const PUBLIC_KEY = "tGM939Rg_T6VpDQUh";

const ContactForm = () => {
    const { t } = useTranslation();

    // Fonction permettant l'envoi du formulaire via emailJS //
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert(t('formSuccess'));
            }, (error) => {
                console.log(error.text);
                alert(t('formError'));
            });
        e.target.reset()
    };

    return (
        <div className='form'>
            <form className="formContainer" onSubmit={handleOnSubmit}>
                <div className="formElement">
                    <label htmlFor="from_name"><Trans>{t("formNameLabel")}</Trans></label>
                    <input type="text" id="from_name" name="from_name" placeholder={t("formNamePlaceholder")} required />
                </div>

                <div className="formElement">
                    <label htmlFor="from_email"><Trans>{t("formEmailLabel")}</Trans></label>
                    <input type="email" id="from_email" name="from_email" placeholder={t("formEmailPlaceholder")} required />
                </div>

                <div className="formElement">
                    <label htmlFor="message"><Trans>{t("formMessageLabel")}</Trans></label>
                    <textarea name="message" id="message" rows="8" cols="30" placeholder={t("formMessagePlaceholder")} required />
                </div>
                <button type='submit' className='formButton'><Trans>{t("formSubmitButton")}</Trans></button>
            </form>
            <div className='socials-container'>
                <a href="https://www.linkedin.com/in/mathilde-chaumard/">
                    <img className='socials-img' src={LinkedinLogo} alt={t("linkedinAlt")} />
                </a>
                <a href='https://github.com/mchaum'>
                    <img className='socials-img' src={GithubLogo} alt={t("githubAlt")} />
                </a>
            </div>
        </div>
    )
}

export default ContactForm;