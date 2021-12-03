import React from 'react';
import Link from "next/link";

const Sauve = ({sauve}) => {
    return (
        <Link href={`/sauve/${sauve.id}`}>
            <div className={"linkDiv"}>
                {JSON.stringify(sauve)}

            </div>
        </Link>
    );
};

export default Sauve;