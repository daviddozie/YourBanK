import '../../tailwind.css';

const Button = ({ type, label, logLink }) => {
    return (
        <a href={logLink}>
            <div className='bg-[#CAFF33] py-[12px] px-[24px] rounded-[80px] text-sm'>
                <button type={type} className='text-black font-[400]'>{label}</button>
            </div>
        </a>
    )
}

export default Button;