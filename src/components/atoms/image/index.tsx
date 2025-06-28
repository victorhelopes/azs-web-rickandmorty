import { StyledImage } from "./styles";

interface ImageProps {
  src: string;
  size?: number;
  alt?: string;
  avatar?: boolean;
}

export const Image = ({ src, size, alt, avatar }: ImageProps) => {
    return <StyledImage src={src} size={size || 16} alt={alt} avatar={avatar} />;
};
