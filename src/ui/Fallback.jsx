import Button from './Button'

const Fallback = ({error, resetErrorBoundary}) => {
  return(
    <div className='flex bg-grey-500 p-[4.8rem] items-center justify-center h-screen'>
      <div className='bg-grey-50 border-[1px] border-grey-100 rounded-md text-center flex flex-col'>

      <h1>Something went wrong:</h1>
      <h1>{error.message}</h1>
      <Button onClick={resetErrorBoundary} className='bg-indigo-600 p-4 rounded-md'>
        Try Again
      </Button>
      </div>
    </div>
  );
};

export default Fallback;

