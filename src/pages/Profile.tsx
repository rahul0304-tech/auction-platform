import React from 'react';
import { User, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Profile: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-600 h-32"></div>
          <div className="px-6 pb-6">
            <div className="relative">
              <div className="absolute -top-16">
                <div className="w-32 h-32 bg-gray-200 rounded-full border-4 border-white flex items-center justify-center">
                  <User className="w-16 h-16 text-gray-400" />
                </div>
              </div>
            </div>
            
            <div className="mt-20">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold">John Doe</h1>
                  <p className="text-gray-600">Member since Jan 2024</p>
                </div>
                <Button variant="outline">Edit Profile</Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-gray-400 mr-2" />
                    <span>john.doe@example.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-gray-400 mr-2" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                    <span>New York, USA</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Statistics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600">Auctions Won</p>
                      <p className="text-xl font-bold">23</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Active Bids</p>
                      <p className="text-xl font-bold">5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="bg-white rounded-lg shadow-md divide-y">
            <div className="p-4">
              <p className="font-medium">Won auction for Vintage Camera</p>
              <p className="text-sm text-gray-500">2 days ago</p>
            </div>
            <div className="p-4">
              <p className="font-medium">Placed bid on Antique Clock</p>
              <p className="text-sm text-gray-500">4 days ago</p>
            </div>
            <div className="p-4">
              <p className="font-medium">Listed Classic Car for auction</p>
              <p className="text-sm text-gray-500">1 week ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};