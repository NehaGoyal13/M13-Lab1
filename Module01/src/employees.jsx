let sally='Sally Smith'
let mark='Mark Martin'
let holly='Holly Unlikely'
let yash='Yash Gupta'
let neha='Neha Goyal'
let jigar='Jigar Agrawal'
    const ul =  (
        <ul style={{'color':'blue', 'fontSize': '24px'}}>
            <li>{sally}</li>
            <li>{mark}</li>
            <li>{holly}</li>
            <li>{yash}</li>
            <li>{neha}</li>
            <li>{jigar}</li>
        </ul>
    )
    ReactDOM.render(ul,document.getElementById('content'))