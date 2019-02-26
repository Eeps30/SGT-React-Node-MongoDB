import types from './types';
import axios from 'axios';

export function addNewClass() {
    const response = axios.put('/api/addNewClass')

    return {
        type: types.ADD_NEW_CLASS,
        payload: response
    }
}

export function getStudentList(){
    const response = axios.get('/api/getStudents')

    return {
        type: types.GET_STUDENT_LIST_DATA,
        payload: response
    }
}

export function getSelectedStudentData(id){
    const response = axios.get('/selectedStudent',{
        id
    })

    return {
        type: types.GET_SELECTED_STUDENT_DATA,
        payload: response
    }
}

export function getClassesList(){
    const response = axios.get('/api/getClasses')

    return {
        type: types.GET_CLASSES_DATA,
        payload: response
    }
}

export function getTeacherList(){
    const response = axios.get('/teachers')

    return {
        type: types.GET_TEACHER_LIST_DATA,
        payload: response
    }
}

export function deleteStudent(id){
    const response = axios.delete(`/api/deleteStudent/${id}`)

    return {
        type: types.DELETE_SINGLE_STUDENT,
        payload: response
    }
}

export function deleteClass(id){
    const response = axios.delete(`/api/deleteClass/${id}`)
    console.log('class id', id);

    return {
        type: types.DELETE_CLASS,
        payload: response
    }
}

export function deleteTeacher(id){
    const response = axios.post('/teachers/delete', {
            id
        })

    return {
        type: types.DELETE_SINGLE_TEACHER,
        payload: response
    }
}

export function editStudent(id, name, grade, course_name){
    const response = axios.post('/students/edit', {
        id, name, grade, course_name
    })

    return {
        type: types.EDIT_SINGLE_STUDENT,
        payload: response
    }
}

export function editTeacher(id, name, course_name, class_size){
    const response = axios.post('/teachers/edit', {
        id, name, course_name, class_size
    })

    return {
        type: types.EDIT_SINGLE_TEACHER,
        payload: response
    }
}