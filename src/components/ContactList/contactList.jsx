import { useSelector, useDispatch } from 'react-redux';
import { getItems, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const visibleContact = contacts.filter(filters =>
    filters.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {visibleContact.map(({ id, name, phone }) => {
        return (
          <li key={id} className="list-contact">
            {name} : {phone}
            <button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              className="btn-delete"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
