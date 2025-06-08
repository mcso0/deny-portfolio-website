// 📂 Contents Section - 프로젝트 카드들을 포함하는 영역
// Figma 기준: 폴더 형태(데스크톱/패드) vs 수직 배치(모바일)

import ProjectCard from '../ui/ProjectCard';
import './ContentsSection.css';

const ContentsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Mobile App Design",
      description: "사용자 경험을 중심으로 한 모바일 앱 디자인 프로젝트",
      color: "purple"
    },
    {
      id: 2,
      title: "Web Platform UX",
      description: "복잡한 데이터를 직관적으로 표현하는 웹 플랫폼 설계",
      color: "teal"
    },
    {
      id: 3,
      title: "Brand Identity",
      description: "브랜드의 본질을 담은 시각적 아이덴티티 구축",
      color: "red"
    },
    {
      id: 4,
      title: "Product Design",
      description: "사용자 중심의 제품 디자인 및 서비스 기획",
      color: "brown"
    }
  ];

  return (
    <section id="projects" className="contents-section">
      <div className="project-folder">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            color={project.color}
          />
        ))}
      </div>
    </section>
  );
};

export default ContentsSection;