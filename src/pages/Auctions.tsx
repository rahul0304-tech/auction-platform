import React from 'react';
import { AuctionItem } from '@/components/AuctionItem';
import { Search, Filter } from 'lucide-react';

const SAMPLE_AUCTIONS = [
  {
    id: '1',
    title: 'Vintage Rolex Watch',
    description: 'A rare 1956 Rolex Submariner in excellent condition',
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
  },
  // Add more sample auctions as needed
];

export const Auctions: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Active Auctions</h1>
        <div className="flex space-x-4 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <input
              type="text"
              placeholder="Search auctions..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
          <button className="flex items-center px-4 py-2 border rounded-lg">
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {SAMPLE_AUCTIONS.map((auction) => (
          <AuctionItem key={auction.id} auction={auction} />
        ))}
      </div>
    </div>
  );
};