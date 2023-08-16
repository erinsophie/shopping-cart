import { Link } from 'react-router-dom';

function Error() {
  return (
    <div>
      <p>Oh no! Something went wrong</p>
      <Link to="/">Go back to home page</Link>
    </div>
  );
}

export default Error;
