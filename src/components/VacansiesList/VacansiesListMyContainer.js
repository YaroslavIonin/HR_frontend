import React from "react";
import { connect } from "react-redux";
import VacansiesListMy from "./VacansiesListMy";
import { SetVacansiesActionCreator } from "../../redux/vacansies-reducer";

let mapStateToProps = (state) => {
    return {
        vacansiesPage: state.vacansiesPage,
        vacansies: state.vacansiesPage.vacansies
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setVacansies: (vacansies) => {
            dispatch(SetVacansiesActionCreator(vacansies))
        }
    }
}

let VacansiesListMyContainer = connect(mapStateToProps, mapDispatchToProps) (VacansiesListMy);

export default VacansiesListMyContainer;



