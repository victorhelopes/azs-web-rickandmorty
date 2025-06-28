import * as FeatherIcons from "react-feather";
import { useTheme } from "styled-components";

export interface IconProps {
  name: keyof typeof FeatherIcons;
  size?: IconSize;
  color?: string;
  fill?: boolean;
  strokeWidth?: number;
};

export function Icon({
  name,
  size = "base",
  color = "currentColor",
  fill = false,
  strokeWidth = 2,
}: IconProps) {
  const theme = useTheme();
  const iconSize = theme.iconSizes?.[size] ?? 16;

  const IconComponent = FeatherIcons[name];

  if (!IconComponent) {
    console.warn(`Ícone "${name}" não encontrado.`);
    return null;
  }

  return <IconComponent size={iconSize} color={color} strokeWidth={strokeWidth} fill={fill ? color : 'transparent'} />;
}
