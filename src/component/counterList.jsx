import React, {useState} from "react";
import Counter from "./counter";

const CounterList = () => {

    const initialState = [
        {id: 0, value: 0, name: "Ненужная вещь", price: "200"},
        {id: 1, value: 10, name: "Ложка"},
        {id: 2, value: 0, name: "Вилка"},
        {id: 3, value: 3, name: "Тарелка"},
        {id: 4, value: 0, name: "Набор минималиста"},
    ];

    const [counters, setCounters] = useState(initialState);


    const handlePlus = (id) => {

        let newDataPlus = [];

        counters.forEach((item) => {

            if (item.id === id) {
                item.value = item.value + 1;
            }

            newDataPlus.push(item);

        });

        setCounters(newDataPlus);

    }

    const handleMinus = (id) => {

        let newDataMinus = [];

        counters.forEach((item) => {

            if (item.id === id) {
                item.value = item.value - 1;
            }

            newDataMinus.push(item);

        });

        setCounters(newDataMinus);
    }

    const handleDelete = (id) => {

        const newCounters = counters.filter(c => c.id !== id);
        setCounters(newCounters);
    };

    const handleReset = () => {
        setCounters(initialState);

    };

    return (
        <>
            {counters.map((count) => (
                <Counter
                    key={count.id}
                    {...count}
                    onDelete={handleDelete}
                    onPlus={handlePlus}
                    onMinus={handleMinus}
                />
            ))}
            <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Reset</button>
        </>
    );
};

export default CounterList;


