export const statusOptions = {
  PENDING: { label: 'Pending', color: '#f5c542' },
  PROCESSING: { label: 'Processing', color: '#1b8ef2' },
  DISPATCHED: { label: 'Dispatched', color: '#ff7a00' },
  OUT_FOR_DELIVERY: { label: 'Out for delivery', color: '#9b6bff' },
  COMPLETED: { label: 'Completed', color: '#2ecc71' },
  CANCELLED: { label: 'Cancelled', color: '#ff4d4f' },
  ORDER_PLACED: { label: 'Order placed', color: '#f5c542' },
  CONFIRMED: { label: 'Confirmed', color: '#1b8ef2' },
  PREPARING: { label: 'Being prepared', color: '#ff7a00' },
  DELIVERED: { label: 'Delivered', color: '#2ecc71' },
};

export const orders = [
  {
    id: 'TF-2093-A',
    title: 'Carbon Fiber Smart Backpack',
    customer: 'Alex Carter',
    total: 189.0,
    status: 'OUT_FOR_DELIVERY',
    eta: 'Today, 4:30 PM',
    address: '221B Baker Street, London',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80',
    steps: [
      { name: 'Order Placed', time: 'Jan 02, 08:12', description: 'Order received by TrackFlow' },
      { name: 'Confirmed', time: 'Jan 02, 08:35', description: 'Payment verified and locked' },
      { name: 'Packed', time: 'Jan 02, 12:10', description: 'Secured packaging completed' },
      { name: 'Dispatched', time: 'Jan 03, 09:05', description: 'Left Fulfillment Hub 04' },
      { name: 'Out for Delivery', time: 'Jan 04, 13:10', description: 'Courier en route to destination' },
      { name: 'Delivered', time: null, description: 'Awaiting drop-off confirmation' },
    ],
  },
  {
    id: 'TF-1988-Q',
    title: 'Noise-Cancelling Headphones',
    customer: 'Priya Desai',
    total: 329.0,
    status: 'PROCESSING',
    eta: 'Tomorrow, 11:30 AM',
    address: '4140 North Ridge Rd, Seattle',
    image:
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=600&q=80',
    steps: [
      { name: 'Order Placed', time: 'Jan 03, 09:40', description: 'Order received by TrackFlow' },
      { name: 'Confirmed', time: 'Jan 03, 10:02', description: 'Payment confirmed by bank' },
      { name: 'Packed', time: null, description: 'Packaging in progress' },
      { name: 'Dispatched', time: null, description: 'Hand-off to carrier pending' },
      { name: 'Out for Delivery', time: null, description: 'Awaiting dispatch' },
      { name: 'Delivered', time: null, description: 'Pending delivery' },
    ],
  },
  {
    id: 'TF-1754-K',
    title: 'Smart Desk Lamp Pro',
    customer: 'Morgan Lee',
    total: 119.0,
    status: 'COMPLETED',
    eta: 'Delivered',
    address: '8 Harbourfront Ave, Singapore',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80',
    steps: [
      { name: 'Order Placed', time: 'Dec 28, 11:02', description: 'Order received by TrackFlow' },
      { name: 'Confirmed', time: 'Dec 28, 11:10', description: 'Payment cleared' },
      { name: 'Packed', time: 'Dec 28, 15:40', description: 'Protective packaging completed' },
      { name: 'Dispatched', time: 'Dec 29, 07:30', description: 'Left Distribution Hub 02' },
      { name: 'Out for Delivery', time: 'Dec 29, 10:08', description: 'Courier en route to destination' },
      { name: 'Delivered', time: 'Dec 29, 14:25', description: 'Received by customer' },
    ],
  },
];

export const howItWorks = [
  {
    title: 'Search',
    description: 'Enter your tracking ID and instantly pull real-time shipment data synced from carriers.',
    icon: 'bi-search',
  },
  {
    title: 'Monitor',
    description: 'Live milestones, courier ETA, and route heatmaps keep everyone aligned.',
    icon: 'bi-activity',
  },
  {
    title: 'Resolve',
    description: 'Collaborate with support, add timeline notes, or request refunds with one tap.',
    icon: 'bi-chat-dots',
  },
  {
    title: 'Deliver',
    description: 'Delight customers with branded notifications, receipts, and proof of delivery.',
    icon: 'bi-check-circle',
  },
];

export const features = [
  {
    title: 'Predictive ETA',
    description: 'Adaptive ETA powered by courier telemetry and weather signals.',
    icon: 'bi-bezier',
  },
  {
    title: 'White-labeled Alerts',
    description: 'Push, SMS, and email templates with your brand voice.',
    icon: 'bi-bell',
  },
  {
    title: 'Route Intelligence',
    description: 'Geo heatmaps and delay detection for ops teams.',
    icon: 'bi-map',
  },
  {
    title: 'Collaboration',
    description: 'Add timeline comments, attachments, and @-mentions.',
    icon: 'bi-people',
  },
  {
    title: 'Audit Trail',
    description: 'Immutable status history with signed events.',
    icon: 'bi-shield-check',
  },
  {
    title: 'Integrations',
    description: 'API & webhooks for Shopify, Netsuite, and custom stacks.',
    icon: 'bi-plug',
  },
];

export const testimonials = [
  {
    name: 'Nova Logistics',
    title: 'Head of Ops',
    text: 'TrackFlow cut our delivery escalations by 34% within two weeks and made our CSAT soar.',
  },
  {
    name: 'Brightside Retail',
    title: 'Ecommerce Lead',
    text: 'Customers love the live timeline and branded alerts. It feels like a premium airline app.',
  },
  {
    name: 'Northwind Mobility',
    title: 'CX Manager',
    text: 'The dashboard is ridiculously clean. Our agents resolve delivery issues in minutes.',
  },
];

