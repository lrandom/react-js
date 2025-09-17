import { useState } from "react";
const Tab = ()=>{
    const [activeTabIndex, setActiveTabIndex] = useState(1);

    const _setActiveTab = (tabIndex) => {
        setActiveTabIndex(tabIndex);
    }
    
    return (
        <>
        <div>
            <button onClick={()=>_setActiveTab(1)}> Tab 1</button>
            <button onClick={()=>_setActiveTab(2)}> Tab 2</button>
        </div>

        <div>
            {
                activeTabIndex==1 && <div>Tab 1 content</div>
            }
            {
                activeTabIndex==2 && <div>Tab 2 content</div>
            }
        </div>
        </>
    )
}

export default Tab;