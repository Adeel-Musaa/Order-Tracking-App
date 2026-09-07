import { useContext, useMemo, useState } from 'react';
import LayoutWrapper from './components/LayoutWrapper.jsx';
import { Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview.jsx';
import LiveMap from './pages/LiveMap.jsx';
import Shipments from './pages/Shipments.jsx';
import Customers from './pages/Customers.jsx';
import Settings from './pages/Settings.jsx';
import SectionHeader from './components/SectionHeader.jsx';
import TrackButton from './components/TrackButton.jsx';
import InputField from './components/InputField.jsx';
import OrderCard from './components/OrderCard.jsx';
import StepProgress from './components/StepProgress.jsx';
import KPIStatCard from './components/KPIStatCard.jsx';
import LoaderSkeleton from './components/LoaderSkeleton.jsx';
import ToastStack from './components/ToastStack.jsx';
import ModalShell from './components/ModalShell.jsx';
import DarkOverlaySection from './components/DarkOverlaySection.jsx';
import { AppProvider, AppContext } from './context/AppContext.jsx';
import StatusBadge from './components/StatusBadge.jsx';
import SearchBar from './components/SearchBar.jsx';
import PaginationBar from './components/PaginationBar.jsx';
import RatingModal from './components/RatingModal.jsx';
import ChatWidget from './components/ChatWidget.jsx';
import BottomNav from './components/BottomNav.jsx';
import MapPlaceholder from './components/MapPlaceholder.jsx';
import ProfileSettings from './components/ProfileSettings.jsx';
import PlaceOrderForm from './components/PlaceOrderForm.jsx';
import { Error404, Error500 } from './components/ErrorBlocks.jsx';

function HeroSection() {
  return (
    <section className="section-padding" id="hero">
      <div className="row g-4 align-items-center">
        <div className="col-12 col-lg-6">
          <div className="pill mb-3">TrackFlow™ • Premium SaaS</div>
          <h1 className="display-5 fw-bold mb-3">Track every order like a modern startup.</h1>
          <p className="mb-4 text-dim">
            Black + orange identity, realtime status, notifications, and a control tower for teams. Built to feel as polished as
            your customers expect.
          </p>
          <div className="d-flex flex-wrap gap-3">
            <TrackButton text="Track your order" icon="bi-geo-alt" />
            <TrackButton text="Book a demo" icon="bi-calendar2-check" variant="ghost" />
          </div>
          <div className="d-flex gap-3 mt-4 flex-wrap">
            <div className="badge-soft badge-soft-muted">Live ETA</div>
            <div className="badge-soft badge-soft-muted">Push & email alerts</div>
            <div className="badge-soft badge-soft-muted">Mobile first</div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <DarkOverlaySection>
            <div className="row g-3 align-items-center">
              <div className="col-12">
                <div className="bg-black rounded-4 p-3 d-flex flex-column gap-2 glass-border">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="text-dim mb-0">Live courier</p>
                      <h5 className="mb-1">LoopX Courier • 4:30 PM</h5>
                      <small className="text-dim">Rain risk detected • rerouting</small>
                    </div>
                    <div className="pill-icon bg-warning text-black">
                      <i className="bi bi-wifi"></i>
                    </div>
                  </div>
                  <div className="progress bg-dark-subtle" role="progressbar" aria-label="Live progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning progress-78"></div>
                  </div>
                  <div className="d-flex gap-3 text-dim small">
                    <span className="d-flex align-items-center gap-2"><i className="bi bi-check-circle text-success"></i> Signature
                      required</span>
                    <span className="d-flex align-items-center gap-2"><i className="bi bi-shield-check text-info"></i> Insured</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="bg-card-dark p-3 rounded-4 shadow-hover h-100">
                  <p className="text-dim mb-1">Predictive ETA</p>
                  <h4 className="mb-2">1h 18m</h4>
                  <p className="text-dim mb-0">Adaptive routing with traffic + weather signals.</p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="bg-card-dark p-3 rounded-4 shadow-hover h-100">
                  <p className="text-dim mb-1">Customer NPS</p>
                  <h4 className="mb-2 text-gradient">+42 uplift</h4>
                  <p className="text-dim mb-0">Branded notifications keep customers calm and informed.</p>
                </div>
              </div>
            </div>
          </DarkOverlaySection>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection({ items }) {
  return (
    <section className="section-padding">
      <SectionHeader
        eyebrow="How it works"
        title="From search to delight in four steps"
        subtitle="Simple workflow that feels Uber-fast and enterprise-ready."
      />
      <div className="row g-3">
        {items.map((card) => (
          <div key={card.title} className="col-12 col-md-6 col-xl-3">
            <div className="bg-card-dark p-3 rounded-4 h-100 shadow-hover">
              <div className="pill-icon bg-warning text-black mb-3">
                <i className={`bi ${card.icon}`}></i>
              </div>
              <h5 className="mb-2">{card.title}</h5>
              <p className="text-dim mb-0">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturesSection({ items }) {
  return (
    <section className="section-padding">
      <SectionHeader
        eyebrow="Platform"
        title="Every control you need"
        subtitle="Timelines, heatmaps, notifications, audits, and more with a Black + Orange sheen."
      />
      <div className="row g-3">
        {items.map((feature) => (
          <div key={feature.title} className="col-12 col-md-6 col-lg-4">
            <div className="bg-card-dark p-3 rounded-4 h-100 shadow-hover feature-card">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div className="pill-icon bg-dark text-warning">
                  <i className={`bi ${feature.icon}`}></i>
                </div>
                <span className="badge-soft badge-soft-muted">Enterprise</span>
              </div>
              <h6 className="mb-1">{feature.title}</h6>
              <p className="text-dim mb-0">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AdvancedSection({ items }) {
  return (
    <section className="section-padding" id="advanced">
      <SectionHeader eyebrow="UX details" title="Advanced but friendly" />
      <div className="row g-3">
        {items.map((item) => (
          <div key={item.title} className="col-12 col-md-6 col-lg-4">
            <div className="bg-card-dark p-3 rounded-4 shadow-hover h-100">
              <div className="d-flex align-items-center gap-2 mb-2">
                <div className="pill-icon bg-warning text-black">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h6 className="mb-0">{item.title}</h6>
              </div>
              <p className="text-dim mb-0">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PricingSection({ plans }) {
  return (
    <section className="section-padding" id="pricing">
      <SectionHeader eyebrow="Pricing" title="Pick a plan that scales" subtitle="Starter to enterprise without losing polish." />
      <div className="row g-3">
        {plans.map((plan) => (
          <div key={plan.name} className="col-12 col-md-4">
            <div className="bg-card-dark p-4 rounded-4 shadow-hover h-100 d-flex flex-column">
              <div className="d-flex justify-content-between mb-2">
                <h5 className="mb-0">{plan.name}</h5>
                <span className="badge-soft badge-soft-muted">{plan.name === 'Pro' ? 'Popular' : 'Flexible'}</span>
              </div>
              <h2 className="mb-1">{plan.price} <small className="text-dim">{plan.cadence}</small></h2>
              <ul className="text-dim mb-4">
                {plan.features.map((f) => (
                  <li key={f} className="mb-1 d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle text-warning"></i>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <TrackButton text="Get started" icon="bi-lightning" variant={plan.name === 'Starter' ? 'ghost' : 'primary'} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection({ items, reviews }) {
  return (
    <section className="section-padding">
      <SectionHeader eyebrow="Loved by teams" title="Operational calm. Happier customers." />
      <div className="row g-3">
        {items.map((item) => (
          <div key={item.name} className="col-12 col-lg-4">
            <div className="bg-card-dark p-4 rounded-4 h-100 shadow-hover">
              <p className="mb-3">“{item.text}”</p>
              <div className="d-flex align-items-center gap-2 text-dim">
                <div className="card-dot"></div>
                <div>
                  <strong className="d-block text-white">{item.name}</strong>
                  <small>{item.title}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row g-3 mt-1">
        {reviews.map((review) => (
          <div key={review.name} className="col-12 col-md-4">
            <div className="bg-card-dark p-3 rounded-4 shadow-hover h-100">
              <div className="d-flex justify-content-between mb-2">
                <strong>{review.name}</strong>
                <span className="text-warning">{'★'.repeat(review.rating)}</span>
              </div>
              <p className="text-dim mb-0">{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQSection({ items }) {
  return (
    <section className="section-padding">
      <SectionHeader eyebrow="FAQ" title="Answers for busy teams" />
      <div className="accordion" id="faqAccordion">
        {items.map((faq, idx) => (
          <div className="accordion-item bg-card-dark text-white glass-border" key={faq.question}>
            <h2 className="accordion-header" id={`heading-${idx}`}>
              <button
                className={`accordion-button ${idx !== 0 ? 'collapsed' : ''}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${idx}`}
                aria-expanded={idx === 0}
                aria-controls={`collapse-${idx}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse-${idx}`}
              className={`accordion-collapse collapse ${idx === 0 ? 'show' : ''}`}
              aria-labelledby={`heading-${idx}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body text-dim">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="section-padding">
      <DarkOverlaySection>
        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
          <div>
            <div className="pill mb-2">Ready to launch?</div>
            <h3 className="mb-2">Make every delivery a TrackFlow experience.</h3>
            <p className="text-dim mb-0">Enable live tracking in under a day. No heavy lift required.</p>
          </div>
          <div className="d-flex gap-2">
            <TrackButton text="Start free sandbox" icon="bi-magic" />
            <TrackButton text="Talk to sales" variant="ghost" />
          </div>
        </div>
      </DarkOverlaySection>
    </section>
  );
}

function OrderTrackingSection({ orders, onSelect, activeOrder, onRate }) {
  const currentIndex = activeOrder.steps.reduce((acc, step, idx) => (step.time ? idx : acc), 0);

  return (
    <section className="section-padding" id="tracking">
      <SectionHeader
        eyebrow="Tracking"
        title="Track every parcel with cinematic clarity"
        subtitle="Order ID, customer, courier, ETA, and a smooth animated timeline."
        action={<TrackButton text="New tracking" icon="bi-plus-lg" />}
      />
      <div className="row g-3">
        <div className="col-12 col-xl-4">
          <div className="bg-card-dark p-3 rounded-4 shadow-hover">
            <InputField label="Enter tracking ID" placeholder="TF-2093-A" icon="bi-upc-scan" />
            <TrackButton text="Search" icon="bi-search" />
            <div className="divider-light my-3"></div>
            <div className="scroll-area d-flex flex-column gap-3">
              {orders.map((order) => (
                <OrderCard key={order.id} order={order} onSelect={onSelect} />
              ))}
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-8">
          <DarkOverlaySection>
            <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
              <h4 className="mb-0">{activeOrder.title}</h4>
              <StatusBadge status={activeOrder.status} />
              <span className="badge-soft badge-soft-muted">{activeOrder.id}</span>
            </div>
            <div className="d-flex flex-wrap gap-3 text-dim">
              <span className="d-flex align-items-center gap-2">
                <i className="bi bi-person"></i> {activeOrder.customer}
              </span>
              <span className="d-flex align-items-center gap-2">
                <i className="bi bi-geo-alt"></i> {activeOrder.address}
              </span>
              <span className="d-flex align-items-center gap-2">
                <i className="bi bi-clock-history"></i> ETA {activeOrder.eta}
              </span>
            </div>
            <div className="divider-light my-3"></div>
            <div className="row g-3">
              <div className="col-12 col-lg-6">
                <StepProgress steps={activeOrder.steps} currentIndex={currentIndex} />
              </div>
              <div className="col-12 col-lg-6 d-flex flex-column gap-3">
                <MapPlaceholder />
                <div className="bg-card-dark p-3 rounded-4 shadow-hover">
                  <p className="text-dim mb-1">Delivery agent</p>
                  <h6 className="mb-1">LoopX • Samira</h6>
                  <small className="text-dim">+1 202 555 0145 • Verified</small>
                  <div className="d-flex gap-2 mt-2">
                    <TrackButton text="Call" size="sm" variant="ghost" />
                    <TrackButton text="Rate" size="sm" variant="ghost" onClick={onRate} />
                  </div>
                </div>
              </div>
            </div>
          </DarkOverlaySection>
        </div>
      </div>
    </section>
  );
}

function OrderDetailsSection({ order }) {
  return (
    <section className="section-padding" id="details">
      <SectionHeader
        eyebrow="Order detail"
        title="Beautiful, legible order details"
        subtitle="Payment, items, shipment details, support actions, and invoices in one view."
        action={<TrackButton text="Download invoice" icon="bi-download" variant="ghost" />}
      />
      <div className="row g-3">
        <div className="col-12 col-lg-7">
          <div className="bg-card-dark p-3 rounded-4 shadow-hover">
            <h6 className="mb-2">Items</h6>
            <div className="d-flex gap-3 align-items-center">
              <img src={order.image} alt={order.title} className="rounded-3 img-square-72" />
              <div className="flex-fill">
                <p className="mb-1">{order.title}</p>
                <small className="text-dim">Qty 1 • Carbon fiber • Waterproof</small>
              </div>
              <strong>$ {order.total.toFixed(2)}</strong>
            </div>
            <div className="divider-light my-3"></div>
            <div className="d-flex justify-content-between text-dim">
              <span>Subtotal</span>
              <span>$ {order.total.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between text-dim">
              <span>Shipping</span>
              <span>$ 8.00</span>
            </div>
            <div className="divider-light my-2"></div>
            <div className="d-flex justify-content-between align-items-center">
              <strong>Total</strong>
              <strong>$ {(order.total + 8).toFixed(2)}</strong>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5">
          <div className="bg-card-dark p-3 rounded-4 shadow-hover d-flex flex-column gap-3">
            <div className="d-flex justify-content-between">
              <span className="text-dim">Delivery partner</span>
              <strong>LoopX Express</strong>
            </div>
            <div className="d-flex justify-content-between">
              <span className="text-dim">Support</span>
              <button className="btn btn-ghost btn-sm">Chat with agent</button>
            </div>
            <div className="d-flex justify-content-between">
              <span className="text-dim">Add notes</span>
              <button className="btn btn-ghost btn-sm">Add delay reason</button>
            </div>
            <div className="d-flex justify-content-between">
              <span className="text-dim">Refunds</span>
              <button className="btn btn-ghost btn-sm">Request refund</button>
            </div>
            <div className="bg-dark rounded-3 p-3">
              <p className="text-dim mb-2">Attachments</p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge-soft badge-soft-muted"><i className="bi bi-paperclip me-1"></i> Label.pdf</span>
                <span className="badge-soft badge-soft-muted"><i className="bi bi-image me-1"></i> Proof.jpg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardSection({ stats, orders, history, onSearch, filtered, page, totalPages, onPageChange }) {
  return (
    <section className="section-padding" id="dashboard">
      <SectionHeader
        eyebrow="Customer portal"
        title="Dashboard after login"
        subtitle="Recent orders, statuses, spending, insights, and settings tuned for mobile and desktop."
        action={<TrackButton text="Dark mode" icon="bi-moon" variant="ghost" />}
      />
      <div className="row g-3">
        {stats.totals.map((card) => (
          <div key={card.label} className="col-12 col-md-6 col-xl-3">
            <KPIStatCard icon={card.icon} value={card.value} label={card.label} accent={card.accent} />
          </div>
        ))}
      </div>
      <div className="row g-3 mt-1">
        <div className="col-12 col-xl-8">
          <div className="bg-card-dark p-3 rounded-4 shadow-hover">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2 mb-3">
              <h6 className="mb-0">Order history</h6>
              <SearchBar onSearch={onSearch} placeholder="Search by customer or ID" />
            </div>
            <div className="table-responsive table-responsive-stack">
              <table className="table table-borderless align-middle text-white">
                <thead className="text-dim">
                  <tr>
                    <th>ID</th>
                    <th>Customer</th>
                    <th>Status</th>
                    <th>ETA</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((row) => (
                    <tr key={row.orderId} className="glass-border rounded-3">
                      <td className="text-dim" data-label="ID">{row.orderId}</td>
                      <td data-label="Customer">{row.customer}</td>
                      <td data-label="Status"><StatusBadge status={row.status} size="sm" /></td>
                      <td className="text-dim" data-label="ETA">{row.eta}</td>
                      <td className="text-dim" data-label="Price">$ {row.price.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <PaginationBar page={page} totalPages={totalPages} onPageChange={onPageChange} />
          </div>
        </div>
        <div className="col-12 col-xl-4">
          <div className="bg-card-dark p-3 rounded-4 shadow-hover mb-3">
            <h6 className="mb-2">Current orders</h6>
            <div className="d-flex flex-column gap-2">
              {orders.slice(0, 2).map((order) => (
                <div key={order.id} className="bg-dark rounded-3 p-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="fw-semibold">{order.title}</span>
                    <StatusBadge status={order.status} size="sm" />
                  </div>
                  <small className="text-dim">{order.id} • {order.customer}</small>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card-dark p-3 rounded-4 shadow-hover">
            <h6 className="mb-2">Notifications</h6>
            <div className="d-flex flex-column gap-2">
              {stats.notifications.map((note) => (
                <div key={note.title} className="bg-dark rounded-3 p-2 d-flex flex-column">
                  <span className="fw-semibold">{note.title}</span>
                  <small className="text-dim">{note.detail}</small>
                  <small className="text-dim">{note.time}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AdminSection({ adminOrders }) {
  const tabs = ['Dashboard Analytics', 'New Orders', 'Processing', 'Delivered', 'Cancelled', 'Customers', 'Messages', 'Settings'];
  return (
    <section className="section-padding" id="admin">
      <SectionHeader
        eyebrow="Admin control"
        title="Ops + Admin console"
        subtitle="Assign delivery partners, annotate delays, print invoices, and manage agents."
        action={<TrackButton text="Add note" icon="bi-pencil" variant="ghost" />}
      />
      <div className="d-flex flex-wrap gap-2 mb-3">
        {tabs.map((tab) => (
          <span key={tab} className="badge-soft badge-soft-muted">{tab}</span>
        ))}
      </div>
      <div className="row g-3">
        <div className="col-12 col-lg-8">
          <div className="bg-card-dark p-3 rounded-4 shadow-hover">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="mb-0">Order management</h6>
              <div className="d-flex gap-2">
                <TrackButton text="Assign delivery" size="sm" variant="ghost" icon="bi-truck" />
                <TrackButton text="Print" size="sm" variant="ghost" icon="bi-printer" />
              </div>
            </div>
            <div className="table-responsive scroll-area table-responsive-stack">
              <table className="table table-borderless align-middle text-white">
                <thead className="text-dim">
                  <tr>
                    <th>ID</th>
                    <th>Customer</th>
                    <th>Status</th>
                    <th>Courier</th>
                    <th>ETA</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {adminOrders.map((row) => (
                    <tr key={row.id} className="glass-border rounded-3">
                      <td className="text-dim" data-label="ID">{row.id}</td>
                      <td data-label="Customer">{row.customer}</td>
                      <td data-label="Status"><StatusBadge status={row.status} size="sm" /></td>
                      <td className="text-dim" data-label="Courier">{row.courier}</td>
                      <td className="text-dim" data-label="ETA">{row.eta}</td>
                      <td className="text-end" data-label="Actions">
                        <button className="btn btn-ghost btn-sm me-1">Delay note</button>
                        <button className="btn btn-brand btn-sm">Update</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="bg-card-dark p-3 rounded-4 shadow-hover mb-3">
            <h6 className="mb-2">Heatmap</h6>
            <p className="text-dim mb-0">Heatmap placeholder with live delays.</p>
          </div>
          <div className="bg-card-dark p-3 rounded-4 shadow-hover">
            <h6 className="mb-2">System settings</h6>
            <div className="d-flex flex-column gap-2">
              <button className="btn btn-ghost btn-sm d-flex align-items-center gap-2">
                <i className="bi bi-globe"></i> Multi-language
              </button>
              <button className="btn btn-ghost btn-sm d-flex align-items-center gap-2">
                <i className="bi bi-moon"></i> Dark mode
              </button>
              <button className="btn btn-ghost btn-sm d-flex align-items-center gap-2">
                <i className="bi bi-qr-code-scan"></i> QR generator
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlaceOrderSection() {
  return (
    <section className="section-padding" id="place-order">
      <SectionHeader
        eyebrow="New order"
        title="Place a new order"
        subtitle="Capture details, upload references, and confirm instantly."
      />
      <PlaceOrderForm />
    </section>
  );
}

function ProfileSection({ savedAddresses }) {
  return (
    <section className="section-padding">
      <SectionHeader eyebrow="Profile" title="Preferences and saved addresses" />
      <ProfileSettings savedAddresses={savedAddresses} />
    </section>
  );
}

function ErrorSection() {
  return (
    <section className="section-padding" id="errors">
      <SectionHeader eyebrow="Error states" title="Fail gracefully" />
      <div className="row g-3">
        <div className="col-12 col-md-6">
          <Error404 />
        </div>
        <div className="col-12 col-md-6">
          <Error500 />
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="section-padding">
      <div className="bg-card-dark p-4 rounded-4 shadow-hover d-flex flex-column flex-md-row justify-content-between gap-3">
        <div>
          <h5 className="mb-1">TrackFlow™</h5>
          <p className="text-dim mb-0">Built for modern commerce, loved by ops teams.</p>
        </div>
        <div className="d-flex gap-3 flex-wrap text-dim">
          <a href="#">Status</a>
          <a href="#">Docs</a>
          <a href="#">Security</a>
          <a href="#">Support</a>
        </div>
      </div>
    </footer>
  );
}

function AppContent() {
  const {
    orders,
    howItWorks,
    features,
    testimonials,
    faqs,
    dashboardStats,
    adminOrders,
    advancedFeatures,
    setActiveOrder,
    activeOrder,
    orderHistory,
    pricingPlans,
    reviews,
    savedAddresses,
  } = useContext(AppContext);

  const [historySearch, setHistorySearch] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 3;
  const filteredHistory = useMemo(
    () =>
      orderHistory
        .filter((row) =>
          `${row.orderId} ${row.customer}`.toLowerCase().includes(historySearch.toLowerCase())
        )
        .slice((page - 1) * pageSize, page * pageSize),
    [orderHistory, historySearch, page]
  );
  const totalPages = Math.max(1, Math.ceil(orderHistory.filter((row) => `${row.orderId} ${row.customer}`.toLowerCase().includes(historySearch.toLowerCase())).length / pageSize));

  const [ratingOpen, setRatingOpen] = useState(false);

  return (
    <LayoutWrapper>
      <HeroSection />
      <PricingSection plans={pricingPlans} />
      <OrderTrackingSection orders={orders} onSelect={setActiveOrder} activeOrder={activeOrder} onRate={() => setRatingOpen(true)} />
      <OrderDetailsSection order={activeOrder} />
      <DashboardSection
        stats={dashboardStats}
        orders={orders}
        history={orderHistory}
        onSearch={(q) => {
          setHistorySearch(q);
          setPage(1);
        }}
        filtered={filteredHistory}
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
      <PlaceOrderSection />
      <AdminSection adminOrders={adminOrders} />
      <HowItWorksSection items={howItWorks} />
      <FeaturesSection items={features} />
      <AdvancedSection items={advancedFeatures} />
      <TestimonialsSection items={testimonials} reviews={reviews} />
      <ProfileSection savedAddresses={savedAddresses} />
      <FAQSection items={faqs} />
      <ErrorSection />
      <CTASection />
      <FooterSection />
      <BottomNav />
      <ChatWidget />
      <RatingModal open={ratingOpen} onClose={() => setRatingOpen(false)} />
    </LayoutWrapper>
  );
}

export default function App() {
  return (
    <AppProvider>
      <ToastStack />
      <ModalShell />
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/livemap" element={<LiveMap />} />
        <Route path="/shipments" element={<Shipments />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<AppContent />} />
      </Routes>
    </AppProvider>
  );
}
