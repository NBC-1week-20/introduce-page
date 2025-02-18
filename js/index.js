import members from "./memberData.js";

function memberCard(member) {
  return `
    <div class="member-card">
    <div class="member-wrap">
      <div class="member-left">
        <img
          class="card-pic"
          src="${member.image}"
          alt="Profile picture"/>
        <p class="card-name">${member.name}</p>
        <a href="/details?id=${member.id}">
          <button class="detail-btn">자세히 보기</button>
        </a>
      </div>
      <div class="member-right">
        <p class="member-desc">${member.description}</p>
      </div>
    </div>
  </div>
    `;
}

const memberSection = document.getElementById("member-section");
members.forEach((member) => {
  memberSection.innerHTML += memberCard(member);
});

const foldMember = document.getElementById("member-fold-btn");
foldMember.addEventListener("click", toggleMember);

const foldComments = document.getElementById("comment-fold-btn");
foldComments.addEventListener("click", toggleComment);

function toggleMember() {
  const memberArea = document.getElementById("member-section");
  const memberBtn = document.getElementById("member-fold-btn");
  if (memberArea.style.display === "none") {
    memberArea.style.display = "flex";
    memberBtn.style.color = "#E8344E";

  } else {
    memberArea.style.display = "none";
    memberBtn.style.color = "rgb(77, 77, 77)";
  }
}

function toggleComment() {
    const commentArea = document.getElementById("comment-list");
    const commentBtn = document.getElementById("comment-fold-btn");
    if (commentArea.style.display === "none") {
        commentArea.style.display = "flex";
        commentBtn.style.color = "#E8344E";
    } else {
        commentArea.style.display = "none";
        commentBtn.style.color = "rgb(77, 77, 77)";
    }
  }
  
