import React from 'react';

interface CopyResultsButtonProps {
  results: string; // The results to be copied to the clipboard
}

export const CopyResultsButton: React.FC<CopyResultsButtonProps> = ({ results }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(results)
      .then(() => {
        alert('Results copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <button onClick={handleCopy} className="bg-blue-500 text-white py-2 px-4 rounded">
      Copy Results
    </button>
  );
};