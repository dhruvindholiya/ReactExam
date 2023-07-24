import * as ActionType from '../ActionType'

export const getCourseData = () => (dispatch) => {
    try {
        dispatch(loadingCourseData(true));
        setTimeout(() => {
            fetch('http://localhost:3005/name')
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Somthing went wrong');
                })
                .then((data) => dispatch({ type: ActionType.COURSE_GET, payload: data }))
                .catch((error) => dispatch(getError(error.message)));
        }, 1500);
    } catch (error) {
        dispatch(getError(error.message));
    }
}

export const addCourseData = (data) => (dispatch) => {
    try {
        fetch('http://localhost:3005/name', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionType.COURSE_ADD, payload: data }))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const deleteCourseData = (id) => (dispatch) => {
    try {
        fetch('http://localhost:3005/name/' + id, {
            method: 'DELETE',
        })
            .then(dispatch({ type: ActionType.COURSE_DELETE, payload: id }))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const updateCourseData = (data) => (dispatch) => {
    try {
        fetch('http://localhost:3005/name/' + data.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(dispatch({ type: ActionType.COURSE_UPDATE, payload: data }))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const loadingCourseData = (status) => (dispatch) => {
    dispatch({ type: ActionType.COURSE_LOADER, payload: status })
}

export const getError = (error) => (dispatch) => {
    dispatch({ type: ActionType.COURSE_ERROR, payload: error })
}