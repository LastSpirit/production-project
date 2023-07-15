import { Page } from "widgets/Page/ui/Page";
import { useTranslation } from "react-i18next";

const AdminPanelPage = () => {
  const { t } = useTranslation("about");

  return <Page>{t("Админ панель")}</Page>;
};

export default AdminPanelPage;
