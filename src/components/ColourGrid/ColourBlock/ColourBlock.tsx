interface ColourBlockProps {
  size: string;
}

export default function ColourBlock({ size }: ColourBlockProps) {
  return <div className="h-10 w-10 bg-green-400"></div>;
}
