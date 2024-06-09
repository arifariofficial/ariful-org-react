import { useRouteError } from "react-router-dom";

interface ErrorWithMessage {
  statusText?: string;
  message?: string;
}

export default function ErrorPage() {
  const error = useRouteError() as ErrorWithMessage; // Type assertion
  console.error(error);

  return (
    <div className="grid h-screen place-content-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
