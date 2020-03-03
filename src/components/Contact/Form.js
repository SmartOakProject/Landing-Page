import React, { useState } from "react"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-intl"

const FormWrapper = styled.div`
    width: 100%;
`

const Btn = styled.button`
    background-color: #fff;
    cursor: pointer;
    color: #606060;
    border: 0.1rem solid #999;
    text-align: center;
    display: block;
    width: 100%;
    font-size: 14px;
    padding: 1rem 2rem;
    border-radius: 3px;

    &:hover {
        color: #3e3e3e;
        border: 0.1rem solid #000;
        box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.804);
        transition: all 0.3s ease;
    }
`
const Heading = styled.p`
    margin-bottom: 25px;
    font-size: 19px;
    font-weight: 300;
    text-align: center;
`
const TextArea = styled.textarea`
    font-size: 1.4rem;
    padding: 1rem 2rem;
    width: 100%;
    margin-bottom: 2.5rem;
    border-radius: 3px;
    color: #606060;
    border: 0.1rem solid #999;
    outline: none;
    resize: none;
    font-family: inherit;
    transition: all 0.2s;
    height: 20rem;

    &:focus {
        color: #3e3e3e;
        border: 0.1rem solid #000 !important;
    }
`
const EmailInput = styled.input`
    font-size: 1.4rem;
    padding: 1rem 2rem;
    width: 100%;
    margin-bottom: 2rem;
    border-radius: 3px;
    color: #606060;
    border: 0.1rem solid #999;
    outline: none;
    resize: none;
    font-family: inherit;
    transition: all 0.2s;
    &:focus {
        color: #3e3e3e;
        border: 0.1rem solid #000 !important;
    }
`
const EmailLabel = styled.label`
    display: block;
    color: #c91630;
    font-size: 1.4rem;
    padding-bottom: 1rem;
`
const Form = () => {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState(false)

    function send(e) {
        let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (validEmail.test(String(email).toLowerCase())) {
            setEmail("")
            setMessage("")
            setError(false)
        } else {
            setError(true)
        }
    }
    const intl = useIntl()
    return (
        <FormWrapper>
            <Heading>
                {intl.formatMessage({
                    id: "general.contactTitle",
                })}
            </Heading>
            <EmailLabel htmlFor="email-form">
                {error ? "Nieprawidłowy adres e-mail" : ""}
            </EmailLabel>
            <EmailInput
                id="email-from"
                type="email"
                placeholder={intl.formatMessage({
                    id: "general.yourEmail",
                })}
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                    border: error ? "1px solid #c91630" : "1px solid #999",
                }}
            />

            <TextArea
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder={intl.formatMessage({
                    id: "general.help",
                })}
            />

            <Btn className="sent" onClick={send}>
                {intl.formatMessage({
                    id: "general.send",
                })}
            </Btn>
        </FormWrapper>
    )
}

export default Form
