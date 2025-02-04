import React from 'react';

interface NavigationProps {
  mobile?: boolean;
  onClose?: () => void;
}

const navigationItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation({ mobile, onClose }: NavigationProps) {
  const baseStyles = mobile
    ? 'px-2 pt-2 pb-3 space-y-1 sm:px-3'
    : 'flex space-x-4';

  const linkStyles = mobile
    ? 'block px-3 py-2 rounded-md text-base font-medium'
    : 'px-3 py-2 rounded-md text-sm font-medium';

  const activeStyles = 'text-gray-900 hover:bg-gray-50';
  const inactiveStyles = 'text-gray-500 hover:text-gray-900 hover:bg-gray-50';

  return (
    <div className={baseStyles}>
      {navigationItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={`${linkStyles} ${inactiveStyles}`}
          onClick={onClose}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}