document.addEventListener("DOMContentLoaded", function () {
    const output = document.getElementById("schedule-output");

    document.querySelector('[data-class="beginner"]').addEventListener("click", function (e) {
        e.preventDefault();
        output.innerHTML = `
            <h3>Beginner Class Schedule:</h3>
            <p>• Monday 9:00 AM<br>
               • Thursday 11:00 AM<br>
               • Saturday 2:00 PM</p>`;
    });

    document.querySelector('[data-class="intermediate"]').addEventListener("click", function (e) {
        e.preventDefault();
        output.innerHTML = `
            <h3>Intermediate Class Schedule:</h3>
            <p>• Wednesday 6:00 PM<br>
               • Friday 10:00 AM</p>`;
    });

    document.querySelector('[data-class="advanced"]').addEventListener("click", function (e) {
        e.preventDefault();
        output.innerHTML = `
            <h3>Advanced Class Schedule:</h3>
            <p>• Tuesday 5:00 PM<br>
               • Sunday 9:00 AM</p>`;
    });

    document.querySelector('[data-class="oneonone"]').addEventListener("click", function (e) {
        e.preventDefault();
        output.innerHTML = `
            <h3>One-on-One Class Schedule:</h3>
            <p>• Flexible by appointment</p>`;
    });
});
