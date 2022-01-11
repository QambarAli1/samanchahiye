import './App.css'
function Product(props) {
  return (
    <>
        <div className='product-component'>
            <img src={props.img_src} />
            <p> RS {props.price} </p>
        </div>
    </>

  );
}
export default Product;
