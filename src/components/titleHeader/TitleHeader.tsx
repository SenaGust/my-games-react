import React, { useCallback } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import useTitleHeaderStyles from "./TitleHeader.styles";
import { useHistory } from "react-router-dom";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core/SvgIcon";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";

interface ButtonProps {
  toUrl: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

interface Props {
  title: string;
  buttons?: Array<ButtonProps>;
  isHomePage?: boolean;
}

const TitleHeader: React.FunctionComponent<Props> = ({
  title,
  buttons,
  isHomePage,
}) => {
  const history = useHistory();
  const { container, titleStyle, svgIcon, titleIcon } = useTitleHeaderStyles();
  const onChangeUrl = useCallback(
    (newUrl: string) => history.push(`/${newUrl}`),
    [history]
  );

  return (
    <title className={container}>
      <div className={titleStyle}>
        {!isHomePage && (
          <IconButton onClick={() => onChangeUrl("")}>
            <ArrowBackIcon className={svgIcon} />
          </IconButton>
        )}
        {isHomePage && <SportsEsportsIcon className={titleIcon} />}
        <Typography variant="h5">{title}</Typography>
      </div>
      {buttons?.map((button) => (
        <IconButton onClick={() => onChangeUrl(button.toUrl)}>
          <button.icon className={svgIcon} />
        </IconButton>
      ))}
    </title>
  );
};

export default TitleHeader;
