import React from "react"

import "./contact.css"
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

const ContactItems = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 25px;
`

export default function Contact() {
    return (
        <div className="contact">
            <Form />
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
        </div>
    )
}
