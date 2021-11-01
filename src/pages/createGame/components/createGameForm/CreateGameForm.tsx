import Button from "@material-ui/core/Button";
import { Formik } from "formik";
import { uniqueId } from "lodash";
import React, { useCallback } from "react";
import { useHistory } from "react-router";
import { date, object, string } from "yup";
import FormikInputDate from "../../../../components/formikInputDate/FormikInputDate";
import FormikInputSelect from "../../../../components/formikInputSelect/FormikInputSelect";
import FormikInputText from "../../../../components/formikInputText/formikInputText";
import GameCategoryEnum from "../../../../domains/GameCategoryEnum";
import GameStatusEnum from "../../../../domains/GameStatusEnum";
import CreateGameUseCase from "../../../../usecases/CreateGameUseCase";
import onChangeUrl from "../../../../utils/updateUrl/updateUrl";
import useCreateGameFormStyles from "./CreateGameForm.styles";

const CreateGameForm: React.FunctionComponent = () => {
  const { container } = useCreateGameFormStyles();
  const history = useHistory();

  const onSubmit = useCallback(
    (values) => {
      CreateGameUseCase({
        id: uniqueId(),
        description: values.description,
        name: values.name,
        status: values.status,
        initialDate: values.initialDate,
        rating: values.rating,
        type: values.type,
      });
      onChangeUrl("", history);
    },
    [history]
  );

  return (
    <Formik
      initialValues={{
        name: "",
        type: "",
        status: "",
        description: "",
        initialDate: "",
        rating: "",
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

            <Button onClick={() => onChangeUrl("", history)}>Cancelar</Button>
            <Button onClick={handleSubmit as () => void} disabled={!dirty}>
              Criar
            </Button>
          </div>
        );
      }}
    </Formik>
  );
};

export default CreateGameForm;
