import axios from 'axios';

export const retrieveStudentData = () => {
    axios.get('http://localhost:8000/students')
            .then(function (response) {
                console.log(response.data.data);
                return response
            })
            .catch(function (error) {
                console.log(error);
            });
}