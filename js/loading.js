document.addEventListener("DOMContentLoaded", () => {
  // 1.5秒後にフェードアウトして削除
  gsap.to("#loading", { opacity: 0, duration: 1.2, delay: 1.5, onComplete: () => {
      document.getElementById("loading").style.display = "none";
      
      // メインコンテンツをフェードイン
      gsap.to("#container", { opacity: 1, visibility: "visible", duration: 1 });
  }});
});
