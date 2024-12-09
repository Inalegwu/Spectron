import { icons } from 'lucide-react';

type Props = {
  name: keyof typeof icons;
  size?: number;
  className?: string;
  color?: string;
};

const Icon = ({ name, size, className, color }: Props) => {
  const LucideIcon = icons[name];

  return <LucideIcon size={size} color={color} className={className} />;
};

export default Icon;
