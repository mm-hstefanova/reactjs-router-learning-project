import classes from './EventItem.module.css';
import { Link, useSubmit } from 'react-router-dom';

function EventItem({ event }) {
  const submit = useSubmit();

  function startDeleteHandler() {
    // we need to trigger an action and to submit some data programatically
    const proceed = window.confirm('Are u sure?');

    if (proceed) {
      submit(null, { method: 'DELETE' });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to={'edit'}>Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
