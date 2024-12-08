import React, { useEffect, useState } from 'react';
import { Plugins } from '@capacitor/core';
import { App } from '@capacitor/app';

const CheckAppInstalled = () => {
  const [isInstalled, setIsInstalled] = useState<boolean | null>(null);

  const checkAppInstalled = async (packageName) => {
    try {
      const result = await App.isAppInstalled({ packageName });
      setIsInstalled(result.installed);
    } catch (error) {
      console.error('Error checking app installation:', error);
      setIsInstalled(false);
    }
  };

  useEffect(() => {
    checkAppInstalled('com.example.app');
  }, []);

  return (
    <div>
      {isInstalled === null ? (
        <p>Checking app installation...</p>
      ) : isInstalled ? (
        <p>The app is installed.</p>
      ) : (
        <p>The app is not installed.</p>
      )}
    </div>
  );
};

export default CheckAppInstalled;
