import { ButtonHTMLAttributes, ReactNode, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    disabled,
    children,
    className,
    size = ButtonSize.M,
    theme,
    square,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled,
  };

  return (
    <button
      disabled={disabled}
      type="button"
      className={classNames(cls.Button, mods, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
});
