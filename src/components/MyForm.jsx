
import React from 'react'



function MyForm() {

  return (
    <div className='divForm'>
        <div className='firstDiv'>
            <h4>cardholder name</h4>
            <input type="text" placeholder="Enter card holder name"/>
        </div>
        <div className='secondDiv'>
            <h4>card number</h4>
            <input type="text" placeholder='type your number card'/>
        </div>
        <div className='englobedDiv'>
            <div className='thirtyDiv'>
                <h4>exp. date (MM/YY)</h4>
                <input type="text" placeholder='DAY'/>
                <input type="text" placeholder='YY' />
            </div>
            <div className='fourtyDiv'>
                <h4>CVC</h4>
                <input type="text" placeholder='e.g. 123'/>
            </div>
        </div>
        <button>Confirm</button>
    </div>
  )
}

export default MyForm