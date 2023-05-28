interface CardProps {
  title: {
    text: string;
    color: string;
    text_size: string;
  };
  subtitle: {
    text: string;
    color: string;
    text_size: string;
  };
  background_color: string;
  top_bar_color: string;
  image: string;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  background_color,
  top_bar_color,
  image
}) => {
  return (
    <div
      className={`
        flex
        flex-col
        rounded-md
        border-t-4
        border-t-${top_bar_color}
        bg-${background_color}
        shadow-xl
        pt-4
        px-5
        space-y-8
        w-80
        h-52
      `}>
      <div
        className="
          space-y-2        
        ">
        <h1
          className={`
            text-${title.text_size} 
            text-${title.color}
            font-semibold
        `}>
          {title.text}
        </h1>
        <p
          className={`
            text-${subtitle.text_size} 
            text-${subtitle.color}
            font-extralight
          `}>
          {subtitle.text}
        </p>
      </div>
      <div
        className="
          flex
          justify-end
        ">
        <img
          className="
            w-12
          "
          src={image}
          alt="icon"
        />
      </div>
      <div
        className="
          hidden 
          text-Very-Dark-Blue
          text-Grayish-Blue
          border-t-Red
          border-t-Orange
          border-t-Blue
          border-t-Cyan
        "/>
    </div>
  )
}

export default Card;