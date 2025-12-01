import './ModuleCard.css';

function ModuleCard({title, image}){
    return(
        <div className="card" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h2 className="title">{title}</h2>
        </div>
    )
}

export default ModuleCard
