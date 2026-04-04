import { Linkedin, Facebook, Instagram, Twitter, Github } from "lucide-react";

const links = [
  {
    name: "LinkedIn",
    subtitle: "Follow us",
    href: "https://www.linkedin.com/in/mahmudulmashrafe/",
    icon: Linkedin,
  },
  {
    name: "Facebook",
    subtitle: "Follow me on Facebook",
    href: "https://www.facebook.com/mahmudulmashrafe/",
    icon: Facebook,
  },
  {
    name: "Instagram",
    subtitle: "Follow me on Instagram",
    href: "https://www.instagram.com/mahmudulmashrafe/",
    icon: Instagram,
  },
  {
    name: "Twitter",
    subtitle: "Follow me on Twitter",
    href: "https://twitter.com/MMashrafe",
    icon: Twitter,
  },
  {
    name: "GitHub",
    subtitle: "Check out my projects",
    href: "https://github.com/mahmudulmashrafe",
    icon: Github,
  },
];

const VCardSocial = () => (
  <div className="rounded-2xl bg-card p-6 shadow-[var(--card-shadow)]">
    <h2 className="text-lg font-bold text-foreground mb-4">Social Links</h2>
    <div className="space-y-3">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-3 rounded-xl bg-secondary hover:bg-secondary/70 transition-colors group"
        >
          <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
            <link.icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              {link.name}
            </p>
            <p className="text-xs text-muted-foreground">{link.subtitle}</p>
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default VCardSocial;
