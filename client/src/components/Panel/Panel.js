import React from "react"

export const Panel = ({children}) => 
<div className="container-fluid">
    <div className="row">
        <div className="panel panel-primary">
            {children}
        </div>
    </div>
</div>    
