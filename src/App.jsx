import {useState} from 'react'
import RawText from './RawText'
import ParsedText from './ParsedText'

const App = () => {
  const [rawText, setRawText] = useState('')
  return (
      <main className='container-fluid'>
        <div className='row'>
          <div className='col-12 col-md-6 bg-dark px-3'>
          <RawText onChange={setRawText} value={rawText}/>
          </div>
          <div className='col-12 col-md-6 bg-light'>
            <ParsedText value={rawText}/>
          </div>
        </div>
      </main>
  );
}

export default App;
