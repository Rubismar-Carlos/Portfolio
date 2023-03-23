// CSS
import './Skills.css'

const Skills = ({ skillName, skillImg}) => {

  return (
    <div className='box-skill'>
        <div>
            <p>{ skillName }</p>
            <div className="img-skill">
                { skillImg }
            </div>
        </div>
    </div>
  )
}

export default Skills