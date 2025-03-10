let clickCount = 0;

function handleClick(event) {
    event.preventDefault(); // Prevent the link from reloading the page

    clickCount++;

    if (clickCount > 3) {
        window.location.href = "no.html"; // Redirect after 3 clicks
    }
}
