// src/components/ReadMoreGallery.tsx
const ReadMoreGallery = () => {
    return (
      <section className="image-gallery">
        <div className="gallery-item">
          <img src="/images/OIP11.jpg" alt="OIP11" />
          <div className="tab-content">
            <h3>Project A</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo vel urna aliquet tincidunt.</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src="/images/identity1.jpg" alt="Identity1" />
          <div className="tab-content">
            <h3>Project B</h3>
            <p>Phasellus euismod, nunc id aliquam tincidunt, velit justo varius nisl, in dignissim libero ligula vel justo.</p>
          </div>
        </div>
        {/* Add more image items with tab content as needed */}
      </section>
    );
  };
  
  export default ReadMoreGallery;
  