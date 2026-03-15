import React from 'react';

interface SortDropdownProps {
  options: { label: string; value: string }[];
  selectedOption: string;
  onSortChange: (value: string) => void;
}

export const SortDropdown: React.FC<SortDropdownProps> = ({ options, selectedOption, onSortChange }) => {
  return (
    <select
      value={selectedOption}
      onChange={(e) => onSortChange(e.target.value)}
      className="border rounded p-2"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};