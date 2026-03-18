import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Clock, MapPin, Phone, Star, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend visiting us every 6 months for a routine checkup and professional cleaning. Regular visits help us catch any potential issues early and keep your smile healthy."
    },
    {
      question: "Do you accept walk-in patients?",
      answer: "While we do our best to accommodate walk-ins, we highly recommend booking an appointment in advance to ensure you don't have to wait and receive the dedicated time you deserve."
    },
    {
      question: "Is teeth whitening safe?",
      answer: "Yes, professional teeth whitening is completely safe when performed by our experienced dentists. We use clinically proven methods that protect your enamel while giving you a brighter smile."
    },
    {
      question: "What should I do in a dental emergency?",
      answer: "If you're experiencing severe pain, a knocked-out tooth, or swelling, please call us immediately. We prioritize dental emergencies and will do our best to see you as soon as possible."
    }
  ];

  const reviews = [
    {
      name: "Sarah Lim",
      text: "Dr. Pauline is incredibly gentle and patient. I've always been anxious about dental visits, but the team here made me feel completely at ease. Highly recommended!",
      rating: 5
    },
    {
      name: "Ahmad Razak",
      text: "Very professional and clean clinic in USJ 1. The staff are friendly and the equipment looks very modern. Had my scaling done here and it was painless.",
      rating: 5
    },
    {
      name: "Michelle Wong",
      text: "Brought my kids here for their first dental checkup. Dr. Ng was fantastic with them, explaining everything in a fun way. They actually look forward to their next visit!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 rounded-bl-[100px] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col space-y-8"
            >
              <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full w-fit">
                <span className="flex h-2.5 w-2.5 rounded-full bg-blue-600"></span>
                <span className="text-sm font-medium text-blue-800">Accepting New Patients</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
                Professional Dental Care in <span className="text-blue-600">USJ 1</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg">
                Experience gentle, comprehensive dentistry in a calm and welcoming environment. Your comfort and oral health are our top priorities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="https://wa.me/60163403382?text=Hi,%20I'd%20like%20to%20enquire%20about%20booking%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book Appointment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="tel:+60163403382"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all duration-300"
                >
                  <Phone className="mr-2 w-5 h-5 text-blue-600" />
                  Call Us
                </a>
              </div>
              
              <div className="pt-6 flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm border border-slate-100">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
                </div>
                <div className="flex flex-col">
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <span className="text-base font-semibold text-slate-700">4.9/5 from 90+ reviews</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/hero-image.jpeg"
                  alt="Happy patient at Pauline and Ng Dental Clinic"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden md:block"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Modern Equipment</h4>
                    <p className="text-sm text-slate-600 mt-1">We use the latest technology for precise, painless treatments.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Bento Grid */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Dental Services</h2>
            <p className="text-lg text-slate-600">Comprehensive care tailored to your unique smile. We provide a full range of treatments to keep your teeth healthy and beautiful.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Large Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group"
            >
              <img src="/GeneralDentistry.jpeg" alt="General Dentistry" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">General Dentistry</h3>
                <p className="text-slate-200 max-w-md">Routine checkups, fillings, and preventive care to maintain your optimal oral health for life.</p>
              </div>
            </motion.div>

            {/* Medium Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl overflow-hidden relative group bg-white shadow-sm border border-slate-100"
            >
              <img src="/Orthodontics.jpeg" alt="Orthodontics" className="absolute inset-0 w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent h-48"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-white h-[calc(100%-12rem)] flex flex-col justify-center">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Orthodontics</h3>
                <p className="text-slate-600 text-sm">Braces and clear aligners for a perfectly straight smile.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl overflow-hidden relative group bg-white shadow-sm border border-slate-100"
            >
              <img src="/Scaling_and_polishing_dentistry_close_up_49c9f95ad0.jpeg" alt="Scaling & Polishing" className="absolute inset-0 w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent h-48"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-white h-[calc(100%-12rem)] flex flex-col justify-center">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Scaling & Polishing</h3>
                <p className="text-slate-600 text-sm">Professional cleaning for healthy gums and fresh breath.</p>
              </div>
            </motion.div>

            {/* Wide Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-3 rounded-3xl overflow-hidden relative group bg-blue-600 text-white flex flex-col md:flex-row items-center"
            >
              <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center h-full">
                <h3 className="text-2xl font-bold mb-4">Teeth Whitening</h3>
                <p className="text-blue-100 mb-6">Safe and effective treatments for a brighter, more confident smile. See results in just one visit.</p>
                <a href="#contact" className="inline-flex items-center font-semibold hover:text-blue-200 transition-colors w-fit">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
              <div className="w-full md:w-1/2 h-48 md:h-full overflow-hidden">
                <img src="/Whitening.jpeg" alt="Teeth Whitening" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="flex flex-col gap-4 mt-8">
                <img src="/unnamed 29.jpg" alt="Clinic Interior" className="rounded-2xl w-full h-48 md:h-64 object-cover shadow-lg" />
                <img src="/unnamed (27).jpg" alt="Patient Care" className="rounded-2xl w-full h-48 md:h-64 object-cover shadow-lg" />
              </div>
              <div className="flex flex-col gap-4">
                <img src="/unnamed 30.jpg" alt="Dental Equipment" className="rounded-2xl w-full h-48 md:h-64 object-cover shadow-lg" />
                <img src="/unnamed (28).jpg" alt="Happy Patient" className="rounded-2xl w-full h-48 md:h-64 object-cover shadow-lg" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">A Calming Approach to Dental Health</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Pauline and Ng Dental Clinic, we understand that visiting the dentist can be stressful. That's why we've designed our practice to feel more like a wellness space than a clinical office.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our experienced team takes the time to listen to your concerns, explain your options clearly without confusing jargon, and ensure you feel completely comfortable before we begin any treatment.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Gentle, patient-focused care",
                  "Modern, clean, and relaxing environment",
                  "Transparent pricing with no hidden fees",
                  "Experienced and friendly dental professionals"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Patients Say</h2>
            <p className="text-lg text-slate-600">Don't just take our word for it. Read about the experiences of our wonderful patients.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-700 mb-6 italic">"{review.text}"</p>
                <div className="font-semibold text-slate-900">{review.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Find answers to common questions about our clinic and services.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-slate-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 pt-1 text-slate-600 border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Healthier Smile?</h2>
              <p className="text-slate-300 mb-10 text-lg">
                Book your appointment today. Our friendly team is ready to welcome you and provide the best dental care possible.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400 mr-4 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Visit Us</h4>
                    <p className="text-slate-300">39, Jalan USJ 1/1a, Taman Subang Mewah,<br/>47620 Subang Jaya, Selangor</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400 mr-4 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Opening Hours</h4>
                    <p className="text-slate-300">Everyday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400 mr-4 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Contact</h4>
                    <p className="text-slate-300 mb-1">Phone: 016-340 3382</p>
                    <p className="text-slate-300">Email: paulineandngdental@hotmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <a
                  href="https://wa.me/60163403382?text=Hi,%20I'd%20like%20to%20enquire%20about%20booking%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-slate-900 bg-white hover:bg-slate-100 transition-all duration-300"
                >
                  WhatsApp Us Now
                </a>
              </div>
            </div>
            
            <div className="h-[400px] lg:h-auto min-h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15936.704857310217!2d101.6065742!3d3.047424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4db7f67610f1%3A0x638e0669dd7a5142!2sPauline%20and%20Ng%20Dental%20Clinic%20%40%20USJ%201!5e0!3m2!1sen!2smy!4v1773506721368!5m2!1sen!2smy" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
