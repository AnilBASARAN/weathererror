const ErrorMessage = (props) => {
    const { message } = props;
    
    return (
      <div className="flex flex-col text-stone-500">
        <div className="flex flex-col items-center text-2xl text-center">
          <i className="mr-4 text-4xl text-yellow-400 fa-solid fa-triangle-exclamation"></i>
          <div>{message}</div>
        </div>
        <div className="mt-4 text-lg text-center">
          Try Refreshing?
        </div>
      </div>
    );
  };
  
  export default ErrorMessage;
  