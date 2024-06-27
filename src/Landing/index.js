import './index.css'
import mickey from './mickey.jpeg'


const Landing = ()=>{
    return(
        <div className='landing-text'>
            <div>
            <h1>HOT TREND</h1>
            <h1 className='mickey'>MICKEY T-SHIRT</h1>
            <p className='french'>CLARITAS EST ETIAM 10% OFF DYNAMICUS</p>
            <p className='shop'>SHOP NOW</p>
            </div>


            <div>
                <img src={mickey} alt='mickeyTshirt'/>
            </div>
        </div>
    )
}

export default Landing;