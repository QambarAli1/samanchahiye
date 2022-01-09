import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

function Benefits(props) {
  return (
    <>
        <div className='benefits-component'>
            {/* <LocalShippingIcon /> */}
            <p className='benicons'>{props.icon}</p>
            <h2>  {props.heading} </h2>
            <p> {props.para} </p>
        </div>
    </>

  );
}
export default Benefits;
