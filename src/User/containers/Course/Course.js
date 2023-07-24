import * as React from 'react';
import CourseForm from './CourseForm';
import { useDispatch, useSelector } from 'react-redux';
import { addCourseData, deleteCourseData, getCourseData, updateCourseData } from '../../../redux/action/course.action';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Loader from '../../components/Loader';
import ErrorMsg from '../../components/ErrorMsg';

function Course(props) {
    const [update, setUpdate] = React.useState(null);
    const dispatch = useDispatch();
    const courseState = useSelector(state => state.course)

    React.useEffect(() => {
        dispatch(getCourseData());
    }, [dispatch])

    const handleSubmitData = (data) => {
        if (update) {
            dispatch(updateCourseData(data));
        } else {
            dispatch(addCourseData(data));
        }
        setUpdate(null);
    }

    const handleDelete = (id) => {
        dispatch(deleteCourseData(id));
    }

    const handleUpdate = (rowData) => {
        setUpdate(rowData)
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100, headerClassName: 'px-4', cellClassName: 'px-4' },
        { field: 'name', headerName: 'Course', width: 200, headerClassName: 'px-4', cellClassName: 'px-4 text-capitalize' },
        { field: 'fees', headerName: 'price', width: 200, flex: 1, headerClassName: 'px-4', cellClassName: 'px-4' },
        {
            field: 'action', headerName: 'Action', width: 103, headerClassName: 'px-4', cellClassName: 'px-4', sortable: false, disableColumnMenu: true,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="edit" type='button' size='small' onClick={() => handleUpdate(params.row)} >
                        <EditIcon sx={{ fontSize: '20px' }} />
                    </IconButton>
                    <IconButton aria-label="delete" type='button' size='small' onClick={() => handleDelete(params.row.id)} >
                        <DeleteIcon sx={{ fontSize: '20px' }} />
                    </IconButton>
                </>
            )

        },
    ];

    console.log(courseState.loading)
    return (
        <>
            {courseState.loading ?
                <Loader style={{height: 'calc(100vh - 68px)'}}/> :
                courseState.error ?
                <ErrorMsg style={{height: 'calc(100vh - 68px'}} text={courseState.error}/> :
                    <section className='p-5'>
                        <div className='row align-items-center justify-content-between'>
                            <div className='col-auto'>
                                <h1 className='text-center'>Courses</h1>
                            </div>
                            <div className='col-auto'>
                                <CourseForm handleSubmitData={handleSubmitData} onUpdate={update} setUpdate={setUpdate}/>
                            </div>
                        </div>
                        <div className='data_table pt-3' style={{ height: 500, width: '100%' }}>
                            <DataGrid
                                rows={courseState.courses}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: { page: 0, pageSize: 5 },
                                    },
                                }}
                                pageSizeOptions={[5, 10]}
                            />
                        </div>
                    </section>
            }
        </>
    );
}

export default Course;