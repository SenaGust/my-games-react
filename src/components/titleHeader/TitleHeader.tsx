import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import useTitleHeaderStyles from "./TitleHeader.styles";

interface Props {
  title: string;
  buttons?: React.ReactNode;
  isHomePage?: boolean;
  onClickBackButton?: () => void;
}

const TitleHeader: React.FunctionComponent<Props> = ({
  title,
  buttons,
  onClickBackButton,
  isHomePage,
}) => {
  const { container, titleStyle, svgIcon } = useTitleHeaderStyles();

  return (
    <title className={container}>
      <div className={titleStyle}>
        {!isHomePage && (
          <IconButton onClick={onClickBackButton}>
            <ArrowBackIcon className={svgIcon} />
          </IconButton>
        )}

        <Typography variant="h5">{title}</Typography>
      </div>
      {buttons}
    </title>
  );
};

export default TitleHeader;
