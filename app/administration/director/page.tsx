'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function DirectorPage() {
  const language = useSelector((state: RootState) => state.language.value);
  return (
    <div className="min-h-screen bg-white">
      

      <div className="bg-gray-50 py-4 px-6 md:px-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link
              href="/"
              className="hover:text-[#800000] transition-colors duration-200"
            >
              {language == 'en' ? 'Home' : 'होम'}
            </Link>
            <span>›</span>
            <span className="text-gray-400">
              {language == 'en' ? 'Administration' : 'प्रशासन'}
            </span>
            <span>›</span>
            <span className="text-[#800000] font-medium">
              {language == 'en' ? 'Director' : 'निदेशक'}
            </span>
          </nav>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-[#800000] via-[#631012] to-[#8B1E1E] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center py-24 md:py-32 px-6 md:px-12"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            {language == 'en' ? 'Director' : 'निदेशक'}
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            {language == 'en'
              ? "Leadership and Director's message from National Institute of Technology, Hamirpur."
              : 'राष्ट्रीय प्रौद्योगिकी संस्थान, हमीरपुर के नेतृत्व और निदेशक का संदेश।'}
          </p>
        </motion.div>
      </section>

      {/* Combined Director Section */}
      <section className="relative py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200">
            <div className="grid md:grid-cols-3 gap-12 items-start">
              {/* Image and Quick Info */}
              <div className="md:col-span-1 flex flex-col items-center">
                <div className="w-72 h-96 bg-gradient-to-br from-[#800000] to-[#631012] rounded-lg overflow-hidden shadow-2xl mb-6">
                  <Image
                    src="/nith-director.jpg"
                    alt="Prof. Hiralal Murlidhar Suryawanshi"
                    width={280}
                    height={360}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
                  {language == 'en'
                    ? 'Prof. Hiralal Murlidhar Suryawanshi'
                    : 'प्रो. हीरालाल मुरलीधर सुर्यवंशी'}
                </h2>
                <p className="text-[#800000] font-semibold text-lg mb-4">
                  {language == 'en' ? 'Director' : 'निदेशक'}
                </p>

                <Link
                  href="https://vnit.ac.in/engineering/electrical/dr-h-m-suryawanshi/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#800000] text-white font-semibold rounded-2xl hover:bg-[#631012] shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {language == 'en' ? 'Full Profile' : 'पूरी प्रोफाइल'}
                </Link>
              </div>

              {/* Director's Vision and Message */}
              <div className="md:col-span-2">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {language == 'en'
                      ? 'Vision & Mission'
                      : 'दृष्टिकोण और मिशन'}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {language == 'en'
                      ? 'My prime priority will be to build National Institute of Technology Hamirpur a world class Institute imparting quality education and promoting excellent research activities, having impact on society and industry globally.'
                      : 'मेरी प्रमुख प्राथमिकता राष्ट्रीय प्रौद्योगिकी संस्थान हमीरपुर को एक विश्व स्तरीय संस्थान बनाना है जो गुणवत्तापूर्ण शिक्षा प्रदान करता है और उत्कृष्ट अनुसंधान गतिविधियों को बढ़ावा देता है, जिसका समाज और उद्योग पर वैश्विक प्रभाव है।'}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {language == 'en'
                      ? 'Message from the Director'
                      : 'निदेशक का संदेश'}
                  </h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
                    <p>
                      {language == 'en'
                        ? 'Greetings and a Warm Welcome to one and all for joining us at National Institute of Technology, Hamirpur, India. National Institute of Technology, Hamirpur, is one of the premier autonomous Institution of National Importance in Northern India under the act of Parliament-2007. It is a state of art Institution and a dream destination for those who wish to be leaders in Science and Technology. Besides being recognized nationally and internationally for excellent education at undergraduate level, we are also making wide strides in innovative research and other development activities.'
                        : 'राष्ट्रीय प्रौद्योगिकी संस्थान, हमीरपुर में हमारे साथ जुड़ने के लिए सभी का स्वागत है। राष्ट्रीय प्रौद्योगिकी संस्थान, हमीरपुर, संसद-2007 के अधिनियम के तहत उत्तरी भारत में राष्ट्रीय महत्व का एक प्रमुख स्वायत्त संस्थान है। यह अत्याधुनिक संस्थान है और विज्ञान और प्रौद्योगिकी में नेता बनने के इच्छुक लोगों के लिए एक स्वप्न गंतव्य है। स्नातक स्तर पर उत्कृष्ट शिक्षा के लिए राष्ट्रीय और अंतरराष्ट्रीय स्तर पर मान्यता प्राप्त होने के अलावा, हम नवीन अनुसंधान और अन्य विकास गतिविधियों में भी बड़ी प्रगति कर रहे हैं।'}
                    </p>

                    <p>
                      {language == 'en'
                        ? "Being a National Level Institute we have a unique group of outstanding young minds from almost all the states and UT's of the country. Students from diverse backgrounds get to network with each other and get to identify and comprehend the wide spectrum of varied cultural and regional practices in our country. Students are not only given exposure to the latest technological advances in their chosen field but also trained to be responsible citizens of our country. The rich and unique learning environment at NIT develops the student physically, intellectually and emotionally. A series of activities such as a cultural festival, a technical festival, industry-focused seminars and extracurricular activities, open them to challenges of leadership. We not only enable our students to fulfill their dreams but also mentor them to think BIG. During their tenure at the institute, the students are given enriching and life-defining experience that enables them to reach new heights in their professional and personal lives."
                        : 'एक राष्ट्रीय स्तर के संस्थान के रूप में हमारे पास देश के लगभग सभी राज्यों और केंद्र शासित प्रदेशों से असाधारण युवा प्रतिभाएं हैं। विविध पृष्ठभूमि के छात्र एक-दूसरे के साथ नेटवर्क बनाते हैं और हमारे देश की विविध सांस्कृतिक और क्षेत्रीय प्रथाओं को समझते हैं। छात्रों को न केवल अपने चुने हुए क्षेत्र में नवीनतम तकनीकी प्रगति का एक्सपोजर दिया जाता है, बल्कि उन्हें अपने देश के जिम्मेदार नागरिक बनने के लिए प्रशिक्षित किया जाता है। एनआईटी का समृद्ध और अद्वितीय शिक्षण वातावरण छात्र को शारीरिक, बौद्धिक और भावनात्मक रूप से विकसित करता है। सांस्कृतिक त्योहार, तकनीकी त्योहार, उद्योग-केंद्रित सेमिनार और अतिरिक्त गतिविधियों जैसी गतिविधियों की एक श्रृंखला उन्हें नेतृत्व की चुनौतियों के लिए खोलती है। हम न केवल अपने छात्रों को अपने सपने पूरे करने में सक्षम बनाते हैं बल्कि उन्हें बड़ी सोचने के लिए मार्गदर्शन भी देते हैं। संस्थान में अपने कार्यकाल के दौरान, छात्रों को समृद्ध और जीवन-परिभाषित अनुभव दिए जाते हैं जो उन्हें अपने व्यावसायिक और व्यक्तिगत जीवन में नई ऊंचाइयों तक पहुंचने में सक्षम बनाते हैं।'}
                    </p>

                    <p>
                      {language == 'en'
                        ? 'Our alumni are forerunners in several Multi-National Organizations and amongst successful entrepreneurs and renowned academicians with a significant contribution towards society. The Institute is known for producing some of the best engineers and technocrats for the country. The industry has always been appreciative of the talent pool offered by the institute and this has resulted into exemplary placements across all domains. Numerous reputed Industrial and Consultancy Corporates visit the institute campus for recruitment. The students bag stellar profiles and packages per annum.'
                        : 'हमारे पूर्व छात्र कई बहुराष्ट्रीय संगठनों में अग्रदूत हैं और समाज में महत्वपूर्ण योगदान देने वाले सफल उद्यमी और प्रतिष्ठित शिक्षाविद हैं। संस्थान देश के कुछ सर्वश्रेष्ठ इंजीनियर और तकनीकविद बनाने के लिए जाना जाता है। उद्योग हमेशा संस्थान द्वारा दी जाने वाली प्रतिभा पूल की सराहना करता रहा है और इसके परिणामस्वरूप सभी क्षेत्रों में उत्कृष्ट प्लेसमेंट हुई है। कई प्रतिष्ठित औद्योगिक और परामर्श निगम भर्ती के लिए संस्थान के परिसर में आते हैं। छात्र प्रति वर्ष शानदार प्रोफाइल और पैकेज हासिल करते हैं।'}
                    </p>

                    <p>
                      {language == 'en'
                        ? 'The Institution has a team of highly qualified, learned and dedicated faculty with expertise in all major disciplines of engineering and technology, science and management, and is a constant source of inspiration for the students. They are actively involved in raising the standards of not only our institute but also other institutions by collaborating with them and by sharing knowledge through faculty/student interaction programmes from time to time.'
                        : 'संस्थान के पास अत्यधिक योग्य, विद्वान और समर्पित संकाय की एक टीम है जिनके पास इंजीनियरिंग और प्रौद्योगिकी, विज्ञान और प्रबंधन की सभी प्रमुख विषयों में विशेषज्ञता है, और छात्रों के लिए निरंतर प्रेरणा का स्रोत है। वे न केवल अपने संस्थान के मानकों को बढ़ाने में सक्रिय रूप से शामिल हैं बल्कि अन्य संस्थानों के साथ सहयोग करके और समय-समय पर संकाय/छात्र संचरण कार्यक्रमों के माध्यम से ज्ञान साझा करके अन्य संस्थानों के मानकों को भी बढ़ा रहे हैं।'}
                    </p>

                    <p>
                      {language == 'en'
                        ? "The Institute has ongoing academic and research collaborations with many national and international universities in order to keep pace with increasing frontiers of knowledge. In order to align with country's major policy initiatives of Make in India; Digital India; Start-up India; the Institute in process of setting up an Incubation Centre, so as to support technology and knowledge based entrepreneurship and to provide a platform for speedy commercialization of technologies."
                        : 'संस्थान के पास ज्ञान की बढ़ती सीमाओं के साथ तालमेल रखने के लिए कई राष्ट्रीय और अंतरराष्ट्रीय विश्वविद्यालयों के साथ चल रहे शैक्षणिक और अनुसंधान सहयोग हैं। देश की मेक इन इंडिया, डिजिटल इंडिया, स्टार्ट-अप इंडिया जैसी प्रमुख नीति पहलों के साथ संरेखित करने के लिए; संस्थान एक इनक्यूबेशन सेंटर की स्थापना की प्रक्रिया में है, ताकि प्रौद्योगिकी और ज्ञान आधारित उद्यमशीलता का समर्थन किया जा सके और तकनीकों के तीव्र व्यावसायीकरण के लिए एक मंच प्रदान किया जा सके।'}
                    </p>

                    <p className="pt-4 border-t border-gray-200">
                      <span className="block">
                        {language == 'en'
                          ? 'Once again, I wish all the students an outstanding, momentous and valuable stay at NIT, Hamirpur and hope that you achieve your destinations/goals and emerge as top-notch engineers, technocrats, educationists or scientists.'
                          : 'एक बार फिर, मैं सभी छात्रों को एनआईटी, हमीरपुर में एक असाधारण, महत्वपूर्ण और मूल्यवान रहने की कामना करता हूं और आशा करता हूं कि आप अपने लक्ष्य/उद्देश्य प्राप्त करें और प्रथम श्रेणी के इंजीनियर, तकनीकविद, शिक्षाविद या वैज्ञानिक बनकर उभरें।'}
                      </span>
                      <span className="block font-semibold mt-4">
                        {language == 'en'
                          ? "Good Luck 'n Good Wishes!!"
                          : 'शुभकामनाएं!!'}
                      </span>
                      <span className="block">
                        {language == 'en'
                          ? 'Jai Hind Jai Bharat!!'
                          : 'जय हिंद जय भारत!!'}
                      </span>
                      <span className="block mt-4">
                        {language == 'en' ? 'Director' : 'निदेशक'}
                      </span>
                      <span className="block text-sm">
                        {language == 'en'
                          ? 'National Institute of Technology'
                          : 'राष्ट्रीय प्रौद्योगिकी संस्थान'}
                      </span>
                      <span className="block text-sm">
                        {language == 'en' ? 'Hamirpur (HP)' : 'हमीरपुर (एचपी)'}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
