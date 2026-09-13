import React, { useState, useMemo } from 'react';
import {
  PhoneCall,
  MessageCircle,
  CheckCircle2,
  Plus,
  Search,
  BarChart3,
  Calendar,
  Phone,
  Zap,
  X,
  Compass,
  AlertCircle,
  Users,
  Check,
  TrendingUp,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  guests: string;
  stayType: string;
  checkInDate: string;
  experiences: string[];
  message: string;
  status: 'Pending Call' | 'Contacted' | 'Confirmed' | 'Cancelled';
  createdAt: string;
  source: string;
}

interface ManagerDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ManagerDashboard: React.FC<ManagerDashboardProps> = ({ isOpen, onClose }) => {
  const { isLight } = useTheme();
  const [activeTab, setActiveTab] = useState<'leads' | 'addLead' | 'analytics'>('leads');
  const [statusFilter, setStatusFilter] = useState<string>('Pending Call');
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Initial Sample Leads for Dandeli Travel Manager
  const [leads, setLeads] = useState<Lead[]>([
    {
      id: 'L-101',
      name: 'Ramesh Kulkarni',
      phone: '+91 98450 12345',
      email: 'ramesh.k@gmail.com',
      guests: '6 Guests (Family)',
      stayType: 'Riverside Resort',
      checkInDate: '2026-10-12',
      experiences: ['River Rafting', 'Jungle Jeep Safari', 'Campfire'],
      message: 'Need 2 luxury AC rooms near river. Require vegetarian meals and Hubli station pickup.',
      status: 'Pending Call',
      createdAt: '12 mins ago',
      source: 'Website Form'
    },
    {
      id: 'L-104',
      name: 'Vikram Deshmukh',
      phone: '+91 94220 56789',
      guests: '10 Guests (College Group)',
      stayType: 'Riverside Camping Tents',
      checkInDate: '2026-10-05',
      experiences: ['River Rafting', 'Kayaking & Zipline'],
      message: 'Looking for budget camping with night bonfire and barbecue.',
      status: 'Pending Call',
      createdAt: '35 mins ago',
      source: 'Instagram Ad'
    },
    {
      id: 'L-102',
      name: 'Priya Sharma',
      phone: '+91 97312 88900',
      email: 'priya.sharma@techcorp.com',
      guests: '18 Guests (Corporate Outing)',
      stayType: 'Luxury Treehouse',
      checkInDate: '2026-10-20',
      experiences: ['River Rafting', 'Kayaking & Zipline', 'Trekking'],
      message: 'Corporate team building trip. Require GST invoice and campfire music setup.',
      status: 'Contacted',
      createdAt: '1 hour ago',
      source: 'WhatsApp Inquiry'
    },
    {
      id: 'L-103',
      name: 'Anand & Swati',
      phone: '+91 91102 34567',
      guests: '2 Guests (Couple)',
      stayType: 'Jungle Wooden Cottage',
      checkInDate: '2026-09-25',
      experiences: ['River Rafting', 'Treehouse Stay'],
      message: 'Honeymoon arrangement with candle light dinner by river bank.',
      status: 'Confirmed',
      createdAt: '2 hours ago',
      source: 'Google Search'
    },
    {
      id: 'L-105',
      name: 'Dr. Srinivas Rao',
      phone: '+91 98801 99887',
      guests: '4 Guests (Family)',
      stayType: 'Private Pool Villa',
      checkInDate: '2026-11-01',
      experiences: ['Jungle Jeep Safari', 'Sightseeing & Trekking'],
      message: 'Quiet luxury villa stay for senior citizens. Ground floor easy access required.',
      status: 'Confirmed',
      createdAt: '5 hours ago',
      source: 'Direct Call'
    }
  ]);

