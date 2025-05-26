export default function Button ({ label, onClick, ...rest }) {
  return <button className='btn' onClick={() => onClick(label)} {...rest}>{label}</button>
}
