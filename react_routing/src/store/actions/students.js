export const ACTION_STUDENT_SAVE = 'ACTION_STUDENT_SAVE';
export const ACTION_STUDENT_DELETE = 'ACTION_STUDENT_DELETE';

export function saveStudent(data) {
    console.log(data);
    return {
        type: ACTION_STUDENT_SAVE,
        payload: data
    };
}

export function deleteStudent(id) {
    return {
        type: ACTION_STUDENT_DELETE,
        payload: id,
    };
}

