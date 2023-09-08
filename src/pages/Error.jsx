import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="flex flex-col h-screen p-6 gap-3">
      <p className="text-2xl">
        Oops! This page does not exist
      </p>
      <Link to="/" className="text-blue-900 font-bold ">
        <i className="fa-solid fa-arrow-left"></i> Go back to Home page
      </Link>
    </div>
  );
}

export default Error;
