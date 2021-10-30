import { createStyles, makeStyles } from '@material-ui/core';

const useFormikInputDateTimeStyles = makeStyles(() =>
  createStyles({
    helperText: {
      alignSelf: 'self-start',
    },
  })
);

export default useFormikInputDateTimeStyles;
