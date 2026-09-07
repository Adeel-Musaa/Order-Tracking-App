import { createContext, useEffect, useMemo, useState } from 'react';
import {
  orders as mockOrders,
  dashboardStats,
  adminOrders,
  advancedFeatures,
  statusOptions,
  howItWorks,
  features,
  testimonials,
  faqs,
  orderHistory,
  pricingPlans,
  reviews,
  savedAddresses,
} from '../data/mockData';

export const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [isDark, setIsDark] = useState(true);
  const [language, setLanguage] = useState('en');
  const [activeOrder, setActiveOrder] = useState(mockOrders[0]);
  const [showModal, setShowModal] = useState(false);
  const [toasts, setToasts] = useState([
    { id: 1, title: 'Courier ping received', detail: 'Out for delivery • TF-2093-A', tone: 'success' },
  ]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('theme-light', !isDark);
    }
  }, [isDark]);

  const value = useMemo(
    () => ({
      isDark,
      setIsDark,
      language,
      setLanguage,
      activeOrder,
      setActiveOrder,
      showModal,
      setShowModal,
      toasts,
      setToasts,
      orders: mockOrders,
      dashboardStats,
      adminOrders,
      advancedFeatures,
      statusOptions,
      howItWorks,
      features,
      testimonials,
      faqs,
      orderHistory,
      pricingPlans,
      reviews,
      savedAddresses,
    }),
    [isDark, language, activeOrder, showModal, toasts]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
