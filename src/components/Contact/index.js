import React from "react"

import Item from "./Item"
import Form from "./Form"
import styled from "styled-components"

const contactList = [
    {
        title: "NeuroN Foundation",
        phoneNumber: "+48 514 438 369‬‬",
        email: "contact@neuronfoundation.com",
    },
    {
        title: "New Neuropsychiatry",
        phoneNumber: "+48 795 553 121",
        email: "institut@newneuropsychiatry.com",
    },
    {
        title: "NeuroN Direction",
        phoneNumber: "+48 797 620 025",
        email: "office@neurondirection.com",
    },
    {
        title: "Oakes Innovate",
        phoneNumber: "‭+48 889 222 988‬",
        email: "office@oakesinnovate.com",
    },
    {
        title: "NTV Channel",
        phoneNumber: "+48 514 438 369‬‬",
        email: "channel@neurontv.com",
    },
    {
        title: "Oakes Clinic",
        phoneNumber: "+48 889 222 988",
        email: "office@oakesclinic.com",
    },
    {
        title: "Oak Atlantis",
        phoneNumber: "+48 889 222 988",
        email: "nation@oakatlantis.com",
    },
    {
        title: "Media i współpraca",
        phoneNumber: "+48 889 222 988‬",
        email: "media@smartoakproject.com",
    },
    {
        title: "Pomoc techniczna",
        phoneNumber: "+48 516 003 690",
        email: "help@smartoakproject.com",
    },
]

const ContactWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10rem;
    margin: 8rem 10rem;
    /* max-width: 100%; */

    @media screen and (max-width: 950px) {
        grid-template-columns: 1fr;
        grid-auto-flow: dense;
        grid-gap: 5rem;
    }
    @media screen and (max-width: 600px) {
        margin: 5rem 2rem;
        margin-top: 3rem;
    }
`

const ContactItems = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 25px;
    /* max-width: 100%; */
    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 25px;
        margin: 0 auto;

        /* margin: 0 auto; */
    }
    @media screen and (max-width: 790px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`

export default function Contact() {
    return (
        <ContactWrapper>
            <ContactItems>
                {contactList.map(e => {
                    return (
                        <Item
                            title={e.title}
                            phoneNumber={e.phoneNumber}
                            email={e.email}
                        />
                    )
                })}
            </ContactItems>
            <Form />
        </ContactWrapper>
    )
}
