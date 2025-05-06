import { Button, ButtonProps } from '@mui/material';

type ButtonComponentProps = {
  width?: string;
  padding?: number;
  borderRadius?: number;
  borderStyle?: string;
  fontSize?: number;
} & ButtonProps;

const ButtonComponent = ({
  width,
  padding,
  borderRadius,
  fontSize,
  ...buttonProps
}: ButtonComponentProps) => {
  return (
    <Button
      sx={{
        width: width,
        padding: padding,
        borderRadius: `${borderRadius}px`,
        fontSize: `${fontSize}px`,
      }}
      {...buttonProps}
    ></Button>
  );
};
export default ButtonComponent;
