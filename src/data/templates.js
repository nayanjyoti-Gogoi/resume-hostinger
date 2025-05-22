// Template images
import atsTemplate from '../assets/fresher-template.jpg';
import greenTemplate from '../assets/professional-template.jpg';
import fresherTemplate from '../assets/mba-template.jpg';
import designerTemplate from '../assets/designer-template.jpg';
import creativedarkTemplate from '../assets/developer-template.jpg';
import atsfrindlyTemplate from '../assets/creative-template.jpg';
import professionaldarkheadTemplate from '../assets/modern-template.jpg';
import modernTemplate from '../assets/executive-template.jpg';
import boldTemplate from '../assets/minimal-template.jpg';
// Import new template images
import tecchTemplate from '../assets/elegant-template.jpg';
import creativeproTemplate from '../assets/corporate-template.jpg';
import blueSidebarTemplate from '../assets/bold-template.jpg';
import diagonalTemplate from '../assets/tech-template.jpg';
// Import new stylish templates
import bluelineTemplate from '../assets/modern-plus-template.jpg';
import sidebarmodernTemplate from '../assets/gradient-template.jpg';
import darkModeTemplate from '../assets/dark-mode-template.jpg';
import splitTemplate from '../assets/split-template.jpg';
import simpleTemplate from '../assets/creative-template.jpg';
// Note: We're using external URLs for minimalist and creative-pro templates
// External URLs for new templates
// Image URLs for the new templates
const professionalBlueTemplate = "https://i.imgur.com/placeholder-professional-blue.jpg";
const modernTealTemplate = "https://i.imgur.com/placeholder-modern-teal.jpg";

