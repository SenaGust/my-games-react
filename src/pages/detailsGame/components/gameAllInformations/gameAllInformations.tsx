import React, { useMemo } from "react";
import Game from "../../../../domains/Game";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import useGameAllInformationsStyles from "./gameAllInformations.styles";
import { useHistory } from "react-router";
import Rating from "@material-ui/lab/Rating";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import DeleteGameUseCase from "../../../../usecases/DeleteGameUseCase";
import onChangeUrl from "../../../../utils/updateUrl/updateUrl";

interface Props {
  game: Game;
}

const GameAllInformations: React.FunctionComponent<Props> = ({ game }) => {
  const { image, ratingStyle } = useGameAllInformationsStyles();
  const history = useHistory();

  const renderImage = useMemo(() => {
    if (game.image) {
      return <CardMedia component="img" className={image} image={image} />;
    }

    if (game.name) {
      const stringToColor = (string: string) => {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = "#";

        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.substr(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
      };

      const stringAvatar = (name: string) => {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          children: `${name[0].toLocaleUpperCase()}`,
        };
      };

      return <Avatar {...stringAvatar(game.name)} />;
    }

    return null;
  }, [image, game]);

  return (
    <Card variant="outlined">
      <CardHeader
        title={game.name}
        titleTypographyProps={{ variant: "h5" }}
        subheader={game.type}
        avatar={renderImage}
        action={
          <>
            <IconButton
              onClick={() => {
                DeleteGameUseCase(game.id);
                onChangeUrl(``, history);
              }}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => onChangeUrl(`edit/${game.id}`, history)}>
              <EditIcon />
            </IconButton>
          </>
        }
      />
      <CardContent>
        <Typography variant="body1">
          <b>Status:</b> {game.status}
        </Typography>
        <Typography variant="body1">
          <b>Data inicial:</b> {new Date(game.initialDate).toLocaleDateString()}
        </Typography>
        <Typography variant="body1" component="p">
          <b>Rating:</b>
          <Rating
            value={Number(game.rating)}
            className={ratingStyle}
            readOnly
          />
        </Typography>
        <Typography variant="body1" component="p">
          <b>Descrição:</b>
        </Typography>
        <Typography paragraph>{game.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default GameAllInformations;
