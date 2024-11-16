const notDecidedDate = document.querySelector("input[id='not-decide1']");
const notDecidedTime = document.querySelector("input[id='not-decide2']");
const eventDate = document.querySelector("input[id='event_date']");
const eventTime = document.querySelector("select[id='event_time']");

window.onload = function() {
  document.getElementById('service-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // these IDs from the previous steps

      emailjs.sendForm('service_39j3rxe', 'template_qdd65ai', this)
          .then(() => {
              console.log('SUCCESS!');
              this.reset();
          }, (error) => {
              console.log('FAILED...', error);
          });
  });
}

function handleDisabled (event) {
  console.log(event)
  if(event.target.id === "not-decide1") {
    if (event.target.checked === true) {
      eventDate.disabled = true;
    } else {
      eventDate.disabled = false;
    }
  } else if(event.target.id === "not-decide2") {
    if (event.target.checked === true) {
      eventTime.disabled = true;
    } else {
      eventTime.disabled = false;
    }
  }
}

notDecidedDate.addEventListener("change", handleDisabled);
notDecidedTime.addEventListener("change", handleDisabled);
