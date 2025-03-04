import React from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

export default function Project() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">My Project</h1>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
              onClick={async () => {
                try {
                  await supabase.auth.signOut();
                  navigate('/');
                } catch (error) {
                  toast.error('Error logging out');
                  console.error('Error:', error);
                }
              }}
            >
              Sign Out
            </button>
          </div>
          <p>Welcome to your project dashboard!</p>
        </div>
      </div>
    </div>
  );
}