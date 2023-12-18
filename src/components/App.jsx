import { useDispatch, useSelector } from 'react-redux';
import { Phonebook, Container } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { fetchContacts } from '../redux/operactions';
import { useEffect } from 'react';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const users = useSelector(selectContacts);

  return (
    <Phonebook>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
      </Container>
      <Container>
        <h2>Contacts</h2>
        <>
          {isLoading && !error}
          <h3>Your phonebook has {users.length} contacts</h3>
          <Filter />
          <ContactList />
        </>
      </Container>
    </Phonebook>
  );
};
