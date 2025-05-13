import React from "react"

export default function Income() {
    const transactionsData = [
        { amount: 7,200, date: "April 10, '25", id: "1" },
        { amount: 5,600, date: "April 9, '25", id: "2" },
        { amount: 9,800, date: "April 3, '25", id: "3" },
    ]
    return (
        <section className="host-income">
            <h1>Income</h1>
            <p>
                Last <span>30 days</span>
            </p>
            <h2>₹22,600</h2>
            <img
                className="graph"
                src="/assets/images/income-graph.png"
                alt="Income graph"
            />
            <div className="info-header">
                <h3>Your transactions (3)</h3>
                <p>
                    Last <span>30 days</span>
                </p>
            </div>
            <div className="transactions">
                {transactionsData.map((item) => (
                    <div key={item.id} className="transaction">
                        <h3>₹{item.amount}</h3>
                        <p>{item.date}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
