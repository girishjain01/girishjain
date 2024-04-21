


function Mainsearchcomponent(props) {
  const cleanHtml = (html) => {
    // HTML से <br> टैग हटाने के लिए एक सिंपल फंक्शन
    return html.replace(/<br\s*\/?>/gi, "");
  };
  function truncateHtml(html, maxLength = 100) {
    const cleanHtml = html.replace(/<br\s*\/?>/gi, ""); // HTML से <br> टैग हटाएं
    return cleanHtml.length > maxLength
      ? cleanHtml.substring(0, maxLength) + "..."
      : cleanHtml;
  }
  

  return (
    <div className="container mx-auto ">
      <div>
      <div>
        <h3>क्रम संख्या:{props.sno}</h3> {/* Displaying the serial number */}
       
      </div>
        <p
          className="text-black font-semibold first-line:text-indigo-500"
          dangerouslySetInnerHTML={{ __html: props.heading }}
        ></p>
      </div>
      <div className="flex flex-col sm:flex-row my-1 gap-1">
        {/* <div className="w-full sm:w-2/12 text-center">
          <img src={props.url} className="mx-auto max-w-full h-auto" alt="" />
        </div> */}

        <div className=" w-full sm:w-8/12">
          <p
            className="my-0 text-black"
            dangerouslySetInnerHTML={{ __html: props.subheading }}
          ></p>
          <p
            className="leading-normal  text-justify text-red-500 font-bold"
            dangerouslySetInnerHTML={{ __html: cleanHtml(props.sutar) }}
          ></p>
          <p
            className="text-black  text-justify "
            dangerouslySetInnerHTML={{ __html: props.arth }}
          ></p>
          <div>
            {/* <audio controls>
              <source src={props.audio1} type="audio/mpeg" />
            </audio> */}
          </div>
        </div>
      </div>

      <div className="text-justify mx-10 mt-1">
      <p className="text-3xl md:text-2xl lg:text-2xl
              first-line:text-indigo-500 font-semibold 
              leading-normal md:leading-relaxed lg:leading-loose
              word-spacing-normal"
     dangerouslySetInnerHTML={props.description}>
  </p>
    <div>
          <audio controls>
            <source src={props.audio2} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  );
}

export default Mainsearchcomponent;
