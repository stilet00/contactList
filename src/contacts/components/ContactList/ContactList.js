import React, {Component} from 'react';
import Contact from "../Contact/Contact";
import './ContactList.css'
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';

class ContactList extends Component {
    render() {
        return (

            <table className={"container"}>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Surname</td>
                    <td>Phone</td>
                </tr>
                </thead>
                <tbody>
                {this.props.contactlist.map(contact => {
                    return  <Contact
                        key={contact.id}
                        contact={contact}
                        onDelete={this.props.onDelete}
                        onEdit={this.props.onEdit}
                    />
                })}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.props.addPressed}

                ><AddIcon /></Button>
                </tbody>

            </table>
        );
    }
}

export default ContactList;