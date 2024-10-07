import axios from "axios";
import UseFetch from "./UseFetch"
import { Link } from 'react-router-dom';

const StudentList = () => {

    const {data: students} = UseFetch("http://localhost:4000/students");


    const handleDelete = (id) => {
        axios.delete("http://localhost:4000/students/" +id)
        .then(() =>{
            alert("Student Deleted");
            window.location.reload();
        })
    }

    return (
        <div className="Student-List">
            <h2>Student List</h2>
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Course</th>
                    <th>Class</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {students && students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.course}</td>
              <td>{student.class}</td>
              <td>
                <Link to={`/student-details/${student.id}`} className="blue">View</Link> | 
                <Link to={`/edit-student/${student.id}`} className="blue">Edit</Link> | 
                <button onClick={() => handleDelete(student.id)} className="blues">Delete</button>
              </td>
            </tr>
          ))}
                </tbody>
            </table>
        </div>
    )


}
export default StudentList;