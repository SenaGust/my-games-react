import Button from "@material-ui/core/Button";
import { Formik } from "formik";
import React, { useCallback } from "react";
import { useHistory } from "react-router";
import { date, object, string } from "yup";
import FormikInputDate from "../../../../components/formikInputDate/FormikInputDate";
import FormikInputSelect from "../../../../components/formikInputSelect/FormikInputSelect";
import FormikInputText from "../../../../components/formikInputText/formikInputText";
import GameCategoryEnum from "../../../../domains/GameCategoryEnum";
import GameStatusEnum from "../../../../domains/GameStatusEnum";
import Game from "../../../../domains/Game";
import onChangeUrl from "../../../../utils/updateUrl/updateUrl";
import useCreateGameFormStyles from "./EditGameForm.styles";
import EditGameUseCase from "../../../../usecases/EditGameUseCase";

interface Props {
  initialValue: Game;
}

const EditGameForm: React.FunctionComponent<Props> = ({ initialValue }) => {
  const { container } = useCreateGameFormStyles();
  const history = useHistory();

  const onSubmit = useCallback(
    (values) => {
      EditGameUseCase(initialValue.id, {
        id: initialValue.id,
        description: values.description,
        name: values.name,
        status: values.status,
        initialDate: values.initialDate,
        rating: values.rating,
        type: values.type,
      });
      onChangeUrl(`details/${initialValue.id}`, history);
    },
    [history, initialValue]
  );

  return (
    <Formik
      initialValues={{
        name: initialValue.name,
        type: initialValue.type,
        status: initialValue.status,
        description: initialValue.description,
        initialDate: initialValue.initialDate,
        rating: initialValue.rating,
      }}
      validationSchema={object({
        name: string().required("Campo obrigatório"),
        type: string().required("Campo obrigatório").nullable(),
        status: string().required("Campo obrigatório").nullable(),
        description: string().required("Campo obrigatório"),
        initialDate: date().required("Campo obrigatório").nullable(),
        rating: string().required("Campo obrigatório").nullable(),
      })}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, dirty }) => {
        return (
          <div className={container}>
            <FormikInputText label="Nome" name="name" required />
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
            <FormikInputText label="Descriçâo" name="description" required />
            <FormikInputDate
              label="Data de inicio"
              name="initialDate"
              required
            />
            <FormikInputSelect
              label="Nota"
              name="rating"
              required
              options={["1", "2", "3", "4", "5"]}
            />

            <Button
              onClick={() => onChangeUrl(`details/${initialValue.id}`, history)}
            >
              Cancelar
            </Button>
            <Button onClick={handleSubmit as () => void} disabled={!dirty}>
              Editar
            </Button>
          </div>
        );
      }}
    </Formik>
  );
};

export default EditGameForm;
