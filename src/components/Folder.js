import { useState } from "react";

function Folder({ explorer }) {
    console.log(explorer);

    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null
    });

    const handleNewItem = (e, isFolder) => {
        e.stopPropagation();
        setExpand(true)
        setShowInput({
            visible: true,
            isFolder
        });
    };

    const onAddNewFolder = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            setShowInput({ ...showInput, visible: false });
        }
    }

    if (explorer.isFolder) {
        return (
            <div style={{ mariginTop: 5 }}>
                <div className="folder" onClick={() => setExpand(!expand)}>
                    <span>📁{explorer.name}</span>
                    <div >
                        <button onClick={(e) => handleNewItem(e, true)}>New Folder</button>
                        <button onClick={(e) => handleNewItem(e, false)}>New File</button>
                    </div>
                </div>
                <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
                    {
                        showInput.visible &&
                        <div className="inputContainer">
                            <span>
                                {showInput.isFolder ? "📁" : "📄"}
                                <input
                                    type='text'
                                    onBlur={() => setShowInput({ ...showInput, visible: false })}
                                    onKeyDown={onAddNewFolder}
                                    className="inuptContainer__input" />
                            </span>
                        </div>
                    }


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