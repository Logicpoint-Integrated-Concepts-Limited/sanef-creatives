import { ArrowRightIcon } from '../assets/svg'

const Button = ({ href, onClick, className, text = 'Read More', icon = true }) => {

    return (
        <button className={`${className || ''} btn-primary`} onClick={onClick}>
            <a href={href} className='flex justify-center items-center gap-3 '>
                <p className="text-[2rem]">{text}</p>
                {icon && (<ArrowRightIcon />)}
            </a>
        </button>
    )
}

export default Button
