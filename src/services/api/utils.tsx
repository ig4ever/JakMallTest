import {showMessage} from 'react-native-flash-message';

// ** API Configuration  */
export const config = (contentType?: string) => ({
  headers: {
    'Content-Type': contentType ?? 'application/json',
  },
});

// ** API Error handler  */
export function handler(err: any) {
  let error = err;

  if (
    err.response &&
    err.response.data?.hasOwnProperty('message') &&
    err.data.error
  )
    error = err.response.data;
  else if (!err.hasOwnProperty('message')) error = err.toJSON();

  // ** Show error message within FlashMessage Component  */
  showMessage({
    message: error.message,
    type: 'danger',
  });

  return new Error(error.message);
}
