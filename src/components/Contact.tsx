
import { useState, useEffect } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset submission status after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Use Intersection Observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('contact-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="contact" className="py-24 px-6 bg-notion-light">
      <div 
        id="contact-section"
        className={`max-w-6xl mx-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="text-center mb-16">
          <div className="pill inline-block mb-3">Get In Touch</div>
          <h2 className="text-3xl md:text-4xl font-bold text-notion-text mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-notion-text/70 max-w-2xl mx-auto">
            Whether you have a project in mind or simply want to connect, I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8 h-full">
              <h3 className="text-xl font-semibold text-notion-text mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-notion-gray/30 p-3 rounded-lg">
                    <Mail size={20} className="text-notion-text" />
                  </div>
                  <div>
                    <p className="text-sm text-notion-text/60 mb-1">Email</p>
                    <a 
                      href="mailto:hello@example.com" 
                      className="text-notion-text hover:text-notion-blue transition-colors"
                    >
                      hello@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-notion-gray/30 p-3 rounded-lg">
                    <MapPin size={20} className="text-notion-text" />
                  </div>
                  <div>
                    <p className="text-sm text-notion-text/60 mb-1">Location</p>
                    <p className="text-notion-text">San Francisco, California</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-md font-semibold text-notion-text mb-4">
                  Connect With Me
                </h4>
                <div className="flex gap-4">
                  {/* Social links */}
                  {['github', 'twitter', 'linkedin', 'dribbble'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-full bg-notion-gray/30 flex items-center justify-center text-notion-text hover:bg-notion-blue hover:text-white transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      {/* Replace with actual icons */}
                      <div className="w-5 h-5 bg-current opacity-20 rounded-full" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-notion-text mb-6">
                Send a Message
              </h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-green-800 mb-2">Message Sent!</h4>
                  <p className="text-green-600">Thank you for your message. I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-notion-text/70 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-notion-gray/30 rounded-lg focus:ring-2 focus:ring-notion-blue/30 focus:border-notion-blue/60 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-notion-text/70 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-notion-gray/30 rounded-lg focus:ring-2 focus:ring-notion-blue/30 focus:border-notion-blue/60 outline-none transition-all"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-notion-text/70 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-notion-gray/30 rounded-lg focus:ring-2 focus:ring-notion-blue/30 focus:border-notion-blue/60 outline-none transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-notion-text text-white rounded-lg font-medium flex items-center justify-center hover-lift disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
