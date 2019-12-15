import React, { Component } from "react"
import styled from "styled-components"

const FormWrapper = styled.div`
    width: 90%;
    margin-left: auto;
    @media screen and (max-width: 1100px) {
        width: 100%;
    }
    @media screen and (max-width: 600px) {
        order: 2;
    }
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
    margin-bottom: 20px;
    font-size: 18px;
`
const TextArea = styled.textarea`
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
    height: 15rem;

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
class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            message: "",
            error: false,
        }
    }

    send = e => {
        var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (validEmail.test(String(this.state.email).toLowerCase())) {
            this.setState({
                email: "",
                message: "",
                error: false,
            })
        } else {
            this.setState({
                error: true,
            })
        }
    }
    render() {
        return (
            <FormWrapper>
                <Heading>
                    Nie wiesz do kogo się zwrócić? Zapraszamy do kontaktu.
                </Heading>
                <EmailLabel htmlFor="email-form">
                    {this.state.error ? "Nieprawidłowy adres e-mail" : ""}
                </EmailLabel>
                <EmailInput
                    id="email-from"
                    type="email"
                    placeholder="Twój e-mail"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                    style={{
                        border: this.state.error
                            ? "1px solid #c91630"
                            : "1px solid #999",
                    }}
                />

                <TextArea
                    value={this.state.message}
                    onChange={e => this.setState({ message: e.target.value })}
                    placeholder="Jak możemy pomóc?"
                />

                <Btn className="sent" onClick={this.send}>
                    Wyślij
                </Btn>
            </FormWrapper>
        )
    }
}

export default Form
