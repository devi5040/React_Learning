import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
  redirect,
} from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({method, event}) {
  const data = useActionData ();
  const navigation = useNavigation ();
  const navigate = useNavigate ();
  function cancelHandler () {
    navigate ('..');
  }

  const isSubmitting = navigation.state == 'submitting';

  return (
    <Form method={method} className={classes.form}>
      {/*Using Form will send request to the action instead of backend as form will do . If we use the action attribute in this Form and then we want to send data to an action function in some other path we can use action='/some-other-path' */}
      {data &&
        data.errors &&
        <ul>
          {Object.values (data.errors).map (err => <li key={err}>{err}</li>)}
        </ul>}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ''}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ''}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : ''}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ''}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Submitting' : 'Save'}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;

export async function newEventAction({request, params}) {
  const method = request.method;
  const data = await request.formData ();
  const eventData = {
    title: data.get ('title'),
    image: data.get ('image'),
    date: data.get ('date'),
    description: data.get ('description'),
  };
  let url = 'http://localhost:8080/events';
  if (method === 'PATCH') {
    const eventId = params.eventId;
    url = 'http://localhost:8080/events/' + eventId;
  }
  const response = await fetch (url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify (eventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw Response (
      JSON.stringify ({message: 'Error occured while sending data'}),
      {status: 500}
    );
  }
  return redirect ('/events');
}
