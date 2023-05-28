// Import React and the FC (Function Component) type from react
import React, { FC } from 'react';

import clsxm from '@/lib/clsxm';

// Define an array of sample chip props
export const sampleChips: ChipProps[] = [
  // A chip with the text "React" and the color "blue"
  { text: 'React', textColor: 'text-red-800', bgColor: 'bg-blue-200' },
  // A chip with the text "TypeScript" and the color "indigo"
  { text: 'TypeScript', textColor: 'text-blue-800', bgColor: 'bg-indigo-200' },
  // A chip with the text "Tailwind CSS" and the color "green"
  {
    text: 'Tailwind CSS',
    textColor: 'text-indigo-800',
    bgColor: 'bg-green-200',
  },
  // A chip with the text "Next.js" and the color "yellow"
  { text: 'Next.js', textColor: 'text-green-800', bgColor: 'bg-yellow-200' },
  // A chip with the text "GraphQL" and the color "pink"
  { text: 'GraphQL', textColor: 'text-pink-800', bgColor: 'bg-pink-200' },
  // A chip with the text "Firebase" and the color "red"
  { text: 'Firebase', textColor: 'text-red-800', bgColor: 'bg-red-200' },
];

// Define a type for the props of the Chip component
export type ChipProps = {
  // The text to display on the chip
  text: string;
  // The color of the chip background (optional, defaults to "blue")
  bgColor?: string;
  // The color of the chip text (optional, defaults to "white")
  textColor?: string;
};

// Define the Chip component as a function that takes ChipProps as props
const Chip: FC<ChipProps> = ({
  text,
  bgColor = 'bg-primary-400',
  textColor = 'text-gray-800',
}) => {
  // Return a JSX element that renders a span with tailwind css classes
  return (
    <span
      // style={{ backgroundColor: `${bgColor}` }}
      // Use the color prop to set the background color of the span
      className={clsxm(
        `${textColor} ${bgColor} m-1 rounded-lg p-1 text-sm font-medium`
      )}
    >
      {text}
    </span>
  );
};

// Export the Chip component
export default Chip;
