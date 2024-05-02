import "./assets/styles/style.css";
import "./assets/styles/reset.css";
import "./assets/styles/header.css";
import "./assets/styles/typography.css";
import "./assets/styles/main-page.css"
// import viteLogo from "/vite.svg";

// document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `;

document.addEventListener("DOMContentLoaded", function() {
  const elements: NodeListOf<Element> = document.querySelectorAll('.decoration-text');
  elements.forEach(function(element: Element) {
    const content: string | null = element.getAttribute('data-content'); 
    if (content)
      element.setAttribute('data-content', content); 
  });
});
