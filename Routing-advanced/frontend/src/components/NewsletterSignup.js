import {useFetcher} from 'react-router-dom';
import classes from './NewsletterSignup.module.css';
import {useEffect} from 'react';

function NewsletterSignup () {
  const fetcher = useFetcher ();
  const {data, state} = fetcher;

  useEffect (
    () => {
      if (state === 'idle' && data && data.message) {
        alert (data.message);
      }
    },
    [data, state]
  );

  return (
    <fetcher.Form
      action="/newsletter"
      method="post"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
  // fetcher.form should be used when we want to submit a form without navigating to that page,  We don't move to a different route
}

export default NewsletterSignup;
