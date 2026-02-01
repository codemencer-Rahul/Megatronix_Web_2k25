import { MapPin, Phone, Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "../ui/icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative py-8 px-4 sm:px-6 lg:px-8 font-orbitron"
      style={{
        backgroundColor: "var(--surface-black)",
        borderTop: "2px solid var(--yellow-border-soft)",
      }}
    >

      <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3
              className="text-lg font-bold mb-4 tracking-widest"
              style={{ color: "var(--yellow-primary)" }}
            >
              MEGATRONIX
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--gray-text)" }}>
              The official technical club of MSIT, fostering innovation, creativity, and
              technical excellence among students.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="text-lg font-bold mb-4 tracking-widest"
              style={{ color: "var(--yellow-primary)" }}
            >
              CONTACT
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin
                  className="w-4 h-4 mt-0.5 shrink-0"
                  style={{ color: "var(--yellow-primary)" }}
                />
                <span className="text-xs" style={{ color: "var(--gray-text)" }}>
                  MSIT, Kolkata, West Bengal 700150
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone
                  className="w-4 h-4 shrink-0"
                  style={{ color: "var(--yellow-primary)" }}
                />
                <span className="text-xs" style={{ color: "var(--gray-text)" }}>
                  +91 9007154749 / +91 7384563401 / +91 6291817369
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail
                  className="w-4 h-4 shrink-0"
                  style={{ color: "var(--yellow-primary)" }}
                />
                <span className="text-xs" style={{ color: "var(--gray-text)" }}>
                  megatronixmsitofficial@gmail.com
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3
              className="text-lg font-bold mb-4 tracking-widest"
              style={{ color: "var(--yellow-primary)" }}
            >
              CONNECT
            </h3>
            <div className="flex gap-4">
              {[
                {
                  Icon: FacebookIcon,
                  url: "https://www.facebook.com/share/17pM9fRame/",
                  name: "Facebook",
                },
                {
                  Icon: InstagramIcon,
                  url: "https://www.instagram.com/megatronix__msit?igsh=djQ5cjJkaWJhNG53",
                  name: "Instagram",
                },
                {
                  Icon: YoutubeIcon,
                  url: "https://www.youtube.com/@megatronixmsit921",
                  name: "YouTube",
                },
              ].map(({ Icon, url, name }) => (
                <a
                  key={Icon}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={name}
                  className="transition-all hover:scale-110"
                  style={{ color: "var(--gray-text)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--yellow-primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--gray-text)")
                  }
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 mt-8 border-t"
          style={{ borderColor: "var(--yellow-border-soft)" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs" style={{ color: "var(--gray-text)" }}>
              © {currentYear} MEGATRONIX. All rights reserved.
            </p>
            <p className="text-xs" style={{ color: "var(--gray-text)" }}>
              Made with{" "}
                          <span style={{ color: "var(--yellow-primary)" }}>❤️</span> by
              Megatronix Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
