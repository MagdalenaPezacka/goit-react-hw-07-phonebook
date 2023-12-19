import {
  List,
  Contact,
  ContactName,
  ContactNumber,
  Button,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts, selectIsLoading } from '../../redux/selectors';
import { deleteContact } from '../../redux/operactions';

export const ContactList = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector(state => {
  //   return state.contacts.items.filter(item =>
  //     item.name.toLowerCase().trim().includes(state.filter.toLowerCase().trim())
  //   );
  // });
  const contacts = useSelector(getFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <List>
        {!!isLoading && <b>Loading contacts...</b>}
        {contacts.map(contact => (
          <Contact key={contact.id}>
            <ContactName>{contact.name}</ContactName>
            <ContactNumber>{contact.phone}</ContactNumber>
            <Button
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </Button>
          </Contact>
        ))}
      </List>
    </>
  );
};
