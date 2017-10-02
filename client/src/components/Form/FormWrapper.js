import React from "react"
import { Panel, PanelHeader, PanelBody } from "../Panel";

export const FormWrapper = ({children}) => 
    <Panel>
        <PanelHeader>
            Search for Articles
        </PanelHeader> 
        <PanelBody>
            <form className="form-group">
                    {children}
            </form>
        </PanelBody>
    </Panel>