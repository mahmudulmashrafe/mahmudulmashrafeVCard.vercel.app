import { Phone, Mail, MapPin } from "lucide-react";

const VCardContact = () => (
  <div className="rounded-2xl bg-card p-6 shadow-[var(--card-shadow)]">
    <div className="flex items-center gap-3 mb-5">
      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
        <Phone className="w-5 h-5 text-primary" />
      </div>
      <h2 className="text-lg font-bold text-foreground">Contact Me</h2>
    </div>

    <div className="space-y-5">
      <ContactItem
        icon={<Phone className="w-4 h-4" />}
        label="Call Us"
        value="+880 1798210399"
        href="tel:+8801798210399"
      />
      <ContactItem
        icon={<Mail className="w-4 h-4" />}
        label="Email"
        value="mahmudulmashrafe@gmail.com"
        href="mailto:mahmudulmashrafe@gmail.com"
      />
      <div>
        <div className="flex items-center gap-2 mb-1">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-foreground">Address</span>
        </div>
        <p className="text-muted-foreground text-sm ml-6">
          Dakshinkhan
          <br />
          Dhaka, 1230
          <br />
          Bangladesh
        </p>
      </div>
    </div>
  </div>
);

const ContactItem = ({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) => (
  <div>
    <div className="flex items-center gap-2 mb-1">
      <span className="text-primary">{icon}</span>
      <span className="text-sm font-semibold text-foreground">{label}</span>
    </div>
    <a
      href={href}
      className="text-muted-foreground text-sm ml-6 hover:text-primary transition-colors"
    >
      {value}
    </a>
  </div>
);

export default VCardContact;
