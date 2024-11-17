const notDecidedDate = document.querySelector("input[id='not-decide1']");
const notDecidedTime = document.querySelector("input[id='not-decide2']");
const eventDate = document.querySelector("input[id='event_date']");
const eventTime = document.querySelector("select[id='event_time']");
const contactTypes = document.querySelectorAll(".contact input[type='radio']");
const contactItems = document.querySelectorAll(".contact-item");

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
  } else {
    contactItems.forEach(contactItem => {
      if(contactItem.classList.contains("set")) {
        contactItem.children[0].disabled = true;
        contactItem.children[1].disabled = true;
      } else {
        contactItem.children[0].disabled = true;
      }
    })

    if(event.target.defaultValue == "Call") {
      contactItems[0].children[0].disabled = false;
      contactItems[0].children[1].disabled = false;
    } else if(event.target.defaultValue == "WhatsApp") {
      contactItems[1].children[0].disabled = false;
    } else if(event.target.defaultValue == "SMS") {
      contactItems[2].children[0].disabled = false;
      contactItems[2].children[1].disabled = false;
    } else if(event.target.defaultValue == "Email") {
      contactItems[3].children[0].disabled = false;
    }
  }
}

notDecidedDate.addEventListener("change", handleDisabled);
notDecidedTime.addEventListener("change", handleDisabled);
contactTypes.forEach((contactType) => {
  contactType.addEventListener("change", handleDisabled);
});
