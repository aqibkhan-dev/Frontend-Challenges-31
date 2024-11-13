document.addEventListener('DOMContentLoaded', () => {
    const weekExpenses = [
        { id: 1, amount: 22.30, day: "Mon" },
        { id: 2, amount: 34.91, day: "Tue" },
        { id: 3, amount: 52.36, day: "Wed" },
        { id: 4, amount: 31.07, day: "Thu" },
        { id: 5, amount: 23.39, day: "Fri" },
        { id: 6, amount: 43.28, day: "Sat" },
        { id: 7, amount: 25.48, day: "Sun" },
    ]

    weekExpenses.map((item) => {
        let barChart = document.querySelector(".bar-chart");

        barChart.innerHTML += `<div class="chart-contents">
        <div class="bar" style=${`height:${item.amount+50/5+item.amount}px`}>
        <div class="amount">$${item.amount}</div>
        </div>

        <div class="day">
        ${item.day}
        </div>
        </div>`
    })
});