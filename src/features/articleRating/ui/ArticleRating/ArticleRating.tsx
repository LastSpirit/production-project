import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { RatingCard } from "@/entities/Rating";
import { Skeleton } from "@/shared/ui/Skeleton";
import { getUserAuthData } from "@/entities/User";
import {
  useGetArticleRating,
  useRateArticle,
} from "../../model/api/aticleRatingApi";

export interface ArticleRatingProps {
  className?: string;
  id: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, id } = props;
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetArticleRating({
    articleId: id,
    userId: userData?.id ?? "",
  });
  const [rateArticleMutation] = useRateArticle();

  const handleRateAticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          userId: userData?.id ?? "",
          articleId: id,
          rate: starsCount,
          feedback,
        });
      } catch (e) {
        console.log(e);
      }
    },
    [id, rateArticleMutation, userData?.id]
  );

  const onCancel = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateAticle(starsCount, feedback);
    },
    [handleRateAticle]
  );

  const onAccept = useCallback(
    (starsCount: number) => {
      handleRateAticle(starsCount);
    },
    [handleRateAticle]
  );

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      onCancel={onCancel}
      onAccept={onAccept}
      rate={rating?.rate}
      className={className}
      title={t("Оцените статью")}
      feedbackTitle={t(
        "Оставьте свой отзыв о статье, это поможет улучшить качество"
      )}
      hasFeedback
    />
  );
});

export default ArticleRating;
