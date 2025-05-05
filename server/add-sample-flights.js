import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Flight } from './schemas.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
const dbURI = process.env.MONGO_URI;

mongoose.connect(dbURI, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('MongoDB connected successfully!');
  
  // Sample flight data
  const sampleFlights = [
    {
      flightName: 'Air India Express',
      flightId: 'AI2023',
      origin: 'Chennai',
      destination: 'Mumbai',
      departureTime: '10:00 AM',
      arrivalTime: '12:00 PM',
      basePrice: 5000,
      totalSeats: 180
    },
    {
      flightName: 'IndiGo',
      flightId: 'IN4567',
      origin: 'Banglore',
      destination: 'Delhi',
      departureTime: '11:30 AM',
      arrivalTime: '2:30 PM',
      basePrice: 6500,
      totalSeats: 150
    },
    {
      flightName: 'SpiceJet',
      flightId: 'SJ7890',
      origin: 'Mumbai',
      destination: 'Chennai',
      departureTime: '2:00 PM',
      arrivalTime: '4:00 PM',
      basePrice: 4800,
      totalSeats: 120
    },
    {
      flightName: 'Vistara',
      flightId: 'VS1234',
      origin: 'Delhi',
      destination: 'Banglore',
      departureTime: '9:00 AM',
      arrivalTime: '11:30 AM',
      basePrice: 7200,
      totalSeats: 200
    },
    {
      flightName: 'GoAir',
      flightId: 'GA5678',
      origin: 'Hyderabad',
      destination: 'Pune',
      departureTime: '3:30 PM',
      arrivalTime: '5:00 PM',
      basePrice: 4200,
      totalSeats: 140
    }
  ];
  
  try {
    // Check if flights already exist
    const existingFlights = await Flight.find();
    
    if (existingFlights.length === 0) {
      // Add sample flights to the database
      await Flight.insertMany(sampleFlights);
      console.log('Sample flights added successfully!');
    } else {
      console.log('Flights already exist in the database. No sample data added.');
    }
    
    // Display all flights in the database
    const allFlights = await Flight.find();
    console.log('All flights in the database:');
    console.log(allFlights);
    
    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('MongoDB disconnected.');
  } catch (error) {
    console.error('Error:', error);
  }
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});
