import React, {Component} from 'react';
import './Form.css'
import {DefaultContact} from "../../constants/constants";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Form extends Component {
    state = {
        contact: {
            name: '',
            surname: '',
            phone: ''
        },
        editing: false
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        if (this.props.validation(this.state.contact)) {
            if (!this.state.editing) {
                this.props.onSave(this.state.contact)
            } else {
                this.props.onEdit(this.state.contact)
                this.setState({editing: false})
            }
            this.setState({contact: {...DefaultContact}})
        } else {
            alert('Non of the fields should not be empty')
        }



    }
    onInputChange = (e) => {
        this.setState({contact: {...this.state.contact, [e.target.name]: e.target.value}})

    }
    onCancelPress = (e) => {
        this.setState({contact: {...DefaultContact}})
        this.props.onCancel()
    }
    render() {
        return (
            <form action=""
                  onSubmit={this.onFormSubmit}
            >
                <TextField id="standard-basic" label="Enter your name"
                           value={this.state.contact.name}
                           onChange={this.onInputChange}
                           name={'name'}
                />
                <TextField id="standard-basic" label="Enter your surname"
                           value={this.state.contact.surname}
                           onChange={this.onInputChange}
                           name={'surname'}
                />
                <TextField id="standard-basic" label="Enter your phone number"
                           type="phone"
                           value={this.state.contact.phone}
                           onChange={this.onInputChange}
                           name={'phone'}
                />

                <Button
                    variant="contained"
                    color="primary"
                    type={"submit"}
                >Save
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.onCancelPress}
                >Cancel
                </Button>

            </form>
        );
    }
    componentDidMount() {

        if (this.props.editedContact.name) {
            this.setState({contact: {...this.props.editedContact}, editing: !this.state.editing})

        }
    }
}

export default Form;