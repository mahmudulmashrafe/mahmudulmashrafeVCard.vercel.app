import profileCover from "@/assets/profile-cover.jpg";
import {
  Mail,
  Phone,
  MessageCircle,
  Linkedin,
  Facebook,
  Instagram,
  X,
  Github,
  MapPin,
  Copy,
} from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/mahmudulmashrafe/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/mahmudulmashrafe", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/mahmudulmashrafe/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/mahmudulmashrafe/", label: "Facebook" },
  { icon: X, href: "https://x.com/iammashrafe", label: "x" },
];

const Index = () => {
  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Mahmudul Mashrafe
ORG:United International University
TITLE:Undergraduate Teaching Assistant & Student
TEL:+8801798210399
EMAIL:mahmudulmashrafe@gmail.com
ADR:;;Dakshinkhan;Dhaka;;1230;Bangladesh
END:VCARD`;
    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mahmudul-mashrafe.vcf";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyContact = () => {
    const contactInfo = `Mahmudul Mashrafe
Undergfraduate Teaching Assistant & Student
United International University
Phone: +8801798210399
Email: mahmudulmashrafe@gmail.com`;
    navigator.clipboard.writeText(contactInfo).then(() => {
      alert("Contact info copied!");
    }).catch(err => console.error("Failed to copy:", err));
  };

  return (
    <div className="h-screen w-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md h-full max-h-[720px] rounded-2xl overflow-hidden relative">
        {/* Copy button in top right */}
        <button
          onClick={handleCopyContact}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-foreground/20 transition-colors"
          aria-label="Copy contact"
        >
          <Copy className="w-5 h-5" />
        </button>

        {/* Full-page background image */}
        <img
          src={profileCover}
          alt="Mahmudul Mashrafe"
          className="absolute inset-0 w-full h-full object-cover object-top"
          width={807}
          height={1024}
        />

        {/* Progressive blur overlay — starts from name section to bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-[65%]"
          style={{
            backdropFilter: "blur(1px)",
            WebkitBackdropFilter: "blur(1px)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 30%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 30%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[50%]"
          style={{
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 35%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 35%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[35%]"
          style={{
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 35%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 35%)",
          }}
        />

        {/* Dark gradient overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, transparent 30%, hsl(0 0% 7% / 0.4) 60%, hsl(0 0% 7% / 0.85) 100%)",
          }}
        />

        {/* Content positioned at bottom */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 pb-6">
          {/* Name & details */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-foreground leading-tight">Mahmudul Mashrafe</h1>
              <p className="text-white/80 text-sm">Undergraduate Teaching Assistant & Student</p>
              <p className="text-white/80 font-semibold text-sm">United International University</p>
            </div>
          </div>

          {/* Quick actions */}
          <div className="flex gap-3 justify-center mb-4">
            <QuickAction icon={<Mail className="w-4 h-4" />} href="mailto:mahmudulmashrafe@gmail.com" label="Email" />
            <QuickAction icon={<MessageCircle className="w-4 h-4" />} href="https://wa.me/8801798210399" label="WhatsApp" />
            <QuickAction icon={<Phone className="w-4 h-4" />} href="tel:+8801798210399" label="Call" />
            <QuickAction icon={<MapPin className="w-4 h-4" />} href="https://maps.google.com/?q=Dakshinkhan,Dhaka" label="Location" />
          </div>

          {/* Social links */}
          <div className="flex gap-3 justify-center mb-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-foreground/20 transition-colors"
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Save contact button */}
          <button
            onClick={handleSaveContact}
            className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Save Contact
          </button>
        </div>
      </div>
    </div>
  );
};

const QuickAction = ({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) => (
  <a
    href={href}
    aria-label={label}
    className="flex flex-col items-center gap-1 group"
  >
    <span className="w-10 h-10 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center text-foreground/70 group-hover:text-primary group-hover:bg-foreground/20 transition-colors">
      {icon}
    </span>
    <span className="text-[10px] text-foreground/60 group-hover:text-primary transition-colors">{label}</span>
  </a>
);

export default Index;
