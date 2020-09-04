import React from "react";

function MemoComponent(props) {
    console.log("render.....MemoComponent")
    return (
        <div>
            Memo Component : {JSON.stringify(props.data)}
        </div>
    );

}

export default React.memo(MemoComponent)
