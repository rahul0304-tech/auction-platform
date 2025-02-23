import React from 'react';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AuctionItem } from '@/components/AuctionItem';
import { Button } from '@/components/ui/Button';

const SAMPLE_MY_AUCTIONS = [
  {
    id: '1',
    title: 'Vintage Camera Collection',
    description: 'A collection of rare vintage cameras from the 1950s',
    startingPrice: 1000,
    currentBid: 1500,
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    endDate: '2024-04-15',
    seller: {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com'
    },
    status: 'active',
    category: 'cameras'
  },
  // Add more sample auctions
];

export const MyAuctions: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Auctions</h1>
        <Link to="/post-auction">
          <Button className="flex items-center">
            <Plus className="w-5 h-5 mr-2" />
            Post New Auction
          </Button>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-blue-600">12</p>
            <p className="text-gray-600">Active Auctions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-600">8</p>
            <p className="text-gray-600">Completed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-purple-600">$12,450</p>
            <p className="text-gray-600">Total Earnings</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6">
        {SAMPLE_MY_AUCTIONS.map((auction) => (
          <AuctionItem key={auction.id} auction={auction} />
        ))}
      </div>
    </div>
  );
};