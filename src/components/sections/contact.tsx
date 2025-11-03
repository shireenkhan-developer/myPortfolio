'use client';

import { useEffect, useRef, useState } from 'react';
import { Copy, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SocialIcons from '@/components/data-display/social-icons';
import IconButton from '@/components/general/icon-button';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import useWindowSize from '@/hooks/use-window-size';
import { copyTextToClipboard } from '@/lib/utils';
import SectionHeading from '@/components/general/section-heading';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
const TO_NAME = process.env.NEXT_PUBLIC_EMAILJS_TO_NAME || 'Shireen';
const TO_EMAIL = process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL || 'shireenkhan.412@gmail.com';

let email = 'shireenkhan.412@gmail.com';

type CopyValue = 'email';

const ContactSection = () => {
  const { width } = useWindowSize();
  const [isMounted, setIsMounted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [copiedValueType, setCopiedValueType] = useState<CopyValue | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCopyClick = async (text: string, type: CopyValue) => {
    try {
      await copyTextToClipboard(text);
      setIsCopied(true);
      setCopiedValueType(type);
      let timoutId: any = setTimeout(() => {
        setIsCopied(false);
        setCopiedValueType(null);
        clearTimeout(timoutId);
      }, 1500);
    } catch (error) {
      setIsCopied(false);
      setCopiedValueType(null);
      alert('Unable to copy!');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!SERVICE_ID) {
      alert('EmailJS Service ID is missing. Please add NEXT_PUBLIC_EMAILJS_SERVICE_ID to your .env.local file.');
      return;
    }
    
    if (!TEMPLATE_ID) {
      alert('EmailJS Template ID is missing. Please:\n1. Go to https://dashboard.emailjs.com/admin/template\n2. Create a new template with variables: {{from_name}}, {{from_email}}, {{message}}\n3. Add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID to your .env.local file.');
      return;
    }
    
    if (!PUBLIC_KEY) {
      alert('EmailJS Public Key is missing. Please:\n1. Go to https://dashboard.emailjs.com/admin\n2. Copy your Public Key from Account > General settings\n3. Add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY to your .env.local file.');
      return;
    }

    setLoading(true);
    
    // Prepare template parameters (only include variables that exist in your template)
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      // Optional: include these if your template uses them
      // to_name: TO_NAME,
      // to_email: TO_EMAIL,
    };

    console.log('Sending email with params:', {
      serviceId: SERVICE_ID,
      templateId: TEMPLATE_ID,
      templateParams,
    });

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      )
      .then(
        (response) => {
          setLoading(false);
          console.log('Email sent successfully:', response);
          alert('Thank you! I will get back to you as soon as possible.');
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error('EmailJS Error:', error);
          console.error('Error details:', {
            status: error.status,
            text: error.text,
            serviceId: SERVICE_ID,
            templateId: TEMPLATE_ID,
            templateParams,
          });
          
          let errorMessage = 'Something went wrong! ';
          
          if (error.status === 422) {
            if (error.text && error.text.includes('recipients address is empty')) {
              errorMessage = 'EmailJS Template Error: The recipient email address is not set.\n\n';
              errorMessage += 'To fix this:\n';
              errorMessage += '1. Go to https://dashboard.emailjs.com/admin/template\n';
              errorMessage += '2. Click on your template (template_wh3w30k)\n';
              errorMessage += '3. Find the "To Email" field in the template settings\n';
              errorMessage += '4. Enter: shireenkhan.412@gmail.com\n';
              errorMessage += '5. Save the template\n';
              errorMessage += '\nAlternatively, you can use a variable like {{to_email}} in the template and include it in the params.';
            } else {
              errorMessage += 'Please check that your EmailJS template uses these exact variable names: {{from_name}}, {{from_email}}, {{message}}. ';
            }
          } else if (error.status === 400) {
            errorMessage += 'Invalid EmailJS configuration. Please check your Service ID, Template ID, and Public Key. ';
          } else if (error.status === 401) {
            errorMessage += 'Unauthorized. Please check your EmailJS Public Key. ';
          }
          
          if (!errorMessage.includes('To fix this:')) {
            errorMessage += 'Please try again or contact me directly at shireenkhan.412@gmail.com';
          }
          alert(errorMessage);
        }
      );
  };

  return (
    <Container id="contact"
      style={{
        background: 'linear-gradient(to bottom, #25153d 0%, #1a0d2e 50%, #0a0515 100%)',
      }}
    >
      {/* Creative Section Heading */}
      <SectionHeading 
        label="Contact"
        title="Get In Touch"
        description="What's next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect."
      />

      <div className="flex flex-col items-center gap-8 md:gap-12 w-full max-w-4xl mx-auto">
        {/* Contact Form */}
        <motion.div
          className="w-full max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full p-6 md:p-8 rounded-xl"
            style={{
              background: 'rgba(30, 27, 75, 0.6)',
              border: '1px solid rgba(79, 70, 229, 0.3)',
            }}
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="py-3 px-4 rounded-lg text-white placeholder:text-white/50 bg-white/10 border border-white/20 focus:border-stellar-indigo/70 focus:outline-none focus:bg-white/15 transition-all backdrop-blur-sm"
                placeholder="ex. John Doe"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="py-3 px-4 rounded-lg text-white placeholder:text-white/50 bg-white/10 border border-white/20 focus:border-stellar-indigo/70 focus:outline-none focus:bg-white/15 transition-all backdrop-blur-sm"
                placeholder="ex. johndoe@gmail.com"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="py-3 px-4 rounded-lg text-white placeholder:text-white/50 bg-white/10 border border-white/20 focus:border-stellar-indigo/70 focus:outline-none focus:bg-white/15 transition-all resize-none backdrop-blur-sm"
                placeholder="Share your thoughts..."
              />
            </label>

            <motion.button
              type="submit"
              className="bg-gradient-to-r from-stellar-indigo via-stellar-purple to-stellar-violet text-white w-full sm:w-fit py-3 px-6 rounded-lg font-bold outline-none self-center sm:self-start hover:shadow-lg hover:shadow-stellar-indigo/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'}
            </motion.button>
          </form>
        </motion.div>

        {/* Email with Copy */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 md:gap-5">
            <Mail className="h-6 w-6 md:h-8 md:w-8 text-stellar-indigo" />
            <Typography variant="h2" className="text-white glow-on-hover">{email}</Typography>
            <IconButton
              size={isMounted && width && width < 768 ? 'md' : 'lg'}
              onClick={() => handleCopyClick(email, 'email')}
              showTooltip={isCopied && copiedValueType === 'email'}
              tooltipText="Copied!"
            >
              <Copy />
            </IconButton>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Typography className="text-center text-white">
            You may also find me on these platforms!
          </Typography>
          <SocialIcons />
        </motion.div>
      </div>
    </Container>
  );
};

export default ContactSection;
