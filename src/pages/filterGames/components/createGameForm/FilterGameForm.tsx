import Button from "@material-ui/core/Button";
import { Formik } from "formik";
import React, { useCallback } from "react";
import { useHistory, useLocation } from "react-router";
import FormikInputSelect from "../../../../components/formikInputSelect/FormikInputSelect";
import GameCategoryEnum from "../../../../domains/GameCategoryEnum";
import GameStatusEnum from "../../../../domains/GameStatusEnum";
import onChangeUrl from "../../../../utils/updateUrl/updateUrl";
import useCreateGameFormStyles from "./FilterGameForm.styles";
import useGameFilter from "../../../../hooks/useGameFilter/useGameFilter";
import GameFilterByEnum from "../../../../domains/GameFilterByEnum";
import addQueryParamsToURL from "../../../../utils/addQueryParamsToURL/AddQueryParamsToURL";
import GameFilter from "../../../../domains/GameFilter";

const FilterGameForm: React.FunctionComponent = () => {
  const { container } = useCreateGameFormStyles();
  const history = useHistory();
  const location = useLocation();
  const gameFilters = useGameFilter();

  const onSubmit = useCallback(
    (values) => {
      const formattedValues = () => {
        const allValues: Array<GameFilter> = [];

        const search = gameFilters.find(
          (gameFilter) => gameFilter.filterBy === GameFilterByEnum.NAME
        );
        if (search) {
          allValues.push(search);
        }

        if (values.type) {
          allValues.push({
            filterBy: GameFilterByEnum.TYPE,
            value: values.type,
          });
        }

        if (values.rating) {
          allValues.push({
            filterBy: GameFilterByEnum.RATING,
            value: values.rating,
          });
        }

        if (values.status) {
          allValues.push({
            filterBy: GameFilterByEnum.STATUS,
            value: values.status,
          });
        }

        return allValues;
      };

      addQueryParamsToURL(formattedValues(), history, location, "/");
    },
    [history, location, gameFilters]
  );

  return (
    <Formik
      initialValues={{
        type: "",
        status: "",
        rating: "",
      }}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, dirty }) => {
        return (
          <div className={container}>
            <FormikInputSelect
              label="Genero"
              name="type"
              required
              options={Object.values(GameCategoryEnum)}
            />
            <FormikInputSelect
              label="Status"
              name="status"
              required
              options={Object.values(GameStatusEnum)}
            />
            <FormikInputSelect
              label="Nota"
              name="rating"
              required
              options={["1", "2", "3", "4", "5"]}
            />

            <Button onClick={() => onChangeUrl("", history)}>Cancelar</Button>
            <Button onClick={handleSubmit as () => void} disabled={!dirty}>
              Filtrar
            </Button>
          </div>
        );
      }}
    </Formik>
  );
};

export default FilterGameForm;
