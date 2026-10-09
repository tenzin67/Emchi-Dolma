'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="booking-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="booking-modal-content" ref={modalRef}>
        <div className="booking-modal-accent" />
        <button
          type="button"
          className="booking-modal-close"
          onClick={onClose}
          aria-label="Close booking modal"
        >
          ✕
        </button>

        <div className="booking-modal-header">
          <span className="booking-modal-badge">Direct Booking</span>
          <h2 id="booking-modal-title">Book a Consultation</h2>
          <p className="booking-modal-subtitle">
            How would you like to contact Emchi Tsundu Dolma?
          </p>
        </div>

        <div className="booking-modal-actions">
          <a
            href="tel:+61458494785"
            className="booking-btn booking-btn-call"
            onClick={onClose}
          >
            <span className="booking-btn-icon" aria-hidden="true">📞</span>
            <div className="booking-btn-text">
              <strong>Call Now</strong>
              <small>0458 494 785</small>
            </div>
          </a>

          <a
            href="sms:+61458494785"
            className="booking-btn booking-btn-sms"
            onClick={onClose}
          >
            <span className="booking-btn-icon" aria-hidden="true">💬</span>
            <div className="booking-btn-text">
              <strong>Send SMS</strong>
              <small>0458 494 785</small>
            </div>
          </a>

          <a
            href="https://wa.me/61458494785"
            target="_blank"
            rel="noopener noreferrer"
            className="booking-btn booking-btn-whatsapp"
            onClick={onClose}
          >
            <span className="booking-btn-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 2C6.496 2 2 6.48 2 11.996c0 1.84.498 3.567 1.365 5.053L2 22l5.125-1.34c1.432.784 3.072 1.233 4.906 1.233 5.535 0 10.031-4.48 10.031-9.997C22.062 6.48 17.566 2 12.031 2zm5.792 14.18c-.242.684-1.396 1.309-1.924 1.36-.51.05-1.173.08-3.766-.995-3.313-1.373-5.454-4.733-5.62-4.954-.165-.22-1.345-1.787-1.345-3.409 0-1.621.849-2.42 1.15-2.73.302-.31.66-.388.88-.388.22 0 .44 0 .633.01.205.01.48.077.734.684.263.633.895 2.186.974 2.344.078.158.13.344.026.552-.104.208-.156.338-.31.52-.155.183-.326.409-.466.55-.155.155-.316.324-.136.634.18.31.802 1.32 1.72 2.138 1.18 1.05 2.175 1.376 2.485 1.53.31.156.492.13.673-.077.18-.208.775-.905.982-1.216.207-.311.414-.26.699-.155.285.104 1.807.852 2.117 1.008.31.155.518.233.595.362.077.13.077.75-.165 1.434z" />
              </svg>
            </span>
            <div className="booking-btn-text">
              <strong>WhatsApp</strong>
              <small>Chat directly</small>
            </div>
          </a>
        </div>

        <div className="booking-modal-footer">
          <p className="booking-modal-note">
            ⏰ <strong>By appointment only</strong> · Response within 24–48 hours
          </p>
          <p className="booking-modal-location">
            📍 Werribee, Victoria · 🏛 Monthly at Tara Institute
          </p>
          <Link
            href="/contact#book"
            className="booking-modal-page-link"
            onClick={onClose}
          >
            View full consultation & location details →
          </Link>
        </div>
      </div>
    </div>
  );
}
