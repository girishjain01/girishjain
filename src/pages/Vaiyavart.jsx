import MantarComponent from "../components/MantarComponent";

const mainheading = "वैयावृत्य(धम्म-सूत्र)"
const url = "/mahaveer_img/devta.jpg";
const content ="धम्मो मंगलमुक्किट्ठं, <br> अहिंसा संजमो तवो। <br>देवा वि तं नमंसन्ति, <br>जस्स धम्मे सया मणो।। <br>         धर्म सर्वश्रेष्ठ मंगल है। (कौन सा धर्म?) अहिंसा, संयम और तपरूप धर्म। जिस मनुष्य का मन उक्त धर्म में सदा संलग्न रहता है, उसे देवता भी नमस्कार करते हैं। ";
const audio1 = "/mp3/dhamomangal.mp3"

const wholeparagraph = "तीसरा अंतर-तप महावीर ने कहा है, वैयावृत्य। वैया वृत्य का अर्थ होता है--सेवा। लेकिन महावीर सेवा से बहुत दूसरे अर्थ लेते हैं। सेवा का एक अर्थ है मसीही, क्रिश्चियन अर्थ है। और शायद पृथ्वी पर ईसाइयत ने, अकेले धर्म ने सेवा को प्रार्थना और साधना के रूप में विकसित किया। लेकिन महावीर का सेवा से वैसा अर्थ नहीं है। ईसाइयत का जो अर्थ है, वही हम सबको ज्ञात है। महावीर का जो अर्थ है, वह हमें ज्ञात नहीं है। और महावीर के अनुयायियों ने जो अर्थ कर रखा है वह अति सीमित, अति संकीर्ण है।<br><br>परंपरा वैयावृत्य से इतना ही अर्थ लेती रही है, वह सुविधापूर्ण है इसलिए। वृद्ध साधुओं की सेवा, रुग्ण साधुओं की सेवा--ऐसा परंपरा अर्थ लेती रही है। ऐसा अर्थ लेने के कारण हैं, क्योंकि साधु यह सोच ही नहीं सकता कि वह असाधु की सेवा करे। जो साधु नहीं हैं, वे ही साधु की सेवा करने आते हैं। जैनों में तो प्रचलित है कि जब वे साधु का दर्शन करने जाते हैं तो उनको आप पूछें--कहां जा रहे हैं? तो वे कहते हैं--सेवा के लिए जा रहे हैं। धीरे-धीरे साधु का दर्शन करना भी सेवा के लिए जाना ही हो गया। इसलिए गृहस्थ साधु से जाकर पूछेगा--कुशल तो है, मंगल तो है, कोई तकलीफ तो नहीं? कोई असाता तो नहीं, वह इसीलिए पूछ रहा है कि कोई सेवा का अवसर मुझे दें तो मैं सेवा करूं।<br><br>साधु की सेवा, ऐसा वैयावृत्य का अर्थ ले लिया गया। निश्चित ही साधु, तथाकथित साधु का इस अर्थ में हाथ है। क्योंकि महावीर ने--किसकी सेवा, यह नहीं कहा है। तो यह अर्थ महावीर का नहीं है। जो अर्थ है उसमें वृद्ध साधु और रुग्ण साधु और साधु की सेवा भी आ जाएगा। लेकिन यही इसका अर्थ नहीं है। दूसरा सेवा का जो प्रचलित रूप है आज, वह ईसाइयत के द्वारा दिया गया अर्थ है। और भारत में विवेकानंद से लेकर गांधी तक ने जो भी सेवा का अर्थ किया है, वह ईसाइयत की सेवा है। और अब जो लोग थोड़े अपने को नयी समझ का मानते हैं वे महावीर की सेवा से भी वैसा अर्थ निकालने की कोशिश करते हैं। ";

const audio2 = "/mp3/dharam2.mp3"


const Vaiyavart = () => {
  return (
    <div>
      <MantarComponent
        mainheading={mainheading }
        // heading={heading}
        wholeparagraph={{ __html: wholeparagraph }}
        url={url}
        content={content}
        audio1={audio1}
        audio2={audio2}

      />
    </div>
  );
};

export default Vaiyavart;



