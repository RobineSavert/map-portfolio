function openPopover(event, tooltipID, position) {
    console.log(position);
    let element = event.target;
    while (element.nodeName !== "BUTTON") {
        element = element.parentNode;
    }
    var popper = Popper.createPopper(
        element,
        document.getElementById(tooltipID),
        {
            placement: position,
        }
    );
    document.getElementById(tooltipID).classList.toggle("hidden");
}