import '../css/notfound.css'
const NotFound = () => {
 
return (
    <>
    <body className='body'>
        <div className="error-container">
            <div className="error-title">404</div>
            <div className="error-message">Oops! The page you're looking for doesn't exist.</div>
            <a href="/" className="btn btn-primary btn-lg">Go Back to Home</a>
        </div>
   </body>
    </>
);





}

export default NotFound