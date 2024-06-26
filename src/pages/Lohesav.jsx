import MantarComponent from "../components/MantarComponent";

const url = "/mahaveer_img/mahaveer_Bhojan.jpg";
const content ="नमो लोए सव्वसाहूणं। लोक में जो भी साधु हैं, उन सबको नमस्कार। जगत में जो भी साधु हैं, उन सबको नमस्कार। जो उन चार में कहीं भी छूट गए हों, उनके प्रति भी हमारा नमन न छूट जाए। क्योंकि उन चार में बहुत लोग छूट सकते हैं। जीवन बहुत रहस्यपूर्ण है, कैटेगराइज नहीं किया जा सकता, खांचों में नहीं बांटा जा सकता। इसलिए जो शेष रह जाएंगे, उनको सिर्फ साधु कहा--वे जो सरल हैं। और साधु का एक अर्थ और भी है। इतना सरल भी हो सकता है कोई कि उपदेश देने में भी संकोच करे। इतना सरल भी हो सकता है कोई कि आचरण को भी छिपाए। पर उसको भी हमारे नमस्कार पहुंचने चाहिए। ";
const audio1 = "/mp3/sadhu-1.mp3"

const wholeparagraph = "ये चार सुस्पष्ट रेखाएं हैं। लेकिन इन चार के बाहर भी जानने वाले छूट जाएंगे। क्योंकि जानने वालों को बांधा नहीं जा सकता कैटेगरी.ज में। इसलिए मंत्र बहुत हैरानी का है। इसलिए पांचवें चरण में एक सामान्य नमस्कार है--नमो लोए सव्वसाहूणं। लोक में जो भी साधु हैं, उन सबको नमस्कार। जगत में जो भी साधु हैं, उन सबको नमस्कार। जो उन चार में कहीं भी छूट गए हों, उनके प्रति भी हमारा नमन न छूट जाए। क्योंकि उन चार में बहुत लोग छूट सकते हैं। जीवन बहुत रहस्यपूर्ण है, कैटेगराइज नहीं किया जा सकता, खांचों में नहीं बांटा जा सकता। इसलिए जो शेष रह जाएंगे, उनको सिर्फ साधु कहा--वे जो सरल हैं। और साधु का एक अर्थ और भी है। इतना सरल भी हो सकता है कोई कि उपदेश देने में भी संकोच करे। इतना सरल भी हो सकता है कोई कि आचरण को भी छिपाए। पर उसको भी हमारे नमस्कार पहुंचने चाहिए। <br><br>सवाल यह नहीं है कि हमारे नमस्कार से उसको कुछ फायदा होगा, सवाल यह है कि हमारा नमस्कार हमें रूपांतरित करता है। न अरिहंतों को कोई फायदा होगा, न सिद्धों को, न आचार्यों को, न उपाध्यायों को, न साधुओं को--पर आपको फायदा होगा। यह बहुत मजे की बात है कि हम सोचते हैं कि शायद इस नमस्कार में हम सिद्धों के लिए, अरिहंतों के लिए कुछ कर रहे हैं, तो इस भूल में मत पड़ना।";
const heading = "नमो लोए सव्वसाहूणं। ";
const audio2 = "/mp3/loyesav1.mp3"


const Lohesav = () => {
  return (
    <div>
      <MantarComponent
        heading={heading}
        wholeparagraph={{ __html: wholeparagraph }}
        url={url}
        content={content}
        audio1={audio1}
        audio2={audio2}

      />
    </div>
  );
};

export default Lohesav;



