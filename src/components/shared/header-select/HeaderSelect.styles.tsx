import { GroupBase, StylesConfig } from 'react-select';
import { ICityOption } from '../../../types';

export const customStyles: StylesConfig<any, boolean, GroupBase<ICityOption>> = {
  control: (base) => ({
    ...base,
    backgroundColor: 'var(--default-background-day)',
    color: 'var(--default-color)',
  }),
  singleValue: (base) => ({
    ...base,
    color: 'var(--default-color)',
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: 'var(--default-background-day)',
    color: 'var(--default-color)',
    width: 'max-content',
  }),
  input: (base) => ({
    ...base,
    color: 'var(--default-color)',
  }),
};
