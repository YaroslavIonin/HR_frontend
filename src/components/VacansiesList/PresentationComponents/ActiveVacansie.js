import axios from "axios";
import React, { useContext, useLayoutEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

const ActiveVacansie = (props) => {
    const location = useLocation();
    let { user, authToken } = useContext(AuthContext)

    let path = `/vacansie/edit/${location.state.id}`

    let notPublish = () => {
        let data = location.state
        data.status = 'N_P'
        axios({
            method: "put",
            url: `http://127.0.0.1:8000/api/vacancies/${location.state.id}/`,
            headers: {
                Authorization: `Bearer ${String(authToken.access)}`,
            },
            params: {
                status: 'my'
            },
            data: data
        })
        .then(response =>{
            console.log(response.data)
        })
    }
    let publish = () => {
        let data = location.state
        data.status = 'Y_P'
        axios({
            method: "put",
            url: `http://127.0.0.1:8000/api/vacancies/${location.state.id}/`,
            headers: {
                Authorization: `Bearer ${String(authToken.access)}`,
            },
            params: {
                status: 'my'
            },
            data: data
        })
        .then(response =>{
            console.log(response.data)
        })
    }

    return (
        <div >
            <div >
                <NavLink to="/vacansies">Назад</NavLink>
                {(location.state.user.id == user.id && location.state.status !== 'Y_P') && <NavLink to={path} state={location.state}>Редактировать</NavLink>}
                <div >
                    <h2>{location.state.title}</h2>
                    <p className="blur">{location.state.department}</p>
                </div>
                <p className="blur">{location.state.salary}</p>
                <p className="blur">Опыт работы: {location.state.exp_work}</p>
                <section>{location.state.description}</section>
                {(location.state.user.id !== user.id) && <button>Отправить заявку</button>}
                {(location.state.user.id === user.id && location.state.status !== 'Y_P') && <button onClick={publish}>Опубликовать</button>}
                {(location.state.user.id === user.id && location.state.status === 'Y_P') && <button onClick={notPublish}>Снять с публикации</button>}

            </div>
        </div>
    )

}

export default ActiveVacansie;
