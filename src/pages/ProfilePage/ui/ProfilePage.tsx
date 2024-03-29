import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";
import { VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";
import { classNames } from "@/shared/lib/classNames/classNames";
import { EditableProfileCard } from "@/features/editableProfileCard";

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("profile");

  // if (!id) {
  //   return <Text text={t("Профиль не найден")} />;
  // }

  return (
    <Page className={classNames("", {}, [className])}>
      <VStack max gap="16">
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
