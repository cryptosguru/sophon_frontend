export const Part1 = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <div className="part-header">
                <span className="part-header-font-black">Reimagine your world</span>              
              </div>
              <div className="part-content">
                <span className="part-content-font-black">Through simple, secure, and scalable technology, NEAR empowers millions to invent and explore new experiences. Business, creativity, and community are being reimagined for a more sustainable and inclusive future.</span>                            
              </div>
            </div>            
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="col-xs-12 col-md-6">
              <div className="part-sub-content">
                <div className="part-content-font-black">
                  THIS WEEK
                </div>
                <div className="part-sub-span1">
                  Ecosystem Panel:Helping the Climate with Web3
                </div>
                <div className="part-content-font-black">
                  Town halls are taking on a new format with a transition into Ecosystem Panels.Join us this Friday for the first one.
                </div>                
                <button type='submit' className='btn btn-primary btn-lg custom-button'>
                  Develop with Near
                </button>               
              </div>              
            </div>            
            <div className="col-xs-12 col-md-6">
              <div className="part-sub-content part-sub-content-height1">
                <div className="part-content-font-black">
                  FEATURED
                </div>
                <div className="part-sub-span1">
                  Early Bird Tickets for NEARCON are live
                </div>
                <div className="part-content-font-black">
                  Join the Sophon community, Web3 ecosystem, and 200+ hackers IRL in Lisbon, Portugal from Sept 11-14. Immerse yourself in talks, networking, workshops, and more. Prices increase after July 31st.
                </div>                
                <button type='submit' className='btn btn-primary btn-lg custom-button'>
                  Register Today
                </button>               
              </div>               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
