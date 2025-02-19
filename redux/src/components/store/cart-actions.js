import {uiActions} from './ui-slice';
import {cartActions} from './cart-slice';

export const fetchCartData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch (
        'https://redux-learning-b12e6-default-rtdb.firebaseio.com/cart.json'
      );
      if (!response.ok) {
        throw new Error ('could not fetch cart data');
      }

      const data = await response.json ();
      return data;
    };

    try {
      const cartData = await fetchData ();
      dispatch (
        cartActions.replaceCart ({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch (
        uiActions.showNotification ({
          status: 'error',
          title: 'Error',
          message: 'fetching cart item failed',
        })
      );
    }
  };
};

export const sendCartData = cart => {
  return async dispatch => {
    dispatch (
      uiActions.showNotification ({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );
    const sendRequest = async () => {
      const response = await fetch (
        'https://redux-learning-b12e6-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify ({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error ('sending cart data failed');
      }
      const responseData = await response.json ();
    };
    try {
      await sendRequest ();
      dispatch (
        uiActions.showNotification ({
          status: 'success',
          title: 'success',
          message: 'Sent cart item successfully',
        })
      );
    } catch (error) {
      dispatch (
        uiActions.showNotification ({
          status: 'error',
          title: 'Error',
          message: 'Sending cart item failed',
        })
      );
    }
  };
};
