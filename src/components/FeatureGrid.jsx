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
          { icon: <Smartphone className="w-8 h-8" />, label: 'Cross-Platform', color: 'text-indigo-400' },
          { icon: <Shield className="w-8 h-8" />, label: 'Secure',           color: 'text-indigo-400' },
          { icon: <Clock className="w-8 h-8" />, label: 'Real-time',         color: 'text-indigo-400' },
        ];
      case 'education':
        return [
          { icon: <Video className="w-8 h-8" />, label: 'Video Calls', color: 'text-sky-400' },
          { icon: <MessageSquare className="w-8 h-8" />, label: 'Chat', color: 'text-sky-400' },
          { icon: <Users className="w-8 h-8" />, label: 'Attendance',  color: 'text-sky-400' },
        ];
      case 'hotel':
        return [
          { icon: <Search className="w-8 h-8" />, label: 'Search',      color: 'text-teal-400' },
          { icon: <Hotel className="w-8 h-8" />, label: 'Bookings',     color: 'text-teal-400' },
          { icon: <Calendar className="w-8 h-8" />, label: 'Availability', color: 'text-teal-400' },
        ];
      case 'test':
        return [
          { icon: <Timer className="w-8 h-8" />, label: 'Timer',   color: 'text-violet-400' },
          { icon: <CheckCircle className="w-8 h-8" />, label: 'Results', color: 'text-violet-400' },
          { icon: <Pencil className="w-8 h-8" />, label: 'Tests',  color: 'text-violet-400' },
        ];
      default:
        return [];
    }
  };

  return (
    <div className="w-full h-48 bg-brand-surface rounded-lg p-4">
      <div className="grid grid-cols-3 gap-4 h-full place-items-center">
        {getIcons().map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2 text-center">
            <div className={item.color}>
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