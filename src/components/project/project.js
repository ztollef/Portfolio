import React from 'react';
import './project.css';

class Project extends React.Component {
    render() {
        return (
            <div className="card">
                <div>
                    <h3 className="title">{this.props.title}</h3>
                    <p className="description">{this.props.description}</p>
                    {/* <p className="skills"><b>Skills:</b> {this.props.skills}</p> */}
                    <div className="links">
                        <a href={this.props.livesite}>Live Site</a> 
                        <a href={this.props.githublink}>GitHub Repo</a>
                    </div>
                </div>
                
            </div>


        )
    }
}

export default Project;