import { useTranslation } from "react-i18next";
import { ArticleList } from "@/entities/Article";
import { Text, TextSize } from "@/shared/ui/Text";
import { VStack } from "@/shared/ui/Stack";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useGetArticleRecomendationsListQuery } from "../../api/articleRecommendationApi";

interface ArticleRecommendationListProps {
  className?: string;
}

export const ArticleRecommendationList = (
  props: ArticleRecommendationListProps
) => {
  const { className } = props;
  const { t } = useTranslation();
  const {
    data: articles,
    isLoading,
    error,
  } = useGetArticleRecomendationsListQuery(3);

  if (isLoading || error || !articles) {
    return null;
  }

  return (
    <VStack gap="8" className={classNames("", {}, [className])}>
      <Text size={TextSize.L} title={t("Рекомендуем")} />
      <ArticleList articles={articles} target="_blank" />
    </VStack>
  );
};
