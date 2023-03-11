'use client';

import { ShareIcon } from '@heroicons/react/24/outline';
import React from 'react';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

export default function ShareButton() {
  const onClick = () => {
    navigator.clipboard.writeText(window.location.href);
    toast('Copied to clipboard!');
  };

  return (
    <>
      <Toaster />
      <button onClick={onClick} className="btn-primary btn-sm btn gap-2">
        <ShareIcon className="h-4 w-4" />
        Share
      </button>
    </>
  );
}
