import React, { Component } from "react"

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
            // var template_params = {
            //     emialK: this.state.email,
            //     message: this.state.message,
            // }

            // var service_id = "default_service"
            // var template_id = "qwe"
            // emailjs.send(
            //     service_id,
            //     template_id,
            //     template_params,
            //     "user_9gdw09JxKNJT5GlaOOklB"
            // )

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
            <div className="form">
                <h4 className="section_heading">
                    Nie wiesz do kogo się zwrócić? Zapraszamy do kontaktu.
                </h4>
                <label className="email_label" htmlFor="email-form">
                    {this.state.error ? "Nieprawidłowy adres e-mail" : ""}
                </label>
                <input
                    id="email-from"
                    className="user_email"
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
                <div className="user_questions">
                    <div>
                        <textarea
                            value={this.state.message}
                            onChange={e =>
                                this.setState({ message: e.target.value })
                            }
                            placeholder="Jak możemy pomóc?"
                        />
                    </div>
                </div>
                <button className="sent" onClick={this.send}>
                    Wyślij
                </button>
            </div>
        )
    }
}

export default Form
