export default {
  color: '#e6e636',
  background: '#0a0a0a',
  border: 'none',
  fontSize: '16px',
  borderRadius: '3px',
  width: '200px',
  textAlign: 'center',
  display: 'block',
  padding: '7px 0',
  margin: '10px auto',
  ':hover:enabled': {
    background: 'linear-gradient(#12121a,#0a0a0a)',
    color: '#fff',
    textDecoration: 'none',
    cursor: 'pointer'
  },
  ':disabled': {
    color: 'silver'
  },
  ':active': {
    transform: 'translateY(1px)'
  }
};