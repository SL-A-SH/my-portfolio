import React from 'react';
import { 
  Smartphone, 
  Shield, 
  Users, 
  Clock, 
  Video, 
  MessageSquare,
  Hotel,
  ClipboardCheck,
  Calendar,
  Search,
  BookOpen,
  Timer,
  CheckCircle,
  Pencil
} from 'lucide-react';

const FeatureGrid = ({ type }) => {
  const getIcons = () => {
    switch(type) {
      case 'banking':
        return [
          { icon: <Smartphone className="w-8 h-8" />, label: 'Cross-Platform' },
          { icon: <Shield className="w-8 h-8" />, label: 'Secure' },
          { icon: <Clock className="w-8 h-8" />, label: 'Real-time' }
        ];
      case 'education':
        return [
          { icon: <Video className="w-8 h-8" />, label: 'Video Calls' },
          { icon: <MessageSquare className="w-8 h-8" />, label: 'Chat' },
          { icon: <Users className="w-8 h-8" />, label: 'Attendance' }
        ];
      case 'hotel':
        return [
          { icon: <Search className="w-8 h-8" />, label: 'Search' },
          { icon: <Hotel className="w-8 h-8" />, label: 'Bookings' },
          { icon: <Calendar className="w-8 h-8" />, label: 'Availability' }
        ];
      case 'test':
        return [
          { icon: <Timer className="w-8 h-8" />, label: 'Timer' },
          { icon: <CheckCircle className="w-8 h-8" />, label: 'Results' },
          { icon: <Pencil className="w-8 h-8" />, label: 'Tests' }
        ];
      default:
        return [];
    }
  };

  return (
    <div className="w-full h-48 bg-[#2a2f3b] rounded-lg p-4">
      <div className="grid grid-cols-3 gap-4 h-full place-items-center">
        {getIcons().map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2 text-center">
            <div className="text-blue-400">
              {item.icon}
            </div>
            <span className="text-sm text-gray-300">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;