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
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <div className="bg-[#1a1f2b] p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-500" />
                  <div>
                    <h3 className="text-sm text-gray-400">Email</h3>
                    <a href="mailto:aqeeb.riz@gmail.com" className="text-gray-300 hover:text-blue-500">
                      aqeeb.riz@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Github className="w-6 h-6 text-blue-500" />
                  <div>
                    <h3 className="text-sm text-gray-400">GitHub</h3>
                    <a href="https://github.com/SL-A-SH" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500">
                      https://github.com/SL-A-SH
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Linkedin className="w-6 h-6 text-blue-500" />
                  <div>
                    <h3 className="text-sm text-gray-400">LinkedIn</h3>
                    <a href="https://linkedin.com/in/aqeeb-rizwan/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500">
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
    </main>
  );
};

export default Contact;