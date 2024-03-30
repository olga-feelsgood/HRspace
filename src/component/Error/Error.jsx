import './Error.css';


function Error(props) {

  return (
    <span className='error'>{props.errorMessage}</span>
   )
}

export default Error;