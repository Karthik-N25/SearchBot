import React from "react";

const Card = ({id, name, email}) => {
        return (
            <div className="bg-light-green dib ma2 br4 tc bw3 shadow-5 grow">
                <img src={`https://robohash.org/${id}`} alt="ROBO" />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        );
}

export default Card;