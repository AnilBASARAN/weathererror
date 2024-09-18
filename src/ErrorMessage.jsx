import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const ErrorMessage = (props) => {
    const { message } = props;
    
    return (
      <div className="flex flex-col text-stone-500">
        <div className="flex flex-col items-center text-2xl text-center">
        <FontAwesomeIcon icon={faTriangleExclamation} className='text-red-500 text-4xl' />
          <div>{message}</div>
        </div>
        <div className="mt-4 text-lg text-center">
          Try Refreshing?
        </div>
      </div>
    );
  };
  
  export default ErrorMessage;
  