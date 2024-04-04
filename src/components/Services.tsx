import { FaLayerGroup, FaChartBar, FaDatabase } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="service-grid">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center">
            <div className="service-item">
              <FaLayerGroup className="service-icon" />
              <h3>Web Application</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <a href="/services/web-application" aria-label="Read more about Web Application">Read More</a>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="service-item">
              <FaChartBar className="service-icon" />
              <h3>Highly Customizable</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <a href="/services/customizable" aria-label="Read more about Highly Customizable">Read More</a>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="service-item">
              <FaDatabase className="service-icon" />
              <h3>Responsive Design</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <a href="/services/responsive-design" aria-label="Read more about Responsive Design">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
