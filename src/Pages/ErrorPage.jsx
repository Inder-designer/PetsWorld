import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div
      id="error-page"
      className="flex items-center mt-10 h-screen flex-col text-start"
    >
      <div>
        <h1 className="text-2xl font-bold text-red-600 mb-3">Oops!</h1>
        <p className="font-medium">We're sorry. The Web address you entered is not a functioning page on our site.</p>
        <p>
          {/* <i>{error.statusText || error.message}</i> */}
        </p>
        <p className="font-bold mt-5 text-lg">
          Go to PetWorld.com's <Link to="/" className="text-yellow-600 underline">Home</Link> page
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
