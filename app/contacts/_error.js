// pages/_error.js
function Error({ statusCode }) {
    return (
      <div>
        <h1>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</h1>
      </div>
    );
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
  };
  
  export default Error;
  