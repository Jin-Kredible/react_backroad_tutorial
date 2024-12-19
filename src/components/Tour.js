import Title from "./Title";
import { tourCard } from "../data";

const Tour = () => {
  return (
    <>
      <section className="section" id="tours">
        <div className="section-title">
          <Title title="Featured" subTitle="Tour" />
        </div>

        <div className="section-center featured-center">
          {tourCard.map(
            ({ id, image, date, title, info, location, duration, price }) => {
              return (
                <article className="tour-card" key={id}>
                  <div className="tour-img-container">
                    <img src={image} className="tour-img" alt="" />
                    <p className="tour-date">{date}</p>
                  </div>
                  <div className="tour-info">
                    <div className="tour-title">
                      <h4>{title}</h4>
                    </div>
                    <p>{info}</p>
                    <div className="tour-footer">
                      <p>
                        <span>
                          <i className="fas fa-map"></i>
                        </span>
                        {location}
                      </p>
                      <p>{duration}</p>
                      <p>{price}</p>
                    </div>
                  </div>
                </article>
              );
            }
          )}
        </div>
      </section>
    </>
  );
};

export default Tour;
