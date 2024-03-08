import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin h-16 w-16 border-4 border-orange-500 rounded-full border-t-transparent"></div>
    </div>
  );
};

export default Loading;
