import img1 from "../assests/img.jpg"

//Product Component 

function Product(){
    return(
      <div className='products'>
      <div className='box'>
      <img src={img1}></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
  
      <div className='box'>
      <img src={img1}></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
  
      <div className='box'>
      <img src={img1}></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
      </div>
    
    )
  }

  export default Product