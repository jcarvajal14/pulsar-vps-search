import React, { useEffect, useState } from 'react';
import { components, ControlProps } from 'react-select';
import { ColourOption } from './docs/data';
import { SvgIconProps } from '../SvgIcon';

type ContextProps = ControlProps<ColourOption, false> & {
  Icon?: ({ stroke, strokeWidth }: SvgIconProps) => React.JSX.Element | null;
};

const Context = ({ children, Icon, ...props }: ContextProps) => {
  const [isClient, setClient] = useState<boolean | undefined>();

  useEffect(() => {
    setClient(true);
  }, [])
  return ( isClient ?
    <components.Control {...props}>
      <span>{Icon ? <Icon /> : null}</span>
      {children}
    </components.Control> : null
  );
};

export default Context;
