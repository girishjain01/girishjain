import { useState, useEffect } from "react";

function Home() {
  const images = [
    "img/mahaveer_big.jpg",
    "img/oshobig.jpg",
    "mahaveer_img/skywaterboat.jpg",
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container pt-[50px] mx-auto ">
      <p className="text-center text-4xl m-3 text-red-500 font-bold">
  मंत्रः दिव्य-लोक की कुंजी (पंच-नमोकार-सूत्र)1
</p>

<div className="flex flex-col lg:flex-row md:flex justify-center items-center text-center">
  <div className="w-full lg:w-4/12 md:w-6/12 flex justify-center">
      
  <div>
  <img
    src={images[currentImage]}
    style={{
      borderRadius: '24px', // Tailwind's 'rounded-3xl' equivalent if you want to keep everything inline
      width: window.innerWidth >= 1024 ? '400px' : (window.innerWidth >= 768 ? '300px' : '200px'),
      height: window.innerWidth >= 1024 ? '400px' : (window.innerWidth >= 768 ? '300px' : '200px')
    }}
    alt="Carousel"
  />
</div>

        </div>
        <div className="text-3xl text-center font-extrabold leading-relaxed tracking-widest m-2" >
          <p >
            नमो अरिहंताणं।
            <br />
            नमो सिद्धाणं।
            <br />
            नमो आयरियाणं।
            <br />
            नमो उवज्झायाणं।
            <br />
            नमो लोए सव्वसाहूणं।
            <br />
            एसो पंच नमुक्कारो, सव्वपावप्पणासणो। <br />
            मंगलाणं च सव्वेसिं, पढमं हवइ मंगलं।।
            <br />
            <span className="inline-block mr-1 h-4 w-4 bg-red-500 rounded-full"></span>
            अरिहंतों (अर्हतों) को नमस्कार।
            <span className="inline-block mr-1 h-4 w-4 bg-red-500 rounded-full"></span>
            सिद्धों को नमस्कार।
            <br />
            <span className="inline-block mr-1 h-4 w-4 bg-red-500 rounded-full"></span>
            आचार्यों को नमस्कार।
            <span className="inline-block mr-1 h-4 w-4 bg-red-500 rounded-full"></span>
            उपाध्यायों को नमस्कार।
            <br />
            <span className="inline-block mr-1 h-4 w-4 bg-red-500 rounded-full"></span>
            लोक संसार में सर्व साधुओं को नमस्कार।
            <br />
            ये पांच नमस्कार सर्व पापों के नाशक हैं और सर्व मंगलों में प्रथम मंगल
            रूप हैं।
            {/* Include audio file */}
            <audio controls>
              <source src="/mp3/namokar_mantar.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center border my-1 gap-5" >
          
        </div>
      </div>

      {/* ... rest of your component ... */}
    </div> 
  );
}

export default Home;













