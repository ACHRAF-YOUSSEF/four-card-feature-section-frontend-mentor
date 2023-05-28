interface HeaderProps {
  title: {
    text: string;
    color: string;
  };
  subtitle: {
    text: string;
    color: string;
  };
  description: {
    text: string;
    color: string;
    text_size: string;
  };
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <header
      className='
        flex
        flex-col
        justify-center
        sm:items-center
        space-y-2
        sm:w-2/4
        w-80
      '>
      <div
        className={`
          flex
          flex-col
          justify-center
          items-start
          text-${title.color}
          sm:text-3xl
          text-2xl
          font-extralight
        `}>
        {title.text}
        <span
          className={`
            font-semibold 
            text-${subtitle.color}
            sm:text-3xl
            text-2xl
          `}>
          {subtitle.text}
        </span>
      </div>
      <div
        className={`
          text-${description.color}
          text-${description.text_size}
          font-extralight
          flex
          sm:text-center
        `}>
        {description.text}
      </div>
      <div
        className="
          hidden 
          text-sm 
          text-lg
          text-xl
          text-2xl
          text-3xl
        "
      />
    </header>
  )
}

export default Header;