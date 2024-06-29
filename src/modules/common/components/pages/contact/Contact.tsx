import React from "react";
import contactModule from "@/modules/common/components/pages/contact/contact.module.scss";

import Header from "../../home/header/Header";
import Footer from "../../home/footer/Footer";
import Typography from '../../typography/Typography';

function Contact () {
    return (
        <>
        <Header />

            <section className={contactModule.contactMenu} >
                <div className={contactModule.divHeader}>
                    <span><Typography variant="h1" weight="bold">¡Contactanos!</Typography></span>
                    <p>Conoce a los creadores de <strong>PicShur</strong></p>
                </div>
            </section>
        
        <Footer />
        </>
    )
}

export default Contact;