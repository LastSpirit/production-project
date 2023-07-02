import { Page } from "widgets/Page/ui/Page";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation("about");

  return <Page>{t("О сайте")}</Page>;
};

export default AboutPage;
