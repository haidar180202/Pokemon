import { NavLink } from "react-bootstrap";

const Footer =()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-success">
                               <div className="container-fluid">
                                <NavLink to="/" draggable="false" className="navbar-brand">
                                     <span>Created By Muhammad Haidar Shahab</span>
                                </NavLink>

                            </div>
                        </nav>
        </div>
    )
}
export {Footer}