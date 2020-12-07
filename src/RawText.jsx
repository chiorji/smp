import Header from './Header'
const RawText = ({onChange=f=>f, value='Start typing...'}) => {
  return (
    <>
      <Header/>
    <form className=''>
      <h4 className='text-info'>Raw Text</h4>
      <div className='form-group'>
      <textarea className='form-control' onChange={e=>onChange(e.target.value)} defaultValue={value} style={{minHeight: '84vh', resize: 'vertical', whiteSpace: 'pre-wrap'}}></textarea>
      </div>
    </form>
      </>
  )
}

export default RawText