import React, { useState } from 'react';
import SkillItem from './SkillItem';

function Skill() {
    const [activeSkill, setActiveSkill] = useState(null);

    const skills = {
        React: {
            items: ['Hooks', 'Components', 'State Management', 'Routing'],
            imageSrc: '/image/React.webp'
        },
        NodeJs: {
            items: ['Express', 'Middleware', 'REST APIs', 'WebSockets'],
            imageSrc: '/image/NodeJs.webp'
        },
        SQL: {
            items: ['Queries', 'Joins', 'Indexing', 'Database Design'],
            imageSrc: '/image/Sql.webp'
        },
        C: {
            items: ['Pointers', 'Memory Management', 'Data Structures', 'Algorithms'],
            imageSrc: '/image/C.webp'
        }
    };

    const handleSkillClick = (skill) => {
        setActiveSkill(activeSkill === skill ? null : skill);
    };

    return (
        <section className="skill-section">
            <h2 className="skills-title">Mes Compétences</h2>
            <div className="skills-container">
                {Object.keys(skills).map((skill, index) => (
                    <SkillItem
                        key={skill}
                        skill={skill}
                        items={skills[skill].items}
                        imageSrc={skills[skill].imageSrc}
                        index={index}
                        isActive={activeSkill === skill}
                        onClick={() => handleSkillClick(skill)}
                    />
                ))}
            </div>
            <p className='skill-footer'>...</p>
        </section>
    );
}

export default Skill;
