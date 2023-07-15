import { Page } from "widgets/Page/ui/Page";
import { useTranslation } from "react-i18next";

const ForbiddenPage = () => {
  const { t } = useTranslation("");

  return <Page>{t("У вас нет доступа к этой странице")}</Page>;
};

export default ForbiddenPage;
