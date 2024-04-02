import MantarComponent from "../components/MantarComponent";

const url = "/mahaveer_img/mahaveer_Bhojan.jpg";
const content ="सिद्ध का अर्थ होता है वे, जिन्होंने पा लिया।अरिहंत का अर्थ होता है वे, जिन्होंने कुछ छोड़ दिया। सिद्ध बहुत पाजिटिव शब्द है। सिद्धि, उपलब्धि, अचीवमेंट, जिन्होंने पा लिया। लेकिन ध्यान रहे, उनको ऊपर रखा है जिन्होंने खो दिया। उनको नंबर दो पर रखा है जिन्होंने पा लिया। क्यों?";
const audio1 = "/mp3/sidhanam-1.mp3"

const wholeparagraph = "सिद्ध अरिहंत से छोटा नहीं होता--सिद्ध वहीं पहुंचता है जहां अरिहंत पहुंचता है, लेकिन भाषा में पाजिटिव नंबर दो पर रखा जाएगा। नहीं, शून्य प्रथम है, होना द्वितीय है, इसलिए सिद्ध को दूसरे स्थल पर रखा। लेकिन सिद्ध के संबंध में भी सिर्फ इतनी ही सूचना हैः पहुंच गए, और कुछ नहीं कहा है। कोई विशेषण नहीं जोड़ा। पर जो पहुंच गए, इतने से भी हमारी समझ में नहीं आएगा। अरिहंत भी हमें बहुत दूर लगता है--शून्य हो गए जो, निर्वाण को पा गए जो, मिट गए जो, नहीं रहे जो। सिद्ध भी बहुत दूर हैं। सिर्फ इतना ही कहा है, पा लिया जिन्होंने। लेकिन क्या? और पा लिया, तो हम कैसे जानें? क्योंकि सिद्ध होना अनभिव्यक्त भी हो सकता है, अमेनिफेस्ट भी हो सकता है। <br><br>बुद्ध से कोई पूछता है कि आपके ये दस हजार भिक्षु--हां, आप बुद्धत्व को पा गए--इनमें और कितनों ने बुद्धत्व को पा लिया है? बुद्ध कहते हैंः बहुतों ने। लेकिन वह पूछने वाला कहता है--दिखाई नहीं पड़ता। तो बुद्ध कहते हैंः मैं प्रकट होता हूं, वे अप्रकट हैं। वे अपने में छिपे हैं, जैसे बीज में वृक्ष छिपा हो। तो सिद्ध तो बीज जैसा है, पा लिया। और बहुत बार ऐसा होता है कि पाने की घटना घटती है और वह इतनी गहन होती है कि प्रकट करने की चेष्टा भी उससे पैदा नहीं होती। इसलिए सभी सिद्ध बोलते नहीं, सभी अरिहंत बोलते नहीं। सभी सिद्ध, सिद्ध होने के बाद जीते भी नहीं। इतनी लीन भी हो सकती है चेतना उस उपलब्धि में कि तत्क्षण शरीर छूट जाए। इसलिए हमारी पकड़ में सिद्ध भी न आ सकेगा। और मंत्र तो ऐसा चाहिए जो पहली सीढ़ी से लेकर आखिरी शिखर तक, जहां जिसकी पकड़ में आ जाए, जो जहां खड़ा हो वहीं से यात्रा कर सके। इसलिए तीसरा सूत्र कहा है, आचार्यों को नमस्कार।";
const heading = "नमो सिद्धाणं। ";
const audio2 = "/mp3/sidhanam-1-1.mp3"


const Sidh = () => {
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

export default Sidh;


