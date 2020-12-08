const marked = require('marked')

const ParsedText = ({value='#### Some markdown text'}) => {
  return (
    <div className='h-100'>
      <h4 className='text-danger'><u>Preview</u></h4>
      <div dangerouslySetInnerHTML={{__html: marked(value)}} style={{wordWrap: 'break-word'}}>
      </div>
    </div>
  )
}

export default ParsedText