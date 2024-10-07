import { useParams } from 'react-router-dom';
import UseFetch from "./UseFetch";

const StudentDetails = () => {

    const {id} = useParams();
    const {data:student} = UseFetch("http://localhost:4000/students/" +id)

    return(
        <div className="student-details">
            {
                student && (
                    <article>
                    <h2>{student.name}</h2>
                    <p>Email: {student.email}</p>
                    <p>Phone: {student.phone}</p>
                    <p>Course: {student.course}</p>
                    <p>Class: {student.class}</p>
                  </article>
                )
            }
        </div>
    )

}

export default StudentDetails;