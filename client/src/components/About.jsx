import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function About() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/questions');
        setFaqs(response.data.questioneries);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
        setError('Failed to load FAQs');
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <p className="text-gray-700 font-bold">FAQ Fauget</p>
        <p className="text-3xl">Common Questions About Our</p>
        <p className="text-2xl text-[#5d48c4] font-bold">Travel App Fauget</p>
      </div>

      {loading ? (
        <p className="text-center">Loading FAQs...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid gap-6">
          {faqs.map((faq, index) => (
            <div
              key={faq._id}
              className="bg-gray-100 rounded-lg shadow-md transition-all hover:shadow-lg"
            >
              {/* Question Header */}
              <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <p className="text-lg font-semibold text-[#5d48c4]">
                  {faq.question}
                </p>
                <span className="text-gray-500 text-xl">
                  {openIndex === index ? '➖' : '➕'}
                </span>
              </div>

              {/* Collapsible Answer with Smooth Transition */}
              <div
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="p-4 bg-white rounded-b-2xl text-left">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
