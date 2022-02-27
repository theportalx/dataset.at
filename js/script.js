var words = ["collaborative", "trustworthy", "open", "enterprise"],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 25,
  speed = 90;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    $(".word").text(part);
  }, speed);
};

$(document).ready(function () {
  wordflick();
});

// baseUrl = "http://localhost:4200/"
baseUrl = "https://app.dataset.at/";

if (document.querySelector(".claim-button")) {
  document
    .querySelector(".claim-button")
    .addEventListener("click", function () {
      var username = document.getElementById("username").value;
      if (username.length > 3) {
        window.open(baseUrl + "auth/signup?username=" + username, "_blank");
      }
    });
}

if (document.querySelector(".footer-claim-button")) {
  document
    .querySelector(".footer-claim-button")
    .addEventListener("click", function () {
      var username = document.getElementById("username2").value;
      if (username.length > 3) {
        window.open(baseUrl + "auth/signup?username=" + username, "_blank");
      }
    });
}

if (document.querySelector(".early-access-button")) {
  document
    .querySelector(".early-access-button")
    .addEventListener("click", function () {
      window.open(baseUrl + "auth/signup", "_blank");
    });
}

if (document.querySelector(".early-access-button-bottom")) {
  document
    .querySelector(".early-access-button-bottom")
    .addEventListener("click", function () {
      window.open(baseUrl + "auth/signup", "_blank");
    });
}

function parallax() {
  if (document.getElementById("floater")) {
    var s = document.getElementById("floater");
    var yPos = 0 - window.pageYOffset / 45;
    s.style.top = 55 + yPos + "%";
  }
}

window.addEventListener("scroll", function () {
  if (document.getElementById("floater")) {
    parallax();
  }
});

glowCookies.start("en", {
  style: 1,
  analytics: "G-XPVSH0E21P",
  policyLink: "https://dataset.at/assets/files/Dataset_Privacy_Notice.pdf",
  bannerColor: "#000000",
  acceptBtnBackground: "#1278f8",
  rejectBtnBackground: "#e6e6eb;",
  rejectBtnColor: "#666482 ",
  manageColor: "#000000",
});
