import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    phone: '',
    email: '',
    country: '',
    city: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        lastName: '',
        firstName: '',
        phone: '',
        email: '',
        country: '',
        city: '',
        message: '',
      });
    }, 3000);
  };

  const inputClasses =
    'w-full px-4 py-3 border border-tf-border rounded-lg text-tf-text placeholder:text-tf-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white';

  return (
    <section id="contact" className="section-padding bg-white">
      <div
        ref={ref}
        className={`container-tf scroll-reveal ${isVisible ? 'visible' : ''}`}
      >
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-tf-text mb-2">
            {t('contact.title')}
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-lg text-tf-text">{t('contact.success')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-tf-text mb-1.5">
                    {t('contact.lastName')} *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder={t('contact.lastName')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-tf-text mb-1.5">
                    {t('contact.firstName')} *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder={t('contact.firstName')}
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-tf-text mb-1.5">
                  {t('contact.phone')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder={t('contact.phone')}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-tf-text mb-1.5">
                  {t('contact.email')} *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder={t('contact.email')}
                />
              </div>

              {/* Country & City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-tf-text mb-1.5">
                    {t('contact.country')} *
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder={t('contact.country')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-tf-text mb-1.5">
                    {t('contact.city')} *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder={t('contact.city')}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-tf-text mb-1.5">
                  {t('contact.message')} *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${inputClasses} resize-none`}
                  placeholder={t('contact.message')}
                />
              </div>

              {/* Submit */}
              <button type="submit" className="btn-primary w-full md:w-auto gap-2">
                <Send className="w-4 h-4" />
                {t('contact.submit')}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
