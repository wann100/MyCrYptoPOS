import{ ReactNode } from 'react';
export type CommonLayoutProps = {
    head: ReactNode;
    body: ReactNode;
    isFilterable?: boolean;
    filterValue?: string;
    onChangeFilterValue?: (value: string) => void;
  };