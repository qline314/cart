import React from "react";

const Counter = (props) => {

    const {value} = props;

    const formatValue = () => {
        return value === 0 ? "Empty" : value;
    };


    const getBadgeClassesCount = () => {
        let classesCount = "badge m-2 ";

        classesCount += value === 0 ? "alert-success" : "alert-danger";
        return classesCount;
    };


    return (
        <div className="m-4">
            <span>{props.name}</span>
            <span className={getBadgeClassesCount()}>{formatValue()}</span>
            <button className="btn btn-secondary m-1" onClick={() => props.onPlus(props.id)}>+</button>
            <button className="btn btn-success m-1" onClick={() => props.onMinus(props.id)}>-</button>
            <button
                className="btn btn-danger btn-sm m-2"
                onClick={() => props.onDelete(props.id)}>
                Delete
            </button>

        </div>
    );
};

export default Counter;