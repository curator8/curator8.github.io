function AddAnimatedCircle() {
  const cursor = document.getElementById("cursorId");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientX}px`;
  });

  document.addEventListener("click", () => {
    cursor.classList.add("expand");

    setTimeout(() => {
      cursor.classList.remove("expand");
    }, 500);
  });
}

AddAnimatedCircle();
