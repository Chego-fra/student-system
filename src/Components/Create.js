import axios from "axios"
import { useState } from "react"
import { useHistory } from 'react-router-dom';
import {ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Create = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
        class: ""
    })
    const history = useHistory();


    const handleChange = (e) => {
        const {name, value} = e.target
        setData((prev) =>{
            return{...prev, [name]:value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:4000/students", data)
        .then(res =>{
            alert("Student added successfully");
            history.push("/")
            toast.success("Student added successfully", {
                position:toast.POSITION.TOP_RIGHT,
                autoClose:1000,
            })
        })
        .catch(err =>{
            alert("There was an error while adding the student")
            toast.error("There was an error while adding the student",{
                position:toast.POSITION.TOP_RIGHT,
                autoClose:1000,
            })
        })
    }


    return(
        <div className="Create-Student">
            <h2>Add New Student</h2>
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
             <ToastContainer/>
            </form>
            {/* <p>{data.name}</p>
            <p>{data.email}</p>
            <p>{data.phone}</p>
            <p>{data.course}</p>
            <p>{data.class}</p> */}
        </div>
    )

}
export default Create;