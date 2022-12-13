import React, {useContext} from "react";
import AuthContext from "../../context/AuthContext";
import { NavLink, useLocation } from "react-router-dom";

const ActiveResume = (props) => {
    let {user} = useContext(AuthContext)
    const location = useLocation();
    let path = `/resume/edit/${location.state.id}`
    return (
        <div  >
            <div >
                <NavLink to="/resumes">Назад</NavLink>
                {
                    location.state.user.id == user.id ? 
                    <NavLink to={path} state={location.state}>Редактировать</NavLink> :
                    <button>Отправить заявку</button>
                }
                <div >
                    <h2>{location.state.user.full_name}</h2>
                    <p>Email: {location.state.user.email}</p>
                </div>
                <p className="blur">Желаемая зарплата: {location.state.salary} руб</p>
                <p className="blur">Опыт работы: {location.state.exp_work}</p>
                <section>{location.state.about_me}</section>
                <img src={location.state.image}/>
                <a href={location.state.file} download>Резюме</a>
                
            </div>
        </div>
    )


}

export default ActiveResume;