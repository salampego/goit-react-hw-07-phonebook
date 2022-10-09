import { useSelector, useDispatch } from 'react-redux';
import { getItems, getFilter, getLoading } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getLoading);
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
              {isLoading ? 'Deleting....' : 'Delete'}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
