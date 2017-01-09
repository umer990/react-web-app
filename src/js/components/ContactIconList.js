/**
 * Created by alexanderzheka on 12/22/16.
 */

import React, {Component} from 'react';
import ContactIcon from '../components/ContactIcon';

class ContactIconList extends Component {
    render() {
        return (
            <ul className="footer_socials">
                {this.props.contacts.map(function(contact, i){
                    return <ContactIcon key={i} image={contact.image} href={contact.href} />
                })}
            </ul>
        )
    }
}
export default ContactIconList;