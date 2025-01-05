import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { contactInfo } from '../../config/contactInfo';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
          <Mail className="text-purple-500" />
        </div>
        <div>
          <h3 className="text-white font-semibold">Email</h3>
          <a 
            href={`mailto:${contactInfo.email}`}
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            {contactInfo.email}
          </a>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
          <MapPin className="text-purple-500" />
        </div>
        <div>
          <h3 className="text-white font-semibold">Location</h3>
          <p className="text-gray-400">{contactInfo.location}</p>
          <p className="text-gray-400 text-sm">{contactInfo.availability}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;