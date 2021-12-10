import React from 'react';
import { Tax } from '../../../common/types';
import { hot } from 'react-hot-loader';
export type TaxNameProps = {
  taxId: string; // Nodes passed into the SVG element.
  taxes: Tax[];
  className?: string; // Add a custom class name
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
 function TaxName({ taxId, taxes, className = '' }: TaxNameProps) {
  const tax = taxes.find((tax) => tax.id === taxId);
  if (!tax) return null;
  return <span className={className}>{`${tax.name} (${tax.precentage}%)`}</span>;
}

export default hot(module)(TaxName)
