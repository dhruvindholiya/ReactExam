import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as Yup from 'yup';
import { useFormik } from 'formik';

export default function CourseForm({ handleSubmitData, onUpdate, setUpdate }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false)
        formik.resetForm();
        setUpdate(null);
    };

    const validation = Yup.object({
        name: Yup
            .string()
            .min(2, 'Name must be at least 2 characters')
            .matches(/^[a-zA-Z.\- ]+$/, "Name is invalid")
            .required('Name is a required field'),
        fees: Yup
            .number()
            .min(0, 'Fees must be in positive or zero number')
            .required('Fees is a required field')
    })

    const formik = useFormik({
        initialValues: { name: "", fees: "" },
        validationSchema: validation,
        onSubmit: (values, action) => {
            handleSubmitData(values);
            action.resetForm();
            handleClose();
        },
    });

    const { handleBlur, handleChange, handleSubmit, touched, errors, values } = formik;

    React.useEffect(() => {
        if (onUpdate) {
            formik.setValues(onUpdate)
            handleClickOpen();
        }
    }, [onUpdate]);

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}> Add Course </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle component='h1' style={{ fontSize: '35px' }} className='text-center pt-5'>Course</DialogTitle>
                <DialogContent className='px-5'>
                    <form onSubmit={handleSubmit}>
                        <div className='position-relative'>
                            <TextField
                                className='mb-3'
                                margin="dense"
                                id="name"
                                label="Name"
                                type="text"
                                variant="standard"
                                fullWidth
                                name='name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            {errors.name && touched.name ? (
                                <span className="d-block position-absolute form-error">{errors.name}</span>
                            ) : null}
                        </div>
                        <div className='position-relative'>
                            <TextField
                                className='mb-3'
                                margin="dense"
                                id="fees"
                                label="Fees"
                                type="text"
                                variant="standard"
                                fullWidth
                                name='fees'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.fees}
                            />
                            {errors.fees && touched.fees ? (
                                <span className="d-block position-absolute form-error">{errors.fees}</span>
                            ) : null}
                        </div>
                        <DialogActions className='px-4 pt-4 justify-content-center'>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type='submit' variant='contained'>Add</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}