import { createStyles, makeStyles } from '@mui/material/styles';

const useFormikInputTextStyles = makeStyles(() =>
  createStyles({
    helperText: {
      alignSelf: 'self-end',
    },
  })
);

export default useFormikInputTextStyles;
