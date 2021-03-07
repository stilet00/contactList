import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

class Contact extends Component {
    deleteButton = () => {
        this.props.onDelete(this.props.contact.id)
    }
    editButton = () => {
        this.props.onEdit(this.props.contact)
    }
    render() {
        return (
            <tr>
                <td>{this.props.contact.name}</td>
                <td>{this.props.contact.surname}</td>
                <td>{this.props.contact.phone}</td>
                <td>
                    <Button
                    variant="contained" color="primary"
                    onClick={this.deleteButton}
                    >
                    <DeleteForeverIcon />
                    </Button>
                    <Button
                        variant="contained" color="primary"
                        onClick={this.editButton}
                    >
                        <EditIcon />
                    </Button>
                </td>




            </tr>
        );
    }
}

export default Contact;