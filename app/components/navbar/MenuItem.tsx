"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
  children?: React.ReactNode;
  className?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label, children, className }) => {
  return (
    <div
      onClick={onClick}

      className={`
      ${className}
        px-4 
        py-3 
        hover:bg-neutral-100 
        transition
        font-semibold
        `}
    >
      {label}
      {children}
    </div>
  );
};

export default MenuItem;
