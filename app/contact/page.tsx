import type { Metadata } from 'next';
import { PageHero } from '../services/page';

export const metadata: Metadata = {
  title: 'Book a Consultation',
  description: 'Book a Tibetan Medicine or Ayurveda consultation with Emchi Tsundu Dolma in Werribee, Victoria or Tara Institute. Call, text, or WhatsApp to arrange an appointment.'
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        tibetan="འབྲེལ་བ་གཉེར་མཁན།"
        title="Book a Consultation"
        subtitle="Take the first step on your healing journey"
      />

      <section className="section" id="booking-section">
        <div className="container contact-grid">
          {/* LEFT SIDE: Contact Information & Preparation */}
          <aside className="contact-info">
            <h2>Get in Touch</h2>

            <div className="contact-detail">
              <span className="contact-icon" aria-hidden="true">📞</span>
              <div>
                <h3>Phone</h3>
                <a href="tel:+61458494785" className="contact-link">0458 494 785</a>
                <small>Available for calls and texts</small>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-icon" aria-hidden="true">📍</span>
              <div>
                <h3>Location</h3>
                <strong>Werribee, Victoria, Australia</strong>
                <small>Exact address provided upon booking</small>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-icon" aria-hidden="true">🏛</span>
              <div>
                <h3>Tara Institute</h3>
                <strong>Monthly visit — 1st Saturday</strong>
                <small>
                  <a
                    href="https://tarainstitute.org.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link external-link"
                  >
                    tarainstitute.org.au ↗
                  </a>
                </small>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-icon" aria-hidden="true">⏰</span>
              <div>
                <h3>Appointments</h3>
                <strong>By appointment only</strong>
                <small>Please call or text to arrange a consultation.</small>
              </div>
            </div>

            {/* WHAT TO PREPARE */}
            <div className="contact-prepare">
              <div className="contact-prepare-header">
                <span className="prepare-icon" aria-hidden="true">🌿</span>
                <h3>What to Prepare</h3>
              </div>
              <p className="prepare-intro">
                To help make the most of your consultation:
              </p>
              <ul className="prepare-list">
                <li>Any questions you would like to discuss</li>
                <li>Relevant information about your current concerns</li>
                <li>A list of medicines or treatments you are currently using, if relevant</li>
                <li>Questions about Tibetan Medicine</li>
              </ul>
              <div className="prepare-footer">
                <p className="prepare-note">
                  Please do not submit health information online. You will discuss your health directly with Emchi during your consultation.
                </p>
                <span className="response-badge">Response within 24–48 hours</span>
              </div>
            </div>
          </aside>

          {/* RIGHT SIDE: Prominent Consultation Booking Card */}
          <div className="booking-card" id="book">
            <div className="booking-card-accent" />
            <div className="booking-card-body">
              <span className="booking-card-badge">Direct Consultation</span>
              <h2 className="booking-card-title">Ready to Book?</h2>
              <p className="booking-card-desc">
                To arrange a consultation, please call or text directly. We will provide appointment and location details when your consultation is confirmed.
              </p>

              <div className="practitioner-strip">
                <span className="practitioner-avatar" aria-hidden="true">☸</span>
                <div>
                  <strong>Emchi Tsundu Dolma</strong>
                  <small>Tibetan Medicine & Ayurveda Consultant · Men-Tsee-Khang Graduate</small>
                </div>
              </div>

              {/* THREE ACTION BUTTONS */}
              <div className="booking-actions">
                <a
                  href="tel:+61458494785"
                  className="booking-action-btn btn-call"
                  aria-label="Call Emchi Tsundu Dolma on 0458 494 785"
                >
                  <span className="btn-icon" aria-hidden="true">📞</span>
                  <div className="btn-label-group">
                    <span className="btn-main-label">Call Now</span>
                    <span className="btn-sub-label">0458 494 785</span>
                  </div>
                </a>

                <a
                  href="sms:+61458494785"
                  className="booking-action-btn btn-sms"
                  aria-label="Send an SMS to 0458 494 785"
                >
                  <span className="btn-icon" aria-hidden="true">💬</span>
                  <div className="btn-label-group">
                    <span className="btn-main-label">Send SMS</span>
                    <span className="btn-sub-label">0458 494 785</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/61458494785"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="booking-action-btn btn-whatsapp"
                  aria-label="Chat with Emchi Tsundu Dolma on WhatsApp"
                >
                  <span className="btn-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.031 2C6.496 2 2 6.48 2 11.996c0 1.84.498 3.567 1.365 5.053L2 22l5.125-1.34c1.432.784 3.072 1.233 4.906 1.233 5.535 0 10.031-4.48 10.031-9.997C22.062 6.48 17.566 2 12.031 2zm5.792 14.18c-.242.684-1.396 1.309-1.924 1.36-.51.05-1.173.08-3.766-.995-3.313-1.373-5.454-4.733-5.62-4.954-.165-.22-1.345-1.787-1.345-3.409 0-1.621.849-2.42 1.15-2.73.302-.31.66-.388.88-.388.22 0 .44 0 .633.01.205.01.48.077.734.684.263.633.895 2.186.974 2.344.078.158.13.344.026.552-.104.208-.156.338-.31.52-.155.183-.326.409-.466.55-.155.155-.316.324-.136.634.18.31.802 1.32 1.72 2.138 1.18 1.05 2.175 1.376 2.485 1.53.31.156.492.13.673-.077.18-.208.775-.905.982-1.216.207-.311.414-.26.699-.155.285.104 1.807.852 2.117 1.008.31.155.518.233.595.362.077.13.077.75-.165 1.434z" />
                    </svg>
                  </span>
                  <div className="btn-label-group">
                    <span className="btn-main-label">WhatsApp</span>
                    <span className="btn-sub-label">Chat Directly</span>
                  </div>
                </a>
              </div>

              {/* CONSULTATION DETAILS & DIRECT LINE */}
              <div className="booking-info-box">
                <div className="info-row">
                  <span className="info-icon" aria-hidden="true">📞</span>
                  <span>Direct phone: <a href="tel:+61458494785" className="contact-link">0458 494 785</a></span>
                </div>
                <div className="info-row">
                  <span className="info-icon" aria-hidden="true">📍</span>
                  <span>Werribee, Victoria & Monthly at Tara Institute</span>
                </div>
                <div className="info-row">
                  <span className="info-icon" aria-hidden="true">⏰</span>
                  <span>By appointment only · Response within 24–48 hours</span>
                </div>
              </div>

              <div className="booking-privacy-note">
                <p>
                  🔒 <strong>Confidential & Private:</strong> Health concerns and personal medical history are discussed directly in consultation with Emchi, never collected or stored through web forms.
                </p>
              </div>

              <div className="booking-card-disclaimer">
                <p>
                  Tibetan Medicine is a complementary practice. Always consult your healthcare provider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
