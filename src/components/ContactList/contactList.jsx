import { deleteContact } from 'redux/reducer';
import { useSelector, useDispatch } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  const visibleContact = contacts.filter(filters =>
    filters.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {visibleContact.map(({ id, name, number }) => {
        return (
          <li key={id} className="list-contact">
            {name} : {number}
            <button
              type="button"
              onClick={() => {
                dispatch(deleteContact(id));
              }}
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
