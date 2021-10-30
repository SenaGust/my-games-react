import React from "react";
import usePageLayoutStyles from "./PageLayout.styles";
import TitleHeader from "../titleHeader/TitleHeader";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core/SvgIcon";

interface ButtonProps {
  toUrl: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

interface Props {
  title: string;
  isHomePage?: boolean;
  buttons?: Array<ButtonProps>;
}

const PageLayout: React.FunctionComponent<Props> = ({
  title,
  buttons,
  children,
  isHomePage,
}) => {
  const { container } = usePageLayoutStyles();

  return (
    <div className={container}>
      <TitleHeader title={title} buttons={buttons} isHomePage={isHomePage} />
      <section>{children}</section>
    </div>
  );
};

export default PageLayout;
