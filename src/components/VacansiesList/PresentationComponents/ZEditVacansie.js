import React, { useLayoutEffect }  from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../../../Styles/app.css"
import axios from "axios"
import AuthContext from "../../../context/AuthContext";
import { useContext } from "react";

const EditVacansie = (props) => {
    const location = useLocation();
    const [status, setStatus] = React.useState('0')
    let title = React.createRef()
    let text = React.createRef()
    let salary = React.createRef()
    let exp = React.createRef()
    let { authToken } = useContext(AuthContext)
    let path = `/vacansie/${props.editedVacansie.id}`
    const nav = useNavigate()

    useLayoutEffect(() => {
        console.log(location.state.id)
        axios.get(`http://127.0.0.1:8000/api/vacancies/${location.state.id}`, {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${String(authToken.access)}`
            }
        }).then(response => {
            props.EditVacansie(response.data)
            console.log(response.data)
        })
    }, [])
   
    let onEditVac = (e) => {
        e.preventDefault()
        axios
        .put(`http://127.0.0.1:8000/api/vacancies/${location.state.id}/`, 
        {
            "title":  title.current.value,
            "description": text.current.value,
            "exp_work": exp.current.value,
            "salary": salary.current.value,
            "status": 'Y_P'
        }, 
        {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${String(authToken.access)}`
            }
        })
        .then(response => {
            console.log(response.data)
            props.EditedVacansie(response.data)
            /* if (response.status === 200) {
                nav(`/vacansie/${location.state.id}`)
            } */
           
        })
        .catch(error => console.log(error.response))
        console.log(props.editedVacansie)
    }

    let onVacChange = () => {
        let titleVac = title.current.value;
        let textVac = text.current.value;
        let salaryVac = salary.current.value;
        let expVac = exp.current.value;
        props.ChangeVacansie(titleVac, salaryVac, expVac, textVac)
    }

    return (
        <div>
            {status === '1' && <button onClick={() => {setStatus('0')}}>??????????????????????????</button>}
            <form>
                <p>???????????????? ????????????????:</p>
                <input onChange={onVacChange} type='text' name='title' ref={title} value={props.newVacTitle} /> 
                <p>??????????????????????</p>
                <p>{location.state.department}</p>
                <p>?????? ????????????????</p>
                <input onChange={onVacChange} type='text' name='salary' ref={salary} value={props.newVacSalery} /> 
                <p>???????? ????????????</p>
                <input onChange={onVacChange} type='text' name='exp' ref={exp} value={props.newVacExp} /> 
                <p>???????????????? ????????????????</p>
                <textarea onChange={onVacChange} type='text' name="text" ref={text} value={props.newVacText} /> 
                <button onClick={onEditVac}>???????????????????????? ????????????????</button>
                
            </form>
            <NavLink to='/vacansies/' state={props.editedVacansie} onClick={onEditVac} >???????????????????????? ????????????????</NavLink>
        </div>
    )
}

export default EditVacansie;