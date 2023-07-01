import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page/Page";
import { classNames } from "shared/lib/classNames/classNames";

import cls from "./ArticleEditPage.module.scss";

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
      {isEdit ? t("Редактирование статьи") : t("Создание новой статьи")}
    </Page>
  );
};

export default ArticleEditPage;
