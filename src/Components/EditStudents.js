import axios from "axios"
import { useState , useEffect } from "react"
import { useParams, useHistory } from 'react-router-dom';

const EditStudent = () => {
    const {id} = useParams();
    const history = useHistory();
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
        class: ""
    })


        useEffect(() =>{
            axios.get("http://localhost:4000/students/" + id)
            .then(res =>{
                setData(res.data)
            })
            .catch(err => console.log(err)
            )
        }, [id]);


        const handleChange = (e) => {
            const {name, value} = e.target
            setData((prev) =>{
                return{...prev, [name]:value}
            })
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            axios.put('http://localhost:4000/students/' + id, data)
              .then(() => {
                alert('Student updated successfully');
                history.push('/');
              })
              .catch(() => alert('Error occurred while updating student'));
          };


          return(
            <div className="edit-student">
                <h2>Edit Student</h2>
                <form onSubmit={handleSubmit}>
                 <label for="name">Name</label>
                 <br/>
                 <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                 <br/>
                 <label for="email">Email</label>
                 <br/>
                 <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                 <br/>
                 <label for="phone">Phone</label>
                 <br/>
                 <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
                 <br/>
                 <label for="course">Course</label>
                 <br/>
                 <input type="text" name="course" placeholder="Course" onChange={handleChange} required />
                 <br/>
                 <label for="class">Class</label>
                 <br/>
                 <input type="text" name="class" placeholder="Class" onChange={handleChange} required />
                 <br/>
                 <button type="submit">Submit</button>
                </form>
                {/* <p>{data.name}</p>
                <p>{data.email}</p>
                <p>{data.phone}</p>
                <p>{data.course}</p>
                <p>{data.class}</p> */}
            </div>
        )
}
export default EditStudent;