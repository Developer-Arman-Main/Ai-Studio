import * as Icons from "lucide-react";

interface LucideIconProps {
  name: string;
  size?: number;
  className?: string;
}

export default function LucideIcon({ name, size = 20, className = "" }: LucideIconProps) {
  // Safe dynamic lookup in Lucide Icons bundle
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    // Fallback to HelpCircle if icon name is missing or typed incorrectly
    const Fallback = Icons.HelpCircle || Icons.AlertCircle;
    return <Fallback size={size} className={className} />;
  }
  return <IconComponent size={size} className={className} />;
}
