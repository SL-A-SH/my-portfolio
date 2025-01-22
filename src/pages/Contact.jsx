import { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="pt-20 px-4 sm:px-6 lg:px-8 min-h-screen text-white">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8">Get in Touch (Coming Soon)</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-[#1a1f2b] border border-gray-600 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-[#1a1f2b] border border-gray-600 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-2 rounded-lg bg-[#1a1f2b] border border-gray-600 focus:outline-none focus:border-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-[#1a1f2b] p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-500" />
                  <div>
                    <h3 className="text-sm text-gray-400">Email</h3>
                    <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-blue-500">
                      aqeeb.riz@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Github className="w-6 h-6 text-blue-500" />
                  <div>
                    <h3 className="text-sm text-gray-400">GitHub</h3>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500">
                      https://github.com/SL-A-SH
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Linkedin className="w-6 h-6 text-blue-500" />
                  <div>
                    <h3 className="text-sm text-gray-400">LinkedIn</h3>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500">
                      https://www.linkedin.com/in/aqeeb-rizwan/
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-sm text-gray-400 mb-2">Location</h3>
                <p className="text-gray-300">Newcastle Upon Tyne, UK</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;