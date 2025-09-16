import React from "react";
import Markdown from 'react-markdown'
import "./main.css"

export default function ClaudeRecipe({recipe}) {
    return (
            <section className="suggested-recipe-container" aria-live="polite">
                <h2>Chef Claude Recommends</h2>
                <Markdown>{recipe}</Markdown>   
            </section>
    )
}