export const templates = [
  // New templates based on the provided images
  {
    id: 'professional-blue',
    name: 'ATS friendly resume',
    image: atsTemplate,
    category: 'ats',
    categoryName: 'Professional',
    rating: 4.9,
    description: 'Clean professional resume with navy header and organized sections.',
    color: '#2c3e50',
    font: 'Montserrat',
    sections: ['personal', 'experience', 'education', 'skills', 'certifications', 'awards']
  },
  {
    id: 'modern-teal',
    name: 'Modern',
    image: darkModeTemplate,
    category: 'professional',
    categoryName: 'professional',
    rating: 4.9,
    description: 'Modern teal resume with circular photo and clean layout.',
    color: '#1abc9c',
    font: 'Roboto',
    sections: ['personal', 'experience', 'education', 'skills', 'references']
  },
  {
    id: 'fresher',
    class:'frresher',
    name: 'Fresher Resume',
    image: fresherTemplate,
    category: 'fresher',
    categoryName: 'Fresher',
    rating: 4.8,
    description: 'Perfect for students and recent graduates with minimal work experience.',
    color: '#4a6cf7',
    font: 'Poppins',
    sections: ['personal', 'education', 'skills', 'projects', 'achievements', 'languages']
  },

  // New templates based on the provided samples
  {
    id: 'green-diamond',
    name: 'Green theme',
    image: greenTemplate,
    category: 'fresher',
    categoryName: 'Creative',
    rating: 4.9,
    description: 'Modern green resume with diamond photo frame and clean sections.',
    color: '#ffffff',
    font: 'Montserrat',
    sections: ['personal', 'education', 'skills','experience', 'projects', 'achievements']
  },
  {
    id: 'minimal-modern',
    name: 'ATS friendly resume 2',
    image: atsfrindlyTemplate,
    category: 'ats',
    categoryName: 'Minimal',
    rating: 4.9,
    description: 'Do not upload a profile photo in an ATS resume ',
    color: '#000000',
    font: 'Inter',
    sections: ['personal', 'experience', 'education', 'skills', 'projects', 'certifications']
  },
  {
    id: 'professional-dark',
    name: 'Professional Dark head',
    image: professionaldarkheadTemplate,
    category: 'professional',
    categoryName: 'Professional',
    rating: 4.8,
    description: 'Elegant dark blue header with circular photo and clean content sections.',
    color: '#2C3E50',
    font: 'Montserrat',
    sections: ['personal', 'experience', 'education', 'skills', 'certifications', 'languages']
  },
  {
    id: 'modern-beige',
    name: 'Modern resume',
    image: modernTemplate,
    category: 'fresher',
    categoryName: 'Modern',
    rating: 4.7,
    description: 'Sophisticated beige resume with clean sections and professional layout.',
    color: '#000000',
    font: 'Raleway',
    sections: ['personal','education', 'skills', 'experience','languages','certifications', 'achievements']
  },
  {
    id: 'elegant-grid',
    name: 'simple resume',
    image: simpleTemplate,
    category: 'fresher',
    categoryName: 'Elegant',
    rating: 4.8,
    description: 'Modern grid-based layout with a professional color scheme and clean typography.',
    color: '#000000',
    font: 'Lato',
    sections: ['personal', 'education', 'skills', 'experience','certifications', 'languages']
  },

  // New bold template
  {
    id: 'bold',
    name: 'Bold Resume',
    image: boldTemplate,
    category: 'professional',
    categoryName: 'Bold',
    rating: 4.8,
    description: 'Bold and impactful design that makes a strong first impression.',
    color: '#000000',
    font: 'Montserrat',
    sections: ['personal', 'experience', 'education', 'skills', 'projects', 'achievements']
  },
  // {

  // New tech template
  {
    id: 'tech',
    name: 'Tech Resume',
    image: tecchTemplate,
    category: 'fresher',
    categoryName: 'Tech',
    rating: 4.9,
    description: 'Modern tech-focused design with a sleek and innovative look.',
    color: '#000000',
    font: 'Source Code Pro',
    sections: ['personal', 'education', 'skills', 'experience','projects', 'languages','certifications']
  },

  {
    id: 'creative-pro',
    name: 'Creative Pro',
    image: creativeproTemplate,
    category: 'fresher',
    categoryName: 'Creative',
    rating: 4.8,
    description: 'Vibrant and artistic design for creative professionals that stands out.',
    color: '#000000',
    font: 'Montserrat',
    sections: ['personal', 'education', 'skills', 'experience','languages','portfolio', 'achievements']
  },
  {
    id: 'blue-sidebar',
    name: 'Blue Sidebar',
    image: blueSidebarTemplate,
    category: 'professional',
    categoryName: 'Professional',
    rating: 4.9,
    description: 'Modern professional resume with blue sidebar for personal info and clean white main section.',
    color: '#4066F5',
    font: 'Montserrat',
    sections: ['personal', 'experience', 'education', 'skills', 'awards', 'languages']
  },
  {
    id: 'diagonal-header',
    name: 'Diagonal',
    image: diagonalTemplate,
    category: 'fresher',
    categoryName: 'Modern',
    rating: 4.9,
    description: 'Modern resume with diagonal header design and clean content sections.',
    color: '#3498db',
    font: 'Roboto',
    sections: ['personal', 'education', 'skills', 'experience','certifications', 'languages']
  },
  {
    id: 'split-circle',
    name: 'Split Circle',
    image: splitTemplate,
    category: 'professional',
    categoryName: 'Creative',
    rating: 4.9,
    description: 'Elegant split layout with circular photo and peach color scheme.',
    color: '#F2D0BA',
    font: 'Montserrat',
    sections: ['personal', 'experience', 'education', 'skills','languages','achievements']
  },
  {
    id: 'artistic-profile',
    name: 'Artistic Profile',
    image: designerTemplate,
    category: 'designer',
    categoryName: 'Creative',
    rating: 4.9,
    description: 'Modern artistic resume with curved elements and a clean layout, perfect for creative professionals.',
    color: '#F8A5C2',
    font: 'Playfair Display',
    sections: ['personal', 'experience', 'education', 'skills', 'languages', 'achievements']
  },
  {
    id: 'creative-dark',
    name: 'Creative Dark',
    image: creativedarkTemplate,
    category: 'designer',
    categoryName: 'Creative',
    rating: 4.8,
    description: 'Bold dark-themed resume with hexagon photo frame and icon-based skills display, ideal for designers and tech professionals.',
    color: '#1E1E1E',
    font: 'Montserrat',
    sections: ['personal', 'experience', 'education', 'skills', 'software', 'contact']
  },
  {
    id: 'blue-line',
    name: 'Blue Line',
    image: bluelineTemplate,
    category: 'professional',
    categoryName: 'Professional',
    rating: 4.9,
    description: 'Clean professional resume with blue accent line and two-column layout, perfect for programmers and UI designers.',
    color: '#4169E1',
    font: 'Roboto',
    sections: ['personal', 'about', 'experience', 'education', 'skills', 'hobbies', 'references']
  },
  {
    id: 'blue-sidebar-modern',
    name: 'Blue Sidebar Modern',
    image: sidebarmodernTemplate,
    category: 'professional',
    categoryName: 'Professional',
    rating: 4.8,
    description: 'Modern professional resume with dark blue sidebar for contact and skills, and clean white main section for experience and education.',
    color: '#005580',
    font: 'Montserrat',
    sections: ['personal', 'profile', 'experience', 'education', 'certifications', 'skills']
  }
];

