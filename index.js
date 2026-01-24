function AddAnimatedCircle() {
  const cursor = document.getElementById("cursorId");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`; // FIXED
  });

  document.addEventListener("click", () => {
    cursor.classList.add("expand");

    setTimeout(() => {
      cursor.classList.remove("expand");
    }, 500);
  });
}

AddAnimatedCircle();
