import React, { useState } from 'react';
import SkillItem from './SkillItem';

function Skill() {
    const [activeSkill, setActiveSkill] = useState(null);

    const skills = {
        React: {
            items: ['Hooks', 'Components', 'State Management', 'Routing'],
            imageSrc: `${process.env.PUBLIC_URL}/image/react.png`
        },
        NodeJs: {
            items: ['Express', 'Middleware', 'REST APIs', 'WebSockets'],
            imageSrc: `${process.env.PUBLIC_URL}/image/node.webp`
        },
        SQL: {
            items: ['Queries', 'Joins', 'Indexing', 'Database Design'],
            imageSrc: `${process.env.PUBLIC_URL}/image/sql.png`
        },
        C: {
            items: ['Pointers', 'Memory Management', 'Data Structures', 'Algorithms'],
            imageSrc: `${process.env.PUBLIC_URL}/image/C.jpeg`
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
