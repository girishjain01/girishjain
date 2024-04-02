function MantarComponent(props) {
    const mainContentStyle = {
      backgroundImage: "url('/mahaveer_img/skywaterboat.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  
    return (
      <div className="container mx-auto">
        <div>
          <p className="text-center text-4xl" dangerouslySetInnerHTML={{ __html: props.mainheading }}></p>
        </div>
  
        <div
          className="flex flex-col sm:flex-row flex-wrap justify-center items-center border my-1 gap-5"
          style={mainContentStyle}
        >
          <div className="w-full sm:w-2/12 text-center">
            <img src={props.url} className="mx-auto max-w-full h-auto" alt="" />
          </div>
  
          <div className="w-full sm:w-8/12">
            <p className="text-5xl my-2 text-white" dangerouslySetInnerHTML={{ __html: props.heading }}></p>
            <p className="text-white leading-normal text-5xl md:text-3xl lg:leading-normal md:leading-normal text-justify " dangerouslySetInnerHTML={{ __html: props.content }}></p>
            
            <div>
              <audio controls>
                <source src={props.audio1} type="audio/mpeg" />
              </audio>
            </div>
          </div>
        </div>
  
        <div className="text-justify mx-10 mt-5 ">
          <p
            className="text-blck leading-normal text-5xl md:text-3xl lg:leading-normal md:leading-normal font-semibold"
            dangerouslySetInnerHTML={props.wholeparagraph}
          ></p>
          <div>
            <audio controls>
              <source src={props.audio2} type="audio/mpeg" />
            </audio>
          </div>
          <a
            href="sidh.html"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            और आगे है
          </a>
          <h3>
            <a href="sidh.html">नमो सिद्धाणं।.................</a>
          </h3>
        </div>
      </div>
    );
  }
  
  export default MantarComponent;
  