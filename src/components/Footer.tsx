import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="The Owl Creations" className="h-10 w-auto" />
            <span className="font-display text-xl font-bold tracking-tight">
              <span className="text-gradient-gold">The Owl</span>{" "}
              <span className="text-foreground">Creations</span>
            </span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed font-body max-w-xs">
            Inspired by wisdom and vision, we blend creativity with strategy to deliver impactful digital and real-world experiences.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors group">
              <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors group">
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors group">
              <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-lg font-bold mb-6 text-foreground">Explore</h4>
          <ul className="space-y-4">
            {["Home", "Services", "Projects", "About", "Why Us", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-body"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-lg font-bold mb-6 text-foreground">Services</h4>
          <ul className="space-y-4">
            {[
              "Digital Marketing",
              "Event Management",
              "Web & App Development",
              "Short Films & Media",
            ].map((service) => (
              <li key={service}>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-body"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="font-display text-lg font-bold mb-6 text-foreground">Get in Touch</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <div className="text-sm font-body">
                <p className="text-foreground font-medium">+91 8148111530</p>
                <p className="text-muted-foreground text-xs uppercase mt-1">Founder: Danush Kumar</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <a href="mailto:theowlcreationss@gmail.com" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                theowlcreationss@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <p className="text-sm font-body text-muted-foreground">
                India — Serving clients worldwide.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-muted-foreground text-xs font-body">
          © {new Date().getFullYear()} The Owl Creations. All rights reserved.
        </p>
        <div className="flex items-center gap-8">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs font-body">Privacy Policy</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs font-body">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
