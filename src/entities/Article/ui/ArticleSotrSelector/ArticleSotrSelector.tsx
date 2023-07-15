import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { SortOrder } from "shared/types";
import { ArticlesSortField } from "../../model/const/articleConst";

import cls from "./ArticleSotrSelector.module.scss";

interface ArticleSotrSelectorProps {
  className?: string;
  sort: ArticlesSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticlesSortField) => void;
}

export const ArticleSotrSelector = memo((props: ArticleSotrSelectorProps) => {
  const { className, sort, order, onChangeOrder, onChangeSort } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: "asc",
        content: t("возрастанию"),
      },
      {
        value: "desc",
        content: t("убыванию"),
      },
    ],
    [t]
  );

  const sortFieldOptions = useMemo<SelectOption<ArticlesSortField>[]>(
    () => [
      {
        value: ArticlesSortField.CREATED,
        content: t("дате создания"),
      },
      {
        value: ArticlesSortField.TITLE,
        content: t("названию"),
      },
      {
        value: ArticlesSortField.VIEWS,
        content: t("просмотрам"),
      },
    ],
    [t]
  );

  return (
    <div className={classNames(cls.ArticleSotrSelector, {}, [className])}>
      <Select
        label={t("Сортировать ПО")}
        options={sortFieldOptions}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        label={t("по")}
        options={orderOptions}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
});
