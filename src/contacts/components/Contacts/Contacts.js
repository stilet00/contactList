import React, {Component} from 'react';
import ContactList from "../ContactList/ContactList";
import {createContact, editContact, getContacts} from "../../services/service";
import {deleteContact} from "../../services/service";
import Form from "../Form/Form";

class Contacts extends Component {
    state = {
        contactList: [],
        formShown: false,
        editedContact: {}
    }
    render() {
        let page
        if (!this.state.formShown) {
            page = <ContactList
                contactlist={this.state.contactList}
                onDelete={this.deleteContact}
                onEdit={this.editContact}
                formShown={this.state.formShown}
                addPressed={this.toggleFields}
            />
        } else {
            page = <Form
                formShown={this.state.formShown}
                validation={this.checkFields}
                onSave={this.createContact}
                onEdit={this.saveEditing}
                onCancel={this.cancelPressed}
                editedContact={this.state.editedContact}
            button = ''
            />
        }
        return (
           <>
               {page}
           </>
        );
    }
    componentDidMount() {
        getContacts().then(contactList => this.setState({contactList}))
    }
    deleteContact = (id) => {
        deleteContact(id).then(data => this.setState({
            contactList: this.state.contactList.filter((item) => item.id !== data.id)
        }))
    }
    checkFields = (data) => {
        if (!data.name || !data.surname || !data.phone) {
            return false
        } else {
            return true
        }
    }
    createContact = (newContact) => {
                createContact(newContact).then(res => {
                        this.setState({contactList: [...this.state.contactList, res]})
                        this.setState({formShown: !this.state.formShown})
                    }
                )

    }
    editContact = (contact) => {
            this.setState({editedContact: {...contact}})
            this.setState({formShown: !this.state.formShown})


    }

    saveEditing = (contact) => {
        editContact(contact).then(res => {
            this.setState({contactList: this.state.contactList.map(item => item.id === res.id ? res : item)})
            this.setState({formShown: !this.state.formShown})
            this.setState({editedContact: {}})

        })
    }
    toggleFields = () => {
        this.setState({formShown: !this.state.formShown})

    }
    cancelPressed = () => {
        this.setState({formShown: !this.state.formShown})
        this.setState({editedContact: {}})
    }
}

export default Contacts;