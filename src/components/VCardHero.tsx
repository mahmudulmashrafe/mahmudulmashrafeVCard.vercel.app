import profileCover from "@/assets/profile-cover.jpg";
import companyLogo from "@/assets/company-logo.png";
import { Mail, Phone, MessageCircle } from "lucide-react";

const VCardHero = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-card shadow-[var(--card-shadow)]">
      <div className="relative h-80">
        <img
          src={profileCover}
          alt="Mahmudul Mashrafe"
          className="w-full h-full object-cover"
          width={800}
          height={512}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-gradient)" }}
        />
        <div className="absolute bottom-6 left-6 right-6">
          <h1 className="text-3xl font-bold text-foreground">
            Mahmudul Mashrafe
          </h1>
          <p className="text-muted-foreground text-sm mt-1">CEO</p>
          <p className="text-primary font-semibold text-sm">LunerAI</p>
          <img
            src={companyLogo}
            alt="LunerAI"
            className="w-10 h-10 mt-2 rounded-lg bg-background/50 p-1"
            loading="lazy"
            width={40}
            height={40}
          />
        </div>
      </div>

      <div className="flex gap-4 justify-center py-5">
        <QuickAction
          icon={<Mail className="w-5 h-5" />}
          href="mailto:mahmudulmashrafe@gmail.com"
          label="Email"
        />
        <QuickAction
          icon={<MessageCircle className="w-5 h-5" />}
          href="https://wa.me/8801798210399"
          label="WhatsApp"
        />
        <QuickAction
          icon={<Phone className="w-5 h-5" />}
          href="tel:+8801798210399"
          label="Call"
        />
      </div>
    </div>
  );
};

const QuickAction = ({
  icon,
  href,
  label,
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
}) => (
  <a
    href={href}
    aria-label={label}
    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
  >
    {icon}
  </a>
);

export default VCardHero;
