import { useState } from "react";

function Folder({ explorer }) {
    console.log(explorer);

    const [expand, setExpand] = useState(false);

    if (explorer.isFolder) {
        return (
            <div style={{ mariginTop: 5 }}>
                <div className="folder" onClick={() => setExpand(!expand)}>
                    <span>📁{explorer.name}</span>
                </div>
                <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
                    {
                        explorer.items.map((item) => {
                            return <Folder explorer={item} key={item.id} />
                        })
                    }
                </div>
            </div>)
    } else {
        return <span className="file">
            📄{explorer.name}
        </span>
    }
}

export default Folder;