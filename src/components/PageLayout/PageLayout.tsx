import React from "react";
import usePageLayoutStyles from "./PageLayout.styles";
import TitleHeader from "../titleHeader/TitleHeader";

interface Props {
  title: string;
  buttons?: React.ReactNode;
  onClickBackButton?: () => void;
  isHomePage?: boolean;
}

const PageLayout: React.FunctionComponent<Props> = ({
  title,
  buttons,
  onClickBackButton,
  children,
  isHomePage,
}) => {
  const { container } = usePageLayoutStyles();

  return (
    <div className={container}>
      <TitleHeader
        title={title}
        buttons={buttons}
        isHomePage={isHomePage}
        onClickBackButton={onClickBackButton}
      />
      <section>{children}</section>
    </div>
  );
};

export default PageLayout;
