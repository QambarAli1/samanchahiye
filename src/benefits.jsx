import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function Benefits(props) {
  return (
    <>
        <div>
            <h2>  {props.heading} </h2>
            <p> {props.para} </p>
        </div>
    </>

  );
}
export default Benefits;
