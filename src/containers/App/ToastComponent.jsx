import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showSuccessToast = (message, options = {}) => {
  toast.success(message, options);
};

export const showErrorToast = (message, options = {}) => {
  toast.error(message, options);
};

export const showPromiseToast = (apiCall) => {
  return toast.promise(apiCall, {
    pending: 'Testing connection in progress...',
    success: {
      render({ data }) {
        return 'Success!!';
      },
    },
    error: {
      render({ data }) {
        return `Error: ${data.message}`;
      },
    },
  });
};

const ToastComponent = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
      stacked={true}
    />
  );
};

export default ToastComponent;
