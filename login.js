function login() {
  const grade = document.getElementById("grade").value;
  const cls = document.getElementById("class").value;
  const num = document.getElementById("number").value;

  if (grade === "" || cls === "" || num === "") {
    alert("모두 입력하세요");
    return;
  }

  alert(grade + "학년 " + cls + "반 " + num + "번 로그인 성공");

  // 나중에 Firebase 붙이면 여기서 저장
  location.href = "index.html";
}