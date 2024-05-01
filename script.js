const q = console.log;

function focusOn(thisDiv) {
  if (thisDiv.id == "playStation") {
    document.getElementById("playStation").classList.add("mouseOver");
    document.getElementById("playStation").classList.remove("mouseOff");
    document.getElementById("xBox").classList.add("mouseOff");
    document.getElementById("xBox").classList.add("mouseOver");
  } else {
    document.getElementById("xBox").classList.add("mouseOver");
    document.getElementById("xBox").classList.remove("mouseOff");
    document.getElementById("playStation").classList.add("mouseOff");
    document.getElementById("playStation").classList.remove("mouseOver");
  }
}

const normallize = (thisDiv) => {
  q(thisDiv);
};