  // Form state for adding a manual lead
  const [newLead, setNewLead] = useState({
    name: '',
    phone: '',
    guests: '2 Guests (Couple)',
    stayType: 'Riverside Resort',
    checkInDate: '',
    message: '',
    status: 'Pending Call' as Lead['status']
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleStatusChange = (leadId: string, newStatus: Lead['status']) => {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === leadId ? { ...lead, status: newStatus } : lead))
    );
    showToast(`Lead marked as ${newStatus}`);
  };

  const handleAddLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLead.name.trim() || !newLead.phone.trim()) return;

    const created: Lead = {
      id: `L-${Math.floor(100 + Math.random() * 900)}`,
      name: newLead.name.trim(),
      phone: newLead.phone.trim(),
      guests: newLead.guests,
      stayType: newLead.stayType,
      checkInDate: newLead.checkInDate || 'Flexible',
      experiences: ['River Rafting', 'Resort Stay'],
      message: newLead.message.trim() || 'Direct inquiry logged by Manager',
      status: newLead.status,
      createdAt: 'Just now',
      source: 'Manager Desk'
    };

    setLeads([created, ...leads]);
    showToast(`Lead saved for ${created.name}!`);
    setNewLead({
      name: '',
      phone: '',
      guests: '2 Guests (Couple)',
      stayType: 'Riverside Resort',
      checkInDate: '',
      message: '',
      status: 'Pending Call'
    });
    setActiveTab('leads');
    setStatusFilter('All');
  };

  // Counts
  const pendingCount = useMemo(() => leads.filter((l) => l.status === 'Pending Call').length, [leads]);
  const contactedCount = useMemo(() => leads.filter((l) => l.status === 'Contacted').length, [leads]);
  const confirmedCount = useMemo(() => leads.filter((l) => l.status === 'Confirmed').length, [leads]);

  // Filtered Leads
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        lead.name.toLowerCase().includes(q) ||
        lead.phone.includes(q) ||
        lead.stayType.toLowerCase().includes(q);
      return matchesStatus && matchesSearch;
    });
  }, [leads, statusFilter, searchQuery]);

  if (!isOpen) return null;

  return (
    <div
      id="manager-dashboard-modal"
      className="fixed inset-0 z-50 overflow-hidden flex flex-col justify-end sm:justify-center bg-black/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
    >
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#1a1612] border border-[#d4aa73] text-[#f7f2ea] px-4 py-2.5 rounded-full shadow-2xl text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#25d366]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Card / Sheet */}
      <div
        className={`w-full max-w-2xl mx-auto h-[95vh] sm:h-[88vh] sm:max-h-[780px] flex flex-col rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl transition-colors ${
          isLight ? 'bg-[#fcfaf7] text-[#1c1917]' : 'bg-[#14110e] text-[#f5f1eb]'
        }`}
      >
        {/* Mobile Swipe Handle */}
        <div className="w-12 h-1.5 bg-neutral-400/30 rounded-full mx-auto mt-2.5 sm:hidden shrink-0" />

        {/* Top Header */}
        <div
          className={`px-4 sm:px-6 py-3.5 border-b flex items-center justify-between shrink-0 ${
            isLight ? 'bg-white border-[#ebe4d8]' : 'bg-[#1a1612] border-[#29221b]'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#94622b] to-[#c79858] text-white flex items-center justify-center font-bold shadow-sm shrink-0">
              <Zap className="w-5 h-5 fill-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-base sm:text-lg font-bold tracking-tight">
                  Manager Desk
                </h2>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold tracking-wide">
                  LIVE
                </span>
              </div>
              <p className={`text-xs ${isLight ? 'text-[#7d7364]' : 'text-[#9e9588]'}`}>
                Dandeli Tours · Bookings & Follow-ups
              </p>
            </div>
          </div>

          <button
            id="close-manager-dashboard"
            onClick={onClose}
            aria-label="Close Manager Desk"
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
              isLight
                ? 'bg-[#f5ede0] border-[#dfd5c4] text-[#2c2824] hover:bg-[#ebdcc8]'
                : 'bg-[#221c17] border-[#332920] text-[#eae4dc] hover:bg-[#2c231a]'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Stats Bar */}
        <div
          className={`px-3 sm:px-5 py-2.5 border-b shrink-0 grid grid-cols-3 gap-2 ${
            isLight ? 'bg-[#f7efe3]/70 border-[#e8ded0]' : 'bg-[#181410] border-[#241d17]'
          }`}
        >
          <button
            onClick={() => {
              setActiveTab('leads');
              setStatusFilter('Pending Call');
            }}
            className={`p-2 rounded-xl text-center border transition-all cursor-pointer ${
              statusFilter === 'Pending Call' && activeTab === 'leads'
                ? 'bg-amber-500 text-white border-amber-600 shadow-xs'
                : isLight
                ? 'bg-white border-[#e6dcce] hover:bg-amber-50/60'
                : 'bg-[#1f1914] border-[#2d241a] hover:bg-[#282017]'
            }`}
          >
            <span className="text-[10px] uppercase font-bold tracking-wider block opacity-80">
              Needs Call
            </span>
            <span className="text-base font-extrabold">{pendingCount}</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('leads');
              setStatusFilter('Contacted');
            }}
            className={`p-2 rounded-xl text-center border transition-all cursor-pointer ${
              statusFilter === 'Contacted' && activeTab === 'leads'
                ? 'bg-blue-600 text-white border-blue-700 shadow-xs'
                : isLight
                ? 'bg-white border-[#e6dcce] hover:bg-blue-50/60'
                : 'bg-[#1f1914] border-[#2d241a] hover:bg-[#1a222e]'
            }`}
          >
            <span className="text-[10px] uppercase font-bold tracking-wider block opacity-80">
              Contacted
            </span>
            <span className="text-base font-extrabold">{contactedCount}</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('leads');
              setStatusFilter('Confirmed');
            }}
            className={`p-2 rounded-xl text-center border transition-all cursor-pointer ${
              statusFilter === 'Confirmed' && activeTab === 'leads'
                ? 'bg-emerald-600 text-white border-emerald-700 shadow-xs'
                : isLight
                ? 'bg-white border-[#e6dcce] hover:bg-emerald-50/60'
                : 'bg-[#1f1914] border-[#2d241a] hover:bg-[#192b20]'
            }`}
          >
            <span className="text-[10px] uppercase font-bold tracking-wider block opacity-80">
              Confirmed
            </span>
            <span className="text-base font-extrabold">{confirmedCount}</span>
          </button>
        </div>

        {/* Primary Tab Switcher */}
        <div
          className={`px-3 py-2 border-b flex items-center justify-between gap-1.5 shrink-0 ${
            isLight ? 'bg-white border-[#ebe4d8]' : 'bg-[#171310] border-[#261f18]'
          }`}
        >
          <button
            id="manager-tab-leads"
            onClick={() => setActiveTab('leads')}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer min-h-[44px] ${
              activeTab === 'leads'
                ? 'bg-[#b8854c] text-white shadow-xs'
                : isLight
                ? 'text-[#6e6557] hover:bg-[#f3ede3]'
                : 'text-[#a19788] hover:bg-[#201a14]'
            }`}
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Queue ({leads.length})</span>
          </button>

          <button
            id="manager-tab-add"
            onClick={() => setActiveTab('addLead')}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer min-h-[44px] ${
              activeTab === 'addLead'
                ? 'bg-[#b8854c] text-white shadow-xs'
                : isLight
                ? 'text-[#6e6557] hover:bg-[#f3ede3]'
                : 'text-[#a19788] hover:bg-[#201a14]'
            }`}
          >
            <Plus className="w-4 h-4" />
            <span>+ New Lead</span>
          </button>

          <button
            id="manager-tab-analytics"
            onClick={() => setActiveTab('analytics')}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer min-h-[44px] ${
              activeTab === 'analytics'
                ? 'bg-[#b8854c] text-white shadow-xs'
                : isLight
                ? 'text-[#6e6557] hover:bg-[#f3ede3]'
                : 'text-[#a19788] hover:bg-[#201a14]'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Site Traffic</span>
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto p-3.5 sm:p-5 space-y-3.5">
          {/* TAB 1: LEADS QUEUE */}
          {activeTab === 'leads' && (
            <div className="space-y-3">
              {/* Search & Status Filter */}
              <div className="space-y-2">
                <div
                  className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl border text-xs ${
                    isLight ? 'bg-white border-[#dfd6c5]' : 'bg-[#1c1713] border-[#2e251c]'
                  }`}
                >
                  <Search className="w-4 h-4 text-[#8e8578] shrink-0" />
                  <input
                    type="text"
                    placeholder="Search guest name, phone, resort..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent outline-none text-xs sm:text-sm text-current placeholder:text-[#8e8578]"
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="p-1 text-[#8e8578]">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                  {[
                    { label: 'Pending Call', title: 'To Call' },
                    { label: 'Contacted', title: 'Contacted' },
                    { label: 'Confirmed', title: 'Confirmed' },
                    { label: 'All', title: 'All Leads' }
                  ].map((f) => (
                    <button
                      key={f.label}
                      onClick={() => setStatusFilter(f.label)}
                      className={`px-3 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer min-h-[36px] ${
                        statusFilter === f.label
                          ? 'bg-[#b8854c] text-white shadow-xs'
                          : isLight
                          ? 'bg-[#ede5d8] text-[#52493c]'
                          : 'bg-[#221c16] text-[#a69c8e]'
                      }`}
                    >
                      {f.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Leads Card List */}
              {filteredLeads.length === 0 ? (
                <div
                  className={`p-8 text-center rounded-2xl border ${
                    isLight ? 'bg-white border-[#ece3d5]' : 'bg-[#181310] border-[#29221b]'
                  }`}
                >
                  <AlertCircle className="w-8 h-8 text-[#8e8578] mx-auto mb-2 opacity-60" />
                  <p className="text-sm font-bold">No leads in this view</p>
                  <p className={`text-xs mt-1 ${isLight ? 'text-[#7d7364]' : 'text-[#8e8578]'}`}>
                    Tap &ldquo;All Leads&rdquo; or adjust your search.
                  </p>
                </div>
              ) : (
                filteredLeads.map((lead) => {
                  const cleanPhone = lead.phone.replace(/[^0-9]/g, '');
                  const whatsappMsg = encodeURIComponent(
                    `Hello ${lead.name}, this is Dandeli Tours Manager regarding your booking inquiry for ${lead.guests} on ${lead.checkInDate}. I'd love to share the best resort package and activity options with you!`
                  );

                  return (
                    <div
                      key={lead.id}
                      className={`p-4 rounded-2xl border transition-all space-y-3 ${
                        lead.status === 'Pending Call'
                          ? isLight
                            ? 'bg-[#fffaf0] border-amber-300/80 shadow-xs ring-1 ring-amber-200'
                            : 'bg-[#21170d] border-amber-600/40 shadow-xs ring-1 ring-amber-900/40'
                          : isLight
                          ? 'bg-white border-[#ebe4d8]'
                          : 'bg-[#181310] border-[#29221b]'
                      }`}
                    >
                      {/* Top Header: Name, ID, Source */}
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-base leading-snug">{lead.name}</h3>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 font-mono text-[#8e8578]">
                              {lead.id}
                            </span>
                          </div>
                          <p className={`text-xs mt-0.5 ${isLight ? 'text-[#7d7364]' : 'text-[#9c9385]'}`}>
                            {lead.source} · {lead.createdAt}
                          </p>
                        </div>

                        {/* Status Label */}
                        <span
                          className={`text-[11px] font-extrabold px-2.5 py-1 rounded-full ${
                            lead.status === 'Pending Call'
                              ? 'bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-400/40'
                              : lead.status === 'Contacted'
                              ? 'bg-blue-500/20 text-blue-700 dark:text-blue-400 border border-blue-400/40'
                              : lead.status === 'Confirmed'
                              ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-400/40'
                              : 'bg-neutral-500/20 text-neutral-500 border border-neutral-400/40'
                          }`}
                        >
                          {lead.status === 'Pending Call' && '⚡ Needs Call'}
                          {lead.status === 'Contacted' && '💬 Contacted'}
                          {lead.status === 'Confirmed' && '✅ Confirmed'}
                          {lead.status === 'Cancelled' && '❌ Cancelled'}
                        </span>
                      </div>

                      {/* Travel Details Box */}
                      <div
                        className={`p-3 rounded-xl grid grid-cols-2 gap-2.5 text-xs ${
                          isLight ? 'bg-[#f6eee0]' : 'bg-[#1f1813]'
                        }`}
                      >
                        <div>
                          <span className={`text-[10px] uppercase font-bold tracking-wider block ${
                            isLight ? 'text-[#7d7364]' : 'text-[#8e8578]'
                          }`}>
                            Stay Type
                          </span>
                          <span className="font-bold block truncate">{lead.stayType}</span>
                        </div>

                        <div>
                          <span className={`text-[10px] uppercase font-bold tracking-wider block ${
                            isLight ? 'text-[#7d7364]' : 'text-[#8e8578]'
                          }`}>
                            Party & Date
                          </span>
                          <span className="font-bold block truncate">
                            {lead.guests} · {lead.checkInDate}
                          </span>
                        </div>
                      </div>

                      {/* Guest Message / Notes */}
                      {lead.message && (
                        <div
                          className={`text-xs p-3 rounded-xl ${
                            isLight ? 'bg-[#fbf9f5] text-[#4a4237]' : 'bg-[#14110e] text-[#b8b0a2]'
                          }`}
                        >
                          <span className="font-semibold block mb-0.5 text-[10px] uppercase text-[#8e8578]">Guest Requirement:</span>
                          &ldquo;{lead.message}&rdquo;
                        </div>
                      )}

                      {/* Big Action Buttons (Mobile One-Tap Call & WhatsApp) */}
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <a
                          href={`tel:${cleanPhone}`}
                          className="py-3 px-3 rounded-xl bg-[#1c1917] hover:bg-[#b8854c] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-colors min-h-[48px] active:scale-98"
                        >
                          <Phone className="w-4 h-4 text-emerald-400" />
                          <span>Call Guest</span>
                        </a>

                        <a
                          href={`https://wa.me/${cleanPhone}?text=${whatsappMsg}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-3 px-3 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-colors min-h-[48px] active:scale-98"
                        >
                          <MessageCircle className="w-4 h-4 fill-white" />
                          <span>WhatsApp</span>
                        </a>
                      </div>

                      {/* One-Tap Status Update Switcher */}
                      <div className="pt-1 border-t border-black/5 dark:border-white/5 flex items-center justify-between gap-1 text-[11px]">
                        <span className="text-[#8e8578] font-bold text-[10px] uppercase">Update Status:</span>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => handleStatusChange(lead.id, 'Pending Call')}
                            className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                              lead.status === 'Pending Call'
                                ? 'bg-amber-500 text-white'
                                : isLight
                                ? 'bg-[#eee6d8] text-[#554b3d] hover:bg-amber-100'
                                : 'bg-[#251d16] text-[#a19687] hover:bg-[#332418]'
                            }`}
                          >
                            To Call
                          </button>
                          <button
                            onClick={() => handleStatusChange(lead.id, 'Contacted')}
                            className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                              lead.status === 'Contacted'
                                ? 'bg-blue-600 text-white'
                                : isLight
                                ? 'bg-[#eee6d8] text-[#554b3d] hover:bg-blue-100'
                                : 'bg-[#251d16] text-[#a19687] hover:bg-[#1a2333]'
                            }`}
                          >
                            Contacted
                          </button>
                          <button
                            onClick={() => handleStatusChange(lead.id, 'Confirmed')}
                            className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                              lead.status === 'Confirmed'
                                ? 'bg-emerald-600 text-white'
                                : isLight
                                ? 'bg-[#eee6d8] text-[#554b3d] hover:bg-emerald-100'
                                : 'bg-[#251d16] text-[#a19687] hover:bg-[#192b1e]'
                            }`}
                          >
                            Confirmed
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}

          {/* TAB 2: QUICK ADD LEAD FORM */}
          {activeTab === 'addLead' && (
            <div
              className={`p-4 sm:p-5 rounded-2xl border ${
                isLight ? 'bg-white border-[#ebe4d8]' : 'bg-[#181310] border-[#29221b]'
              }`}
            >
              <h3 className="font-bold text-base mb-1 flex items-center gap-2">
                <Plus className="w-5 h-5 text-[#b8854c]" />
                <span>Log Direct Call or Walk-In Guest</span>
              </h3>
              <p className={`text-xs mb-4 ${isLight ? 'text-[#7d7364]' : 'text-[#8e8578]'}`}>
                Instantly add to your call queue with phone number and dates.
              </p>

              <form onSubmit={handleAddLeadSubmit} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block font-bold mb-1.5">Guest Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Deshmukh"
                    value={newLead.name}
                    onChange={(e) => setNewLead({ ...newLead, name: e.target.value })}
                    className={`w-full p-3.5 rounded-xl border outline-none text-base min-h-[48px] ${
                      isLight ? 'bg-[#fcfaf7] border-[#d8cfbe]' : 'bg-[#1f1914] border-[#362e24]'
                    }`}
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98450 00000"
                    value={newLead.phone}
                    onChange={(e) => setNewLead({ ...newLead, phone: e.target.value })}
                    className={`w-full p-3.5 rounded-xl border outline-none text-base min-h-[48px] ${
                      isLight ? 'bg-[#fcfaf7] border-[#d8cfbe]' : 'bg-[#1f1914] border-[#362e24]'
                    }`}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold mb-1.5">Guests / Group</label>
                    <select
                      value={newLead.guests}
                      onChange={(e) => setNewLead({ ...newLead, guests: e.target.value })}
                      className={`w-full p-3.5 rounded-xl border outline-none text-base min-h-[48px] ${
                        isLight ? 'bg-[#fcfaf7] border-[#d8cfbe]' : 'bg-[#1f1914] border-[#362e24]'
                      }`}
                    >
                      <option value="2 Guests (Couple)">2 Guests (Couple)</option>
                      <option value="4 Guests (Family)">4 Guests (Family)</option>
                      <option value="6-10 Guests (Friends)">6-10 Guests (Friends)</option>
                      <option value="15+ Guests (Corporate / College)">15+ Guests (Group)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold mb-1.5">Resort / Stay Preference</label>
                    <select
                      value={newLead.stayType}
                      onChange={(e) => setNewLead({ ...newLead, stayType: e.target.value })}
                      className={`w-full p-3.5 rounded-xl border outline-none text-base min-h-[48px] ${
                        isLight ? 'bg-[#fcfaf7] border-[#d8cfbe]' : 'bg-[#1f1914] border-[#362e24]'
                      }`}
                    >
                      <option value="Riverside Resort">Riverside Resort</option>
                      <option value="Elevated Treehouse">Elevated Treehouse</option>
                      <option value="Jungle Wooden Cottage">Jungle Wooden Cottage</option>
                      <option value="Riverside Camping Tents">Riverside Camping Tents</option>
                      <option value="Private Pool Villa">Private Pool Villa</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold mb-1.5">Travel / Check-In Date</label>
                  <input
                    type="date"
                    value={newLead.checkInDate}
                    onChange={(e) => setNewLead({ ...newLead, checkInDate: e.target.value })}
                    className={`w-full p-3.5 rounded-xl border outline-none text-base min-h-[48px] ${
                      isLight ? 'bg-[#fcfaf7] border-[#d8cfbe]' : 'bg-[#1f1914] border-[#362e24]'
                    }`}
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1.5">Special Notes / Requests</label>
                  <textarea
                    rows={3}
                    placeholder="Specific meal preferences, rafting slot, taxi pickup from Hubli/Belgaum..."
                    value={newLead.message}
                    onChange={(e) => setNewLead({ ...newLead, message: e.target.value })}
                    className={`w-full p-3.5 rounded-xl border outline-none text-base ${
                      isLight ? 'bg-[#fcfaf7] border-[#d8cfbe]' : 'bg-[#1f1914] border-[#362e24]'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#b8854c] hover:bg-[#c9945a] text-white font-bold text-sm shadow-md transition-all cursor-pointer min-h-[50px] active:scale-98"
                >
                  Save to Follow-Up Queue
                </button>
              </form>
            </div>
          )}

          {/* TAB 3: SITE ANALYTICS & SCROLL DEPTH */}
          {activeTab === 'analytics' && (
            <div className="space-y-3.5">
              {/* Scroll Funnel */}
              <div
                className={`p-4 sm:p-5 rounded-2xl border ${
                  isLight ? 'bg-white border-[#ebe4d8]' : 'bg-[#181310] border-[#29221b]'
                }`}
              >
                <h3 className="font-bold text-sm sm:text-base mb-3.5 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#b8854c]" />
                  <span>How Visitors Engage on Mobile & Web</span>
                </h3>

                <div className="space-y-3.5 text-xs sm:text-sm">
                  <div>
                    <div className="flex justify-between font-bold mb-1.5">
                      <span>1. Opened Website (Hero View)</span>
                      <span className="text-blue-500 font-extrabold">2,845 (100%)</span>
                    </div>
                    <div className="w-full bg-black/10 dark:bg-white/10 h-3 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full rounded-full w-[100%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-bold mb-1.5">
                      <span>2. Viewed Resort & Packages</span>
                      <span className="text-emerald-500 font-extrabold">2,048 (72%)</span>
                    </div>
                    <div className="w-full bg-black/10 dark:bg-white/10 h-3 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full w-[72%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-bold mb-1.5">
                      <span>3. Viewed Water Rafting & Activities</span>
                      <span className="text-amber-500 font-extrabold">1,650 (58%)</span>
                    </div>
                    <div className="w-full bg-black/10 dark:bg-white/10 h-3 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full rounded-full w-[58%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-bold mb-1.5">
                      <span>4. Reached Instant Booking Desk</span>
                      <span className="text-purple-500 font-extrabold">1,166 (41%)</span>
                    </div>
                    <div className="w-full bg-black/10 dark:bg-white/10 h-3 rounded-full overflow-hidden">
                      <div className="bg-purple-500 h-full rounded-full w-[41%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-bold mb-1.5">
                      <span>5. Clicked Call / WhatsApp Lead</span>
                      <span className="text-rose-500 font-extrabold">142 (5.0%)</span>
                    </div>
                    <div className="w-full bg-black/10 dark:bg-white/10 h-3 rounded-full overflow-hidden">
                      <div className="bg-rose-500 h-full rounded-full w-[15%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Traffic Sources */}
              <div
                className={`p-4 sm:p-5 rounded-2xl border ${
                  isLight ? 'bg-white border-[#ebe4d8]' : 'bg-[#181310] border-[#29221b]'
                }`}
              >
                <h3 className="font-bold text-sm sm:text-base mb-3 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#b8854c]" />
                  <span>Visitor Traffic Origins</span>
                </h3>

                <div className="grid grid-cols-2 gap-2.5 text-xs sm:text-sm">
                  <div className={`p-3 rounded-xl ${isLight ? 'bg-[#f7efe3]' : 'bg-[#1e1813]'}`}>
                    <span className="text-[10px] text-[#8e8578] font-bold block uppercase">Google Search (SEO)</span>
                    <span className="text-base sm:text-lg font-black text-emerald-500">1,240 (43%)</span>
                  </div>
                  <div className={`p-3 rounded-xl ${isLight ? 'bg-[#f7efe3]' : 'bg-[#1e1813]'}`}>
                    <span className="text-[10px] text-[#8e8578] font-bold block uppercase">WhatsApp Shares</span>
                    <span className="text-base sm:text-lg font-black text-blue-500">820 (29%)</span>
                  </div>
                  <div className={`p-3 rounded-xl ${isLight ? 'bg-[#f7efe3]' : 'bg-[#1e1813]'}`}>
                    <span className="text-[10px] text-[#8e8578] font-bold block uppercase">Instagram Ads</span>
                    <span className="text-base sm:text-lg font-black text-rose-500">510 (18%)</span>
                  </div>
                  <div className={`p-3 rounded-xl ${isLight ? 'bg-[#f7efe3]' : 'bg-[#1e1813]'}`}>
                    <span className="text-[10px] text-[#8e8578] font-bold block uppercase">Direct Links</span>
                    <span className="text-base sm:text-lg font-black text-[#8e8578]">275 (10%)</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
