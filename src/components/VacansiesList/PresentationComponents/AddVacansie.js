import React  from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../../Styles/app.css"
import axios from "axios"
import AuthContext from "../../../context/AuthContext";
import { useContext } from "react";

const AddVacansie = (props) => {
    console.log(props)
    const [status, setStatus] = React.useState('0')
    let title = React.createRef()
    let text = React.createRef()
    let salary = React.createRef()
    let exp = React.createRef()
    let { authToken, user } = useContext(AuthContext)
    const nav = useNavigate()

    console.log(user)
    let onAddVac = (e) => {
        e.preventDefault()
        setStatus('1')
        props.AddVacansie(user)

        axios
        .post("http://127.0.0.1:8000/api/vacancies/", 
        {
            "title": title.current.value,
            "description": text.current.value,
            "exp_work": exp.current.value,
            "salary": salary.current.value,
            "user": user,
            "status": 'N_P'
        }, 
        {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${String(authToken.access)}`
            }
        })
        .then(response => {
            console.log(response.data)
            /* nav('/vacansies') */
            props.EditedVacansie(response.data)
        })
        .catch(error => console.log(error.response))
        props.ChangeVacansie('', '', '', '')
        
    }

    let onPubVac = () => {
        axios
        .post("http://127.0.0.1:8000/api/vacancies/", 
        {
            "title": title.current.value,
            "description": text.current.value,
            "exp_work": exp.current.value,
            "salary": salary.current.value,
            "user": user,
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
            if (response.status === 200) {
                nav(`/vacansies`)
            }
        })
        .catch(error => console.log(error.response))
    }

    let onVacChange = () => {
        let titleVac = title.current.value;
        let textVac = text.current.value;
        let salaryVac = salary.current.value;
        let expVac = exp.current.value;
        props.ChangeVacansie(titleVac, salaryVac, expVac, textVac)
        
    }
    let path = `/vacansie/edit/${props.editedVacansie.id}`
    return (
        <div>
            {status === '1' && <NavLink to={path} state={props.editedVacansie}>??????????????????????????</NavLink>}
            <form>
                <p>???????????????? ????????????????:</p>
                {status === '0' ? <input onChange={onVacChange} type='text' name='title' ref={title} value={props.newVacTitle}/>
                : <p>{props.editedVacansie.title}</p>} 
                <p>??????????????????????</p>
                <p>???? ????</p>
                <p>?????? ????????????????</p>
                {status === '0' ? <input onChange={onVacChange} type='text' name='salary' ref={salary} value={props.newVacSalery}/> 
                : <p>{props.editedVacansie.salary}</p>}

                <p>???????? ????????????</p>
                {status === '0' ? <input onChange={onVacChange} type='text' name='salary' ref={exp} value={props.newVacExp}/>
                : <p>{props.editedVacansie.exp_work}</p>} 

                <p>???????????????? ????????????????</p>
                {status === '0' ? <textarea onChange={onVacChange} type='text' name="text" ref={text} value={props.newVacText}/>
                : <p>{props.editedVacansie.description}</p>} 

                {status === '0' ? <button onClick={onAddVac}>?????????????? ????????????????</button> :<button onClick={onPubVac}>???????????????????????? ????????????????</button>}
                {/* <button onClick={onAddVac}>???????????????????????? ????????????????</button> */}
                {/* <NavLink onClick={onAddVac} to={path} state={props.ID}>?????????????? ????????????????</NavLink> */}
            </form>
        </div>
    )
}

export default AddVacansie;