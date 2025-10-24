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
        Python: {
            items: ['Data Science', 'Panda', 'Scripting', 'Automation'],
            imageSrc: `${process.env.PUBLIC_URL}/image/python.jpeg`
        },
        C: {
            items: ['Pointers', 'Memory Management', 'Data Structures', 'Algorithms'],
            imageSrc: `${process.env.PUBLIC_URL}/image/C.jpeg`
        },
        Cpp: {
            items: ['Concurrency', 'ML', 'OOP', 'STL', "Performance Optimization"],
            imageSrc: `${process.env.PUBLIC_URL}/image/cpp.png`
        },
            
        PowerBI: {
            items: ['Data Visualization', 'DAX', 'Power Query', 'Reports'],
            imageSrc: `${process.env.PUBLIC_URL}/image/powerbi.jpeg`
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
