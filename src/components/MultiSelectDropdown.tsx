import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type Option = {
  label: string;
  value: string;
};

const options: Option[] = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
  { label: 'Option 4', value: 'option4' },
  { label: 'Option 5', value: 'option5' },
];

type MyFunctionType = (num: number) => void;

interface basicDetailsProps {
  setForm: MyFunctionType
}

const MultiSelectDropdown: React.FC<basicDetailsProps> = ({ setForm }) => {
  const Navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionToggle = (value: string) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter(option => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    if (dropdownRef.current && dropdownRef.current.contains(event.target as Node)) {
      event.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  const nextFunct = () => {
    setForm(2);
    Navigate('/');
  };

  return (
    <>
      <div className="w-96 relative">
        <p className="text-2xl font-bold mb-4">Select you options</p>
        <div
          className="border border-gray-300 rounded p-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOptions.length === 0 ? 'Select Options' : selectedOptions.join(', ')}
        </div>
        {isOpen && (
          <div ref={dropdownRef} className="absolute top-full left-0 bg-white border border-gray-300 mt-2 w-full rounded">
            {options.map(option => (
              <div
                key={option.value}
                className={`p-2 cursor-pointer hover:bg-gray-200 ${selectedOptions.includes(option.value) ? 'bg-gray-200' : ''
                  }`}
                onClick={() => handleOptionToggle(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center justify-around mt-10">
        <button onClick={() => Navigate('/')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Cancel
        </button>

        <button onClick={() => setForm(1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Previous
        </button>

        <button onClick={nextFunct} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Submit
        </button>
      </div>
    </>
  );
};

export default MultiSelectDropdown;
