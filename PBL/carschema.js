// Define the schema for cars collection
const carSchema = new mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    color: String,
    mileage: Number,
    status: {
      type: String,
      enum: ['available', 'booked'],
      default: 'available'
    }
  });
  
  // Define the schema for customers collection
  const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String
  });
  
  // Define the schema for bookings collection
  const bookingSchema = new mongoose.Schema({
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Car'
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer'
    },
    startDate: Date,
    endDate: Date,
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'cancelled'],
      default: 'pending'
    }
  });
  
  // Create models for cars, customers, and bookings
  const Car = mongoose.model('Car', carSchema);
  const Customer = mongoose.model('Customer', customerSchema);
  const Booking = mongoose.model('Booking', bookingSchema);
  