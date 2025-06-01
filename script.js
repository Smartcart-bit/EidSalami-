function getParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function formatAmount(amount) {
  return "৳" + Number(amount).toLocaleString();
}

const sender = getParam("sender") || "Someone";
const receiver = getParam("receiver") || "You";
const amount = getParam("amount") || 0;

document.getElementById("salami-message").innerText = `${receiver}, you received Eid Salami from ${sender}! 🎉`;
document.getElementById("amount").innerText = formatAmount(amount);

const quotes = [
  "Eid Mubarak! May your life be full of blessings like salami notes 🌙💸",
  "On this Eid, may your heart be happy like a child with new clothes 👕😊",
  "Give smiles, give hugs, give love – that’s the real salami 🤗❤️",
  "Eat biryani, wear new dress, but don’t forget to thank Allah 🍽️🕌",
  "Eid is not only about gifts, it's about love and dua too 💝🤲",
  "Say ‘Eid Mubarak’ from your heart, not just your lips 💬💛",
  "This Eid, may your house be full of guests and your heart full of peace 🏡🕊️",
  "The best salami is a dua made with love 🤲💖",
  "Make your parents smile today – that’s a big reward 😊👨‍👩‍👧",
  "Eid is the time to forgive and forget – clean your heart today 🧽❤️",
  "Your good behaviour is also a gift for others this Eid 🎁🙂",
  "May Allah fill your home with happiness and your heart with Imaan 🏠✨",
  "Say Takbeer loudly, say thank you softly 📢🙏",
  "New dress fades, but good deeds stay forever 👗🌟",
  "This Eid, don’t just share sweets – share love too 🍬💞",
  "A small act of kindness is bigger than a big gift 💝🙌",
  "Celebrate Eid, but also remember the poor and needy 🤲🍱",
  "Eid is not only a day to enjoy, but also a day to be thankful 🌙🧎‍♂️",
  "Give salami, but also give a smile 😊💸",
  "If your heart is clean, every day feels like Eid 🧼❤️"
];
document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];

document.getElementById("share-btn").addEventListener("click", function () {
  const shareText = `${receiver} got ৳${amount} Eid Salami from ${sender}! 🎉`;
  const shareURL = window.location.href;

  if (navigator.share) {
    navigator.share({
      title: "Eid Salami 🎉",
      text: shareText,
      url: shareURL
    });
  } else {
    prompt("Copy this link to share:", shareURL);
  }
});

document.getElementById("send-another-btn").addEventListener("click", function () {
  document.getElementById("form-container").classList.remove("hidden");
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

document.getElementById("generate-link-btn").addEventListener("click", function () {
  const newSender = document.getElementById("new-sender").value.trim();
  const newReceiver = document.getElementById("new-receiver").value.trim();
  const newAmount = document.getElementById("new-amount").value.trim();

  if (!newSender || !newReceiver || !newAmount) {
    alert("Please fill out all fields.");
    return;
  }

  const link = `${window.location.origin}${window.location.pathname}?sender=${encodeURIComponent(newSender)}&receiver=${encodeURIComponent(newReceiver)}&amount=${encodeURIComponent(newAmount)}`;
  document.getElementById("generated-link").innerHTML = `🎉 Your link: <a href="${link}" target="_blank">${link}</a>`;
});

// ✅ FIXED: Corrected the button ID
document.getElementById("about-dev-btn").addEventListener("click", function () {
  const devInfo = document.getElementById("developer-info");
  devInfo.classList.toggle("hidden");
});
