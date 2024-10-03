
import './portfolio.css';

export default function Portfolio() {

  const items = [
    {
      name: "Agni",
      description: "A web-app for students to learn JS and teachers to manage enrollments and resources. It features automatic evaluation of prog. exercises and quizzes, and includes ChatGPT for a simplified exercise creation.",
      website: "https://agni.dcc.fc.up.pt/",
      github: "https://github.com/rqueiros/agni",
      images: ["agni0.png",
        "agni1.png",
        "agni2.png",
        "agni3.png",
        "agni4.png"],
      tec: ["vue", "vuetify", "nodejs", "strapi"]
    },
    {
      name: "Personal Website",
      description: "This personal website elegantly showcases a portfolio and accomplishments, making it ideal for professionals seeking to display their work and achievements in a simple, yet effective manner.",
      website: "https://google.com",
      github: "https://github.com/YannikBauer1/ricardo-website",
      images: ["ric0.png", "ric1.png", "ric2.png"],
      tec: ["react", "boostrap"]
    },
    {
      name: "University Projects",
      description: [
        {
          description: "Airplane Video Generator (Big Data)",
          tec: ["python"]
        },
        {
          description: "Wildfires Prediction (Data Science)",
          tec: ["r"]
        },
        {
          description: "Fake Tweets Detection (Data Science)",
          tec: ["python"]
        },
        {
          description: "Domino Game (Web Dev)",
          tec: ["html", "css", "js", "nodejs"]
        },
        {
          description: "Swimming Competition Analysis (Database)",
          tec: ["postgres", "python"]
        }
      ],
      images: ["uni0.png",
        "uni1.png",
        "uni2.png",
        "uni3.png",
        "uni4.png",
        "uni5.png"],
      github: "https://github.com/YannikBauer1",
      plus: true,
      tec: []
    }
  ]
  return (
    <div className='pb-5 mb-5' id="portfolio">
      <div className='
        pt-5 mt-5 pb-3
        fs-1 fw-semibold text-primary text-center 
        title'>
        PORTFOLIO
      </div>
      <div className='mt-4 pt-2 d-flex negativeMargin'>
        {items.map((item, index) => (
          <div class={'text-bg-secondary border-0 portfolioCard m-2 shadow-sm rounded-0 p-2 position-relative d-flex align-items-center ' + ((index % 2) === 0 ? "" : "")}>
            <div id={`carouselExample${index}`} class="carousel slide">
              <div class="carousel-inner">
                {item.images.map((img, index) => (
                  <div class={'carousel-item ' + (index === 0 ? "active" : "")}>
                    <img src={"images/" + img} className='img-fluid' alt="" />
                  </div>
                ))}
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target={`#carouselExample${index}`}
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true" />
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target={`#carouselExample${index}`}
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true" />
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}

/*
            <div className={'bg-primary shadow-sm py-1 d-flex align-items-center flex-column position-absolute ' + ((index % 2) === 0 ? "blueBar2" : "blueBar3")}>
              {item.plus ? (
                <div>
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github text-light"></i>
                  </a>
                </div>
              ) : (
                <>
                  <div>
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-globe text-light"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github text-light"></i>
                    </a>
                  </div>
                </>
              )}
            </div>


*/
