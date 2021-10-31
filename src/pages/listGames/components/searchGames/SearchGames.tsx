import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import useSearchGamesStyles from "./SearchGames.styles";
import InputLabel from "@material-ui/core/InputLabel";
import addQueryParamsToURL from "../../../../utils/addQueryParamsToURL/AddQueryParamsToURL";
import GameFilterByEnum from "../../../../domains/GameFilterByEnum";
import { useHistory, useLocation } from "react-router";

const ListGamesRoute: React.FunctionComponent = () => {
  const history = useHistory();
  const location = useLocation();
  const { container, fieldContainer, svgbutton } = useSearchGamesStyles();
  const onSubmit = () =>
    addQueryParamsToURL(
      [{ filterBy: GameFilterByEnum.NAME, value: search }],
      history,
      location
    );
  const [search, setSearch] = useState("");

  return (
    <div>
      <InputLabel>Pesquisar jogos:</InputLabel>
      <div className={container}>
        <div className={`${container} ${fieldContainer}`}>
          <TextField
            fullWidth
            onChange={(e) => setSearch(e.target.value.trim())}
            value={search}
          />
        </div>
        <IconButton onClick={onSubmit}>
          <SearchIcon className={svgbutton} />
        </IconButton>
      </div>
    </div>
  );
};

export default ListGamesRoute;
