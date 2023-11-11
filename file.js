function handleKeyPress(event) {
  // Check if the pressed key is 'y' or 'n'
  if (event.key.toLowerCase() === "y") {
    alert("selowbee");
    // Call a function or perform an action for 'y'
  } else if (event.key.toLowerCase() === "n") {
    alert(":( , coba lagi..");
    // Call a function or perform an action for 'n'
  }
}

var typed1 = new Typed(".auto-type", {
  strings: ["To . . ."],
  typeSpeed: 150,
});
setTimeout(typed2, 3000);
setTimeout(typed3, 6000);
setTimeout(ready, 14000);

function typed2() {
  new Typed(".auto-type-2", {
    strings: ["Naura Azalia"],
    typeSpeed: 150,
  });
}

function typed3() {
  new Typed(".auto-type-3", {
    strings: [
      "Your return kisses eases my doubts to say that . . .",
      "are you ready?",
      "if you are. Hover below this text ",
    ],
    typeSpeed: 70,
  });
}

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
    });
  }
}

function ready() {
  let buttonHtml = `<button class="button-28 fading-button" onclick="playAudio()">Ready</button>`;
  document.querySelector(".button-js").innerHTML = buttonHtml;

  $(".fading-button").click(function () {
    $("html,body").animate(
      {
        scrollTop: $(".second").offset().top,
      },
      "slow",
      function () {
        typed4(); // Call the typed4 function here
      }
    );
  });
}

function playAudio() {
  // Get the audio element
  let audio = new Audio(
    "/audio/y2mate.com - Teddy Adhitya  Just You Official Lyric Video.mp3"
  );

  // Play the audio
  audio.play();
}

function typed4() {
  new Typed(".auto-type-4", {
    strings: [
      `hi naura, I am grateful for your presence, because you give another color to my life through your smile, your eyes, the way you treat me, ur laugh, and the way you see me as a person.
      I find myself constantly amazed by the little things you do, the way you light up when you talk about yourself, your friends, and your life. and the unwavering support you provide. It's in these moments that I realize how lucky I am to have you in my life.`,

      `Teddy's said : <hr> "I thought this loneliness
      Will be for a while,
      I have no reason to keep this smile
      And here comes the light
      That really show me what is real".`,

      `Would you become my lover and my best friend? y/n?...`,
    ],
    typeSpeed: 100,
  });
}
