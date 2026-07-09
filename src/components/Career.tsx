import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          Project <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer</h4>
                <h5>Cognizant (Client: J.B. Hunt)</h5>
              </div>
              <h3>2019 - 2022</h3>
            </div>
            <ul>
              <li>Led integration analysis, design, and development for the migration of legacy data to modern Java architectures.</li>
              <li>Consulted with stakeholders to gather requirements and translate business needs into scalable technical solutions.</li>
              <li>Developed backend components using the Spring framework and integrated seamlessly with legacy Mainframe environments.</li>
              <li>Implemented Java-based code modifications and managed version control workflows using Git to ensure consistent delivery.</li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Guidewire Developer</h4>
                <h5>TCS (Client: Statefarm)</h5>
              </div>
              <h3>2022 - 2023</h3>
            </div>
            <ul>
              <li>Collaborated in an Agile environment, actively participating in sprint planning and daily stand-ups to drive project delivery.</li>
              <li>Developed and modified Underwriting (UW) issues, activities, and DataScript logic to support complex business requirements.</li>
              <li>Managed the full lifecycle of policy transactions, including renewals, cancellations, and rewrites, ensuring operational stability.</li>
              <li>Proactively resolved production issues by monitoring Message Queues, debugging payloads, and optimizing configuration files.</li>
              <li>Authored and maintained GUnit tests, ensuring high code quality and smooth CI/CD integration via GitLab.</li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Specialist</h4>
                <h5>Zensar (Client: Assurant)</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <ul>
              <li>Leveraged Guidewire APD (Advanced Product Designer) to configure products and handle APD deployment lifecycles using Life Cycle Manager (LCM).</li>
              <li>Translated complex business requirements into high-performance technical solutions, including Data Model extensions, intricate PCF customizations, and robust Gosu business logic.</li>
              <li>Implemented Integration Gateway applications for both inbound (Sales API via CloudAPI) and outbound flows (AppEvents and REST API integration triggered by PC message queues).</li>
              <li>Developed and enhanced REST API clients and implemented custom endpoints for new entities using the REST endpoint generator.</li>
              <li>Optimized system functionality by customizing CloudAPI resource classes.</li>
              <li>Collaborated in an Agile environment, contributing to sprint planning, story point estimation, and task prioritization to deliver mission-critical configuration and integration solutions.</li>
              <li>Implemented Rating Flow Accelerator for rating.</li>
              <li>Customized the payload related to documents and emails using the integration view concepts.</li>
              <li>Ensured high-quality delivery by authoring comprehensive GUnit test cases from scratch and supporting seamless release management processes.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="edu-cert-section">
        <div className="edu-column">
          <h3>Education</h3>
          <div className="edu-card">
            <h4>B.Tech (Electronics & Communication Engineering)</h4>
            <h5>Vignan Lara Institute of Technology and Science | 75%</h5>
            <p>2015 - 2019</p>
          </div>
          <div className="edu-card">
            <h4>MPC (Math, Physics, Chemistry)</h4>
            <h5>Sri Chaitanya Junior College, Guntur | 949 Marks</h5>
            <p>2013 - 2015</p>
          </div>
          <div className="edu-card">
            <h4>High School</h4>
            <h5>V.N.G High School, Ongole | 9.8 Marks</h5>
            <p>2012 - 2013</p>
          </div>
        </div>

        <div className="cert-column">
          <h3>Certifications</h3>
          <div className="cert-card">
            <h4>Guidewire Ace Certified</h4>
            <h5>InsuranceSuite Integration</h5>
          </div>
          <div className="cert-card">
            <h4>Guidewire Certified Specialist</h4>
            <h5>PolicyCenter Configuration</h5>
          </div>
          <div className="cert-card">
            <h4>Guidewire Certified Specialist</h4>
            <h5>InsuranceSuite Integration</h5>
          </div>
          <div className="cert-card">
            <h4>Back-End Software Development</h4>
            <h5>EICT IIT Roorkee & Great Learning</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
