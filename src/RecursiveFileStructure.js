  const Folder = ({ files }) => {
    const [expanded, setExpanded] = useState(false);
  
    return (
    <div onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      setExpanded(!expanded)
    }
    }>
      <h2>{files.name}</h2>
      <br/>
      {expanded && files.items.map(item => {
        return <RecursiveFileStructure files={item}/>
      })}
    </div>)
  }
  
  const File = ({ name }) => {
    return(<div>{name}</div>)
  }
  
  export const RecursiveFileStructure = ({ files }) => {
    if(files.type === 'file') {
      return(<File name={files.name} />)
    }
    return <Folder files={files} />
  }