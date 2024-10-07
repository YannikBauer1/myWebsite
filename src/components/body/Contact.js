import "./contact.css";

export default function Contact() {
  return (
    <div id="contact">
      <div className="title2 pt-3 pb-4 fs-7 px-1 d-flex justify-content-between text-dark">
        <div>
          <i class="bi bi-c-circle me-1"></i> 2024 Yannik Bauer
        </div>
        <div>
          <a
            href="mailto:yannikbauer.1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="noDecoration"
          >
            <i class="bi bi-envelope-fill me-3 text-dark"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/yannik-bauer-53259b233/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bi bi-linkedin me-3 text-dark"></i>
          </a>
          <a
            href="https://github.com/YannikBauer1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bi bi-github text-dark"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
