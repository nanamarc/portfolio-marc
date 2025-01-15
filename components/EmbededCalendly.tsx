import { useEffect } from 'react';
import { Calendar } from 'lucide-react';

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CalendlyPopupWidget = ({meet}:{meet:string}) => {
  useEffect(() => {
    // Dynamically load the Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    // Append the script to the document head
    document.head.appendChild(script);

    // Cleanup the script on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handlePopup = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/herilala1818/30min',
      });
    }
  };

  return (
    <>
      {/* Include the Calendly widget CSS */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      {/* Button to trigger the popup */}
      <button
        id="schedule-me-button"
        onClick={handlePopup}
        className='flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors'
      >
        <Calendar className="w-5 h-5" />
        {meet}
      </button>
    </>
  );
};

export default CalendlyPopupWidget;