// Resume sections data
export const resumeSections = {
  personal: {
    id: 'personal',
    title: 'Personal Information',
    icon: 'user',
    fields: [
      { id: 'fullName', label: 'Full Name', type: 'text', required: true },
      { id: 'jobTitle', label: 'Job Title', type: 'text', required: true },
      { id: 'email', label: 'Email', type: 'email', required: true },
      { id: 'phone', label: 'Phone', type: 'tel', required: true },
      { id: 'address', label: 'Address', type: 'text', required: false },
      { id: 'website', label: 'Website', type: 'url', required: false },
      { id: 'linkedin', label: 'LinkedIn', type: 'url', required: false },
      { id: 'github', label: 'GitHub', type: 'url', required: false },
      { id: 'photo', label: 'Profile Photo', type: 'file', required: false },
      { id: 'summary', label: 'Professional Summary', type: 'textarea', required: false }
    ]
  },
  experience: {
    id: 'experience',
    title: 'Work Experience',
    icon: 'briefcase',
    multiple: true,
    fields: [
      { id: 'jobTitle', label: 'Job Title', type: 'text', required: true },
      { id: 'company', label: 'Company', type: 'text', required: true },
      { id: 'location', label: 'Location', type: 'text', required: false },
      { id: 'startDate', label: 'Start Date', type: 'date', required: true },
      { id: 'endDate', label: 'End Date', type: 'date', required: false },
      { id: 'current', label: 'Current Job', type: 'checkbox', required: false },
      { id: 'description', label: 'Description', type: 'textarea', required: false }
    ]
  },
  education: {
    id: 'education',
    title: 'Education',
    icon: 'graduation-cap',
    multiple: true,
    fields: [
      { id: 'degree', label: 'Degree', type: 'text', required: true },
      { id: 'institution', label: 'Institution', type: 'text', required: true },
      { id: 'location', label: 'Location', type: 'text', required: false },
      { id: 'startDate', label: 'Start Date', type: 'date', required: true },
      { id: 'endDate', label: 'End Date', type: 'date', required: false },
      { id: 'current', label: 'Currently Studying', type: 'checkbox', required: false },
      { id: 'description', label: 'Description', type: 'textarea', required: false }
    ]
  },
  skills: {
    id: 'skills',
    title: 'Skills',
    icon: 'tools',
    fields: [
      { id: 'skillList', label: 'Skills', type: 'tags', required: true },
      { id: 'showLevel', label: 'Show Skill Level', type: 'checkbox', required: false }
    ]
  },
  projects: {
    id: 'projects',
    title: 'Projects',
    icon: 'project-diagram',
    multiple: true,
    fields: [
      { id: 'title', label: 'Project Title', type: 'text', required: true },
      { id: 'link', label: 'Project Link', type: 'url', required: false },
      { id: 'startDate', label: 'Start Date', type: 'date', required: false },
      { id: 'endDate', label: 'End Date', type: 'date', required: false },
      { id: 'description', label: 'Description', type: 'textarea', required: true }
    ]
  },
  certifications: {
    id: 'certifications',
    title: 'Certifications',
    icon: 'certificate',
    multiple: true,
    fields: [
      { id: 'title', label: 'Certification Name', type: 'text', required: true },
      { id: 'issuer', label: 'Issuing Organization', type: 'text', required: true },
      { id: 'date', label: 'Date', type: 'date', required: false },
      { id: 'link', label: 'Certificate Link', type: 'url', required: false }
    ]
  },
  achievements: {
    id: 'achievements',
    title: 'Achievements',
    icon: 'trophy',
    multiple: true,
    fields: [
      { id: 'title', label: 'Achievement Title', type: 'text', required: true },
      { id: 'date', label: 'Date', type: 'date', required: false },
      { id: 'description', label: 'Description', type: 'textarea', required: false }
    ]
  },
  languages: {
    id: 'languages',
    title: 'Languages',
    icon: 'language',
    multiple: true,
    fields: [
      { id: 'language', label: 'Language', type: 'text', required: true },
      { id: 'proficiency', label: 'Proficiency', type: 'select', required: true, options: [
        { value: 'native', label: 'Native' },
        { value: 'fluent', label: 'Fluent' },
        { value: 'advanced', label: 'Advanced' },
        { value: 'intermediate', label: 'Intermediate' },
        { value: 'basic', label: 'Basic' }
      ]}
    ]
  },
  portfolio: {
    id: 'portfolio',
    title: 'Portfolio',
    icon: 'images',
    multiple: true,
    fields: [
      { id: 'title', label: 'Project Title', type: 'text', required: true },
      { id: 'category', label: 'Category', type: 'text', required: false },
      { id: 'link', label: 'Project Link', type: 'url', required: false },
      { id: 'description', label: 'Description', type: 'textarea', required: true }
    ]
  },
  interests: {
    id: 'interests',
    title: 'Interests',
    icon: 'heart',
    fields: [
      { id: 'interestList', label: 'Interests', type: 'tags', required: true }
    ]
  },
  software: {
    id: 'software',
    title: 'Software',
    icon: 'laptop-code',
    fields: [
      { id: 'softwareList', label: 'Software', type: 'tags', required: true },
      { id: 'showLevel', label: 'Show Proficiency Level', type: 'checkbox', required: false }
    ]
  },
  contact: {
    id: 'contact',
    title: 'Contact Information',
    icon: 'address-card',
    fields: [
      { id: 'phone', label: 'Phone', type: 'tel', required: false },
      { id: 'email', label: 'Email', type: 'email', required: true },
      { id: 'website', label: 'Website', type: 'url', required: false },
      { id: 'address', label: 'Address', type: 'text', required: false },
      { id: 'socialMedia', label: 'Social Media', type: 'tags', required: false }
    ]
  },
  awards: {
    id: 'awards',
    title: 'Awards',
    icon: 'trophy',
    multiple: true,
    fields: [
      { id: 'title', label: 'Award Title', type: 'text', required: true },
      { id: 'issuer', label: 'Issuing Organization', type: 'text', required: false },
      { id: 'date', label: 'Date', type: 'date', required: false },
      { id: 'description', label: 'Description', type: 'textarea', required: false }
    ]
  },
  expertise: {
    id: 'expertise',
    title: 'Expertise',
    icon: 'brain',
    multiple: false,
    fields: [
      { id: 'technicalSkills', label: 'Technical Skills', type: 'tags', required: false },
      { id: 'softSkills', label: 'Soft Skills', type: 'tags', required: false },
      { id: 'tools', label: 'Tools & Software', type: 'tags', required: false }
    ]
  },
  about: {
    id: 'about',
    title: 'About Me',
    icon: 'user-circle',
    fields: [
      { id: 'summary', label: 'About Me', type: 'textarea', required: true }
    ]
  },
  hobbies: {
    id: 'hobbies',
    title: 'Hobbies',
    icon: 'hiking',
    fields: [
      { id: 'interestList', label: 'Hobbies', type: 'tags', required: true }
    ]
  },
  profile: {
    id: 'profile',
    title: 'Profile',
    icon: 'id-card',
    fields: [
      { id: 'summary', label: 'Profile Summary', type: 'textarea', required: true }
    ]
  },
  references: {
    id: 'references',
    title: 'References',
    icon: 'address-book',
    multiple: true,
    fields: [
      { id: 'name', label: 'Reference Name', type: 'text', required: true },
      { id: 'title', label: 'Job Title', type: 'text', required: false },
      { id: 'company', label: 'Company', type: 'text', required: false },
      { id: 'contact', label: 'Contact Information', type: 'text', required: false },
      { id: 'email', label: 'Email', type: 'email', required: false },
      { id: 'phone', label: 'Phone', type: 'tel', required: false }
    ]
  }
};
