import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Linkedin, Mail } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    inquiryType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setSuccessMessage(''); // Hide message when user starts typing
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, inquiryType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_uzam7yn', // Updated EmailJS service ID
        'template_wgzw8b9', // Provided EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          inquiry_type: formData.inquiryType,
          message: formData.message,
          to_email: 'info@go-aei.com'
        },
        'rAjIoN6wkO3qYek3a' // Provided EmailJS public key
      );

      toast.success('Message sent successfully!');
      setSuccessMessage('Your message has been sent successfully!');
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setSuccessMessage(''), 5000);
      setFormData({
        name: '',
        company: '',
        email: '',
        inquiryType: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-aei-light">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Work With Us</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Ready to access the right experts for your next strategy project, due diligence, or investment? Let's make it happen.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-12 text-center">
          <h4 className="text-xl font-bold text-aei-dark mb-4">Our Commitment</h4>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We're committed to finding the perfect expert match for your specific needs, 
            ensuring you get practical insights that drive real business decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-lg h-full">
              <h3 className="text-2xl font-bold text-aei-dark mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-aei-light p-3 rounded-full">
                    <Mail className="h-6 w-6 text-aei-dark" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:info@go-aei.com" className="text-aei-dark font-medium hover:text-aei-accent transition-colors">
                      info@go-aei.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-aei-light p-3 rounded-full">
                    <Linkedin className="h-6 w-6 text-aei-dark" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">LinkedIn</p>
                    <a href="https://www.linkedin.com/company/advertising-expert-intelligence/" target="_blank" rel="noopener noreferrer" className="text-aei-dark font-medium hover:text-aei-accent transition-colors">
                      Follow us on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-aei-dark mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name" 
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input 
                      id="company" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company" 
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@company.com" 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="inquiry-type">Inquiry Type</Label>
                  <Select onValueChange={handleSelectChange} value={formData.inquiryType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="expert-access">Expert Access</SelectItem>
                      <SelectItem value="due-diligence">Due Diligence</SelectItem>
                      <SelectItem value="market-insights">Market Insights</SelectItem>
                      <SelectItem value="become-expert">Become an Expert</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry" 
                    rows={5} 
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-aei-dark hover:bg-aei-accent"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                </Button>
              </form>
              {successMessage && (
                <div className="text-green-600 text-center mt-4 font-semibold animate-fade-in">
                  {successMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
