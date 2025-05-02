import React from 'react';
import { Globe, Server, Shield} from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <div className="group relative bg-white dark:bg-gray-950 dark:text-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden">
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${service.gradient}`} />
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl dark:bg-gray-900 bg-blue-100 flex items-center justify-center mb-6">
          <Icon className="w-7 h-7 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 dark:text-white">{service.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
      </div>
    </div>
  );
}

export function Service() {
  const services: Service[] = [
   {
    icon: Globe,
    title: "Frontend Development",
    description:"Developing responsive and interactive web interfaces with modern frameworks to ensure a seamless user experience.",
    gradient: "bg-gradient-to-br from-blue-400 to-blue-600"
  },
  {
    icon: Server,
    title: "Backend Development",
    description:"Creating scalable and secure backend systems with well-structured APIs and efficient database management.",
    gradient: "bg-gradient-to-br from-blue-500 to-blue-700"
  },
  {
    icon: Shield,
    title: "Securty & Authnetication",
    description: "Ensuring data protection with authentication systems, role-based access control, and security best practices",
    gradient: "bg-gradient-to-br from-blue-600 to-blue-800"
  }
  ];

  return (
    <div className="min-h-screen dark:bg-[#090c1aec] bg-white dark:text-white">
      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
           What I Can Do
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full" />
        
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}

