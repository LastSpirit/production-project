import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { ListBox } from "shared/ui/ListBox/ListBox";
import { Country } from "../../model/types/country";

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazahstan, content: Country.Kazahstan },
  { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { t } = useTranslation();
  const { className, value, onChange, readonly } = props;

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange]
  );

  return (
    <ListBox
      className={classNames("", {}, [className])}
      value={value}
      defaultValue={t("Укажите страну")}
      label={t("Укажите страну")}
      onChange={onChangeHandler}
      items={options}
      readonly={readonly}
      direction="top right"
    />
  );
});
