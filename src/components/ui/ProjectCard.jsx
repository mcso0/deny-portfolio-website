// 📁 Project Card - 프로젝트 카드 컴포넌트
// Figma 기준: 겹쳐진 형태(데스크톱/패드) vs 수직 배치(모바일)

import './ProjectCard.css';

const ProjectCard = ({ 
  title, 
  description, 
  color, 
  image, 
  className = '' 
}) => {
  return (
    <div className={`project-card ${color} ${className}`}>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
      {image && (
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;