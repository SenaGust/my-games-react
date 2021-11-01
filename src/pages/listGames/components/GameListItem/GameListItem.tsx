import React, { useMemo } from "react";
import Game from "../../../../domains/Game";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import useGameListItemStyles from "./GameListItem.styles";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

interface Props {
  game: Game;
}

const GameListItem: React.FunctionComponent<Props> = ({ game }) => {
  const { image } = useGameListItemStyles();

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
      />
      <CardContent>
        <Typography variant="body2">Status: {game.status}</Typography>
        <Typography variant="body2">
          Data inicial: {new Date(game.initialDate).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" component="p">
          Descrição: {game.description}
        </Typography>
        <CardActions>
          <Button color="primary">Ver mais informações</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default GameListItem;
