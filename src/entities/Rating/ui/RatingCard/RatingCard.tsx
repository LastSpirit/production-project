import { memo, useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { Card } from "@/shared/ui/Card";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";
import { StarRating } from "@/shared/ui/StarRating";
import { Modal } from "@/shared/ui/Modal";
import { Input } from "@/shared/ui/Input";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Drawer } from "@/shared/ui/Drawer";

interface RatingCardProps {
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  className?: string;
  rate?: number;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    rate = 0,
    feedbackTitle,
    title,
    hasFeedback,
    onCancel,
    onAccept,
  } = props;
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startsCount, setStartsCount] = useState(rate);
  const [feedback, setFeedback] = useState("");

  const onSelectStart = useCallback(
    (selectedStarsCount: number) => {
      setStartsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept]
  );

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(startsCount, feedback);
  }, [feedback, onAccept, startsCount]);

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(startsCount);
  }, [startsCount, onCancel]);

  const modalContent = (
    <VStack max gap="32">
      <Text title={feedbackTitle} />
      <Input placeholder={t("Ваш отзыв")} onChange={setFeedback} />
      <HStack max gap="16" justify="end">
        <Button onClick={cancelHandler} theme={ButtonTheme.OUTLINE_RED}>
          {t("Закрыть")}
        </Button>
        <Button onClick={acceptHandler}>{t("Отправить")}</Button>
      </HStack>
    </VStack>
  );

  return (
    <Card className={className} max>
      <VStack max align="center" gap="8">
        <Text title={startsCount ? t("Спасибо за оценку!") : title} />
        <StarRating
          selectedStars={startsCount}
          size={48}
          onSelect={onSelectStart}
        />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          {modalContent}
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
          {modalContent}
        </Drawer>
      </MobileView>
    </Card>
  );
});
