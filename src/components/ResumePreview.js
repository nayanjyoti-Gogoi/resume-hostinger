import React from 'react';
import './ResumePreview.css';

const ResumePreview = ({ template, data, color, font, fontSize, headingFontSize, fontColor, spacing, alignment, margins, themeColor }) => {
  // Check if data exists for a section
  const hasData = (sectionId) => {
    if (!data || !data[sectionId]) return false;
    
    // For multiple sections, check if there's at least one item with content
    if (Array.isArray(data[sectionId])) {
      return data[sectionId].length > 0 && data[sectionId].some(item => hasContent(item));
    }
    
    // For single sections, check if there's any content
    return hasContent(data[sectionId]);
  };
  
  // Check if an object has any non-empty values
  const hasContent = (obj) => {
    if (!obj) return false;
    return Object.values(obj).some(value => {
      if (Array.isArray(value)) return value.length > 0;
      if (typeof value === 'boolean') return value;
      return value && value.trim() !== '';
    });
  };

  // Format date (YYYY-MM-DD to Month Year)
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  // Apply custom styles based on props
  const getCustomStyles = () => {
    return {
      fontFamily: font,
      fontSize: fontSize || '14px',
      color: fontColor || '#333',
      textAlign: alignment || 'left',
      padding: `${margins?.top || 20}px ${margins?.right || 20}px ${margins?.bottom || 20}px ${margins?.left || 20}px`,
      '--theme-color': themeColor || '#000000' // Add theme color as CSS variable
    };
  };

  const getHeadingStyles = () => {
    return {
      fontSize: headingFontSize || '22px',
      color: color
    };
  };

  const getSectionSpacing = () => {
    switch(spacing) {
      case 'compact':
        return '10px';
      case 'relaxed':
        return '30px';
      default:
        return '20px';
    }
  };

  // Render personal information section
  const renderPersonalSection = () => {
    if (!hasData('personal')) return null;
    
    const personal = data.personal;
    
    return (
      <div className="resume-header" style={{ borderBottomColor: color, marginBottom: getSectionSpacing() }}>
        <div className="resume-header-content">
          {personal.photo && (
            <div className="resume-photo">
              <img src={personal.photo} alt="Profile" />
            </div>
          )}
          <div className="resume-header-text">
            <div className="resume-name">{personal.fullName || 'Your Name'}</div>
            <div className="resume-title">{personal.jobTitle || 'Job Title'}</div>
            
            <div className="resume-contact">
              {personal.email && (
                <div className="contact-item">
                  <i className="fas fa-envelope"></i> {personal.email}
                </div>
              )}
              {personal.phone && (
                <div className="contact-item">
                  <i className="fas fa-phone"></i> {personal.phone}
                </div>
              )}
              {personal.address && (
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i> {personal.address}
                </div>
              )}
              {personal.website && (
                <div className="contact-item">
                  <i className="fas fa-globe"></i> {personal.website}
                </div>
              )}
              {personal.linkedin && (
                <div className="contact-item">
                  <i className="fab fa-linkedin"></i> {personal.linkedin}
                </div>
              )}
              {personal.github && (
                <div className="contact-item">
                  <i className="fab fa-github"></i> {personal.github}
                </div>
              )}
            </div>
            
            {personal.summary && (
              <div className="resume-summary">
                <p>{personal.summary}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Render experience section
  const renderExperienceSection = () => {
    if (!hasData('experience')) return null;
    
    return (
      <div className="resume-section" style={{ marginBottom: getSectionSpacing() }}>
        <div className="section-header" style={{ color }}>
          <i className="fas fa-briefcase"></i>
          <h2 style={getHeadingStyles()}>Work Experience</h2>
        </div>
        <div className="section-content">
          {data.experience.map((exp, index) => (
            <div className="experience-item" key={index}>
              <div className="item-header">
                <div className="item-title">{exp.jobTitle || 'Job Title'}</div>
                <div className="item-subtitle">
                  {exp.company && <span className="company">{exp.company}</span>}
                  {exp.location && <span className="location">{exp.location}</span>}
                </div>
                <div className="item-date">
                  {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                </div>
              </div>
              {exp.description && (
                <div className="item-description">
                  <p>{exp.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render education section
  const renderEducationSection = () => {
    if (!hasData('education')) return null;
    
    return (
      <div className="resume-section" style={{ marginBottom: getSectionSpacing() }}>
        <div className="section-header" style={{ color }}>
          <i className="fas fa-graduation-cap"></i>
          <h2 style={getHeadingStyles()}>Education</h2>
        </div>
        <div className="section-content">
          {data.education.map((edu, index) => (
            <div className="education-item" key={index}>
              <div className="item-header">
                <div className="item-title">{edu.degree || 'Degree'}</div>
                <div className="item-subtitle">
                  {edu.institution && <span className="institution">{edu.institution}</span>}
                  {edu.location && <span className="location">{edu.location}</span>}
                </div>
                <div className="item-date">
                  {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                </div>
              </div>
              {edu.description && (
                <div className="item-description">
                  <p>{edu.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render skills section
  const renderSkillsSection = () => {
    if (!hasData('skills') || !data.skills.skillList || data.skills.skillList.length === 0) return null;
    
    return (
      <div className="resume-section" style={{ marginBottom: getSectionSpacing() }}>
        <div className="section-header" style={{ color }}>
          <i className="fas fa-tools"></i>
          <h2 style={getHeadingStyles()}>Skills</h2>
        </div>
        <div className="section-content">
          <div className="skills-list">
            {data.skills.skillList.map((skill, index) => (
              <div className="skill-item" key={index} style={{ backgroundColor: `${color}20`, color }}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Render projects section
  const renderProjectsSection = () => {
    if (!hasData('projects')) return null;
    
    return (
      <div className="resume-section" style={{ marginBottom: getSectionSpacing() }}>
        <div className="section-header" style={{ color }}>
          <i className="fas fa-project-diagram"></i>
          <h2 style={getHeadingStyles()}>Projects</h2>
        </div>
        <div className="section-content">
          {data.projects.map((project, index) => (
            <div className="project-item" key={index}>
              <div className="item-header">
                <div className="item-title">
                  {project.title || 'Project Title'}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                </div>
                {(project.startDate || project.endDate) && (
                  <div className="item-date">
                    {formatDate(project.startDate)} {project.endDate && `- ${formatDate(project.endDate)}`}
                  </div>
                )}
              </div>
              {project.description && (
                <div className="item-description">
                  <p>{project.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render certifications section
  const renderCertificationsSection = () => {
    if (!hasData('certifications')) return null;
    
    return (
      <div className="resume-section" style={{ marginBottom: getSectionSpacing() }}>
        <div className="section-header" style={{ color }}>
          <i className="fas fa-certificate"></i>
          <h2 style={getHeadingStyles()}>Certifications</h2>
        </div>
        <div className="section-content">
          {data.certifications.map((cert, index) => (
            <div className="certification-item" key={index}>
              <div className="item-header">
                <div className="item-title">
                  {cert.title || 'Certification Name'}
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                </div>
                <div className="item-subtitle">{cert.issuer || 'Issuing Organization'}</div>
                {cert.date && <div className="item-date">{formatDate(cert.date)}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render achievements section
  const renderAchievementsSection = () => {
    if (!hasData('achievements')) return null;
    
    return (
      <div className="resume-section" style={{ marginBottom: getSectionSpacing() }}>
        <div className="section-header" style={{ color }}>
          <i className="fas fa-trophy"></i>
          <h2 style={getHeadingStyles()}>Achievements</h2>
        </div>
        <div className="section-content">
          {data.achievements.map((achievement, index) => (
            <div className="achievement-item" key={index}>
              <div className="item-header">
                <div className="item-title">{achievement.title || 'Achievement Title'}</div>
                {achievement.date && <div className="item-date">{formatDate(achievement.date)}</div>}
              </div>
              {achievement.description && (
                <div className="item-description">
                  <p>{achievement.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render languages section
  const renderLanguagesSection = () => {
    if (!hasData('languages')) return null;
    
    return (
      <div className="resume-section" style={{ marginBottom: getSectionSpacing() }}>
        <div className="section-header" style={{ color }}>
          <i className="fas fa-language"></i>
          <h2 style={getHeadingStyles()}>Languages</h2>
        </div>
        <div className="section-content">
          <div className="languages-list">
            {data.languages.map((lang, index) => (
              <div className="language-item" key={index}>
                <span className="language-name">{lang.language || 'Language'}</span>
                <span className="language-proficiency" style={{ color }}>
                  {lang.proficiency ? lang.proficiency.charAt(0).toUpperCase() + lang.proficiency.slice(1) : 'Proficiency'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Render portfolio section
  const renderPortfolioSection = () => {
    if (!hasData('portfolio')) return null;
    
    return (
      <div className="resume-section" style={{ marginBottom: getSectionSpacing() }}>
        <div className="section-header" style={{ color }}>
          <i className="fas fa-images"></i>
          <h2 style={getHeadingStyles()}>Portfolio</h2>
        </div>
        <div className="section-content">
          {data.portfolio.map((item, index) => (
            <div className="portfolio-item" key={index}>
              <div className="item-header">
                <div className="item-title">
                  {item.title || 'Project Title'}
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                </div>
                {item.category && <div className="item-category">{item.category}</div>}
              </div>
              {item.description && (
                <div className="item-description">
                  <p>{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render interests section
  const renderInterestsSection = () => {
    if (!hasData('interests') || !data.interests.interestList || data.interests.interestList.length === 0) return null;
    
    return (
      <div className="resume-section" style={{ marginBottom: getSectionSpacing() }}>
        <div className="section-header" style={{ color }}>
          <i className="fas fa-heart"></i>
          <h2 style={getHeadingStyles()}>Interests</h2>
        </div>
        <div className="section-content">
          <div className="interests-list">
            {data.interests.interestList.map((interest, index) => (
              <div className="interest-item" key={index} style={{ backgroundColor: `${color}20`, color }}>
                {interest}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  // Render expertise section
  const renderExpertiseSection = () => {
    if (!hasData('expertise')) return null;
    
    const expertise = data.expertise;
    const hasTechnical = expertise.technicalSkills && expertise.technicalSkills.length > 0;
    const hasSoft = expertise.softSkills && expertise.softSkills.length > 0;
    const hasTools = expertise.tools && expertise.tools.length > 0;
    
    if (!hasTechnical && !hasSoft && !hasTools) return null;
    
    return (
      <div className="resume-section" style={{ marginBottom: getSectionSpacing() }}>
        <div className="section-header" style={{ color }}>
          <i className="fas fa-brain"></i>
          <h2 style={getHeadingStyles()}>Expertise</h2>
        </div>
        <div className="section-content">
          {hasTechnical && (
            <div className="expertise-section">
              <h3>Technical</h3>
              <div className="skills-list">
                {expertise.technicalSkills.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {hasSoft && (
            <div className="expertise-section">
              <h3>Soft Skills</h3>
              <div className="skills-list">
                {expertise.softSkills.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {hasTools && (
            <div className="expertise-section">
              <h3>Tools & Software</h3>
              <div className="skills-list">
                {expertise.tools.map((tool, index) => (
                  <div className="skill-item" key={index}>
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Render awards section
  const renderAwardsSection = () => {
    if (!hasData('awards')) return null;
    
    return (
      <div className="resume-section" style={{ marginBottom: getSectionSpacing() }}>
        <div className="section-header" style={{ color }}>
          <i className="fas fa-trophy"></i>
          <h2 style={getHeadingStyles()}>Awards</h2>
        </div>
        <div className="section-content">
          {data.awards.map((item, index) => (
            <div className="award-item" key={index}>
              <div className="item-header">
                <div className="item-title">{item.title || 'Award Title'}</div>
                {item.issuer && <div className="item-subtitle">{item.issuer}</div>}
                {item.date && <div className="item-date">{formatDate(item.date)}</div>}
              </div>
              {item.description && (
                <div className="item-description">
                  <p>{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Map section IDs to their render functions
  const sectionRenderers = {
    personal: renderPersonalSection,
    experience: renderExperienceSection,
    education: renderEducationSection,
    skills: renderSkillsSection,
    projects: renderProjectsSection,
    certifications: renderCertificationsSection,
    achievements: renderAchievementsSection,
    languages: renderLanguagesSection,
    portfolio: renderPortfolioSection,
    interests: renderInterestsSection,
    awards: renderAwardsSection,
    expertise: renderExpertiseSection
  };

  // Special rendering for the Blue Sidebar template
  const renderBlueSidebarTemplate = () => {
    const personal = data.personal || {};
    
    return (
      <div className="resume-preview" style={getCustomStyles()} data-template={template.id}>
        <div className="resume-document" style={{ '--section-spacing': getSectionSpacing() }}>
          {/* Sidebar with personal information */}
          <div className="resume-sidebar">
            {personal.photo && (
              <div className="resume-photo">
                <img src={personal.photo} alt="Profile" />
              </div>
            )}
            <div className="resume-name">{personal.fullName || 'Agnes Josephine'}</div>
            <div className="resume-title">{personal.jobTitle || 'Professional Title'}</div>
            
            <div className="contact-section">
              {personal.phone && (
                <div className="contact-item">
                  <i className="fas fa-phone"></i> {personal.phone || '+66 00 000 00'}
                </div>
              )}
              {personal.address && (
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i> {personal.address || 'Address, City'}
                </div>
              )}
              {personal.email && (
                <div className="contact-item">
                  <i className="fas fa-envelope"></i> {personal.email || 'youremail@gmail.com'}
                </div>
              )}
              {personal.website && (
                <div className="contact-item">
                  <i className="fas fa-globe"></i> {personal.website || 'www.yourwebsite.com'}
                </div>
              )}
              {personal.birthDate && (
                <div className="contact-item">
                  <i className="fas fa-calendar"></i> {personal.birthDate || '22-07-1989'}
                </div>
              )}
              {personal.maritalStatus && (
                <div className="contact-item">
                  <i className="fas fa-ring"></i> {personal.maritalStatus || 'Married'}
                </div>
              )}
            </div>
            
            {/* Languages in sidebar */}
            {hasData('languages') && (
              <div className="sidebar-section">
                <div className="sidebar-section-title">Languages</div>
                <div className="languages-list">
                  {data.languages.map((lang, index) => (
                    <div className="language-item" key={index}>
                      <span className="language-name">{lang.language || 'Language'}</span>
                      <span className="language-proficiency">
                        {lang.proficiency ? lang.proficiency.charAt(0).toUpperCase() + lang.proficiency.slice(1) : 'Proficiency'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Skills in sidebar if specified */}
            {hasData('skills') && template.id === 'blue-sidebar' && (
              <div className="sidebar-section">
                <div className="sidebar-section-title">Skills</div>
                <div className="skills-list">
                  {data.skills.skillList && data.skills.skillList.map((skill, index) => (
                    <div className="skill-item" key={index}>
                      <span className="skill-name">{skill}</span>
                      {data.skills.showLevel && (
                        <span className="skill-level">90%</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Awards in sidebar if specified */}
            {hasData('awards') && (
              <div className="sidebar-section">
                <div className="sidebar-section-title">Awards</div>
                <div className="awards-list">
                  {data.awards.map((award, index) => (
                    <div className="award-item" key={index}>
                      <div className="award-title">{award.title || 'Award Title'}</div>
                      {award.issuer && <div className="award-issuer">{award.issuer}</div>}
                      {award.date && <div className="award-date">{formatDate(award.date)}</div>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Main content area */}
          <div className="resume-main">
            {/* About Me section */}
            {personal.summary && (
              <div className="resume-section">
                <div className="section-header">
                  <h2>About Me</h2>
                </div>
                <div className="section-content">
                  <div className="resume-summary">
                    <p>{personal.summary}</p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Work Experience */}
            {hasData('experience') && renderExperienceSection()}
            
            {/* Education */}
            {hasData('education') && renderEducationSection()}
            
            {/* Skills (if not in sidebar) */}
            {hasData('skills') && template.id !== 'blue-sidebar' && renderSkillsSection()}
            
            {/* Projects */}
            {hasData('projects') && renderProjectsSection()}
            
            {/* Certifications */}
            {hasData('certifications') && renderCertificationsSection()}
            
            {/* Achievements */}
            {hasData('achievements') && renderAchievementsSection()}
            
            {/* Portfolio */}
            {hasData('portfolio') && renderPortfolioSection()}
            
            {/* Interests */}
            {hasData('interests') && renderInterestsSection()}
          </div>
        </div>
      </div>
    );
  };

  // Special rendering for the Diagonal Header template
  const renderDiagonalHeaderTemplate = () => {
    const personal = data.personal || {};
    
    return (
      <div className="resume-preview" style={getCustomStyles()} data-template={template.id}>
        <div className="resume-document" style={{ '--section-spacing': getSectionSpacing() }}>
          {/* Header with diagonal design */}
          <div className="resume-header">
            <div className="resume-header-content">
              <div className="resume-header-text">
                <div className="resume-name">{personal.fullName || 'YOUR NAME'}</div>
                <div className="resume-title">{personal.jobTitle || 'PRODUCT DESIGNER, ANALYTICS'}</div>
                
                <div className="profile-dot"></div>
                <div className="profile-line"></div>
                
                <div className="resume-contact">
                  {personal.address && (
                    <div className="contact-item">
                      <i className="fas fa-home"></i> {personal.address}
                    </div>
                  )}
                  {personal.phone && (
                    <div className="contact-item">
                      <i className="fas fa-phone"></i> {personal.phone}
                    </div>
                  )}
                  {personal.email && (
                    <div className="contact-item">
                      <i className="fas fa-envelope"></i> {personal.email}
                    </div>
                  )}
                  {personal.website && (
                    <div className="contact-item">
                      <i className="fas fa-globe"></i> {personal.website}
                    </div>
                  )}
                </div>
              </div>
              
              {personal.photo && (
                <div className="resume-photo">
                  <img src={personal.photo} alt="Profile" />
                </div>
              )}
            </div>
          </div>
          
          {/* Profile/Summary Section */}
          {personal.summary && (
            <div className="resume-section">
              <div className="section-header">
                <h2>PROFILE</h2>
              </div>
              <div className="section-content">
                <div className="resume-summary">
                  <p>{personal.summary}</p>
                </div>
              </div>
            </div>
          )}
          
          {/* Skills Section */}
          {hasData('skills') && (
            <div className="resume-section">
              <div className="section-header">
                <h2>SKILLS</h2>
              </div>
              <div className="section-content">
                {data.skills.skillList && data.skills.skillList.length > 0 && (
                  <div className="skills-section">
                    <h3>PROFESSIONAL</h3>
                    <div className="skills-list">
                      {data.skills.skillList.map((skill, index) => (
                        <div className="skill-item" key={index}>
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Experience Section */}
          {hasData('experience') && (
            <div className="resume-section">
              <div className="section-header">
                <h2>EXPERIENCE</h2>
              </div>
              <div className="section-content">
                {data.experience.map((item, index) => (
                  <div className="experience-item" key={index}>
                    <div className="item-content">
                      <div className="item-title">{item.jobTitle || 'JOB TITLE HERE'}</div>
                      <div className="item-subtitle">{item.company || 'COMPANY NAME'}</div>
                      <div className="item-description">
                        <p>{item.description}</p>
                        {item.description && item.description.includes('•') && (
                          <ul>
                            {item.description.split('•').filter(Boolean).map((point, i) => (
                              <li key={i}>{point.trim()}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                    <div className="item-date">
                      {item.startDate && formatDate(item.startDate)}
                      {item.startDate && item.endDate && ' - '}
                      {item.endDate ? formatDate(item.endDate) : item.current ? 'Present' : ''}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Education Section */}
          {hasData('education') && (
            <div className="resume-section">
              <div className="section-header">
                <h2>EDUCATION</h2>
              </div>
              <div className="section-content">
                {data.education.map((item, index) => (
                  <div className="education-item" key={index}>
                    <div className="item-content">
                      <div className="item-title">{item.degree || 'DEGREE TITLE'}</div>
                      <div className="item-subtitle">{item.institution || 'University Name'}</div>
                      {item.description && (
                        <div className="item-description">
                          <p>{item.description}</p>
                        </div>
                      )}
                    </div>
                    <div className="item-date">
                      {item.startDate && formatDate(item.startDate)}
                      {item.startDate && item.endDate && ' - '}
                      {item.endDate ? formatDate(item.endDate) : item.current ? 'Present' : ''}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Expertise Section */}
          {hasData('expertise') && renderExpertiseSection()}
        </div>
      </div>
    );
  };

  // Special rendering for the Split Circle template
  const renderSplitCircleTemplate = () => {
    const personal = data.personal || {};
    
    // Helper function to render skill rating dots
    const renderSkillRating = (level) => {
      const dots = [];
      const maxDots = 5;
      const filledDots = Math.floor((level / 100) * maxDots);
      
      for (let i = 0; i < maxDots; i++) {
        dots.push(
          <div 
            key={i} 
            className={`skill-dot ${i < filledDots ? '' : 'empty'}`}
          ></div>
        );
      }
      
      return <div className="skill-rating">{dots}</div>;
    };
    
    return (
      <div className="resume-preview" style={getCustomStyles()} data-template={template.id}>
        <div className="resume-document" style={{ '--section-spacing': getSectionSpacing() }}>
          {/* Left column with personal info and skills */}
          <div className="resume-left">
            <div className="resume-name">{personal.fullName || 'ADORA MONTMINY'}</div>
            <div className="resume-title">{personal.jobTitle || 'DIGITAL MARKETER'}</div>
            
            <div className="contact-section">
              {personal.email && (
                <div className="contact-item">
                  <i className="fas fa-envelope"></i> {personal.email}
                </div>
              )}
              {personal.phone && (
                <div className="contact-item">
                  <i className="fas fa-phone"></i> {personal.phone}
                </div>
              )}
              {personal.address && (
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i> {personal.address}
                </div>
              )}
            </div>
            
            {personal.summary && (
              <div className="resume-summary">
                <p>{personal.summary}</p>
              </div>
            )}
            
            {/* Education Section */}
            {hasData('education') && (
              <div className="resume-section">
                <div className="section-header">
                  <h2>EDUCATION</h2>
                </div>
                <div className="section-content">
                  {data.education.map((item, index) => (
                    <div className="education-item" key={index}>
                      <div className="item-title">{item.degree}</div>
                      <div className="item-subtitle">{item.institution}</div>
                      <div className="item-date">
                        {item.startDate && formatDate(item.startDate).split(' ')[1]}
                        {item.startDate && item.endDate && '-'}
                        {item.endDate ? formatDate(item.endDate).split(' ')[1] : item.current ? 'Present' : ''}
                      </div>
                      {item.description && (
                        <div className="item-description">
                          <p>{item.description}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Skills Section */}
            {hasData('skills') && (
              <div className="resume-section">
                <div className="section-header">
                  <h2>SKILLS</h2>
                </div>
                <div className="section-content">
                  {data.skills.skillList && data.skills.skillList.map((skill, index) => {
                  
                    return (
                      <div className="skill-item" key={index}>
                        <div className="skill-name">{skill}</div>
                        
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          
          {/* Right column with experience */}
          <div className="resume-right">
            {/* Photo Circle */}
            <div className="photo-container">
              <div className="photo-circle"></div>
              {personal.photo && (
                <div className="resume-photo">
                  <img src={personal.photo} alt="Profile" />
                </div>
              )}
            </div>
            
            {/* Experience Section */}
            {hasData('experience') && (
              <div className="resume-section">
                <div className="section-header">
                  <h2>EXPERIENCE</h2>
                </div>
                <div className="section-content">
                  {data.experience.map((item, index) => (
                    <div className="experience-item" key={index}>
                      <div className="item-title">{item.jobTitle || 'DIGITAL MARKETING LEAD'}</div>
                      <div className="item-subtitle">{item.company || 'Company Name'} | {item.startDate ? formatDate(item.startDate).split(' ')[1] : ''}{item.startDate && (item.endDate || item.current) ? '-' : ''}{item.endDate ? formatDate(item.endDate).split(' ')[1] : item.current ? 'present' : ''}</div>
                      {item.description && (
                        <div className="item-description">
                          {item.description.includes('•') ? (
                            <ul>
                              {item.description.split('•').filter(Boolean).map((point, i) => (
                                <li key={i}>{point.trim()}</li>
                              ))}
                            </ul>
                          ) : (
                            <p>{item.description}</p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Special rendering for the Artistic Profile template
  const renderArtisticProfileTemplate = () => {
    if (!hasData('personal')) return null;
    
    const personal = data.personal;
    
    return (
      <div className="resume-preview" style={getCustomStyles()} data-template="artistic-profile">
        <div className="resume-document">
          {/* Header Section */}
          <div className="resume-header">
            <div className="resume-header-content">
              {personal.photo && (
                <div className="resume-photo">
                  <img src={personal.photo} alt="Profile" />
                </div>
              )}
              <div className="resume-header-text">
                <div className="resume-name">{personal.fullName || 'Your Name'}</div>
                <div className="resume-title">{personal.jobTitle || 'Job Title'}</div>
                
                <div className="resume-contact">
                  {personal.email && (
                    <div className="contact-item">
                      <i className="fas fa-envelope"></i> {personal.email}
                    </div>
                  )}
                  {personal.phone && (
                    <div className="contact-item">
                      <i className="fas fa-phone"></i> {personal.phone}
                    </div>
                  )}
                  {personal.address && (
                    <div className="contact-item">
                      <i className="fas fa-map-marker-alt"></i> {personal.address}
                    </div>
                  )}
                  {personal.website && (
                    <div className="contact-item">
                      <i className="fas fa-globe"></i> {personal.website}
                    </div>
                  )}
                  {personal.linkedin && (
                    <div className="contact-item">
                      <i className="fab fa-linkedin"></i> {personal.linkedin}
                    </div>
                  )}
                  {personal.github && (
                    <div className="contact-item">
                      <i className="fab fa-github"></i> {personal.github}
                    </div>
                  )}
                </div>
                
                {personal.summary && (
                  <div className="resume-summary">
                    <p>{personal.summary}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="resume-main-content">
            {/* Left Column */}
            <div className="resume-left-column">
              {/* Experience Section */}
              {hasData('experience') && (
                <div className="resume-section">
                  <div className="section-header">
                    <h2>Experience</h2>
                  </div>
                  <div className="section-content">
                    {data.experience.map((item, index) => (
                      <div className="experience-item" key={index}>
                        <div className="item-header">
                          <div className="item-title">{item.jobTitle || 'Job Title'}</div>
                          <div className="item-subtitle">
                            <span className="company">{item.company || 'Company'}</span>
                            {item.location && (
                              <span className="location">{item.location}</span>
                            )}
                          </div>
                          <div className="item-date">
                            {item.startDate ? formatDate(item.startDate) : ''}
                            {item.startDate && (item.endDate || item.current) ? ' - ' : ''}
                            {item.endDate ? formatDate(item.endDate) : item.current ? 'Present' : ''}
                          </div>
                        </div>
                        {item.description && (
                          <div className="item-description">
                            <p>{item.description}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Education Section */}
              {hasData('education') && (
                <div className="resume-section">
                  <div className="section-header">
                    <h2>Education</h2>
                  </div>
                  <div className="section-content">
                    {data.education.map((item, index) => (
                      <div className="education-item" key={index}>
                        <div className="item-header">
                          <div className="item-title">{item.degree || 'Degree'}</div>
                          <div className="item-subtitle">
                            <span className="institution">{item.institution || 'Institution'}</span>
                            {item.location && (
                              <span className="location">{item.location}</span>
                            )}
                          </div>
                          <div className="item-date">
                            {item.startDate ? formatDate(item.startDate) : ''}
                            {item.startDate && (item.endDate || item.current) ? ' - ' : ''}
                            {item.endDate ? formatDate(item.endDate) : item.current ? 'Present' : ''}
                          </div>
                        </div>
                        {item.description && (
                          <div className="item-description">
                            <p>{item.description}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Right Column */}
            <div className="resume-right-column">
              {/* Skills Section */}
              {hasData('skills') && (
                <div className="resume-section">
                  <div className="section-header">
                    <h2>Skills</h2>
                  </div>
                  <div className="section-content">
                    <div className="skills-list">
                      {data.skills.skillList && data.skills.skillList.map((skill, index) => (
                        <div className="skill-item" key={index}>{skill}</div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Languages Section */}
              {hasData('languages') && (
                <div className="resume-section">
                  <div className="section-header">
                    <h2>Languages</h2>
                  </div>
                  <div className="section-content">
                    <div className="languages-list">
                      {data.languages.map((item, index) => (
                        <div className="language-item" key={index}>
                          <span className="language-name">{item.language}</span>
                          <span className="language-proficiency">{item.proficiency}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Achievements Section */}
              {hasData('achievements') && (
                <div className="resume-section">
                  <div className="section-header">
                    <h2>Achievements</h2>
                  </div>
                  <div className="section-content">
                    {data.achievements.map((item, index) => (
                      <div className="achievement-item" key={index}>
                        <div className="item-header">
                          <div className="item-title">{item.title}</div>
                          {item.date && (
                            <div className="item-date">{formatDate(item.date)}</div>
                          )}
                        </div>
                        {item.description && (
                          <div className="item-description">
                            <p>{item.description}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  // Special rendering for the Creative Dark template
  const renderCreativeDarkTemplate = () => {
    if (!hasData('personal')) return null;
    
    const personal = data.personal;
    
    return (
      <div className="resume-preview" style={getCustomStyles()} data-template="creative-dark">
        <div className="resume-document">
          {/* Header Section */}
          <div className="resume-header">
            <div className="resume-photo-container">
              {personal.photo ? (
                <div className="resume-photo">
                  <img src={personal.photo} alt="Profile" />
                </div>
              ) : (
                <div className="resume-photo">
                  <i className="fas fa-user" style={{ fontSize: '80px', color: '#3498db' }}></i>
                </div>
              )}
            </div>
            <div className="resume-name">{personal.fullName || 'JOHN DOE'}</div>
            <div className="resume-title">{personal.jobTitle || 'Creative Director'}</div>
          </div>
          
          {/* Main Content */}
          <div className="resume-main-content">
            {/* Experience Section */}
            {hasData('experience') && (
              <div className="resume-section">
                <div className="section-header">
                  <h2>Experiences</h2>
                </div>
                <div className="section-content">
                  {data.experience.map((item, index) => (
                    <div className="experience-item" key={index}>
                      <div className="item-header">
                        <div className="item-title">{item.jobTitle || 'Job Title'}</div>
                        <div className="item-subtitle">
                          <span className="company">{item.company || 'Company'}</span>
                          {item.location && (
                            <span className="location">{item.location}</span>
                          )}
                        </div>
                        <div className="item-date">
                          {item.startDate ? formatDate(item.startDate) : ''}
                          {item.startDate && (item.endDate || item.current) ? ' - ' : ''}
                          {item.endDate ? formatDate(item.endDate) : item.current ? 'Present' : ''}
                        </div>
                      </div>
                      {item.description && (
                        <div className="item-description">
                          <p>{item.description}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Education Section */}
            {hasData('education') && (
              <div className="resume-section">
                <div className="section-header">
                  <h2>Education</h2>
                </div>
                <div className="section-content">
                  {data.education.map((item, index) => (
                    <div className="education-item" key={index}>
                      <div className="item-header">
                        <div className="item-title">{item.degree || 'Degree'}</div>
                        <div className="item-subtitle">
                          <span className="institution">{item.institution || 'Institution'}</span>
                          {item.location && (
                            <span className="location">{item.location}</span>
                          )}
                        </div>
                        <div className="item-date">
                          {item.startDate ? formatDate(item.startDate) : ''}
                          {item.startDate && (item.endDate || item.current) ? ' - ' : ''}
                          {item.endDate ? formatDate(item.endDate) : item.current ? 'Present' : ''}
                        </div>
                      </div>
                      {item.description && (
                        <div className="item-description">
                          <p>{item.description}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Skills Section */}
            {hasData('skills') && (
              <div className="resume-section skills-section">
                <div className="section-header">
                  <h2>Skills</h2>
                </div>
                <div className="section-content">
                  <div className="skills-list">
                    {data.skills.skillList && data.skills.skillList.map((skill, index) => (
                      <div className="skill-item" key={index}>{skill}</div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Software Section */}
            {hasData('software') && (
              <div className="resume-section software-section">
                <div className="section-header">
                  <h2>Software</h2>
                </div>
                <div className="section-content">
                  <div className="skills-list">
                    {data.software.softwareList && data.software.softwareList.map((software, index) => (
                      <div className="skill-item" key={index}>{software}</div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Contact Section */}
            {hasData('contact') && (
              <div className="resume-section contact-section">
                <div className="section-header">
                  <h2>Contact</h2>
                </div>
                <div className="section-content">
                  <div className="contact-list">
                    {personal.phone && (
                      <div className="contact-item">
                        <i className="fas fa-phone"></i> {personal.phone}
                      </div>
                    )}
                    {personal.email && (
                      <div className="contact-item">
                        <i className="fas fa-envelope"></i> {personal.email}
                      </div>
                    )}
                    {personal.website && (
                      <div className="contact-item">
                        <i className="fas fa-globe"></i> {personal.website}
                      </div>
                    )}
                    {personal.address && (
                      <div className="contact-item">
                        <i className="fas fa-map-marker-alt"></i> {personal.address}
                      </div>
                    )}
                    {personal.linkedin && (
                      <div className="contact-item">
                        <i className="fab fa-linkedin"></i> {personal.linkedin}
                      </div>
                    )}
                    {personal.github && (
                      <div className="contact-item">
                        <i className="fab fa-github"></i> {personal.github}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Special rendering for the Blue Line template (first image)
  const renderBlueLineTemplate = () => {
    if (!hasData('personal')) return null;
    
    const personal = data.personal;
    
    return (
      <div className="resume-preview" style={getCustomStyles()} data-template="blue-line">
        <div className="resume-document">
          {/* Left Column */}
          <div className="resume-left-column">
            {personal.photo && (
              <div className="resume-photo">
                <img src={personal.photo} alt="Profile" />
              </div>
            )}
            
            {/* Contact Section */}
            <div className="contact-section">
              <div className="section-title">CONTACT</div>
              <div className="contact-info">
                {personal.phone && (
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    {personal.phone}
                  </div>
                )}
                {personal.email && (
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    {personal.email}
                  </div>
                )}
                {personal.address && (
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    {personal.address}
                  </div>
                )}
                {personal.website && (
                  <div className="contact-item">
                    <i className="fas fa-globe"></i>
                    {personal.website}
                  </div>
                )}
              </div>
            </div>
            
            {/* Education Section */}
            {hasData('education') && (
              <div className="education-section">
                <div className="section-title">EDUCATION</div>
                <div className="education-items">
                  {data.education.map((item, index) => (
                    <div className="education-item" key={index}>
                      <div className="school-name">{item.institution || 'SCHOOL NAME'}</div>
                      <div className="education-date">
                        {item.startDate ? formatDate(item.startDate).split(' ')[1] : 'JUNE 2008'} - {item.endDate ? formatDate(item.endDate).split(' ')[1] : item.current ? 'Present' : 'DEC 2014'}
                      </div>
                      {item.description && (
                        <div className="education-description">{item.description}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Hobbies Section */}
            {hasData('hobbies') && (
              <div className="hobbies-section">
                <div className="section-title">HOBBIES</div>
                <div className="hobbies-list">
                  {data.hobbies && data.hobbies.interestList && data.hobbies.interestList.map((hobby, index) => (
                    <div className="hobby-item" key={index}>{hobby}</div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Right Column */}
          <div className="resume-right-column">
            {/* Header with Name and Title */}
            <div className="resume-header">
              <div className="resume-name">{personal.fullName || 'YOUR NAME'}</div>
              <div className="resume-title">{personal.jobTitle || 'Programmer/UI'}</div>
              <div className="blue-line"></div>
            </div>
            
            {/* About Me Section */}
            {hasData('about') && (
              <div className="about-section">
                <div className="section-header">
                  <h2>ABOUT ME</h2>
                </div>
                <div className="about-me">
                  {data.about && data.about.summary ? data.about.summary : personal.summary}
                </div>
              </div>
            )}
            
            {/* Experience Section */}
            {hasData('experience') && (
              <div className="experience-section">
                <div className="section-header">
                  <h2>EXPERIENCE</h2>
                </div>
                <div className="experience-items">
                  {data.experience.map((item, index) => (
                    <div className="experience-item" key={index}>
                      <div className="work-title">{item.jobTitle || 'WORK NAME'} {index + 1}</div>
                      <div className="work-date">
                        {item.startDate ? formatDate(item.startDate).split(' ')[1] : 'JUNE 2008'} - {item.endDate ? formatDate(item.endDate).split(' ')[1] : item.current ? 'Present' : 'DEC 2014'}
                      </div>
                      {item.description && (
                        <div className="work-description">{item.description}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Skills Section */}
            {hasData('skills') && (
              <div className="skills-section">
                <div className="section-header">
                  <h2>SKILLS</h2>
                </div>
                <div className="skills-list">
                  {data.skills.skillList && data.skills.skillList.map((skill, index) => (
                    <div className="skill-item" key={index}>
                      <i className="fas fa-check-circle" style={{ color: '#4169E1', fontSize: '16px' }}></i>
                      <div className="skill-name">{skill}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* References Section */}
            {hasData('references') && (
              <div className="references-section">
                <div className="section-header">
                  <h2>REFERENCE</h2>
                </div>
                <div className="reference-items">
                  {data.references && data.references.map((item, index) => (
                    <div className="reference-item" key={index}>
                      <div className="reference-name">{item.name || 'JEAN DAVID'}</div>
                      <div className="reference-title">{item.title || 'Manager of Techno Media'}</div>
                      <div className="reference-contact">{item.contact || 'Contact: +909 3940 3309 3'}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  // Special rendering for the Blue Sidebar Modern template (second image)
  const renderBlueSidebarModernTemplate = () => {
    if (!hasData('personal')) return null;
    
    const personal = data.personal;
    const nameParts = (personal.fullName || 'AMIT SINHA').split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');
    
    return (
      <div className="resume-preview" style={getCustomStyles()} data-template="blue-sidebar-modern">
        <div className="resume-document">
          {/* Left Column - Main Content */}
          <div className="resume-left-column">
            {/* Header with Name and Title */}
            <div className="resume-header">
              <div className="resume-name">
                {firstName} <span className="highlight">{lastName}</span>
              </div>
              <div className="resume-title">{personal.jobTitle || 'ACCOUNTS EXECUTIVE'}</div>
              <div className="section-divider"></div>
            </div>
            
            {/* Profile Section */}
            {hasData('profile') && (
              <div className="profile-section">
                <div className="section-title">PROFILE</div>
                <div className="profile-text">
                  {data.profile && data.profile.summary ? data.profile.summary : personal.summary || 'Accurate and immensely motivated Finance student. Highly skilled at generating and analyzing financial reports, leading cash flow analysis, and refining tax plans.'}
                </div>
              </div>
            )}
            
            {/* Work Experience Section */}
            {hasData('experience') && (
              <div className="experience-section">
                <div className="section-title">WORK EXPERIENCE</div>
                <div className="experience-items">
                  {data.experience.map((item, index) => (
                    <div className="experience-item" key={index}>
                      <div className="experience-date">
                        {item.startDate ? formatDate(item.startDate).split(' ')[1] : '2020'} - {item.endDate ? formatDate(item.endDate).split(' ')[1] : item.current ? 'Present' : '2022'}
                      </div>
                      <div className="job-title">{item.jobTitle || 'Jr. Accounts Executive'}</div>
                      <div className="company-name">{item.company || 'Company Name'}, {item.location || 'Location'}</div>
                      {item.description && (
                        <div className="job-description">
                          {item.description.includes('•') ? (
                            <ul>
                              {item.description.split('•').filter(Boolean).map((point, i) => (
                                <li key={i}>{point.trim()}</li>
                              ))}
                            </ul>
                          ) : (
                            <p>{item.description}</p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Education Section */}
            {hasData('education') && (
              <div className="education-section">
                <div className="section-title">EDUCATION</div>
                <div className="education-items">
                  {data.education.map((item, index) => (
                    <div className="education-item" key={index}>
                      <div className="education-date">
                        {item.startDate ? formatDate(item.startDate).split(' ')[1] : '2017'} to {item.endDate ? formatDate(item.endDate).split(' ')[1] : item.current ? 'Present' : '2018'}
                      </div>
                      <div className="degree-title">{item.degree || 'MA in Economics'}</div>
                      <div className="university-name">{item.institution || 'University Name'}, {item.location || 'Location'}</div>
                      {item.description && (
                        <div className="education-description">{item.description}</div>
                      )}
                    
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Certifications Section */}
            {hasData('certifications') && (
              <div className="certifications-section">
                <div className="section-title">CERTIFICATIONS</div>
                <div className="certification-items">
                  {data.certifications.map((item, index) => (
                    <div className="certification-item" key={index}>
                      <div className="certification-name">{item.title || 'Certification Name'}</div>
                      <div className="certification-issuer">{item.issuer || 'Issuing Organization'}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Right Column - Sidebar */}
          <div className="resume-right-column">
            {/* Photo */}
            {personal.photo && (
              <div className="resume-photo">
                <img src={personal.photo} alt="Profile" />
              </div>
            )}
            
            {/* Contact Section */}
            <div className="sidebar-section">
              <div className="sidebar-section-title">CONTACT</div>
              <div className="contact-items">
                {personal.address && (
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    {personal.address}
                  </div>
                )}
                {personal.phone && (
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    {personal.phone}
                  </div>
                )}
                {personal.email && (
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    {personal.email}
                  </div>
                )}
              </div>
            </div>
            
            {/* Skills Section */}
            {hasData('skills') && (
              <div className="sidebar-section">
                <div className="sidebar-section-title">SKILLS</div>
                
               
               
                {/* Computer Skills */}
                <div className="skills-category">
                  {/* <div className="skills-category-title">Computer</div> */}
                  <div className="skills-list">
                    {data.skills && data.skills.skillList && data.skills.skillList.map((skill, index) => (
                      <div className="skill-item" key={index}>{skill}</div>
                    )) }
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Professional Blue Template (based on first image)
  const renderProfessionalBlueTemplate = () => {
    const personal = data.personal || {};
    
    return (
      <div className="resume-preview" style={getCustomStyles()} data-template="professional-blue">
        <div className="resume-document" style={{ '--section-spacing': getSectionSpacing() }}>
          {/* Header with name and title */}
          <div className="resume-header">
            <div className="resume-name">{personal.fullName || 'ANGELA WILKINSON'}</div>
            <div className="resume-title">{personal.jobTitle || 'ADMINISTRATIVE ASSISTANT'}</div>
          </div>
          
          {/* Main content area */}
          <div className="resume-content">
            <div className="resume-main">
              {/* Objective/Summary Section */}
              {personal.summary && (
                <div className="resume-section">
                  <h2 className="section-title">RESUME OBJECTIVE</h2>
                  <div className="resume-summary">
                    <p>{personal.summary}</p>
                  </div>
                </div>
              )}
              
              {/* Experience Section */}
              {hasData('experience') && (
                <div className="resume-section">
                  <h2 className="section-title">EXPERIENCE</h2>
                  {data.experience.map((item, index) => (
                    <div className="experience-item" key={index}>
                      <div className="item-header">
                        <div className="item-title">{item.jobTitle || 'ADMINISTRATIVE ASSISTANT'}</div>
                        <div className="item-subtitle">
                          <span className="company">{item.company || 'Company Name'}</span>
                          {item.location && (
                            <span className="location">{item.location}</span>
                          )}
                          <span className="item-date">
                            {formatDate(item.startDate)} - {item.current ? 'Present' : formatDate(item.endDate)}
                          </span>
                        </div>
                      </div>
                      {item.description && (
                        <div className="item-description">
                          <ul>
                            {item.description.split('\n').map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              
              {/* Education Section */}
              {hasData('education') && (
                <div className="resume-section">
                  <h2 className="section-title">EDUCATION</h2>
                  {data.education.map((item, index) => (
                    <div className="education-item" key={index}>
                      <div className="item-header">
                        <div className="item-title">{item.degree || 'DEGREE NAME / MAJOR'}</div>
                        <div className="item-subtitle">
                          <span className="institution">{item.institution || 'University, Location'}</span>
                          <span className="item-date">
                            {formatDate(item.startDate)} - {item.current ? 'Present' : formatDate(item.endDate)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="resume-sidebar">
              {/* Contact Information */}
              <div className="contact-section">
                {personal.email && (
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span>{personal.email}</span>
                  </div>
                )}
                {personal.phone && (
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <span>{personal.phone}</span>
                  </div>
                )}
                {personal.address && (
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{personal.address}</span>
                  </div>
                )}
                {personal.linkedin && (
                  <div className="contact-item">
                    <i className="fab fa-linkedin"></i>
                    <span>{personal.linkedin}</span>
                  </div>
                )}
              </div>
              
              {/* Skills Section */}
              {hasData('skills') && (
                <div className="sidebar-section">
                  <h2 className="sidebar-title">SKILLS</h2>
                  <div className="skills-list">
                    {data.skills.skillList && data.skills.skillList.map((skill, index) => (
                      <div className="skill-item" key={index}>{skill}</div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Certifications Section */}
              {hasData('certifications') && (
                <div className="sidebar-section">
                  <h2 className="sidebar-title">CERTIFICATION</h2>
                  {data.certifications.map((cert, index) => (
                    <div className="certification-item" key={index}>
                      <div className="cert-title">{cert.title}</div>
                      <div className="cert-issuer">{cert.issuer}</div>
                      <div className="cert-date">{formatDate(cert.date)}</div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Awards Section */}
              {hasData('awards') && (
                <div className="sidebar-section">
                  <h2 className="sidebar-title">AWARDS</h2>
                  {data.awards.map((award, index) => (
                    <div className="award-item" key={index}>
                      <div className="award-title">{award.title}</div>
                      <div className="award-issuer">{award.issuer}</div>
                      <div className="award-date">{formatDate(award.date)}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Modern Teal Template (based on second image)
  const renderModernTealTemplate = () => {
    const personal = data.personal || {};
    
    return (
      <div className="resume-preview" style={getCustomStyles()} data-template="modern-teal">
        <div className="resume-document" style={{ '--section-spacing': getSectionSpacing() }}>
          {/* Header with photo and name */}
          <div className="resume-header">
            {personal.photo && (
              <div className="resume-photo">
                <img src={personal.photo} alt="Profile" />
              </div>
            )}
            <div className="header-content">
              <div className="resume-name">{personal.fullName || 'ETHAN LANNISTER'}</div>
              <div className="resume-title">{personal.jobTitle || 'FULL STACK DEVELOPER'}</div>
            </div>
          </div>
          
          {/* Main content area */}
          <div className="resume-content">
            <div className="resume-left">
              {/* Work Experience Section */}
              {hasData('experience') && (
                <div className="resume-section">
                  <h2 className="section-title">WORK EXPERIENCE</h2>
                  {data.experience.map((item, index) => (
                    <div className="experience-item" key={index}>
                      <div className="experience-header">
                        <div className="experience-date">{formatDate(item.startDate)} - {item.current ? 'Present' : formatDate(item.endDate)}</div>
                        <div className="experience-company">{item.company || 'Company Name'}</div>
                      </div>
                      <div className="experience-title">{item.jobTitle || 'Job Title'}</div>
                      {item.description && (
                        <div className="experience-description">
                          <ul>
                            {item.description.split('\n').map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              
              {/* Contact Information */}
              <div className="resume-section">
                <h2 className="section-title">CONTACT</h2>
                <div className="contact-list">
                  {personal.address && (
                    <div className="contact-item">
                      <div className="contact-value">{personal.address}</div>
                    </div>
                  )}
                  {personal.phone && (
                    <div className="contact-item">
                      <div className="contact-value">{personal.phone}</div>
                    </div>
                  )}
                  {personal.email && (
                    <div className="contact-item">
                      <div className="contact-value">{personal.email}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="resume-right">
              {/* Education Section */}
              {hasData('education') && (
                <div className="resume-section">
                  <h2 className="section-title">EDUCATION</h2>
                  {data.education.map((item, index) => (
                    <div className="education-item" key={index}>
                      <div className="education-date">{formatDate(item.startDate)} - {item.current ? 'Present' : formatDate(item.endDate)}</div>
                      <div className="education-degree">{item.degree || 'Degree Name'}</div>
                      <div className="education-school">{item.institution || 'University Name'}</div>
                      {item.description && (
                        <div className="education-description">
                          <ul>
                            {item.description.split('\n').map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              
              {/* Skills Section */}
              {hasData('skills') && (
                <div className="resume-section">
                  <h2 className="section-title">SKILLS & EXPERTISE</h2>
                  <div className="skills-list">
                    {data.skills.skillList && data.skills.skillList.map((skill, index) => (
                      <div className="skill-item" key={index}>
                        <span className="skill-name">{skill}</span>
                        <span className="skill-level">+++++</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* References Section */}
              {hasData('references') && (
                <div className="resume-section">
                  <h2 className="section-title">REFERENCES</h2>
                  {data.references.map((ref, index) => (
                    <div className="reference-item" key={index}>
                      <div className="reference-name">{ref.name}</div>
                      <div className="reference-title">{ref.title} at {ref.company}</div>
                      <div className="reference-contact">{ref.phone}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Determine which render method to use based on template
  if (template.id === 'professional-blue') {
    return renderProfessionalBlueTemplate();
  } else if (template.id === 'modern-teal') {
    return renderModernTealTemplate();
  } else if (template.id === 'blue-sidebar') {
    return renderBlueSidebarTemplate();
  } else if (template.id === 'diagonal-header') {
    return renderDiagonalHeaderTemplate();
  } else if (template.id === 'split-circle') {
    return renderSplitCircleTemplate();
  } else if (template.id === 'artistic-profile') {
    return renderArtisticProfileTemplate();
  } else if (template.id === 'creative-dark') {
    return renderCreativeDarkTemplate();
  } else if (template.id === 'blue-line') {
    return renderBlueLineTemplate();
  } else if (template.id === 'blue-sidebar-modern') {
    return renderBlueSidebarModernTemplate();
  }
  
  // Default rendering for other templates
  return (
    <div className="resume-preview" style={getCustomStyles()} data-template={template.id} data-theme-color={themeColor}>
      <div className="resume-document" style={{ '--section-spacing': getSectionSpacing(), '--theme-color': themeColor || '#000000' }}>
        {/* Render sections in the order specified by the template */}
        {template.sections.map(sectionId => {
          const renderSection = sectionRenderers[sectionId];
          return renderSection ? renderSection() : null;
        })}
      </div>
    </div>
  );
};

export default ResumePreview;
