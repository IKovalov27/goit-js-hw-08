!function(){var e=document.querySelector(".feedback-form");e.addEventListener("submit",(function(e){e.preventDefault();var a=e.currentTarget.elements,r=a.email,l=a.message;if(""===r.value||""===l.value)return alert("Please fill in all the fields!");t={email:r.value,message:l.value},console.log(t),localStorage.removeItem("feedback-form-state"),t={},e.currentTarget.reset()})),e.addEventListener("input",throttle((function(e){t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500));var t={};!function(){var a=localStorage.getItem("feedback-form-state");if(!a)return;(t=JSON.parse(a)).email&&(e.elements.email.value=t.email);t.message&&(e.elements.message.value=t.message)}()}();
//# sourceMappingURL=03-feedback.99ef01e7.js.map
