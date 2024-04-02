import MantarComponent from "../components/MantarComponent";

const url = "/img/mahaveer.jpg";
const content ="उपाध्यायों को नमस्कार। उपाध्याय का अर्थ है--आचरण ही नहीं, उपदेश भी। उपाध्याय का अर्थ है--ज्ञान ही नहीं, आचरण ही नहीं, उपदेश भी। वे जो जानते हैं, जान कर वैसा जीते हैं; और जैसा वे जीते हैं और जानते हैं, वैसा बताते भी हैं। उपाध्याय का अर्थ है--वह जो बताता भी है। क्योंकि हम मौन से न समझ पाएं। आचार्य मौन हो सकता है। वह मान सकता है कि आचरण काफी है। और अगर तुम्हें आचरण दिखाई नहीं पड़ता तो तुम जानो। उपाध्याय आप पर और भी दया करता है। वह बोलता भी है, वह आपको कह कर भी बताता है।";
const audio1 = "/mp3/upadhay1-1.mp3"

const wholeparagraph = "ये चार सुस्पष्ट रेखाएं हैं। लेकिन इन चार के बाहर भी जानने वाले छूट जाएंगे। क्योंकि जानने वालों को बांधा नहीं जा सकता कैटेगरी.ज में। इसलिए मंत्र बहुत हैरानी का है। इसलिए पांचवें चरण में एक सामान्य नमस्कार है--नमो लोए सव्वसाहूणं।";
const heading = "नमो उवज्झायाणं। ";
const audio2 = "/mp3/sidhanam-1-1.mp3"


const Uwajayanam = () => {
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

export default Uwajayanam;



