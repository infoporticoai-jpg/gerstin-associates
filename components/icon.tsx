import {
  Briefcase,
  Scale,
  Building2,
  FileSignature,
  Award,
  Handshake,
  MessageSquare,
  Compass,
  Users,
  ShieldCheck,
  Gavel,
  Landmark,
  FileText,
  HelpCircle,
  Hotel,
  Cpu,
  KeyRound,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Briefcase,
  Scale,
  Building2,
  FileSignature,
  Award,
  Handshake,
  MessageSquare,
  Compass,
  Users,
  ShieldCheck,
  Gavel,
  Landmark,
  FileText,
  HelpCircle,
  Hotel,
  Cpu,
  KeyRound,
};

/** Resolve a Lucide icon by name (from content data), with a safe fallback. */
export function Icon({
  name,
  className,
  size,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const Cmp = map[name] ?? FileText;
  return <Cmp className={className} size={size} aria-hidden />;
}
