import React from 'react';

interface ShareButtonProps {
  title: string;
  url: string;
}

export const ShareButton: React.FC<ShareButtonProps> = ({ title, url }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
        console.log('Share successful');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that do not support the Web Share API
      alert('Sharing is not supported in this browser. Please copy the link manually.');
    }
  };

  return (
    <button onClick={handleShare} className="share-button">
      Share
    </button>
  );
};