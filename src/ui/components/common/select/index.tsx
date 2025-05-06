import React, { useEffect, useState } from 'react';
import Select, {
  StylesConfig,
} from 'react-select';
import { ColourOption, colourOptions } from './docs/data';
import Context from './Context';
import { SvgIconProps } from '../SvgIcon';

interface SelectComponentProps {
  Icon?: ({ stroke, strokeWidth }: SvgIconProps) => React.JSX.Element | null;
}

const SelectComponent = ({ Icon }: SelectComponentProps) => {
  const [isClient, setClient] = useState<boolean | undefined>();

  useEffect(() => {
    setClient(true);
  }, [])
  const styles: StylesConfig<ColourOption, false> = {
    control: (css) => ({
      ...css,
      paddingLeft: '1rem',
      borderRadius: '24px',
      borderColor: '#475467',
      background: '#1f2128',
      outline: 'none',
      '& span': {
        background: 'none',
      },
    }),
    singleValue: (css) => ({
      ...css,
      color: '#fff',
      fontSize: '16px',
    }),
    menu: (css) => ({
      ...css,
      backgroundColor: '#1F2128',
      '& ::-webkit-scrollbar': {
        width: '0px',
      },
      color: '#8A8A98',
    }),
  };

  return (
    isClient ? <Select
      // @ts-ignore
      components={{ Control: (controlProps) => <Context {...controlProps} Icon={Icon} /> }}
      isSearchable
      options={colourOptions}
      styles={styles}
    /> : null
  );
};

export default SelectComponent;
