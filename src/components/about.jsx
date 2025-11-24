import "../App.css";   
import image from "../pictures/image.jpg";  
import cake from "../pictures/cake.jpg";  
import flowers from "../pictures/flowers.jpg"; 
import glass from "../pictures/glass.jpg";    
import location from "../pictures/caption.jpg";  

const images = [
  { id: 1, src: image, alt: "Birthday Image" },
  { id: 2, src: cake, alt: "Cake" },
  { id: 3, src: flowers, alt: "Flowers" },
];


export default function About () { 
    return ( 
        <div className="about-container">  
        <div className="about-text">
      <h1 className="name">Անահիտ</h1>
      <h2 className="age">25</h2>
    </div>
       <div className="gallery">
      {images.map((img) => (
        <img 
          key={img.id} 
          src={img.src} 
          alt={img.alt} 
          className="gallery-img" 
        />
      ))}
    </div>    

    <div className="text">                
        <h3>Սիրելի հարազատներ, բարեկամներ, ընկերներ,</h3> 
        <h3>Սիրով հրավիրում եմ Ձեզ միասին տոնելու իմ ծննդյան</h3>
          <h3> տարեդարձը։</h3> 
          <h2 className="date">25.12.2025</h2> 
          <img src={glass} alt="glass" width={200} height={200}/> 
        </div>  
        <div className="location"> 
           <h2>Ժամը` 16:00</h2> 
           <h1>Mayura Restaurant</h1>   
           <img src={location} alt="Mayura evn" width={400} height={400}/>
           <h3>Ինչպես հասնել <br/>3 Abovyan St, Yerevan 0001</h3>
          <iframe  
         className="loc"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.259534166436!2d44.512862575136566!3d40.18103726995205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd820b720493%3A0xbb33aa7afa40c88e!2sMayura!5e0!3m2!1sru!2sam!4v1763027769555!5m2!1sru!2sam"
  width="400"
  height="350"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

        </div> 
        </div>
    )
} 
 