export const faqs = [
  {
    question: 'How accurate is the ETA?',
    answer: 'TrackFlow blends carrier data with location pings and traffic signals to keep ETA precise.',
  },
  {
    question: 'Can I embed tracking into my app?',
    answer: 'Yes. Use our widget or API-first design with OAuth scopes and webhooks.',
  },
  {
    question: 'Do you support returns?',
    answer: 'Create RMA flows, schedule pickups, and keep both courier and customer updated.',
  },
  {
    question: 'Is there an admin console?',
    answer: 'Yes. Ops can assign drivers, print invoices, and annotate delays without engineers.',
  },
];

export const dashboardStats = {
  totals: [
    { label: 'Orders in progress', value: 128, icon: 'bi-lightning-charge', accent: 'blue' },
    { label: 'Delivered this week', value: 842, icon: 'bi-check2-circle', accent: 'green' },
    { label: 'Avg delivery time', value: '1.7 days', icon: 'bi-stopwatch', accent: 'orange' },
    { label: 'Refund requests', value: 12, icon: 'bi-arrow-counterclockwise', accent: 'purple' },
  ],
  notifications: [
    { title: 'Push notification sent', detail: 'Out for delivery • TF-2093-A', time: '3m ago' },
    { title: 'Delay flagged', detail: 'Weather risk • TF-1988-Q', time: '18m ago' },
    { title: 'Invoice exported', detail: 'Finance sync completed', time: '1h ago' },
  ],
};

export const adminOrders = [
  { id: 'TF-2093-A', customer: 'Alex Carter', status: 'OUT_FOR_DELIVERY', courier: 'LoopX', eta: 'Today 4:30' },
  { id: 'TF-1988-Q', customer: 'Priya Desai', status: 'PROCESSING', courier: 'DHL', eta: 'Tomorrow 11:30' },
  { id: 'TF-1754-K', customer: 'Morgan Lee', status: 'COMPLETED', courier: 'FedEx', eta: 'Delivered' },
  { id: 'TF-1422-T', customer: 'Samira Khan', status: 'DISPATCHED', courier: 'UPS', eta: 'Today 7:45' },
];

export const advancedFeatures = [
  { title: 'Real-time status', description: 'Live pulse animation when couriers ping location.', icon: 'bi-activity' },
  { title: 'Push notifications', description: 'Rich notifications with CTA buttons.', icon: 'bi-bell' },
  { title: 'Chat & notes', description: 'Inline chat, timeline comments, and attachments.', icon: 'bi-chat-square-dots' },
  { title: 'Refund flow', description: 'Request, approve, and credit back within minutes.', icon: 'bi-cash-stack' },
  { title: 'QR & multi-language', description: 'Generate QR codes and switch languages on the fly.', icon: 'bi-qr-code-scan' },
];

export const orderHistory = [
  {
    orderId: 'TF-3201-A',
    customer: 'Jordan Miles',
    items: 3,
    price: 142.35,
    status: 'OUT_FOR_DELIVERY',
    createdAt: '2026-01-02T10:15:00Z',
    eta: 'Today 6:15 PM',
    deliveryAgent: 'Tara Singh',
  },
  {
    orderId: 'TF-3194-B',
    customer: 'Alina Gomez',
    items: 1,
    price: 68.0,
    status: 'PREPARING',
    createdAt: '2026-01-03T08:55:00Z',
    eta: 'Today 8:45 PM',
    deliveryAgent: 'Morgan Le',
  },
  {
    orderId: 'TF-3177-C',
    customer: 'Noah Park',
    items: 2,
    price: 220.5,
    status: 'DELIVERED',
    createdAt: '2025-12-30T16:10:00Z',
    eta: 'Delivered Jan 01',
    deliveryAgent: 'Cleo Tan',
  },
  {
    orderId: 'TF-3160-D',
    customer: 'Maya Patel',
    items: 4,
    price: 312.99,
    status: 'CANCELLED',
    createdAt: '2025-12-28T12:05:00Z',
    eta: 'Cancelled',
    deliveryAgent: '—',
  },
];

export const pricingPlans = [
  {
    name: 'Starter',
    price: '$49',
    cadence: '/mo',
    features: ['100 orders/mo', 'Live tracking', 'Email notifications', 'Basic analytics'],
  },
  {
    name: 'Pro',
    price: '$149',
    cadence: '/mo',
    features: ['1,000 orders/mo', 'Push + SMS alerts', 'Custom branding', 'Priority support'],
  },
  {
    name: 'Enterprise',
    price: 'Let’s talk',
    cadence: '',
    features: ['Unlimited orders', 'Dedicated CSM', 'On-prem options', 'Advanced security'],
  },
];

export const reviews = [
  { name: 'Aster Foods', rating: 5, text: 'Turned delivery chaos into a premium customer ritual.' },
  { name: 'Velo Kitchens', rating: 4, text: 'Ops team loves the admin console and agent handoffs.' },
  { name: 'Nova Eats', rating: 5, text: 'CSAT jumped and refunds dropped with proactive alerts.' },
];

export const savedAddresses = [
  { label: 'Home', detail: '221B Baker Street, London' },
  { label: 'HQ', detail: '125 Market St, San Francisco' },
  { label: 'Warehouse', detail: '8 Harbourfront Ave, Singapore' },
];
