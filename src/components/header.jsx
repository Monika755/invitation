import image from "../pictures/image.jpg";  
import arrow from "../pictures/arrow.png"; 
import "../App.css"; 


export default function Header() { 
    return ( 
        <> 
          <header className="container"> 
            <h1>Ծննդյան հրավիրատոմս</h1> 
            <h3> Անահիտ 25 </h3> 
            <img src={arrow}/>
    </header> 
        </>
    )
} 

