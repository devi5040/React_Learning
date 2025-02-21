import React, {Fragment} from 'react';
import {useRouteError} from 'react-router-dom';
import PageContent from '../components/PageContent';
import MainNavigation from '../components/MainNavigation';

function Error () {
  const error = useRouteError ();
  let title = 'An error occured';
  let message = 'Something went wrong';
  if (error.status == 500) {
    message = JSON.parse (error.data).message;
  }

  if (error.status == 404) {
    title = 'Not Found';
    message = 'Page does not found';
  }
  return (
    <Fragment>
      <MainNavigation />
      <PageContent title={title}>
        {message}
      </PageContent>
    </Fragment>
  );
}

export default Error;
