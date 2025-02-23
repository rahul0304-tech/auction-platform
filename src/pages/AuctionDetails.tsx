import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, DollarSign, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const AuctionDetails: React.FC = () => {
  const { id } = useParams();

  // Sample auction data
  const auction = {
    id: '1',
    title: 'Vintage Rolex Watch',
    description: 'A rare 1956 Rolex Submariner in excellent condition. This timepiece features original parts and comes with full documentation of its history.',
    startingPrice: 5000,
    currentBid: 7500,
    imageUrl: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    endDate: '2024-04-01',
    seller: {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com'
    },
    status: 'active',
    category: 'watches'
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img
            src={auction.imageUrl}
            alt={auction.title}
            className="w-full rounded-lg shadow-lg"
          />
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-gray-600">{auction.description}</p>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{auction.title}</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 mr-2" />
                <span>Ends in 2 days</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Tag className="w-5 h-5 mr-2" />
                <span>{auction.category}</span>
              </div>
            </div>

            <div className="border-t border-b py-4 my-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Current Bid:</span>
                <span className="text-2xl font-bold text-green-600">
                  ${auction.currentBid}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Starting Price:</span>
                <span className="text-gray-600">${auction.startingPrice}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="number"
                  placeholder="Enter your bid"
                  className="flex-1 px-4 py-2 border rounded-lg mr-2"
                />
                <Button>Place Bid</Button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Seller Information</h2>
            <div className="flex items-center">
              <User className="w-10 h-10 text-gray-400 mr-4" />
              <div>
                <p className="font-medium">{auction.seller.name}</p>
                <p className="text-gray-600 text-sm">Member since 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};