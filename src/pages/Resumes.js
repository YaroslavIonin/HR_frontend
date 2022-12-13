import { useContext, useState } from "react";
import ResumesListAllContainer from "../components/ResumesList/ResumesListAllContainer";
import "../Styles/app.css"
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import SortsResumesContainer from "../components/ResumesList/SortsResumesContainer";
import ResumesListMyContainer from '../components/ResumesList/ResumesListMyContainer'

function Resumes(props) {
    const [status, setStatus] = useState('all')
    let { user } = useContext(AuthContext)
    let [resumes, setRes] = useState(<ResumesListAllContainer />)
    return (
        <div className="vacancies">
            {user.is_header_dep && <SortsResumesContainer />}
            <div className="vacansies-top">
                <div className="vacansies-top__all">
                    <h2 onClick={() => { setRes(<ResumesListAllContainer />); setStatus('all') }} className={`${status === 'all' && 'active'}`}>Резюме</h2>
                </div>
                {user.is_header_dep &&
                    <div className="vacansies-top__my">
                        <h2 onClick={() => { setRes(<ResumesListMyContainer />); setStatus('my') }} className={`${status === 'my' && 'active'}`}>Моё резюме</h2>
                    </div>}
            </div>
            <div className="vacansies-list" value={resumes}>
                {resumes}

            </div>
        </div>
    )
}

export default Resumes;