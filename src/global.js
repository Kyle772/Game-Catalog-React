// Modal

var elModalButtonActivate = document.querySelector('.modalActivate');
var elModalButtonDeactivate = document.querySelector('.modalDeactivate');
var elModal1 = document.querySelector('.modalCover');
var elModal2 = document.querySelector('#PinEntry');

elModalButtonActivate.onclick = function() {
    elModal1.classList.toggle('active');
    elModal2.classList.toggle('active');
}
elModalButtonDeactivate.onclick = function() {
    elModal1.classList.remove('active');
    elModal2.classList.remove('active');
}

// Spin Wheel

var elWheelButtonActivate = document.querySelector('.wheelActivate');
var elWheelButtonDeactivate = document.querySelector('.wheelDeactivate');
var wheel1 = document.querySelector('.modalCover');
var wheel2 = document.querySelector('#SpinWheel');

elWheelButtonActivate.onclick = function() {
    wheel1.classList.toggle('active');
    wheel2.classList.toggle('active');
}
elWheelButtonDeactivate.onclick = function() {
    wheel1.classList.remove('active');
    wheel2.classList.remove('active');
}

// Chat Window

var elChatButtonActivate = document.querySelector('.chatActivate');
var elChatButtonDeactivate = document.querySelector('.chatDeactivate');
var elChatButtonCollapse = document.querySelector('.chatCollapse');
var elChat = document.querySelector('#ChatWindow');

elChatButtonActivate.onclick = function() {
    elChat.classList.toggle('active');
    elChatButtonActivate.classList.toggle('hide');
    elChat.focus();
}
elChatButtonCollapse.onclick = function() {
    elChat.classList.toggle('collapse');
    elChat.focus();
}
elChatButtonDeactivate.onclick = function() {
    elChat.classList.toggle('active');
    elChat.classList.remove('collapse');
    elChatButtonActivate.classList.toggle('hide');
}

// Global Target/Active/Clicked functionality

var buttonTargets = document.querySelectorAll('button[target]');
for (const button of buttonTargets) {
    button.addEventListener('click', function(event) {
        event.target.classList.toggle("clicked");
        document.querySelector("#" + button.getAttribute('target')).classList.toggle('active');
    })
}

// Self target Active toggle

var favbuttonTargets = document.querySelectorAll('button.fav');
for (const button of favbuttonTargets) {
    button.addEventListener('click', function(event) {
        event.target.classList.toggle("active");
    })
}

// Sibling Grabber
var getSiblings = function(elem) {
    var siblings = [];
    var sibling = elem.parentNode.firstChild;
    var skipMe = elem;
    for (; sibling; sibling = sibling.nextSibling)
        if (sibling.nodeType == 1 && sibling != elem)
            siblings.push(sibling);
    return siblings;
}

// Tab Controller
var tabSiblings = document.querySelectorAll('.tab-controls button[target]');
for (const tab of tabSiblings) {
    tab.addEventListener('click', function(event) {
        var siblings = getSiblings(tab)
        siblings.forEach(function(e) {
            e.classList.remove("active");
        })
        var target = document.querySelector("#" + tab.getAttribute("target"));
        var targetSiblings = getSiblings(target);
        console.log(targetSiblings);
        targetSiblings.forEach(function(e) {
            e.classList.remove("active");
        })
        event.target.classList.add("active");
        target.classList.add('active');
    })
}


// Lang select

var langitems = document.querySelectorAll('button.lang-item');
for (const button of langitems) {
    button.addEventListener('click', function(event) {
        var imagesrc = event.target.firstElementChild.getAttribute("src");
        var langtype = event.target.firstElementChild.getAttribute("lang");
        document.querySelector('.langselect .selected').setAttribute("src", imagesrc);
    })
}

// Pin Entry 
var pinbuttons = document.querySelectorAll('.keypad button');
var pindelbutton = document.querySelector('.keypad button.del');
for (const button of pinbuttons) {
    button.addEventListener('click', function(event) {
        var input = event.target.textContent;
        var digits = document.querySelector('#PinEntry .digits');
        var entry = digits.getAttribute("code-entry");
        if (entry.length < 6) {
            entry = entry + input;
            digits.setAttribute("code-entry", entry);
            var digitNodes = document.querySelectorAll(".digits .circle");
            for (const circle of digitNodes) {
                circle.classList.remove("filled");
            }

            var filled = entry.length;
            for (const circle of digitNodes) {
                if (filled > 0) {
                    circle.classList.add("filled");
                }
                filled = filled - 1;
            }
            if (entry.length == 6) {
                // AJAX call for submission
                document.location.href = "./homepage-loggedin.html";
            }
        } else if (entry.length == 6) {
            // AJAX call for submission
            document.location.href = "./homepage-loggedin.html";
        }
    })
}

pindelbutton.addEventListener('click', function(event) {
    var digits = document.querySelector('#PinEntry .digits');
    var entry = digits.getAttribute("code-entry");
    if (entry.length > 0) {
        entry = entry.substring(0, entry.length - 1);;
        digits.setAttribute("code-entry", entry);
    }
    var digitNodes = document.querySelectorAll(".digits .circle");
    for (const circle of digitNodes) {
        circle.classList.remove("filled");
    }

    var filled = entry.length;
    for (const circle of digitNodes) {
        if (filled > 0) {
            circle.classList.add("filled");
        }
        filled = filled - 1;
    }
})