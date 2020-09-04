import React from "react";

export default function NormalComponent(props) {
    console.log("render.....NormalComponent")
    return (
        <div>
            Normal Component : {JSON.stringify(props)}
        </div>
    );

}
