import chefClaude from "../images/chef-claude-icon.png"
import "../components/header.css"

export function Header() {
    return (
        <div className="header">
            <div className="title">
                <img src={chefClaude} alt="chef-head" />
                <h2>Chef Claude</h2>
            </div>
        </div>
    )
        
}