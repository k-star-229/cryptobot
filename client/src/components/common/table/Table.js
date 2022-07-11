import React from "react";

import './Table.scss'

const Table = ({tHeadData, tBodyData}) => {
    return (
        <>
            <p></p>
            <div>
            <table className="table">
                <thead className="">
                    {tHeadData}
                </thead>
                <tbody>
                    {tBodyData}
                </tbody>
            </table>
            </div>
        </>
    )
}

export default Table;